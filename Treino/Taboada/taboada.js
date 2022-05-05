let vInp = document.querySelector("#inpNumero")        
const ulEntrada =  document.getElementById("painel")
const btnReset = document.querySelector("#reset")
const btns = document.getElementsByClassName("btnEntrada")        
const resH1 = document.getElementById("resH1")
const res = document.getElementById("resultado")

btnReset.addEventListener("click", ()=>{
    location.reload()
})


btns[0].addEventListener("click", function somar(){ 
    let vInpValor = vInp.value
    let vEntFinal = parseFloat(vInpValor)
    resH1.textContent = "Adição"                
    
    if(ulEntrada.childElementCount ==0){
        for(let i = 0; i <=10;i++){
        const newLi = document.createElement("li")   
        newLi.setAttribute("style", "padding: 3px; width: 200px; list-style:none; color: white; font-size: 18px; margin: auto" )         
        ulEntrada.appendChild(newLi)

        newLi.innerHTML = (` ${vEntFinal} + ${i} = `+ (vEntFinal + i))              
       
        }
    }else{
        
        let nLis = ulEntrada.querySelectorAll("li")
        nLis.forEach((li)=> li.remove())
        somar()
    }
   
   
})
btns[1].addEventListener("click", function sub(){   
    let vInpValor = vInp.value
    let vEntFinal = parseFloat(vInpValor)
    resH1.textContent = "Subtração"

    if(ulEntrada.childElementCount ==0){
        for(let i = 0; i <=10;i++){
            const newLi = document.createElement("li")   
            newLi.setAttribute("style", "padding: 3px;width: 200px; list-style:none; color: white; font-size: 18px; margin: auto" )         
            ulEntrada.appendChild(newLi)

            newLi.innerHTML = (` ${vEntFinal} - ${i} = `+ (vEntFinal - i)) 
        }
    }else{
        let nLis = ulEntrada.querySelectorAll("li")
        nLis.forEach((li)=> li.remove())
        sub()

    }
})
btns[2].addEventListener("click", function mult(){  
    let vInpValor = vInp.value
    let vEntFinal = parseFloat(vInpValor)
    resH1.textContent = "Multiplicação"

    if(ulEntrada.childElementCount ==0){
        for(let i = 0; i <=10;i++){
            const newLi = document.createElement("li")   
            newLi.setAttribute("style", "padding: 3px;width: 200px;list-style:none; color: white; font-size: 18px; margin: auto" )         
            ulEntrada.appendChild(newLi)

            newLi.innerHTML = (` ${vEntFinal} x ${i} = `+ (vEntFinal * i))
        
        }
    }else{
        let nLis = ulEntrada.querySelectorAll("li")
        nLis.forEach((li)=> li.remove())
        mult()
    }
})
btns[3].addEventListener("click", function div(){   
    let vInpValor = vInp.value
    let vEntFinal =  parseInt(vInpValor)
    const vInpValorTamanho = vInpValor.length
    resH1.textContent = "Divisão"

    if(ulEntrada.childElementCount ==0){
        for(let i = 0; i <=10;i++){               
            const newLi = document.createElement("li")   
            newLi.setAttribute("style", "padding: 3px;width: 200px;list-style:none; color: white; font-size: 18px; margin: auto" )         
            ulEntrada.appendChild(newLi)

            newLi.innerHTML = (` ${vEntFinal} / ${i} = `+ (vEntFinal / i).toPrecision(vInpValorTamanho))
        
        }
    }else{
        let nLis = ulEntrada.querySelectorAll("li")
        nLis.forEach((li)=>  li.remove())                
        div()
    }
})
