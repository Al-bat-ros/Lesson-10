'use strict';
//debugger;

function DomElement(selector, height, width, bg, fontSize, left, top, right, bottom ){
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
   this.left = left;
   this.top = top;
   this.right = right;
   this.bottom = bottom;
   this.createElemFunc = function(selector, height, width, bg, fontSize, left, top, right, bottom){
      let divElement;
       if (selector[0] === '.'){

           divElement = document.createElement('div');
           divElement.classList.add("block");
      
       } else if (selector[0] === '#'){

           divElement = document.createElement("p");
           divElement.id = "best";

       }
       divElement.style.cssText = `height: ${height}; 
       width: ${width}; 
       background: ${bg}; 
       font-Size: ${fontSize}; 
       position: absolute;
       left: ${left};
       top: ${top};
       right: ${right};
       bottom: ${bottom}`;  
       console.log(divElement);
      return divElement;
      };
};

let domElem = new DomElement();
let body = document.querySelector('body');
document.addEventListener('DOMContentLoaded', function(){
   body.appendChild(domElem.createElemFunc('.block', '100px', '100px', 'green', '12px'));
});
document.addEventListener('keydown', function(event){
   let left = 0,top = 0,right = 0,bottom = 0;
   switch(event.code){
      case 'ArrowUp': 
            left = '10px';
         console.log('вверх');
         break;
      case 'ArrowDown':
             top = '10px';
         console.log('вниз');
         break;
      case 'ArrowLeft':
           right = '10px';
         console.log('влево');
         break;
      case 'ArrowRight':
             bottom  = '10px';
         console.log('вправо');
         break;                                           
   }
   body.appendChild(domElem.createElemFunc('.block', '100px', '100px', 'green', left, top, right, bottom ));
});









   