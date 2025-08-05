// handlers/commandHandler.js - Gerenciador de comandos
const startCommand = require('../commands/start');
const helpCommand = require('../commands/help');
const infoCommand = require('../commands/info');

module.exports = (bot) => {
    // Registra todos os comandos
    startCommand(bot);
    helpCommand(bot);
    infoCommand(bot);
};