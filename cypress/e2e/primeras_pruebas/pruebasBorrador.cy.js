/// <reference types="Cypress"/>
require('cypress-plugin-tab')
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe ("HOLA. BIENVENIVO A ESTE MUNDO", () => {
    it ("primer prueba", () => {
      cy.log("Hola Mundo")
    })

    it ("segunda parte", () => {
      cy.visit("https://demoqa.com/text-box")
      cy.wait (1500)
      cy.get("#userName").type("Agustina")
      cy.get("#userEmail").type("agustina@gmail.com")
      cy.get("#currentAddress").type("Montevideo 559")
      cy.get("#permanentAddress").type("Montevideo 559")
      cy.get("#submit.btn").click()
    })
})

describe ("VALIDANDO EL TITULO", () => {
  it ("VALIDAR TITULO DE LA PAGINA", () => {
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq', 'DEMOQA')
    
  })
})

describe("Opciones de Click  ", () =>{

  it("Click", () =>{
      cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
      cy.title().should('eq','OrangeHRM')
      cy.wait(1000)

      cy.get("#btnLogin").should("be.visible").click()
      cy.get("#menu_admin_viewAdminModule > :nth-child(1) > .left-menu-title").should("be.visible").click()
      cy.get("#menu_admin_Job > .collapsible-header > .left-menu-title").should("be.visible").click()
  })

  it("Click Force true ", () =>{
      cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
      cy.title().should('eq','OrangeHRM')
      cy.wait(1000)

      cy.get("#btnLogin").should("be.visible").click()
      cy.get("#menu_admin_viewAdminModule > :nth-child(1) > .left-menu-title").should("be.visible").click()
      cy.get("#menu_admin_Job > .collapsible-header > .left-menu-title").should("be.visible").click({force: true})
  })
  it("Click por coordenadas ", () =>{
      cy.visit("https://orangehrm-demo-6x.orangehrmlive.com/auth/login") 
      cy.title().should('eq','OrangeHRM')
      cy.wait(1000)

      cy.get("#btnLogin").should("be.visible").click()
      cy.wait(1500)
      cy.get(".page-title").should("be.visible").click(50,5)
      cy.get(".page-title").should("be.visible").click(90,5)
      
  })

})