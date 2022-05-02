# May 2 study notes.
## how to directly run code in module?
  1. Js file that need to be exported do not need any statements.
  2. using as following code in import file.
```js
import "required import module";
```
## The fault of  the callback hell
1. Code coupling too strong, affecting the whole body, difficult to maintain.
2. a large number of redundant code nested with each other, the code 
becomes less readable. 
## The basic concept of promise.
1. Promise is a structure function.
    - we can create promise instance: **const p = new Promise();**
    - Instance object is created by new represent an async operation
2. There is .then() method in Promise.prototype();
    - new Promise() structure function to gain instance object.
    - accessing .then() method by way of the prototype chain.
3. .then() method assigns successful and failed callback in advance. 
    - p.then(successful callback,failed callback)
    - p.then(result =>{},error =>{})