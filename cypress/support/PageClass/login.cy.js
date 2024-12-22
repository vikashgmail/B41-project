class LOGIN{
    loginbew(){
        cy.get('[id="user"]').click()
        cy.get('[class="login-link"]').click()
        cy.get('[class="login-username"]').type('vikas')
        cy.get('[class="login-password"]').type('876543')
        cy.get('[class="login-btn"]').click()
        cy.on('window:alert', (alertText) => {
        
        
            expect(alertText).to.equal('Logged In');
          })
    }
}
export default LOGIN;