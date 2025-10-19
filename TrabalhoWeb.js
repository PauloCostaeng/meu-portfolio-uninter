
// Acessa o formulário principal usando o ID 'formulario-contato' definido no HTML.
const form= document.getElementById('formulario-contato');

// Adiciona um "ouvinte" ao formulário. A função 'validarFormulario' será chamada quando o botão 'submit' quando for clicado.
form.addEventListener('submit', function(event){
    //event.preventDefault() é o "freio de mão".
    // Impede que a página recarregue ao clicar em enviar, permitindo que o JavaScript valide.
    event.preventDefault();
    validarFormulario();
})

function validarFormulario() {
    // Obtém e limpa (trim) os valores dos campos para garantir que não haja espaços em branco indesejados
    const emailvalor= document.getElementById("email").value.trim();
    
    const nomevalor=  document.getElementById("nome").value.trim();

    const mensagemvalor= document.getElementById("mensagem").value.trim();

    // Começa presumindo que o formulário é válido.
    let formvalido= true
    
    // VERIFICAÇÃO 1: (Verifica se algum campo está vazio) 
    if (nomevalor === ''|| emailvalor === '' || mensagemvalor === '') {
        alert('Por favor, preencha  todos os campos')
        formvalido= false} // Se falhar, é alterada para FALSE.
        
    // VERIFICAÇÃO 2: Formato de E-mail 
    // Só checa o formato se o preenchimento inicial já estiver OK (formvalido é TRUE)    
    if (formvalido && (!emailvalor.includes('@')  || !emailvalor.includes('.'))) {
        alert('Por favor, insira um endereço de email válido,(ex: seunome@gmail.com')
        formvalido= false} // Se falhar, é alterada para FALSE.
        
        //FINAL: Simulação de Envio
        if (formvalido === true){
        // SUCESSO: Só executa se for TRUE (nenhum erro encontrado).
            alert('Mensagem enviada com sucesso!')
        {form.reset();} // Limpa o formulário após o envio bem-sucedido.
    }   // OBS: Não precisamos de um 'else' aqui, pois se formvalido for FALSE, a função simplesmente termina após mostrar o alert de erro.
}
