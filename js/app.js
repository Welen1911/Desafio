const calcular = () => {

    let num = document.getElementById('num').value;
    let lista = [];
    let total = 0;

    for (let i = (num - 1); i > 0; i--) {
        if (i % 3 === 0 || i % 5 === 0) {
            lista.push(i);
            total += i;
        }
    }
    
    let resultado = document.createElement('div');
    resultado.style = 'margin-top: 15px;';
    resultado.innerText = "Os números divisiveis por 3 ou 5 até "+ num + " são: "+ lista + "\nA soma de todos os números foi " + total;

    document.body.appendChild(resultado);
}
