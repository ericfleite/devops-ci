describe('Página Inicial', () => {
  it('Deve carregar corretamente a página', () => {
    cy.visit('https://domeneghetti-devops-ci.azurewebsites.net/index.html') /* alterar somente a url*/
    cy.contains('Faculdade Tech')
  });

  it('Deve navegar até a página de Cursos', () => {
    cy.visit('https://domeneghetti-devops-ci.azurewebsites.net/index.html') /* alterar somente a url*/
    cy.get('nav a').contains('Cursos').click();
    cy.url().should('include', 'cursos.html');
  });
})