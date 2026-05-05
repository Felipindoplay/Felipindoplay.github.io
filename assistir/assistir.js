/**
 * ASSISTIR.JS - Gerenciador de Players
 */

// --- MÓDULO TWITCH ---
const TW_PLAYER = {
    render: (container, channelName) => {
        const domain = "felipindoplay.github.io";
        const url = `https://player.twitch.tv/?channel=${channelName}&parent=${domain}&autoplay=true`;
        
        container.innerHTML = `
            <iframe src="${url}" 
                    height="100%" width="100%" 
                    allowfullscreen="true">
            </iframe>`;
    }
};

// --- MÓDULO YOUTUBE ---
const YT_PLAYER = {
    render: async (container, channelHandle) => {
        // O YouTube Embed de live precisa do ID do Canal (UC...)
        // Tentamos buscar se não tivermos, ou usamos o padrão
        const cleanHandle = channelHandle.replace('@', '');
        
        // Aqui usamos a lógica de embed por canal (mais estável para lives)
        // Nota: Requer que o canal esteja realmente ao vivo para aparecer algo
        const url = `https://www.youtube.com/embed/live_stream?channel=UCCOgOae02L-GF6_EFqfAgpA`; 
        
        container.innerHTML = `
            <iframe src="${url}" 
                    width="100%" height="100%" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
            </iframe>`;
    }
};

// --- GERENCIADOR PRINCIPAL ---
const AssistirManager = {
    currentPlatform: null,

    init: () => {
        // Verifica se há dados salvos para "primeira vez"
        const user = DB.getUserData();
        console.log("IDs carregados para o player:", user.savedTwitchUser, user.savedYtHandle);
        
        // Por padrão, começa na Twitch
        AssistirManager.switchPlatform('twitch');
    },

    switchPlatform: (platform) => {
        const container = document.getElementById('video-container');
        const user = DB.getUserData();
        const btnTw = document.getElementById('btn-tw');
        const btnYt = document.getElementById('btn-yt');

        // Reseta botões
        btnTw.className = "secondary outline";
        btnYt.className = "secondary outline";

        if (platform === 'twitch') {
            btnTw.className = "btn-tw-active";
            TW_PLAYER.render(container, user.savedTwitchUser);
        } else {
            btnYt.className = "btn-yt-active";
            YT_PLAYER.render(container, user.savedYtHandle);
        }
        
        AssistirManager.currentPlatform = platform;
    }
};

document.addEventListener('DOMContentLoaded', AssistirManager.init);
