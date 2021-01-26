context('Footer', () => {
    describe('Content and functionalities of the footer section', () => {
        before(() => {
            cy.visit('http://localhost:3000');
        })
        it('Should locate the footer text and check it', () => {
            cy.get('#footerIconsMessage').contains(
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.')
        })
        it('Should locate the footer GitHub icon ', () => {
            cy.get('#footerLinkToGitHub').should('have.attr', 'href')
                .then((href) => {
                    expect(href).to.be.eq('https://github.com/BuenClima')
                })
        })
        it('Should locate the footer LinkedIn icon ', () => {
            cy.get('#footerLinkToLinkedIn').should('have.attr', 'href')
                .then((href) => {
                    expect(href).to.be.eq('https://www.linkedin.com/in/diego-mart%C3%ADn-hern%C3%A1ndez-a41229170/')
                })
        })
        it('Should locate the footer FaceBook icon ', () => {
            cy.get('#footerLinkToFacebook').should('have.attr', 'href')
                .then((href) => {
                    expect(href).to.be.eq('https://www.facebook.com/diego.buenclima')
                })
        })
    })
});