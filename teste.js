async function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    const data = {nome,email,password};
    console.log(data);
    
    const response = await fetch('http://localhost:3000/usuario/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const results = await response.json();
    console.log('result', results);
    console.log('response', response);
    

    if(results.success) {
        alert(results.message)
    } else {
        alert(alert.message)
    }
}