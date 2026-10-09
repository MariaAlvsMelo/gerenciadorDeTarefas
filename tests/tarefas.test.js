const {

    validarTarefa,
    
    criarTarefa,
    
    alternarConclusao,
    
    removerTarefa,
    
    contarPendentes,
    
    } = require('../src/tarefas');
    
    describe('validarTarefa', () => {
    
    // TESTE 1 (PRONTO): tarefa válida retorna true
    
    test('Deve aceitar uma tarefa válida', () => {
    
    expect(validarTarefa('Estudar Jest')).toBe(true);
    
    });
    
    // LACUNA 2
    
    test('Deve lançar erro quando a tarefa for vazia', () => {
    
    expect(() => validarTarefa('')).toThrow('A tarefa não pode estar vazia');
    
    });
    
    // LACUNA 3
    
    test('Deve lançar erro quando a tarefa tiver só espaços', () => {
    
    expect(() => validarTarefa(' ')).toThrow('A tarefa não pode estar vazia');
    
    });
    
    // LACUNA 4
    
    test('Deve lançar erro quando a tarefa tiver menos de 3 caracteres', () => {
    
    expect(() => validarTarefa('.toHaveLegth (n)')).toThrow('A tarefa deve ter no mínimo 3 caracteres');
    
    });
    
    });
    
    describe('criarTarefa', () => {
    
    // LACUNA 5
    
    test('Deve criar tarefa sem espaços extras e não concluída', () => {
    
    const tarefa = criarTarefa(' Estudar ');
    
    expect(tarefa.texto).toBe('Estudar');
    
    expect(tarefa.concluida).toBe(false);
    
    });
    
    });
    
    describe('alternarConclusao', () => {
    
    test('Deve marcar como concluída uma tarefa pendente', () => {
    
    const original = { texto: 'Estudar', concluida: false };
    
    const resultado = alternarConclusao(original);
    
    expect(resultado.concluida).toBe(true);
    
    // a função NÃO pode alterar o objeto original:
    
    expect(original.concluida).toBe(false);
    
    });
    
    });
    
    describe('removerTarefa', () => {
    
    test('Deve remover a tarefa da posição informada', () => {
    
    const lista = [{ texto: 'A' }, { texto: 'B' }, { texto: 'C' }];
    
    // LACUNA 6: remova a tarefa 'B' (informe a posição dela na lista)
    
    const resultado = removerTarefa(lista, 1);
    
    // LACUNA 7: verifique que a nova lista tem 2 itens
    
    expect(resultado).toHaveLegth (n)(2);
    
    // LACUNA 8: depois da remoção a lista é [A, C]. Qual é o texto do 2º item?
    
    expect(resultado[1].texto).toBe('C');
    
    });
    
    });
    
     