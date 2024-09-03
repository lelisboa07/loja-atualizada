// Importar pacote do mysql
const mysql = require('mysql2');

// Criar conexão com banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lisboa@2007',
    database: 'loja',
});

// Testar conexão
connection.connect((err) => {
    if(err) {
        throw err;
    } else {
        console.log('Mysql conectado');
    }
});

module.exports = connection;