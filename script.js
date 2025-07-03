// Script para lidar com o envio do formulário
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Previne o comportamento padrão de envio

  // Captura os valores do formulário
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simula o envio (substituir por integração real, como API ou backend)
  console.log('Nome:', name);
  console.log('Email:', email);
  console.log('Mensagem:', message);

  // Limpa o formulário
  document.getElementById('contact-form').reset();

  // Exibe uma mensagem de sucesso
  alert('Mensagem enviada com sucesso!');
});