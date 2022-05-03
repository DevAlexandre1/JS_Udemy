(() =>{
    function pessoa(){
        this.anos =0
    
        for(let i = 0;i<15;i++){
            setInterval(()=>{
                this.anos = this.anos +1
                console.log('Qual this?', this)
                console.log('Qual a idade?', this.anos)

            },1000)
        }
    }
    const p1 = new pessoa()
    console.log(p1.anos)
})()