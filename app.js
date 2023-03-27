function Gerar(){
    var numt = document.querySelector('input#num')
    var num = Number(numt.value)
    var res = document.querySelector('div#res')
    var c = 0

    while(c <= 10){
       res.innerHTML += `${num} x ${c} = ${num * c}<br>`
        c ++
    }
}

function Resetar(){
    var res = document.querySelector('div#res')
    res.innerHTML = ''
}
