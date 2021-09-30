//begin

let produtos = [
    {
        "Nome Do Produto":"Play1",
        "Valor Do Produto":500,
        "Qualidade Do Produto":2,
        "Status":true
    },
    {
        "Nome Do Produto":"Play2",
        "Valor Do Produto":800,
        "Qualidade Do Produto":3,
        "Status":false
    },
    {
        "Nome Do Produto":"Play3",
        "Valor Do Produto":900,
        "Qualidade Do Produto":2,
        "Status":true
    },
    {
        "Nome Do Produto":"Play4",
        "Valor Do Produto":1500,
        "Qualidade Do Produto":4,
        "Status":true
    },
]


function filtrar(arr){
    resp = arr.filter(
        elem => (
            ((elem["Valor Do Produto"] >= 482) && (elem["Valor Do Produto"] <= 1600))
            &&  (elem["Qualidade Do Produto"] > 5)
            &&  (elem["Status"] === true)
        )
    )

    return resp
}


let carrinho = filtrar(produtos)
let total = carrinho.reduce((previous, current) => previous["Valor Do Produto"] + current["Valor Do Produto"])




console.table(carrinho)
console.log("TOTAL: "+total)



function exibir(arr, value){    
    arr.forEach(product => console.log(`
        Produto: ${product["Nome Do Produto"]} Preço: ${product["Valor Do Produto"]}
    `))
    console.log(`        Total: ${total}`)
}



console.log