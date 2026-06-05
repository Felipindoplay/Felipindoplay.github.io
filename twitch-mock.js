// twitch-service.js
const IS_DEV = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

console.log(`[Twitch Service] Modo: ${IS_DEV ? 'Desenvolvimento (Mock)' : 'Produção (API Real)'}`);

const TwitchService = {
    // Configurações base
    API_BASE: "https://api.twitch.tv/helix", // Exemplo de URL base
    
    // Método para fazer chamadas
    async request(endpoint, options = {}) {
        if (IS_DEV) {
            console.warn(`[Dev] Simulando resposta para: ${endpoint}`);
            return this.mockResponse(endpoint);
        }

        // Aqui é onde a mágica (e a dor de cabeça) acontece
        const token = await this.getTwitchToken(); // Precisa implementar
        
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Client-Id': 'SEU_CLIENT_ID_AQUI', // Necessário para a API
            'Content-Type': 'application/json'
        };

        const response = await fetch(`${this.API_BASE}${endpoint}`, { ...options, headers });
        return response.json();
    },

    // Simulação para o ambiente de dev
    mockResponse(endpoint) {
        // Retorna dados falsos locais apenas para não quebrar a UI
        return new Promise(resolve => {
            setTimeout(() => resolve({ success: true, mockData: "Dados de teste" }), 500);
        });
    },

    // Captura o token real fornecido pela Twitch (necessário rodar dentro do IFrame)
    getTwitchToken() {
        return new Promise((resolve) => {
            window.Twitch.ext.onAuthorized((auth) => {
                resolve(auth.token);
            });
        });
    }
};

// Exponha para o resto do app
window.TwitchService = TwitchService;