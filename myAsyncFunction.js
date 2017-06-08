/*global.XMLHttpRequest = require("xmlhttprequest");*/
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function  myAsyncFunction(myArgument){
    return new Promise((resolve,reject)=>{
      const request=new XMLHttpRequest();
      request.open("GET", myArgument);
      request.onload=()=>resolve(request.response);
      request.onerror=()=>reject("error");
      request.send();
    });
}

myAsyncFunction("https://developer.mozilla.org").then(
    (res)=>console.log(res.blob()),
    (err)=>console.log(err)
    );
