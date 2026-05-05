const YT_CLIENT_ID = '18363074943-aegjp8fciocd0ehjr2l2orkma5dfn9rp.apps.googleusercontent.com';
const TW_CLIENT_ID = 'htrr9qq65jbouxi9d12owqlm5ikpng';
const REDIRECT_URI = 'https://felipindoplay.github.io/login/'; // Redireciona para a pasta login

// Função para injetar o cabeçalho em todas as páginas
function injectHeader() {
    const twIcon = localStorage.getItem('tw_avatar') || 'https://via.placeholder.com/40';
    const ytIcon = localStorage.getItem('yt_avatar') || 'https://via.placeholder.com/40';
    const isLogged = localStorage.getItem('tw_token') || localStorage.getItem('yt_token');

    const headerHTML = `
        <header style="display:flex; justify-content:space-between; align-items:center; padding:10px 20px; background:#18181b; border-bottom:1px solid #333; position:sticky; top:0; z-index:100">
            <div style="font-weight:bold; color:#9146ff; cursor:pointer" onclick="window.location.href='/'">Dashboard</div>
            <div style="display:flex; gap:10px">
                ${localStorage.getItem('tw_token') ? `<img src="${twIcon}" title="Twitch Logada" style="width:35px; border-radius:50%; border:2px solid #9146ff">` : ''}
                ${localStorage.getItem('yt_token') ? `<img src="${ytIcon}" title="YouTube Logado" style="width:35px; border-radius:50%; border:2px solid #ff0000">` : ''}
            </div>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

// Proteção de Rota
function checkAuth() {
    const path = window.location.pathname;
    const token = localStorage.getItem('tw_token') || localStorage.getItem('yt_token');
    
    // Se tentar acessar /chat ou /extensao sem login, vai para /login
    if ((path.includes('chat') || path.includes('extensao')) && !token) {
        alert("Acesso negado. Por favor, faça login.");
        window.location.href = '/login/';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    injectHeader();
    checkAuth();
});
