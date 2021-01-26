context('NavBar', () => {
    describe('Content and functionalities of the NavBar', () => {
        before(() => {
            cy.visit('http://localhost:3000');
        })
        it ('Should locate and click on developer icon', () => {
            cy.get('#navBarBrandingLink').click()
        })
        it ('Should redirect back to home', () => {
            cy.location('pathname').should('eq', '/')
        })
        it ('Should locate and click on the home link', () => {
            cy.get('#linkToHeader').click()
        })
        it ('Should redirect to the home section', () => {
            cy.location('pathname').should('eq', '/')
        })
        it ('Should locate and click on the about me link', () => {
            cy.get('#linkToFirstSection').click()
        })
        it ('Should redirect to the about me section', () => {
            cy.location('pathname').should('eq', '/')
        })
        it ('Should locate and click on the projects link', () => {
            cy.get('#linkToSecondSection').click()
        })
        it ('Should redirect to the projects section', () => {
            cy.location('pathname').should('eq', '/')
        })
        it ('Should locate and click on the let\'s talk link', () => {
            cy.get('#linkToThirdSection').click()
        })
        it ('Should redirect to the let\'s talk section', () => {
            cy.location('pathname').should('eq', '/')
        })
        it ('Should locate and validate the redirect to GitHub', () => {
            cy.get('#navBarLinkToGitHub').should('have.attr', 'href')
                .then((href) => {
                    expect(href).to.be.eq('https://github.com/BuenClima')
                })
        })
        it ('Should locate and validate the redirect to LinkedIn', () => {
            cy.get('#navBarLinkToLinkedIn').should('have.attr', 'href')
                .then((href) => {
                    expect(href).to.be.eq('https://www.linkedin.com/in/diego-mart%C3%ADn-hern%C3%A1ndez-a41229170/')
                        })
        })
    });
});