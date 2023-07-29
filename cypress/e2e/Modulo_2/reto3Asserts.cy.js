/// <reference types="Cypress" />
require('cypress-xpath')
describe("RETO 3", () =>{
   
    it.only("RETO 3 - ASSERTS", () =>{
        let tiempo=1600

        cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html") 
        cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
        cy.wait(tiempo)

        //Eliminando ventana
        cy.get(".at-cm-no-button").should("be.visible").click({force:true})

        let a=40
        let b=35

        cy.get("#sum1").should("be.visible").and("have.class","form-control").type(a)
        cy.wait(tiempo)
        cy.get("#sum2").should("be.visible").and("have.class","form-control").type(b)
        cy.wait(tiempo)

        cy.contains("[type='button']","Get Total").click()

        cy.get("#displayvalue").should("be.visible").then((e)=>{
            let r=a+b
            cy.log("el valor de r: "+ r)
            cy.log(e.text())
            let res=e.text()

            if(r==res){
                cy.log("Son iguales")
            }else{
                cy.log("el resultado es incorrecto")
            }

            if(res > 50)
            {
                a=a-10   
                b=b-10
                cy.get("#sum1").invoke("attr", "placeholder").should("contain","Enter value").then(()=>{
                    cy.get("#sum1").clear().type(a)
                    cy.wait(tiempo)
                    cy.get("#sum1").invoke("attr", "style","color:blue")
                })
                cy.wait(tiempo)
                cy.get("#sum2").should("be.visible").and("have.class","form-control").clear().type(b)  
                cy.wait(tiempo) 
                cy.get("#sum2").invoke("attr", "style","color:blue")  
                cy.wait(tiempo)
                cy.contains("[type='button']","Get Total").click()

                cy.get("#displayvalue").should("be.visible").then((e)=>{
                    cy.get("#displayvalue").invoke("attr","style","color:red")
                })



            }else{
                a=a+5 
                b=b+5
                cy.get("#sum1").should("be.visible").and("have.class","form-control").clear().type(a)
                cy.wait(tiempo)
                cy.get("#sum2").should("be.visible").and("have.class","form-control").clear().type(b)       
                cy.wait(tiempo)
                cy.contains("[type='button']","Get Total").click()
            }

        })
    
    })
})