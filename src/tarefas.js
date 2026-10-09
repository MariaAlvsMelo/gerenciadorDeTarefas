function validarTarefa(texto) {

    if (!texto || texto.trim().length === 0) {
    
    throw new Error('A tarefa não pode estar vazia');
    
    }
    
    if (texto.trim().length < 3) {
    
    throw new Error('A tarefa deve ter no mínimo 3 caracteres');
    
    }
    
    return true;
    
    }
    
    function criarTarefa(texto) {
    
    validarTarefa(texto);
    
    return { texto: texto.trim(), concluida: false };
    
    }
    
    function alternarConclusao(tarefa) {
    
    return { ...tarefa, concluida: !tarefa.concluida };
    
    }
    
    function removerTarefa(tarefas, indice) {
    
    return tarefas.filter((_, i) => i !== indice);
    
    }
    
    function contarPendentes(tarefas) {
    
    return tarefas.filter((tarefa) => !tarefa.concluida).length;
    
    }
    
    // Permite usar este arquivo no Node (Jest) e no navegador (index.html)
    
    if (typeof module !== 'undefined') {
    
    module.exports = {
    
    validarTarefa,
    
    criarTarefa,
    
    alternarConclusao,
    
    removerTarefa,
    
    contarPendentes,
    
    };
    
    }
    
     