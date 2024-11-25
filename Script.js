document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const formaPagamento = document.getElementById('forma-pagamento').value;

    // Exibe os dados cadastrados no site
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <h3>Dados Cadastrados:</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Forma de Pagamento:</strong> ${formaPagamento}</p>
    `;

    // Limpa o formulário após o cadastro
    document.getElementById('payment-form').reset();
});
