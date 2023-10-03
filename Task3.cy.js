/// <reference types="cypress" />



describe("Crowlar Task 3" , () => {

    it("Intercept API and Verify Response" , () => {

      
        
      cy.visit("https://demoqa.com")
      cy.title().should('eq','DEMOQA')
      

      cy.get('.category-cards > :nth-child(6)').click()
      cy.get('.main-header').should('have.text','Book Store')    

      cy.intercept('/BookStore/v1/Book?ISBN=9781593277574').as('bookApi')
          
      cy.contains('Understanding ECMAScript 6').scrollIntoView()
      cy.get('#see-book-Understanding\\ ECMAScript\\ 6 > a').click()

      cy.wait('@bookApi').then(intercept => {    
      cy.log(JSON.stringify(intercept))
         
        })
      })
    })

    
    
    