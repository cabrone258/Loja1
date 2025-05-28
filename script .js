// Função para adicionar produto ao carrinho
function comprar(nomeProduto) {
  // Tenta obter o carrinho existente no localStorage ou cria um novo array
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Adiciona o novo produto ao carrinho
  carrinho.push(nomeProduto);

  // Salva novamente no localStorage
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  // Mostra alerta confirmando
  alert(`${nomeProduto} adicionado ao carrinho!`);
}