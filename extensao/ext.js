window.onload = () => {
    // 1. Pega o canal salvo ou usa o padrão
    const savedTwitchChannel = localStorage.getItem('saved_tw') || "dante_will";
    const display = document.getElementById('channel-display');
    const container = document.getElementById('extension-container');

    display.innerText = `Canal: ${savedTwitchChannel}`;

    // 2. Configurações da Extensão
    const extensionId = "1x8qj46mqdjosccu7kzbyngnmsd3fn";
    const domain = "felipindoplay.github.io"; // O seu domínio exato no GitHub

    // 3. Criar o Iframe com a URL de Popout da própria Twitch
    // Este formato é o que melhor evita o erro de "Invalid ID" ou "Connection Refused"
    const iframe = document.createElement('iframe');
    
    // A URL deve apontar para o popout da extensão dentro da estrutura da Twitch
    iframe.src = `https://www.twitch.tv/popout/${savedTwitchChannel}/extensions/${extensionId}/panel?parent=${domain}`;
    
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.setAttribute("allowfullscreen", "true");

    // 4. Fallback (Link de Segurança)
    // Caso o iframe ainda seja bloqueado por políticas do navegador
    container.innerHTML = `
        <div style="padding: 15px; text-align: center; background: #1a1a1a; border-bottom: 1px solid #333;">
            <p style="font-size: 14px; margin-bottom: 10px;">Se a extensão não carregar, clique no botão abaixo:</p>
            <a href="https://www.twitch.tv/popout/${savedTwitchChannel}/extensions/${extensionId}/panel" 
               target="_blank" 
               style="background:#9146ff; color:white; padding:8px 16px; border-radius:4px; text-decoration:none; font-weight:bold; font-size: 13px;">
               Abrir Chatdex (Janela Externa)
            </a>
        </div>
    `;
    
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
