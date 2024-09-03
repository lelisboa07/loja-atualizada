async function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const descricao = document.getElementById('descricao').value;

    const data = {nome,valor,descricao};
    
    const response = await fetch('http://localhost:3000/produto/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const results = await response.json();
    

    if(results.success) {
        alert(results.message)
    } else {
        alert(alert.message)
    }
}


// Modal

let elemento = document.querySelectorAll("#final")
let modal = document.querySelectorAll(".modal")
let fechar = document.querySelectorAll("#fechar-modal")

elemento[0].addEventListener('click', (e) =>{
    modal[0].style.visibility = 'visible'
})

fechar[0].addEventListener('click', (e) =>{
    modal[0].style.visibility = 'hidden'
})