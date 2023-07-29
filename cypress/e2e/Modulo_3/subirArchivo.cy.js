<reference types="Cypress" />

require('cypress-xpath')
import 'cypress-file-upload'

describe("Subir Imagen", () =>{

    it("Cargando imagenes", () =>{
        cy.visit("https://demoqa.com/automation-practice-form") 
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)

        const ruta='img1.jpg'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)

    })


})