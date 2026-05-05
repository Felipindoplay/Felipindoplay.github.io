window.onload = () => {
    // 1. Recuperar os tokens e dados de login salvos na página principal
    const twitchToken = localStorage.getItem('tw_token');
    const youtubeToken = localStorage.getItem('yt_token');
    const savedTwitchUser = localStorage.getItem('saved_tw') || "dante_will";

    const display = document.getElementById('channel-display');
    const container = document.getElementById('extension-container');

    // 2. Verificar se o usuário está logado na Twitch
    if (!twitchToken) {
        display.innerHTML = `<span style="color:#ff4444">⚠️ Login necessário na página principal</span>`;
        container.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #adadb8;">
                <p>Você precisa estar logado na Twitch para usar esta aba.</p>
                <a href="../" style="color: #9146ff; font-weight: bold; text-decoration: none;">← Voltar para Logar</a>
            </div>
        `;
        return;
    }

    // 3. Configurações da Extensão
    const channel = "dante_will"; // Canal definido como fixo conforme pedido
    const extensionId = "1x8qj46mqdjosccu7kzbyngnmsd3fn";
    const domain = "felipindoplay.github.io";

    display.innerText = `Canal: ${channel}`;

    // 4. Criar o Iframe com suporte a permissões de autenticação
    const iframe = document.createElement('iframe');
    
    // A URL utiliza o parâmetro parent para validar o domínio no servidor da Twitch
    iframe.src = `https://www.twitch.tv/popout/${channel}/extensions/${extensionId}/panel?parent=${domain}`;
    
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    
    // Atributos necessários para que a extensão reconheça o contexto do usuário
    iframe.setAttribute("allow", "autoplay; fullscreen");
    iframe.setAttribute("allowfullscreen", "true");

    container.innerHTML = ""; 
    container.appendChild(iframe);

    // Exemplo: Como usar o token se precisar fazer uma chamada de API nesta aba
    console.log("Token da Twitch disponível para uso:", twitchToken ? "Sim" : "Não");
};
