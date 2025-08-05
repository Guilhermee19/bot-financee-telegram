// handlers/messageHandler.js - Gerenciador de mensagens
module.exports = (bot) => {
    // Responde a mensagens que não são comandos
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const messageText = msg.text;
        
        // Ignora comandos (mensagens que começam com /)
        if (messageText && !messageText.startsWith('/')) {
            // Algumas respostas automáticas simples
            if (messageText.toLowerCase().includes('oi') || 
                messageText.toLowerCase().includes('olá')) {
                bot.sendMessage(chatId, 'Olá! Como posso ajudar?');
            } else if (messageText.toLowerCase().includes('tchau') || 
                       messageText.toLowerCase().includes('até logo')) {
                bot.sendMessage(chatId, 'Até logo! 👋');
            } else if (messageText.toLowerCase().includes('obrigado') || 
                       messageText.toLowerCase().includes('valeu')) {
                bot.sendMessage(chatId, 'De nada! 😊');
            } else {
                // Resposta padrão para outras mensagens
                bot.sendMessage(chatId, `Você disse: "${messageText}"\n\nUse /help para ver os comandos disponíveis!`);
            }
        }
    });
};