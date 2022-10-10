<h1>Store Manager</h1>

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

## Autor 
- [Matheus](https://github.com/MatheusNF123)

