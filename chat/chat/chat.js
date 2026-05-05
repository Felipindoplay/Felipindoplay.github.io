/**
 * CHAT/CHAT/CHAT.JS - Atualizado com Mensagem Fixada
 */

const ChatReader = {
    ytInterval: null,
    nextPageToken: null,

    init: () => {
        const user = DB.getUserData();
        
        if (user.savedTwitchUser) {
            ChatReader.setupPinned(user);
            ChatReader.connectTwitch(user.savedTwitchUser);
        }

        if (user.savedYtHandle && user.ytToken) {
            ChatReader.startYouTube(user.savedYtHandle, user.ytToken);
        }
    },

    // Configura a área fixada com os dados do Criador
    setupPinned: (user) => {
        const pinnedArea = document.getElementById('tw-pinned-area');
        const pImg = document.getElementById('pinned-img');
        const pName = document.getElementById('pinned-username');
        const pText = document.getElementById('pinned-text');

        // Mostra a área
        pinnedArea.style.display = 'block';
        
        // Preenche com os dados salvos no login (Global.js)
        pImg.src = user.twAvatar;
        pName.innerText = user.savedTwitchUser;
        pText.innerText = "Bem-vindos à live! Use as extensões e divirta-se no Chatdex.";
    },

    connectTwitch: (channel) => {
        const socket = new WebSocket('wss://irc-ws.chat.twitch.tv:443');
        const container = document.getElementById('tw-messages');

        socket.onopen = () => {
            // Solicita Tags para pegar cores e cargos (Mod, VIP, etc)
            socket.send('CAP REQ :twitch.tv/tags twitch.tv/commands');
            socket.send('PASS oauth:bypass');
            socket.send('NICK justinfan' + Math.floor(Math.random() * 80000));
            socket.send(`JOIN #${channel.toLowerCase()}`);
        };

        socket.onmessage = (event) => {
            const data = event.data;
            
            if (data.includes('PRIVMSG')) {
                // Parse simplificado de Tags da Twitch (@color=#...;display-name=...;mod=0;...)
                const parts = data.split(' ');
                const tags = parts[0].split(';');
                const msgParts = data.split(`PRIVMSG #${channel.toLowerCase()} :`);
                const message = msgParts[1];

                let displayName = "";
                let color = "#bf94ff";
                
                tags.forEach(t => {
                    if(t.includes('display-name')) displayName = t.split('=')[1];
                    if(t.includes('color=') && t.split('=')[1]) color = t.split('=')[1];
                });

                if (displayName && message) {
                    ChatReader.appendMessage(container, displayName, message, color);
                }
            }
            if (data.includes('PING')) socket.send('PONG :tmi.twitch.tv');
        };
    },

    appendMessage: (container, user, msg, color) => {
        const div = document.createElement('div');
        div.className = 'msg-line';
        // Aplica a cor real do usuário na Twitch
        div.innerHTML = `<span class="user-name" style="color:${color}">${user}:</span> <span>${msg}</span>`;
        container.appendChild(div);
        
        container.scrollTop = container.scrollHeight;
        if (container.childElementCount > 60) container.removeChild(container.firstChild);
    },

    // --- Lógica YouTube (Mantida) ---
    startYouTube: async (handle, token) => {
        try {
            const cleanHandle = handle.replace('@', '');
            const auth = { 'Authorization': `Bearer ${token}` };
            const channelRes = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${cleanHandle}`, { headers: auth }).then(r => r.json());
            if (!channelRes.items?.length) return;
            const channelId = channelRes.items[0].id;

            const liveRes = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live`, { headers: auth }).then(r => r.json());
            
            if (liveRes.items?.length > 0) {
                const videoId = liveRes.items[0].id.videoId;
                const videoDetails = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}`, { headers: auth }).then(r => r.json());
                const liveChatId = videoDetails.items[0].liveStreamingDetails.activeLiveChatId;

                if (liveChatId) {
                    document.getElementById('col-youtube').style.display = 'flex';
                    ChatReader.pollYouTubeMessages(liveChatId, token);
                }
            }
        } catch (e) { console.error("Erro YT Chat", e); }
    },

    pollYouTubeMessages: async (chatId, token) => {
        const container = document.getElementById('yt-messages');
        setInterval(async () => {
            let url = `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${chatId}&part=snippet,authorDetails&maxResults=10`;
            if (ChatReader.nextPageToken) url += `&pageToken=${ChatReader.nextPageToken}`;
            const res = await fetch(url, { headers: { 'Authorization': `Bearer ${token}` } }).then(r => r.json());
            if (res.items) {
                ChatReader.nextPageToken = res.nextPageToken;
                res.items.forEach(item => {
                    ChatReader.appendMessage(container, item.authorDetails.displayName, item.snippet.displayMessage, "#ff4e4e");
                });
            }
        }, 5000);
    }
};

document.addEventListener('DOMContentLoaded', ChatReader.init);
