describe('Gerenciador de Tarefas - Testes E2E', () => {
 
    // Antes de CADA teste, abre a página inicial
    beforeEach(() => {
      cy.visit('/');
    });
   
    // =====================================================
    // CENÁRIO 1: Adicionar tarefa
    // =====================================================
    it('Deve adicionar uma nova tarefa com sucesso', () => {
      // Digita no campo
      cy.get('[data-cy="input-task"]').type('Aprender automação');
      // Clica no botão Adicionar
      cy.get('[data-cy="btn-add"]').click();
   
      // Confere o resultado na tela
      cy.get('[data-cy="task-list"]').should('contain', 'Aprender automação');
      cy.get('[data-cy="task-item"]').should('have.length', 1);
      cy.get('[data-cy="contador"]').should('contain', 'Pendentes: 1');
    });
   
    // =====================================================
    // CENÁRIO 2: Concluir tarefa (COMPLETE AS LACUNAS 7 A 9)
    // =====================================================
    it('Deve marcar uma tarefa como concluída', () => {
      cy.get('[data-cy="input-task"]').type('Fazer exercícios CI/CD');
      cy.get('[data-cy="btn-add"]').click();
   
      // LACUNA 7: localize o botão de concluir e clique
      cy.get('[data-cy="btn-complete"]').click();
   
      // LACUNA 8: a tarefa deve ter a classe CSS de concluída
      cy.get('[data-cy="task-item"]').should('have.class', 'completed');
   
      // LACUNA 9: o contador de pendentes deve cair para zero
      cy.get('[data-cy="contador"]').should('contain', 'Pendentes: 0');
    });
   
    // =====================================================
    // CENÁRIO 3: Remover tarefa (COMPLETE AS LACUNAS 10 A 14)
    // =====================================================
    it('Deve remover uma tarefa da lista', () => {
    // LACUNA 10
    cy.get('[data-cy="input-task"]').type('Configurar GitHub Actions');
    // LACUNA 11
    cy.get('[data-cy="btn-add"]').click();
    // LACUNA 12
    cy.get('[data-cy="task-item"]').should('have.length', 1);
    // LACUNA 13
    cy.get('[data-cy="btn-delete"]').click();
    // LACUNA 14
    cy.get('[data-cy="task-item"]').should('not.exist');
  });
   
    // =====================================================
    // CENÁRIO 4: DESAFIO FINAL (ESCREVAM VOCÊS - sem lacunas!)
    // =====================================================
    it('Não deve adicionar tarefa com menos de 3 caracteres', () => {
    cy.get('[data-cy="input-task"]').type('ab');
    cy.get('[data-cy="btn-add"]').click();
    cy.get('[data-cy="msg-erro"]').should('contain', 'no mínimo 3 caracteres');
    cy.get('[data-cy="task-item"]').should('not.exist');
  });
  });
   