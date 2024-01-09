    const form = document.getElementById('formTarefa');
    let tarefas = [];

    form.addEventListener('submit', function(e){
        e.preventDefault();
        adicionarTarefa();
    })

    function adicionarTarefa() {
        let inputnomeDaTarefa = $('#nomeDaTarefa');

        if (tarefas.includes(inputnomeDaTarefa.val())) {
            alert(`a tarefa ${inputnomeDaTarefa.val()} já existe!`);
        } else {
            
            tarefas.push(inputnomeDaTarefa.val());

            let linha = `<li>${inputnomeDaTarefa.val()}</li>`;
            
            $('#lista-tarefas').append(linha);
        }

        inputnomeDaTarefa.val('');
    }

    $('#lista-tarefas').click(
    );