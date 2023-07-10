const form = document.getElementById('form-agenda');

const nome_pessoas = [];
let linhas_tabela = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualisaTabela();
    contaRegistroContato ()
    
}) 

function adicionaLinha(){
    
    const inputNomePessoas = document.getElementById('nome-pessoa')
    const inputTelefone = document.getElementById('numero-telefone')
    

    if (nome_pessoas.includes(inputNomePessoas.value)){
        /*Meu vscode não funciona com $ - ${inputNomePessoas.value}*/
        alert(inputNomePessoas.value + ' ja se encontra na agenda' )
    } else {
    
    /* push - inseri itens no array*/
    nome_pessoas.push(inputNomePessoas.value);
  

    let linha = '<tr>';
    linha += '<td>' + inputNomePessoas.value + '</td>';
    linha += '<td>' + inputTelefone.value + '</td>';
    linha += '</tr>'

    linhas_tabela += linha;

    inputNomePessoas.value = '';
    inputTelefone.value = '';
    }
}

function atualisaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas_tabela;
}

function contaRegistroContato (){
    document.getElementById('total-contatos').innerHTML = 
   '<span id="conta-contatos">' + nome_pessoas.length + '</span>';
      
}


