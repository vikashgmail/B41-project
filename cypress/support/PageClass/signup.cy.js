class SIGNUP{
    enterURL(){
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
    }
    signBew(){
        cy.get('[id="user"]').click();
        cy.get('[class="signup-name"]').type('jagdish');
        cy.get('[class="signup-username"]').type('vikas');
        cy.get('[class="signup-password"]').type('876543');
        cy.get('[class="signup-email"]').type('jagdish123@gmail.com');
        cy.get('[class="signup-number"]').type('9430359890');
        cy.get('[class="signup-btn"]').click();
    }
}
export default SIGNUP;