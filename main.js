document.getElementById('formulario').addEventListener("submit", function(event) {
    event.preventDefault(); //remover comportamento do formulario de recarregar a tela açao padra do formulario

    const valorA = parseFloat(document.getElementById("campoA").value);
    const valorB = parseFloat(document.getElementById("campoB").value);
    const resultadoAB = document.getElementById("resultado");

    if (valorA > valorB) {
        resultadoAB.textContent = `Formulario valido! Numero, ${valorB} é maior que numero, ${valorA}`;
    } else {
        resultadoAB.textContent = `Formulario invalido! Numero, ${valorB} deve ser maior que numero, ${valorA}`;
    }
});