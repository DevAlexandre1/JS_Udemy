const arr = [1,2,3,4,5,6,"+",5,7,8,"-",8,4,2,"*",12,1,2,4,"/",5,6]

console.log(arr)
let indice = []
const arrFiltrado = arr.filter((el,i,arr2)=>{
    return el ==="+" || el === "-" || el ==="*" || el==="/"

})

console.log(arrFiltrado)
console.log(indice)