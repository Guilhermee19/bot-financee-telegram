// commands/help.js - Comando /help
module.exports = (bot) => {
    bot.onText(/\/help/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Use /start para ver todos os comandos disponíveis!');
    });
};