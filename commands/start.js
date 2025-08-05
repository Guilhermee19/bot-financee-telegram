// commands/start.js - Comando /start
module.exports = (bot) => {
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        const welcomeMessage = `
Olá ${msg.from.first_name}! 👋

Bem-vindo ao meu bot! Aqui estão os comandos disponíveis:

/start - Mostra esta mensagem
/help - Ajuda
/info - Informações sobre você
        `;
        bot.sendMessage(chatId, welcomeMessage);
    });
};