/**
 * CHAT.JS - Lógica de comunicação com APIs
 */

const mainChat = {
    // Inicializa os campos com o que está no "banco de dados"
    init: () => {
        const user = DB.getUserData();
        document.getElementById('ytHandle').value = user.savedYtHandle;
        document.getElementById('twUser').value = user.savedTwitchUser;
    },

    disparar: async () => {
        const msg = document.getElementById('msg').value.trim();
        const status = document.getElementById('status');
        const ytHandle = document.getElementById('ytHandle').value.trim();
        const twUser = document.getElementById('twUser').value.trim();
        const user = DB.getUserData();

        if (!msg) return alert("Escreva uma mensagem primeiro!");
        
        status.innerHTML = "🚀 Enviando...";
        let resultados = [];

        // --- Fluxo Twitch ---
        if (user.twToken) {
            const pTw = mainChat.enviarTwitch(twUser, msg, user.twToken)
                .then(() => "Twitch ✅")
                .catch(e => `Twitch ❌ (${e.message})`);
            resultados.push(pTw);
        }

        // --- Fluxo YouTube ---
        if (user.ytToken) {
            const pYt = mainChat.enviarYouTube(ytHandle, msg, user.ytToken)
                .then(() => "YouTube ✅")
                .catch(() => null); // Silencioso se offline/erro conforme pedido
            resultados.push(pYt);
        }

        const reports = await Promise.all(resultados);
        status.innerHTML = reports.filter(r => r !== null).join(" | ");
        
        // Limpa o chat se houver sucesso
        if (reports.length > 0) document.getElementById('msg').value = "";
    },

    enviarTwitch: async (channelName, message, token) => {
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Client-Id': CONFIG.TW_CLIENT_ID,
            'Content-Type': 'application/json'
        };

        // 1. Pega ID do remetente
        const me = await fetch('https://api.twitch.tv/helix/users', { headers }).then(r => r.json());
        const senderId = me.data[0].id;

        // 2. Pega ID do canal destino
        const target = await fetch(`https://api.twitch.tv/helix/users?login=${channelName}`, { headers }).then(r => r.json());
        const broadcasterId = target.data[0].id;

        // 3. Envia
        const res = await fetch('https://api.twitch.tv/helix/chat/messages', {
            method: 'POST',
            headers,
            body: JSON.stringify({ broadcaster_id: broadcasterId, sender_id: senderId, message: message })
        });
        if (!res.ok) throw new Error("Erro no envio");
    },

    enviarYouTube: async (handle, message, token) => {
        const auth = { 'Authorization': `Bearer ${token}` };
        const cleanHandle = handle.replace('@', '');

        // 1. Handle -> ID
        const channel = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${cleanHandle}`, { headers: auth }).then(r => r.json());
        const channelId = channel.items[0].id;

        // 2. Busca Live Ativa
        const live = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live`, { headers: auth }).then(r => r.json());
        if (!live.items?.length) return; // Sai silenciosamente

        const videoId = live.items[0].id.videoId;

        // 3. Pega Chat ID
        const details = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}`, { headers: auth }).then(r => r.json());
        const chatId = details.items[0].liveStreamingDetails.activeLiveChatId;

        // 4. Envia
        await fetch('https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet', {
            method: 'POST',
            headers: { ...auth, 'Content-Type': 'application/json' },
            body: JSON.stringify({
                snippet: { liveChatId: chatId, type: 'textMessageEvent', textMessageDetails: { messageText: message } }
            })
        });
    }
};

// Inicializa ao carregar
document.addEventListener('DOMContentLoaded', mainChat.init);
