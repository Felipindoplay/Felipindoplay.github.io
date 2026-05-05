window.onload = () => {
    const container = document.getElementById('extension-container');
    
    // Configurações Fixas
    const channel = "dante_will";
    const extensionId = "1x8qj46mqdjosccu7kzbyngnmsd3fn";
    const domain = "felipindoplay.github.io";

    // URL de Popout da Twitch formatada corretamente para embutir
    // O parâmetro 'parent' é obrigatório para evitar o erro de conexão recusada
    const twitchUrl = `https://www.twitch.tv/popout/${channel}/extensions/${extensionId}/panel?parent=${domain}`;

    // Criamos o iframe
    const iframe = document.createElement('iframe');
    iframe.src = twitchUrl;
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("scrolling", "no");

    // Tentamos carregar o iframe
    container.innerHTML = ""; // Limpa o "Carregando..."
    container.appendChild(iframe);

    // Adicionamos um pequeno aviso de segurança no console para log
    console.log("Tentando carregar Chatdex para: " + channel);
};
