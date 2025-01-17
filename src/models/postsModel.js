// Importa a função que conecta ao banco de dados MongoDB a partir do arquivo de configuração
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js';

// Estabelece a conexão com o banco de dados usando a string de conexão armazenada em uma variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


// Função assíncrona para buscar todos os posts do banco de dados
export  async function getTodosPosts() {
    // Acessa o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    // Acessa a coleção "posts"
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
       // Acessa o banco de dados "imersao-instabytes"
       const db = conexao.db("imersao-instabytes");
       const colecao = db.collection("posts");
       return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}