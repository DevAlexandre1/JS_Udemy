(() =>{
    function pessoa(){
        const that = this
        that.anos =0
    
        if(that.anos < 10){
            setInterval(function(){
                that.anos = that.anos +1
                console.log('Qual this?', that)
                console.log('Qual a idade?', that.anos)

            },1000)
        }
    }
    const p1 = new pessoa()
    console.log(p1.anos)
})()