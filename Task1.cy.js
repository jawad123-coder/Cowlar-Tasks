/// <reference types="cypress" />                           
                                                            // for getting auto suggestion, we use cypress reference
describe("Crowlar Tasks" , () => {

    it("Visit the Site" , () => {
        cy.visit("https://demoqa.com/")
        cy.title().should('eq','DEMOQA')

        cy.get('.category-cards > :nth-child(2)').click()
        cy.get('.main-header').should('have.text','Forms')

        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()

        //Check Assertions and putting values
        cy.get('#firstName').should('be.visible').type("Cowlar")
        cy.get('#lastName').should('be.visible').type('Developer')
        cy.get('#userEmail').should('be.visible').type('qaengineer@cowlar.com')
    
        //The assertion to put on Radio
        cy.get('#gender-radio-1').should('be.visible')    
        cy.get('#gender-radio-2').should('be.visible')
        cy.get('#gender-radio-3').should('be.visible')
        
        //selecting radio buttons
        cy.get('#gender-radio-1').check().should('be.checked') //also put assertion if its checked or not
        cy.get('#gender-radio-2').should('not.be.checked')
        cy.get('#gender-radio-3').should('not.be.checked')

        //Check Assertions and putting values
        cy.get('#userNumber').should('be.visible').type('0123456789')
        cy.get('.subjects-auto-complete__value-container').should('be.visible').type('Computer Science{enter}')
    

        //Assertions for checkbox visiblity of checkbox
        cy.get('#hobbies-checkbox-3').should('be.visible')

        //selecting check boxes
        cy.get('#hobbies-checkbox-3').check().should('be.checked')

        cy.get('#currentAddress').should('be.visible').type('Address 1')

        cy.get('#state').click().should('be.visible').type('NCR{enter}')
        cy.get('#city').click().should('be.visible').type('Delhi{enter}')

        cy.get('#submit').should('be.visible').click()

        //Assertion for success message
        cy.get('#example-modal-sizes-title-lg').should('have.text','Thanks for submitting the form')
        cy.wait(2000)
        cy.get('#closeLargeModal').click()

    })
})