// bot.js - Arquivo principal do bot
const TelegramBot = require('node-telegram-bot-api');
const commandHandler = require('./handlers/commandHandler');
const messageHandler = require('./handlers/messageHandler');

// Substitua pelo token do seu bot (obtido do @BotFather)
const token = '8312266035:AAEgSYwys_osx3Xseje37CuJxUQ_baynxTY';

// Cria uma instância do bot usando polling para buscar mensagens
const bot = new TelegramBot(token, { polling: true });

// Registra os handlers de comandos
commandHandler(bot);

// Registra o handler de mensagens
messageHandler(bot);

// Tratamento de erros
bot.on('polling_error', (error) => {
    console.log('Erro de polling:', error);
});

console.log('Bot iniciado! 🤖');
console.log('Pressione Ctrl+C para parar o bot.');