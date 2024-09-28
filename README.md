
# URL Shortener

Este repositório contém um projeto de encurtador de URL que consiste em três partes principais: o backend, o frontend e o bot do Telegram.

## Estrutura do Repositório

- **backend/**: Implementado com Express e Prisma. Responsável por lidar com a lógica do servidor, conexão com o banco de dados, e criação e resolução das URLs encurtadas.
- **frontend/**: Implementado com Next.js. Interface do usuário para criar e gerenciar URLs encurtadas.
- **telegram-bot/**: Implementado com o framework Telegraf. Bot do Telegram para encurtar URLs diretamente a partir do aplicativo de mensagens.

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, Prisma
- **Frontend**: Next.js, React
- **Telegram Bot**: Telegraf

## Como Executar

### Backend

1. Navegue até a pasta `backend`:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env` conforme necessário.

4. Execute o servidor:
   ```bash
   npm run dev
   ```

### Frontend

1. Navegue até a pasta `frontend`:
   ```bash
   cd frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env.local` conforme necessário.

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

### Telegram Bot

1. Navegue até a pasta `telegram-bot`:
   ```bash
   cd telegram-bot
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env` com o token do seu bot e outras variáveis necessárias.

4. Execute o bot:
   ```bash
   npm start
   ```

## Contribuições

Sinta-se à vontade para abrir issues ou enviar pull requests se encontrar algum problema ou quiser adicionar novas funcionalidades.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE.md).
