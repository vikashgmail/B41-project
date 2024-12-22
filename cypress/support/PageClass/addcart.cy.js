class ADDTOCART{
    addProduct(){
        cy.xpath('//span[text()="MEN"]').click()
        cy.xpath('(//p[@class="title"])[1]').click()
        cy.xpath('//button[@class="pd-size-2xl pd-size-btn"]').click()
        cy.get('[id="pd-add-to-bag-btn"]').click()
        cy.wait(4000)
        cy.xpath('(//a[@id="mar"])[3]').click()
        
    }
}
export default ADDTOCART;