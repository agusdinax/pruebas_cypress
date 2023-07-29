/// <reference types="Cypress"/>
require('cypress-plugin-tab')
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe ("RETO NUMERO 1 ", () => {

    it(" ", () =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq',"DEMOQA") 
        cy.wait(1000)

        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        //SUMANDO DATOS EN LOS CAMPOS
        cy.get("#addNewRecordButton").should("be.visible").click()
        cy.wait(1000)
        cy.get("#firstName").should("be.visible").type("Agustina").tab().
        type("DiNA").tab().
        type("agusdina@gmail.com").tab().type("35").tab().type("30000").tab().type("QA")
        cy.get("#submit").should("be.visible").click()

        cy.get("#searchBox").should("be.visible").type("Agustina")
        cy.wait(1000)
        cy.get("#searchBox").should("be.visible").clear()

        //EDITAR CAMPO
        cy.get("#edit-record-2").should("be.visible").click()
        cy.wait(1000)
        cy.get("#age").should("be.visible").clear().type("26")
        cy.wait(1500)
        cy.get("#salary").should("be.visible").clear().type("1000")
        cy.get("#submit").should("be.visible").click()

        //BORRAR CAMPO
        cy.wait(2000)
        cy.get("#delete-record-2").should("be.visible").click()
    })
})