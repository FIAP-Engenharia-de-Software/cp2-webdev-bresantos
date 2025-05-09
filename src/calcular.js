// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {

  if(num1 || num2 === NaN){
    return("Erro: parâmetros inválidos")
  }else if(num1 / 0 || b / 0){
    return("Erro: divisão por zero")
  }else if(num1 || num2 === null){
    return("Erro: operação inválida")
  }else{
    return("deu certo")
  }

}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };