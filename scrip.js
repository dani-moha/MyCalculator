let display=document.getElementById("display");
let buttons=document.querySelectorAll("button");
let lastInput="";

buttons.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        const value=btn.textContent;
        if(value==="="){
            try{
                display.textContent=eval(display.textContent);
            }catch{
                display.textContent="Get a Life Thickie";
            }
         }else if(value==="C"){
            display.textContent="";
            lastInput="";
         }else if(value==="."){
            const parts=display.textContent.split(/[\+\-\*\/]/);
            const currentNumber=parts[parts.length-1];
            if(!currentNumber.includes(".")){
                display.textContent += value;
                lastInput=value;
            }
         }else{
            display.textContent +=value;
            lastInput=value;
        }
    }  )
})