/**
 * CHATDEX.JS - Lançador de Janela Independente
 */

const ChatdexLauncher = {
    windowRef: null,

    open: () => {
        const channel = "dante_will";
        const extensionId = "1x8qj46mqdjosccu7kzbyngnmsd3fn";
        
        // URL de Popout da Twitch
        // Sem iframe, não precisamos do parâmetro ?parent=, o que evita 99% dos erros de CSP
        const url = `https://www.twitch.tv/popout/${channel}/extensions/${extensionId}/panel`;

        // Configurações da Janela (Estilo App)
        const width = 400;
        const height = 600;
        const left = (window.screen.width / 2) - (width / 2);
        const top = (window.screen.height / 2) - (height / 2);

        const features = `
            width=${width},
            height=${height},
            top=${top},
            left=${left},
            menubar=no,
            toolbar=no,
            location=no,
            status=no,
            resizable=yes,
            scrollbars=no
        `;

        // Se a janela já estiver aberta, foca nela. Se não, abre uma nova.
        if (ChatdexLauncher.windowRef && !ChatdexLauncher.windowRef.closed) {
            ChatdexLauncher.windowRef.focus();
        } else {
            ChatdexLauncher.windowRef = window.open(url, "ChatdexPopout", features);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Verifica se está logado via global.js
    if (!DB.isLogged()) {
        window.location.href = '/login/';
        return;
    }

    // Tenta abrir automaticamente ao entrar na página (opcional)
    // Nota: Muitos navegadores bloqueiam o auto-open sem clique do usuário.
    // ChatdexLauncher.open(); 
});
