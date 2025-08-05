# Bot Telegram Modular

Bot do Telegram organizado de forma modular para facilitar manutenção e crescimento.

## Estrutura do Projeto

```
telegram-bot/
├── bot.js                     # Arquivo principal
├── package.json              # Dependências do projeto
├── README.md                 # Este arquivo
├── handlers/                 # Gerenciadores
│   ├── commandHandler.js     # Registro de comandos
│   └── messageHandler.js     # Tratamento de mensagens
└── commands/                 # Comandos individuais
    ├── start.js             # Comando /start
    ├── help.js              # Comando /help
    ├── info.js              # Comando /info
```

## Instalação

1. Clone ou baixe o projeto
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Substitua o token no arquivo `bot.js` pelo token do seu bot

## Execução

### Modo normal:
```bash
npm start
```

### Modo desenvolvimento (com auto-reload):
```bash
npm run dev
```

## Como Adicionar Novos Comandos

1. Crie um novo arquivo na pasta `commands/` (ex: `commands/novocomando.js`)

2. Use este modelo:
```javascript
// commands/novocomando.js
module.exports = (bot) => {
    bot.onText(/\/novocomando/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Resposta do novo comando!');
    });
};
```

3. Registre o comando em `handlers/commandHandler.js`:
```javascript
const novoComando = require('../commands/novocomando');

module.exports = (bot) => {
    // ... outros comandos
    novoComando(bot);
};
```

4. Atualize a lista de comandos em `commands/start.js`

## Comandos Disponíveis

- `/start` - Mensagem de boas-vindas
- `/help` - Ajuda
- `/info` - Informações do usuário

## Vantagens desta Estrutura

- **Modularidade**: Cada comando em arquivo separado
- **Facilidade de manutenção**: Código organizado e limpo
- **Escalabilidade**: Fácil adicionar novos comandos
- **Reutilização**: Handlers podem ser reutilizados
- **Debugging**: Mais fácil encontrar e corrigir problemas