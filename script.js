'use strict';
//debugger;
function DomElement(selector, height, width, bg, fontSize){

   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
   this.createElemFunc = function(selector){
      let divElement;
       if (selector[0] === '.'){

          divElement = document.createElement('div');
          divElement.classList.add("block");
      
       } else if (selector[0] === '#'){

           divElement = document.createElement("p");
           divElement.id = "best";

       }
       divElement.style.cssText = `height: 50px;width: 50px;background: green;font-Size: 12px`;  
      return divElement;
      };
};

let domElem = new DomElement();
domElem.createElemFunc('.block');
let body = document.querySelector('body');
body.appendChild(domElem.createElemFunc('.block'));




   