class PLACEORDER{
    address(){
        //cy.xpath('(//a[@id="mar"])[3]').click()
        cy.xpath('(//button[@class="add-address"])[1]').click()
        cy.get('[placeholder="Full Name"]').type('vikas')
        cy.get('[placeholder="Mobile Number"]').type('9430555339')
        cy.get('[placeholder="Pincode/Postal Code/Zipcode"]').type('843316')
        cy.get('[placeholder="City"]').type('Ranchi')
        cy.get('[placeholder="State"]').type('Jharkhand')
        cy.get('[placeholder="Flat no/Building, Street Name"]').type('67/4')
        cy.get('[placeholder="Area/Localtity"]').type('township')
        cy.get('[placeholder="Landmark(optional)"]').type('near gurudwara')
        cy.get('[class="place-order"]').click()
       
    }

}
export default PLACEORDER;