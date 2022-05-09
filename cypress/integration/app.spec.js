describe("App", () => {
    beforeEach(()=>{
        cy.visit(`/`)
        // let statusCode = 200;
        // cy.intercept('POST', `/api`, (req) => {
        //     req.reply({
        //         statusCode
        //     });
        // }).as(`api`);
    });
    it("Should find the button", () => {
        cy.get('button').should('exist').and('contain', 'test');
    })
    it("Should type in the input", () => {
        cy.get('input').type('Hello world').should('have.value', 'Hello world')
    })
    it("Should click the button", () => {
        cy.get('input').type('Hello world')
        cy.get('p').should('not.be.visible')
        cy.get('button').contains('test').click()
        cy.get('p').should('be.visible').and('contain', 'Hello world')
    })
})