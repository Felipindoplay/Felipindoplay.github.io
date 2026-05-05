/**
 * GLOBAL.JS - Atualizado com Modo AFK
 */

const CONFIG = {
    YT_CLIENT_ID: '18363074943-aegjp8fciocd0ehjr2l2orkma5dfn9rp.apps.googleusercontent.com',
    TW_CLIENT_ID: 'htrr9qq65jbouxi9d12owqlm5ikpng',
    REDIRECT_URI: 'https://felipindoplay.github.io/login/',
    FIXED_CHANNEL: 'dante_will'
};

const DB = {
    save: (key, value) => localStorage.setItem(key, value),
    get: (key) => localStorage.getItem(key),
    isLogged: () => !!(localStorage.getItem('tw_token') || localStorage.getItem('yt_token')),
    
    getUserData: () => ({
        twToken: localStorage.getItem('tw_token'),
        ytToken: localStorage.getItem('yt_token'),
        twAvatar: localStorage.getItem('tw_avatar') || 'https://via.placeholder.com/40',
        ytAvatar: localStorage.getItem('yt_avatar') || 'https://via.placeholder.com/40',
        twName: localStorage.getItem('tw_name') || 'Twitch User',
        ytName: localStorage.getItem('yt_name') || 'YouTube User',
        afkMode: localStorage.getItem('afk_mode') === 'true'
    })
};

const AppGuard = {
    injectHeader: () => {
        const user = DB.getUserData();
        const header = document.createElement('header');
        header.style = "background:#1a1a1a; padding:10px 20px; border-bottom:1px solid #333; display:flex; justify-content:space-between; align-items:center;";
        
        header.innerHTML = `
            <div style="color:#9146ff; font-weight:bold; cursor:pointer" onclick="window.location.href='/'">MultiDash</div>
            <div style="display:flex; gap:15px; align-items:center">
                ${user.twToken ? `<div style="text-align:right"><span style="display:block; font-size:10px; color:#adadb8">${user.twName}</span><img src="${user.twAvatar}" style="width:30px; border-radius:50%; border:2px solid #9146ff"></div>` : ''}
                ${user.ytToken ? `<div style="text-align:right"><span style="display:block; font-size:10px; color:#adadb8">${user.ytName}</span><img src="${user.ytAvatar}" style="width:30px; border-radius:50%; border:2px solid #ff0000"></div>` : ''}
            </div>
        `;
        document.body.prepend(header);
    },

    initAFK: () => {
        const isAFK = DB.get('afk_mode') === 'true';
        if (!isAFK) return;

        // Criar Container do Player AFK
        const afkDiv = document.createElement('div');
        afkDiv.id = "afk-player-container";
        // Estilo: Escondido por padrão (1px), mas vira janela no canto se pausar
        afkDiv.style = "position:fixed; bottom:20px; right:20px; width:1px; height:1px; z-index:9999; border-radius:8px; overflow:hidden; transition: all 0.3s ease;";
        document.body.appendChild(afkDiv);

        const domain = "felipindoplay.github.io";
        afkDiv.innerHTML = `<iframe id="afk-iframe" src="https://player.twitch.tv/?channel=${CONFIG.FIXED_CHANNEL}&parent=${domain}&muted=true&autoplay=true" height="100%" width="100%" allowfullscreen="false"></iframe>`;

        // Lógica de detecção de visibilidade (Simulada para Iframe)
        // Como não temos acesso ao estado interno do iframe de outro domínio,
        // pedimos ao usuário para não pausar via sobreposição se o mouse sair do player
        window.addEventListener('blur', () => {
             // Se o usuário clicar fora ou pausar, a janela cresce para avisar
             afkDiv.style.width = "250px";
             afkDiv.style.height = "150px";
             afkDiv.style.border = "2px solid #9146ff";
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AppGuard.injectHeader();
    AppGuard.initAFK();
});
