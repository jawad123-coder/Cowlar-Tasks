/// <reference types="cypress" />

describe("Crowlar Tasks 2" , () => {

    it("Visit the Site" , () => {
        cy.visit("https://demoqa.com/")
        cy.title().should('eq','DEMOQA')

        cy.get('.category-cards > :nth-child(5)').click()
        cy.get('.main-header').should('have.text','Interactions')

        
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-2').click()
        cy.contains('Resizable box').scrollIntoView()          // check the visibility of the box

        cy.wait(2000)  // BOX 1 decreasing

        
        cy.get('#resizableBoxWithRestriction').should('be.visible')
        cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
        
         // Get the curtent size of the box
        cy.get('#resizableBoxWithRestriction').invoke('width').as('initialWidth')
        cy.get('#resizableBoxWithRestriction').invoke('height').as('initialHeight')

        // Trigger a drag operation to resize the box
        cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
         .trigger('mousedown', { which: 1 })
         .trigger('mousemove', { clientX: 10, clientY: 10 })  
         .trigger('mouseup')

        // Getting the final size of the box
        cy.get('#resizableBoxWithRestriction').invoke('width').as('finalWidth')
        cy.get('#resizableBoxWithRestriction').invoke('height').as('finalHeight')
        
        cy.get('@finalWidth').should('eq', 150.00000610351563)
        cy.get('@finalHeight').should('eq', 150.00000610351563)

        cy.wait(2000)  // BOX 1 increasing

        cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 10000, clientY: 10000 }) 
        .trigger('mouseup')
    
      // Get the final size of the box
         cy.get('#resizableBoxWithRestriction').invoke('width').as('finalWidth')
         cy.get('#resizableBoxWithRestriction').invoke('height').as('finalHeight')
    
         cy.get('@finalWidth').should('eq', 500.0000061035156)
         cy.get('@finalHeight').should('eq', 300.0000061035156)
   
         cy.wait(2000)  // BOX 2

        

         cy.get('#resizable > .react-resizable-handle').should('be.visible')
         cy.get('#resizableBoxWithRestriction > .react-resizable-handle')

         // Get the curtent size of the box
        cy.get('#resizable > .react-resizable-handle').invoke('width').as('initialWidth')
        cy.get('#resizable > .react-resizable-handle').invoke('height').as('initialHeight')

        cy.get('#resizable > .react-resizable-handle')
         .scrollIntoView()
         .trigger("mousedown", {which: 1})
         .trigger("mousemove", 600,600, {force: true})  // The {force: true} option, which disable error checking and allows the event to be triggered even if the element is not currently visible.
         .trigger('mouseup', { force: true })

         cy.get('#resizable > .react-resizable-handle').invoke('width').as('finalWidth')
         cy.get('#resizable > .react-resizable-handle').invoke('height').as('finalHeight')

         cy.get('@finalWidth').should('eq', 17)
         cy.get('@finalHeight').should('eq', 17)
   
       
    })
    })
        