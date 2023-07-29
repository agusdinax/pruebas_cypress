/// <reference types="Cypress" />

require('cypress-xpath')
require('cypress-plugin-tab')

describe("RETO NUMERO 2", () =>{

    it("Navegando la aplicación", () =>{
        cy.visit("http://computer-database.gatling.io/computers") 
        cy.title().should('eq','Computers database')
        cy.wait(1500)

        //BUSCAR
        cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.wait(1500)

        //AÑADIR
        cy.get("#add").should("be.visible").click()
        cy.get("[name='name']").should("be.visible").type("cypress") 
        cy.wait(1500)
        cy.get("#introduced").should("be.visible").type("2023-02-19").tab().type("2025-03-15")
        //COMBO
        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16").wait(1500)
        cy.get(".primary").should("be.visible").click()
        cy.wait(1500)
        cy.xpath("//input[contains(@id,'searchbox')]").type("cypress")
        cy.get("#searchsubmit").should("be.visible").click()
    })

})