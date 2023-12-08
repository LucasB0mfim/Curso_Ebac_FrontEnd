"use strict";
//How to converter types in typescript
// use "namespace" if a variable with that name already exists
var casting;
(function (casting) {
    let idade = 25;
    //trate a idade como um número
    idade.toFixed();
    idade.length;
    //error
    idade.forEach(x => {
        console.log(x);
    });
    //how to converter number to string
    let nome = 35;
})(casting || (casting = {}));
