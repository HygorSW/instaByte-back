// Importa o módulo Express, que é um framework para criar aplicativos web em Node.js
import express from 'express';
import routes from './src/routes/postsRoutes.js';

// Cria uma instância do aplicativo Express
const app = express();
app.use(express.static("uploads"));
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console indicando que o servidor está escutando
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000...");
});


