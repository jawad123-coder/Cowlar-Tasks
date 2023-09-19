/// <reference types="cypress" />

describe("Crowlar Task 3" , () => {

    it("Visit the Site" , () => {
        cy.visit("https://demoqa.com/")
        cy.title().should('eq','DEMOQA')

        cy.get('.category-cards > :nth-child(6)').click()
        cy.get('.main-header').should('have.text','Book Store')
        
        
        cy.get('#see-book-Understanding\\ ECMAScript\\ 6 > a').click()
        cy.contains('Understanding ECMAScript 6').scrollIntoView()
        cy.get('#userName-value').should('have.text','9781593277574')

    })

    //Verify the Response of the respective API
    
    it("Verify API Response", () => {
    
        cy.request({
          method: 'GET',
          url: 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574',
        }).then((response) => {
          expect(response.status).to.equal(200); // Veriy the status code of the Response
    
          expect(response.body).to.deep.equal({   //Verify the following response body
    
            isbn: "9781593277574",
            title: "Understanding ECMAScript 6",
            subTitle: "The Definitive Guide for JavaScript Developers",
            author: "Nicholas C. Zakas",
            publish_date: "2016-09-03T00:00:00.000Z",
            publisher: "No Starch Press",
            pages: 352,
            description: "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
            website: "https://leanpub.com/understandinges6/read"
    
          });
        });
      });
})

    
    
    