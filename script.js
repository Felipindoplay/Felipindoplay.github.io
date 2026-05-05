const YT_CLIENT_ID = '18363074943-aegjp8fciocd0ehjr2l2orkma5dfn9rp.apps.googleusercontent.com';
const TW_CLIENT_ID = 'htrr9qq65jbouxi9d12owqlm5ikpng';
const REDIRECT_URI = 'https://felipindoplay.github.io/';

let tokens = { yt: null, tw: null };
let tokenClient;

// --- INICIALIZAÇÃO E COOKIES ---
window.onload = () => {
    verificarCookieBanner();
    carregarSessaoSalva();

    // SALVAR NOMES AO DIGITAR (Novo)
    const ytInput = document.getElementById('ytHandle');
    const twInput = document.getElementById('twUser');

    ytInput.addEventListener('input', () => localStorage.setItem('saved_yt', ytInput.value));
    twInput.addEventListener('input', () => localStorage.setItem('saved_tw', twInput.value));    // Captura token da Twitch na URL
    const params = new URLSearchParams(window.location.hash.replace('#', '?'));
    if (params.has('access_token')) {
        tokens.tw = params.get('access_token');
        localStorage.setItem('tw_token', tokens.tw);
        atualizarInterfaceBotao('btnTw', 'Twitch Conectada');
        history.replaceState(null, null, ' '); 
    }

    // Inicializa Google OAuth
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: YT_CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly',
        callback: (res) => {
            tokens.yt = res.access_token;
            localStorage.setItem('yt_token', tokens.yt);
            atualizarInterfaceBotao('btnYt', 'YouTube Conectado');
        }
    });
};

function carregarSessaoSalva() {
    const sYt = localStorage.getItem('yt_token');
    const sTw = localStorage.getItem('tw_token');
    if (sYt) { tokens.yt = sYt; atualizarInterfaceBotao('btnYt', 'YouTube (Auto)'); }
    if (sTw) { tokens.tw = sTw; atualizarInterfaceBotao('btnTw', 'Twitch (Auto)'); }
}

function verificarCookieBanner() {
    if (!localStorage.getItem('cookies_ok')) document.getElementById('cookie-popup').style.display = 'flex';
}

function aceitarCookies() {
    localStorage.setItem('cookies_ok', 'true');
    document.getElementById('cookie-popup').style.display = 'none';
}

function limparSessao() {
    localStorage.clear();
    location.reload();
}

function loginYT() { tokenClient.requestAccessToken(); }
function loginTW() {
    const scopes = encodeURIComponent('user:write:chat user:read:chat moderator:read:followers');
    window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=${TW_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${scopes}`;
}

function atualizarInterfaceBotao(id, texto) {
    const btn = document.getElementById(id);
    btn.classList.add('logged');
    btn.innerText = texto;
};

function carregarSessaoSalva() {
    const sYt = localStorage.getItem('yt_token');
    const sTw = localStorage.getItem('tw_token');
    const hYt = localStorage.getItem('saved_yt'); // @ do YT
    const hTw = localStorage.getItem('saved_tw'); // User da Twitch

    if (sYt) { tokens.yt = sYt; atualizarInterfaceBotao('btnYt', 'YouTube (Auto)'); }
    if (sTw) { tokens.tw = sTw; atualizarInterfaceBotao('btnTw', 'Twitch (Auto)'); }
    
    // Preenche os campos automaticamente com o que foi salvo
    if (hYt) document.getElementById('ytHandle').value = hYt;
    if (hTw) document.getElementById('twUser').value = hTw;
}

// --- LÓGICA DE ENVIO ---

async function disparar() {
    const msg = document.getElementById('msg').value.trim();
    const status = document.getElementById('status');
    const ytHandle = document.getElementById('ytHandle').value.trim();
    const twUser = document.getElementById('twUser').value.trim();

    if (!msg) return alert("Digite uma mensagem!");
    status.innerText = "Processando envio...";

    try {
        const promessas = [];

        if (tokens.tw && twUser) promessas.push(enviarParaTwitch(twUser, msg));
        if (tokens.yt && ytHandle) promessas.push(enviarParaYouTube(ytHandle, msg));

        if (promessas.length === 0) throw new Error("Faça login primeiro!");

        await Promise.all(promessas);
        status.innerHTML = "<span style='color:var(--success)'>Enviado para ambas as lives!</span>";
        document.getElementById('msg').value = "";
    } catch (e) {
        console.error(e);
        status.innerHTML = `<span style='color:var(--youtube)'>Erro: ${e.message}</span>`;
    }
}

// CONVERSÃO E ENVIO YOUTUBE
async function enviarParaYouTube(handle, message) {
    const authHeader = { 'Authorization': `Bearer ${tokens.yt}` };

    // 1. Converter @Handle para Channel ID
    const cleanHandle = handle.replace('@', '');
    const searchRes = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${cleanHandle}`, { headers: authHeader });
    const searchData = await searchRes.json();
    
    if (!searchData.items || searchData.items.length === 0) throw new Error("Canal YouTube não encontrado.");
    const channelId = searchData.items[0].id;

    // 2. Buscar Live Ativa
    const liveRes = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&eventType=live`, { headers: authHeader });
    const liveData = await liveRes.json();
    if (!liveData.items.length) throw new Error("Canal não está ao vivo no YouTube.");
    const videoId = liveData.items[0].id.videoId;

    // 3. Pegar Chat ID e Enviar
    const videoDetails = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoId}`, { headers: authHeader }).then(r => r.json());
    const chatId = videoDetails.items[0].liveStreamingDetails.activeLiveChatId;

    await fetch('https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet', {
        method: 'POST',
        headers: { ...authHeader, 'Content-Type': 'application/json' },
        body: JSON.stringify({
            snippet: { liveChatId: chatId, type: 'textMessageEvent', textMessageDetails: { messageText: message } }
        })
    });
}

// ENVIO TWITCH
async function enviarParaTwitch(channelName, message) {
    const headers = {
        'Authorization': `Bearer ${tokens.tw}`,
        'Client-Id': TW_CLIENT_ID,
        'Content-Type': 'application/json'
    };

    const userRes = await fetch('https://api.twitch.tv/helix/users', { headers }).then(r => r.json());
    const senderId = userRes.data[0].id;

    const channelRes = await fetch(`https://api.twitch.tv/helix/users?login=${channelName}`, { headers }).then(r => r.json());
    const broadcasterId = channelRes.data[0].id;

    await fetch('https://api.twitch.tv/helix/chat/messages', {
        method: 'POST',
        headers,
        body: JSON.stringify({ broadcaster_id: broadcasterId, sender_id: senderId, message: message })
    });
}
