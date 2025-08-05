// commands/info.js - Comando /info
module.exports = (bot) => {
    bot.onText(/\/info/, (msg) => {
        const chatId = msg.chat.id;
        const userInfo = `
📋 Suas informações:
• Nome: ${msg.from.first_name}
• Username: @${msg.from.username || 'não definido'}
• ID: ${msg.from.id}
• Chat ID: ${chatId}
        `;
        bot.sendMessage(chatId, userInfo);
    });
};