/// <reference types="cypress" />


describe('example to-do app', () => {
    beforeEach(() => {
     
      cy.visit('http://localhost:3000/')
    })
  
    it('displays continents data by default', () => {
   
      cy.get('.slide-show-container').should('have.length', 1)
      cy.get('button').get('.next').click()
      cy.get('button').get('.prev').click()
      cy.get('.inner-form-container').get('.countries').click()
      cy.get('[name="rfs-q"]').type("Rwanda")
      cy.get('#rfs-RW').contains('Rwanda').click();
      cy.get('button[type="submit"]').click({ force: true })
    })
  
  })
  