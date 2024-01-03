const form = document.getElementById('formTarefa');
const novaTarefa = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

        adicionarTarefa();
        attTabela();
})

function adicionarTarefa(){
    const inputnomeDaTarefa = document.getElementById('nomeDaTarefa');

    if(novaTarefa.includes(inputnomeDaTarefa.value)){
        alert(`a tarefa ${inputnomeDaTarefa.value} já existe!`);
    }else {
        novaTarefa.push(inputnomeDaTarefa.value);

        let linha = `<ul>`;
        linha += `<li> ${InputTarefa.value}`;
        linha += `</ul>`;
    }

    inputnomeDaTarefa.value = '';
}

function attTabela() {
    const tabela = document.querySelector('ul');
    tabela.innerHTML = linhas;
}