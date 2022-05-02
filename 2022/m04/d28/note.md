# 2022年4月28日09:08:24

## node package manager nad package

### initing package basic structure.

- new zy-tools folder as package root directory.
- new three follow three files in zy-tools folder.
    * package.json (package manager configuration file)
    * index.js (the entry file for package)
    * README.md (package documentation)

## Encounter express

### 1. create basic web server

```js
 // 1. import express
const express = require('express');
// 2. create web server
const app = express();
// 4.listening client get and post request,and responsing a json object to client.
app.get('/user', (req, res) => {
    res.send({name: 'zs', age: 20, gender: 'fale'});
})
app.post('/user', (req, res) => {
    res.send('response successfully');
})
// 3. calling app.listen(port,callback function after start successfully) to start server.
app.listen(80, () => {
    console.log('express server is running.');
})
```

### 2. hosting static resource

express provides a handy function called express.static(). through it, we can very conveniently create a static resource
server.for example, the picture,css files and javaScript files open access by the following code.

```js
app.use(express.static('folder name'));
```

**note:** express looks for file in static directory and provides resource access path. therefore URL has not directory
storing static files.

### 3. installing nodemon

running following command in terminal,and nodemon is installed as global useful tool:

```
npm install -g nodemon
// how to use nodemon? replace node with nodemon
nodemon file_name 
```
### 4. route in express

- In express, route is mapping relation between request from client and dispose function in server
- A route in express consists of three parts, they are request type, request url address and dispose function. format is
  as follows:
```js
app.get('/', (req, res) => {
  res.send('hello,express...');
});
app.post('/',(req,res) =>{
    res.sed('hello,express.....')
})
```
### 5. modularization route

#### For convenient modularization managing to route, express not suggests that route directly mounts on app, and it is recommended that route is separated into separate modules. 
 - It is following steps that route is separated into separate modules.
    1. Creating .js file related with route modules.
    2. Calling express.Router() function to create route object.
    3. Mounting specific route to route object.
    4. Using module.exports to share route object outward.
    5. Using app.use() function to register route module.















    
## express middleware
