/// <reference types="cypress" />                           
                                                            // for getting auto suggestion, we use cypress reference
describe("Crowlar Tasks" , () => {

    it("Visit the Site" , () => {
        cy.visit("https://demoqa.com/")
        cy.title().should('eq','DEMOQA')

        cy.get('.category-cards > :nth-child(2)').click()
        cy.get('.main-header').should('have.text','Forms')

        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()

        cy.get('#firstName').type("Cowlar")
        cy.get('#lastName').type('Developer')
        cy.get('#userEmail').type('qaengineer@cowlar.com')
    
        //whenever want to check the behavior of element, be means behavior. The assertion to put on Radio
        cy.get('#gender-radio-1').should('be.visible')    
        cy.get('#gender-radio-2').should('be.visible')
        cy.get('#gender-radio-3').should('be.visible')
        
        //selecting radio buttons
        cy.get('#gender-radio-1').check().should('be.checked') //also put assertion if its checked or not
        cy.get('#gender-radio-2').should('not.be.checked')
        cy.get('#gender-radio-3').should('not.be.checked')

        cy.get('#userNumber').type('0123456789')
        cy.get('.subjects-auto-complete__value-container').type('Computer Science{enter}')
    

        //checking visiblity of elements
        cy.get('#hobbies-checkbox-3').should('be.visible')

        //selecting check boxes
        cy.get('#hobbies-checkbox-3').check().should('be.checked')

        /*unselecting the checkbox
        cy.get('#hobbies-checkbox-3').uncheck().should('not.be.checked') 

        //checking all checkboxes
        cy.get('.custom-control-input[type="checkbox"]').check().should('be.checked')   //here I used the class and type attribute

        //select 1st and last checkbox
        cy.get('.custom-control-input[type="checkbox"]').first().check().should('be.checked')
        cy.get('.custom-control-input[type="checkbox"]').last().check().should('be.checked') */

        cy.get('#currentAddress').type('Address 1')

        cy.get('#state').click().type('NCR{enter}')
        cy.get('#city').click().type('Delhi{enter}')

        cy.get('#submit').click()

        cy.get('#example-modal-sizes-title-lg').should('have.text','Thanks for submitting the form')
        cy.wait(2000)
        cy.get('#closeLargeModal').click()

    })
})