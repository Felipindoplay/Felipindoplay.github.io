window.onload = () => {
    const savedTwitchChannel = localStorage.getItem('saved_tw');
    const display = document.getElementById('channel-display');
    const container = document.getElementById('extension-container');

    if (savedTwitchChannel) {
        display.innerText = `Exibindo Extensão para: ${savedTwitchChannel}`;
        
        // Criar o Iframe da Extensão (Chatdex)
        // Nota: Extensões da Twitch geralmente rodam dentro de um iframe específico
        const iframe = document.createElement('iframe');
        
        // Esta URL tenta abrir o painel da extensão ancorado ao canal salvo
        iframe.src = `https://www.twitch.tv/popout/${savedTwitchChannel}/extensions/1x8qj46mqdjosccu7kzbyngnmsd3fn/panel`;
        
        container.appendChild(iframe);
    } else {
        display.innerHTML = '<span style="color:red">Nenhum canal salvo! Volte e digite o usuário da Twitch.</span>';
    }
};
