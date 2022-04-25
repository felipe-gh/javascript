function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        } else {
        res.innerHTML = '<strong>Contando:<br> </strong>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{27A1} `
            }
        } else {
            // CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{27A1}` 
            }            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
