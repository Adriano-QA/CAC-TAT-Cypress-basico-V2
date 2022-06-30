Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Adriano')
    cy.get('#lastName').type('Aluizi')
    cy.get('#email').type('adriano@email.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
}  )