# modularization in node.js
## 1. modular category in node.js
### in terms of diffience where come from, we divide module to three categorys,respectly are:
* built-in module (built-in moudule is provided by Node.js official, for instance fs,path,http etc.)
* user-defined module (each .js file that the user creates is custom)
* third-party modules (It needs to be downloaded before use)
## 2. loading module
  ### we can use strong require() method to load required built-in module, custom moudule and third-party module to use. for instance:
  ```js
  // 1. loading built-in fs module.
      const fs = require('fd');

  // 2. loading the use's custom module.
      const custom = require('./custom.js');

  // 3. loading third-party module.
      const moment = require('moment');
  ```
   **_note:_** when we use require() method to load other module, code in loaded module will be executed.
## 3. module scope in Node.js.
### The Advantages of the module scope.
* preventing problems of global variable pollution.
## 4. outward Sharing members of the modular scope.
 1. module object.
    - there is a module object in each .js custom module, it stores message related with the current module.
 2. moudle.exports object.
     - in the custom module, using module.exports object to share members in the module, giving external to use. as external use require() method import custom module, the results is object pointed by module.exports. 
 3. sharing members note:
    - as using require() method import module , import result is object pointed by module.exports.
 4. module.exports and exports points same object.
 5. Node.js obeys CommonJS modular specificaition,commonJS defines modular feature and how to interdependence among each modules.
# npm(node package manager) and package
## package manage configuration file be used to record what package is installed. so after convenient eliminate node_modules category, in term's members to sharing source code.
## devDependencies node 
- if some packages are only used during project devlopment phase,and not are used after the project goes live. suggesting this packages are recorded in devDependencies node.use npm i package_name -D.
## what is mirroring?
- Mirroring is a kind of file storage form, one disk's data have identical copy on other disk.
## packages installed to project's node_modules category is all project package. project package is divided to 2 section. respectively are:
  - Development dependency packages(the packages are recorded in devDependencies node, and only are used during development) code:npm i package-name -D
  - Core dependency packages(the packages are recorded in dependencies node,and are all used during development and after going live) code:npm i package-name
## global package
  - when executing npm install comand, if we provide -g argument,and package will be installed to global package.
  - global packages are installed to C:\Users\usercatalog\AppData\Roaming\npm\node_modules category.