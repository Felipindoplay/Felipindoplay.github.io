window.onload = () => {
    // 1. Tentar ler o canal guardado
    const savedTwitchChannel = localStorage.getItem('saved_tw');
    const display = document.getElementById('channel-display');
    const container = document.getElementById('extension-container');

    // DEBUG: Verificar no console se o valor existe
    console.log("Canal recuperado do localStorage:", savedTwitchChannel);

    if (savedTwitchChannel && savedTwitchChannel.trim() !== "") {
        const channel = savedTwitchChannel.trim().toLowerCase();
        display.innerText = `Canal: ${channel}`;

        const extensionId = "1x8qj46mqdjosccu7kzbyngnmsd3fn";
        const domain = "felipindoplay.github.io";

        // Criar o Iframe
        const iframe = document.createElement('iframe');
        
        // URL de Popout com os parâmetros de segurança necessários
        iframe.src = `https://www.twitch.tv/popout/${channel}/extensions/${extensionId}/panel?parent=${domain}`;
        
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.setAttribute("allowfullscreen", "true");

        // Limpar o container e adicionar o iframe
        container.innerHTML = ""; 
        container.appendChild(iframe);

    } else {
        // Se não houver nada guardado, mostramos um erro e um botão para voltar
        display.innerHTML = `<span style="color:#ff4444">⚠️ Erro: Nenhum canal configurado!</span>`;
        container.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #adadb8;">
                <p>Parece que não definiste o utilizador da Twitch na página principal.</p>
                <a href="../" style="color: #9146ff; font-weight: bold;">Voltar ao Início para configurar</a>
            </div>
        `;
    }
};
    
    container.appendChild(iframe);
};
= () => {
    const savedTwitchChannel = localStorage.getItem('saved_tw') || "dante_will";
    const display = document.getElementById('channel-display');
    const container = document.getElementById('extension-container');

    display.innerText = `Canal: ${savedTwitchChannel}`;

    // A URL de Popout da Twitch para extensões
    // O parâmetro 'parent' é obrigatório e deve ser o seu domínio do GitHub
    const domain = "felipindoplay.github.io";
    const extensionId = "1x8qj46mqdjosccu7kzbyngnmsd3fn";
    
    const iframe = document.createElement('iframe');
    iframe.src = `https://p6r87vg79069qpx07698947596078.ext-twitch.tv/${extensionId}/1.0.1/panel.html?anchor=panel&ext_id=${extensionId}&ext_ver=1.0.1&host=www.twitch.tv&language=pt-br&mode=viewer&parent=${domain}&platform=web&popout=true`;
    
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    // Fallback: Se o iframe falhar, oferecemos um link direto
    container.innerHTML = `
        <div style="padding: 20px; text-align: center;">
            <p>Se a extensão não carregar abaixo, clique no botão:</p>
            <a href="https://www.twitch.tv/popout/${savedTwitchChannel}/extensions/${extensionId}/panel" 
               target="_blank" 
               style="background:#9146ff; color:white; padding:10px 20px; border-radius:5px; text-decoration:none; font-weight:bold;">
               Abrir Chatdex em Nova Janela
            </a>
        </div>
    `;
    
    container.appendChild(iframe);
};
