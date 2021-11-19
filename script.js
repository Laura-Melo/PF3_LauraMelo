const calcular = document.getElementById('calcular');


function financiamento() {

  const nome = document.getElementById('nome').value
  const valor = document.getElementById('valor').value
  const tempo = document.getElementById('data').value
  const resultado = document.getElementById('resultado');

  let juros = document.getElementById('juros').value / 100; // transformar em decimal 


if(nome !== '' && valor !== '' && juros !== '' && tempo !== ''){

  let valorInvestimento = (valor * ((((1 + juros) ** tempo) - 1) / juros)).toFixed(2)

  resultado.textContent = `Olá ${nome}, se você aplicar R$ ${valor}, à taxa de juros de ${juros * 100}% ao mês, durante ${tempo} meses, acumulará uma poupança de R$ ${valorInvestimento}!`;

}else{
  alert('Preencha todos os campos, por gentileza!')
}
}calcular.addEventListener("click", financiamento)