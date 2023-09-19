/// <reference types="cypress" />

describe("Crowlar Tasks 2" , () => {

    it("Visit the Site" , () => {
        cy.visit("https://demoqa.com/")
        cy.title().should('eq','DEMOQA')

        cy.get('.category-cards > :nth-child(5)').click()
        cy.get('.main-header').should('have.text','Interactions')

        
        cy.get(':nth-child(5) > .element-list > .menu-list > #item-2').click()
        cy.contains('Resizable box').scrollIntoView()                           // check the visibility of the box

        cy.wait(2000)
        cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
        .trigger("mousedown", {which: 1})
        .trigger("mousemove", -150,-150, {force: true})
        .trigger('mouseup', { force: true })
         
        cy.wait(2000)
        cy.get('#resizableBoxWithRestriction > .react-resizable-handle')
        .trigger("mousedown", {which: 1})
        .trigger("mousemove", 500,300, {force: true})
        .trigger('mouseup', { force: true })

        cy.wait(2000)
        cy.get('#resizable > .react-resizable-handle')
        .trigger("mousedown", {which: 1})
        .trigger("mousemove", 700,700, {force: true})
        .trigger('mouseup', { force: true })
    })
})