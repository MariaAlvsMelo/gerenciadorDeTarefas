let tarefas = [];
 
const input = document.getElementById('task-input');
const btnAdd = document.getElementById('add-btn');
const lista = document.getElementById('task-list');
const msgErro = document.getElementById('mensagem-erro');
const contador = document.getElementById('contador');
 
btnAdd.addEventListener('click', adicionar);
 
function adicionar() {
  try {
    const nova = criarTarefa(input.value);
    tarefas.push(nova);
    input.value = '';
    msgErro.textContent = '';
    renderizar();
  } catch (erro) {
    msgErro.textContent = erro.message;
  }
}
 
function renderizar() {
  lista.innerHTML = '';
 
  tarefas.forEach((tarefa, indice) => {
    const li = document.createElement('li');
    li.className = tarefa.concluida ? 'task-item completed' : 'task-item';
    li.setAttribute('data-cy', 'task-item');
 
    const span = document.createElement('span');
    span.textContent = tarefa.texto;
 
    const btnConcluir = document.createElement('button');
    btnConcluir.textContent = 'Concluir';
    btnConcluir.setAttribute('data-cy', 'btn-complete');
    btnConcluir.onclick = () => {
      tarefas[indice] = alternarConclusao(tarefas[indice]);
      renderizar();
    };
 
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.setAttribute('data-cy', 'btn-delete');
    btnRemover.onclick = () => {
      tarefas = removerTarefa(tarefas, indice);
      renderizar();
    };
 
    li.append(span, btnConcluir, btnRemover);
    lista.appendChild(li);
  });
 
  contador.textContent = `Pendentes: ${contarPendentes(tarefas)}`;
}
 
renderizar();
 
 