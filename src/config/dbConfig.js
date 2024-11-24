// dbConfig.js
import { MongoClient } from "mongodb";

// Função para conectar ao banco de dados
export default async function conectarAoBanco(STRING_CONEXAO) {
    const client = new MongoClient(STRING_CONEXAO);

    try {
        console.log('Conectando ao cluster do banco de dados...');
        await client.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return client; // Retorna o cliente conectado
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit(1); // Saída com código de erro
    }
}
