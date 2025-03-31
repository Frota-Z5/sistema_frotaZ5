// script.js
document.getElementById(login).addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os dados do formulário
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    // Validar os campos
    if (<cpf === '' || senha === '') {
        alert('Todos os campos são obrigatórios!');
        return;
    }

//     // Exibir uma mensagem de sucesso
//     const responseDiv = document.getElementById('response');
//     responseDiv.innerHTML = `<p>Obrigado, ${cpf}! Sua mensagem foi enviada com sucesso.</p>`;

//     // Limpar os campos do formulário
//     document.getElementById('login').reset();
// });