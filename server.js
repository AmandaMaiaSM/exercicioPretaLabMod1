const express = require('express');
const router =  express.Router();
const  cors = require('cors');

//Instancia 
const app = express();

//trafego -> tráfego de JSON e configuração de CORS

app.use(express.json());
app.use(cors());

// Armazena os livros
const books = [];

//GET dados 
router.get('/books', (req, res) => {res.status(200).json(books);});

//POST-> criando um new  book 
router.post('/books', (req, res) => {
    const book = {
      id: req.body.id,
      title: req.body.title,
      year: req.body.year,
      description: req.body.description,
      status: req.body.status,
    };
    
    books.push(book)
    res.status(201).json({ message: `Livro "${book.title}" criado com sucesso!` });
  });

  app.use(router);


// Servido
 // utilizando o servidor 
 const PORT = 4000;
 app.listen(PORT, () => {
  console.log(`Servidor rodando com muito sucesso na porta ${PORT}!`);
});
