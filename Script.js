document.getElementById('numeroForm').addEventListener('submit', function(event)
{
event.preventDefault(); // Impede o envio do formulário
// Obtém o valor do número digitado
const numero = parseFloat(document.getElementById('numero').value);
// Chama a função para calcular o quadrado
const resultado = calcularQuadrado(numero);
// Exibe o resultado na página
console.log('O quadrado de', numero, 'é', resultado);
document.getElementById('resultadoQuadrado').textContent = resultado;
// Chama a função para calcular o cubo
const resultadoCubo = calcularCubo(numero);
// Exibe o resultado na página
console.log('O cubo de', numero, 'é', resultadoCubo);
document.getElementById('resultadoCubo').textContent = resultadoCubo;
});
function calcularQuadrado(numero) {
return numero * numero;
}
function calcularCubo(numero) {
return numero * numero * numero;
}



