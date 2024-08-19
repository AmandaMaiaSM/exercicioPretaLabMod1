# exercicio PretaLab Modulo 01 
# API de Livros 

Esta API foi criada como parte do meu estudo da primeira semana em NodeJS, utilizando os métodos GET e POST.
A aplicação para armazena os dados na memória.

## Estrutura do Objeto Livro

O objeto BOOK que será criado via POST deve seguir o seguinte formato:



  "id": número,
  "title": "texto",
  "year": número,
  "description": "texto",
  "status": booleano (true/false)



### Rotas da API
GET /books: Retorna a lista de livros cadastrados.
POST /books: Cria um novo livro.

### Testando a API
Você pode testar essa API utilizando o Insomnia ou qualquer outra ferramenta similar para enviar requisições HTTP.

### Tecnologias Utilizadas
  - NodeJS
  - Express
  - CORS

Exemplo de Requisição POST:
URL: http://localhost:4000/books

obs: Instalação: Certifique-se de ter o Node.js instalado.
Em seguida, instale as dependências, como:
----> npm install

Imagens:
Exemplo de resposta do endpoint POST 
![post_exercicioBooks](https://github.com/user-attachments/assets/c0e455f3-f4ce-48ed-b483-922b3df35e8d)
Exemplo de resposta do endpoint GET:
![get_exercioBooks](https://github.com/user-attachments/assets/073e7462-35a0-42cd-abce-6d058eed197e)
Exemplo de resposta do localhost:
![localhhost](https://github.com/user-attachments/assets/9089fc6c-4cbe-45d1-9cf9-4720a1f92ea5)






