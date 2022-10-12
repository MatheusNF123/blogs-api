<h1>Blogs-api</h1>

 <p>Uma Api API RESTfull na qual simula um site de Blog Nela em que é possível criar, visualizar, deletar e atualizar posts. Aplicação desenvolvida em Node Js, Sequelize, Express, utilizando a arquitetura MSC (model-service-controller) e um banco de dados MySQL para gestão de dados.</p>
 
 
<summary><strong>Imagens Exemplo</strong></summary> 

![image](https://user-images.githubusercontent.com/99821267/194871959-fd85deb6-9cd8-4580-9915-8cee0916cd80.png)

![image](https://user-images.githubusercontent.com/99821267/194872527-c0e5a851-3771-4e17-9dd3-5cf449d1f675.png)


<h2> Instruções da aplicação </h2>

### Rodando aplicação com Docker (arquivo docker-compose foi criado pela Trybe)
```
docker-compose up -d
docker exec -it blogs_api bash
npm install
npm run prestart
npm run seed
npm run debug

```

### Rodar aplicação sem Docker
```
Configurar o arquivo .evn.example com sua conexão ao MySQL.
npm install
npm run prestart
npm run seed
npm run debug

```

### Rodar Lint
```
npm run lint
```

<h2>Rotas </h2>

### Login
<details>
 <summary>POST /login</summary>
 
- Fazer login
- O corpo da requisição deverá seguir o formato abaixo:
 
```JSON
 {
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
 
```

</details>

<!-- ------------------------------------------------------------- -->

<!-- ------------------------------------------------------------- -->

### Usuario
<details>
 <summary>POST /user</summary>
 
- Cadastrando novo usuario
- O corpo da requisição deverá seguir o formato abaixo:
 
```JSON
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  // a imagem não é obrigatória
}
 
```
- Após cadastrar com sucesso recebera um token: (exemplo de token)
 
 ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
<!-- ------------------------------------------------------------- -->
 
<details>
 <summary>GET /user</summary>
 
- Listando todos os usuários
- Deve estar logado com um token ativo: (exemplo de token)
 
 ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
<!-- ------------------------------------------------------------- -->

<details>
 <summary>GET /user/:id</summary>
 
- Listando um usuário pelo id vindo da url
- Deve estar logado com um token ativo: (exemplo de token)
 
 ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
 <!-- ------------------------------------------------------------- -->
 
 <details>
 <summary>DELETE /user/me</summary>
 
- Deletando um usuario do banco de dados baseado no id se ele existir
- Só é possivel deletar um usuario caso a pessoa seja dona dele 
- Deve estar logado com um token ativo: (exemplo de token) 
 
```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
<!-- ------------------------------------------------------------- -->

<!-- ------------------------------------------------------------- -->

### Categorias

<details>
 <summary>POST /categories</summary>
 
- Adicionando uma nova categoria na tabela
- O corpo da requisição deverá seguir o formato abaixo:
 
 ``` JSON
 {
  "name": "Typescript"
}
 
```

- Deve estar logado com um token ativo: (exemplo de token)
 
 ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
<!-- ------------------------------------------------------------- -->

<details>
 <summary>GET /categories</summary>
 
- Listando todas as categorias do banco de dados
- Deve estar logado com um token ativo: (exemplo de token)
 
 ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
<!-- ------------------------------------------------------------- -->

<!-- ------------------------------------------------------------- -->

### POST

<details>
 <summary>POST /post</summary>
 
- adicionando um novo blog post e vinculando-o às categorias em suas tabelas no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
 
 ```JSON
 {
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
 
```
 
- Deve estar logado com um token ativo: (exemplo de token)
 
 ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
<!-- ------------------------------------------------------------- -->

<details>
 <summary>GET /post</summary>
 
- Listando todos os blogs post, user dono dele e as categorias do banco de dados
- Deve estar logado com um token ativo: (exemplo de token)
 
 ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
<!-- ------------------------------------------------------------- -->

<details>
 <summary>GET /post/:id</summary>
 
- Listando o blog post baseado no id do banco de dados se ele existir
- Deve estar logado com um token ativo: (exemplo de token)
 
 ```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
<!-- ------------------------------------------------------------- -->

<details>
 <summary>PUT /post/:id</summary>
 
- Alterar um post do banco de dados baseado no id se ele existir;
- Listando o blog post baseado no id do banco de dados se ele existir
- Só é possivel fazer alteração de um blog post caso a pessoa seja dona dele
- O corpo da requisição deverá seguir o formato abaixo
 
 ```JSON
 {
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
 
 ```
 
- Deve estar logado com um token ativo: (exemplo de token) 
 
```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
<!-- ------------------------------------------------------------- -->

<details>
 <summary>DELETE /post/:id</summary>
 
- Deletando um post do banco de dados baseado no id se ele existir;
- Deletando o blog post baseado no id do banco de dados se ele existir
- Só é possivel deletar um blog post caso a pessoa seja dona dele 
- Deve estar logado com um token ativo: (exemplo de token) 
 
```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>
 
<!-- ------------------------------------------------------------- -->

 <details>
 <summary>GET /post/search?q=:searchTerm</summary>
 
- Listando os blogs post baseados no q passado pela url do endpoint no do banco de dados, se ele existir
- Deve estar logado com um token ativo: (exemplo de token) 
 
```JSON
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
 
``` 
 </details>


<h2> Tecnologias e bibliotecas usadas </h2>

<!-- ------------------------------------------------------------- -->


- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Nodemon](https://nodemon.io/)
- [MYSQL](https://www.mysqltutorial.org/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://sequelize.org/)
- [jwt (jsonwebtoken)](https://jwt.io/)
- [Docker](https://www.docker.com/)
- [Joi](https://joi.dev/api/?v=17.6.1)


## Autor 
- [Matheus](https://github.com/MatheusNF123)

