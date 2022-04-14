function sum() {
    const numbers = [...arguments]
    return numbers.reduce(function (sum, atual) {
        return sum + atual
    }, 0)
}
function avarege() {
    return sum(...arguments) / arguments.length
}


(function(){
    function pegaIndice(indice){
      const trHeader = document.querySelector("thead tr")
      const thsHeader = trHeader.querySelectorAll("th")

      const th = trHeader.querySelector(`[aluno-nota="${indice}"]`)
      
      const i = [...thsHeader].indexOf(th)
      return i
    }

    const INDICE_NOTAS = {
        n1: pegaIndice("n1"),
        n2: pegaIndice("n2"),
        n3: pegaIndice("n3"),
        n4: pegaIndice("n4"),
        media: pegaIndice("media")
    }
   
    const trs = document.querySelectorAll("tbody tr")   
    let x = 0
    let media = 0

    while (trs[x]){
        const tds = trs[x].querySelectorAll("td")
        
        media =  avarege(
            parseFloat(tds[INDICE_NOTAS.n1].textContent),
            parseFloat(tds[INDICE_NOTAS.n2].textContent),
            parseFloat(tds[INDICE_NOTAS.n3].textContent),
            parseFloat(tds[INDICE_NOTAS.n4].textContent)

        )
        x++
        tds[INDICE_NOTAS.media].textContent = media
    }
})()