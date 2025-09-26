# FECAP - Fundação de Comércio Álvares Penteado
<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

## API-Rest

## Professore: <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco de Souza Escobar</a>

## Descrição

Esse projeto é uma API REST simples, que uitiliza Node.js, Express e Nodemon. Serve para gerenciar uma lista de tarefas (To-Do-List) com funcionaidade de CRUD:
* Criar atividade
* Listar as tarefas
* Atualizar uma tarefa
* Deletar uma tarefa

Sem uso de banco de dados, serão armazenadas em memória. A comunicação entre cliente e servidor é via JSON.

Na pasta Imagens contém print dos testes no PostMan nomeados e odenados.

## 🛠 Estrutura de pastas

-Raiz<br>
|<br>
|-->Imagens<br>
|-->node_modules<br>
|-->src<br>
  &emsp;|-->App.js<br>
  &emsp;|-->routes.js<br>
  &emsp;|-->server.js<br>
|-->.env<br>
|-->package-lock.json<br>
|-->package.json<br>
|readme.md<br>

## 🛠 Pré-requisitos

* Node.js
* PostMan
* Express
* Nodemon

## 🛠 Instruções para instalar as dependências

- npm init -y
- npm 

## 🛠 Iniciar Servidor

Inciar Pojeto Node
```sh
npm init -y
```

## 🛠 Rotas

```sh
delete
http://localhost:4000/atividades/:id

```
```sh
Atualizar
http://localhost:4000/atividades/:id

```
```sh
Listar_Atividade
http://localhost:4000/atividades

```
```sh
Criar_Atividade
http://localhost:4000/atividades

```

## 🛠 Exemplos de JSON

{<br>
    "materia"="Banco de Dados",<br>
    "Status"="CConcluido",<br>
    "prioridade"="Alta",<br>
    "descricao"="Teste"<br>
}<br>






