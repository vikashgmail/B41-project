class HEADER{
    ShopNowPage(){
        cy.xpath('//span[text()="SHOP NOW"]').click()
       
    }
    MenPage(){
        cy.xpath('//span[text()="MEN"]').click()
        cy.go('back')
    }
    WomenPage(){
        cy.xpath('//span[text()="WOMEN"]').click();
        cy.go('back')
    }
    AccessoriesPage(){
        cy.xpath('//span[text()="ACCESSORIES"]').click();
        cy.go('back')
    }
    LiveNow(){
        cy.xpath('//span[text()="LIVE NOW"]').click()
        cy.go('back')
    }
    HeavyDuty(){
        cy.xpath('//span[text()="HEAVY DUTY"]').click()
        cy.go('back')
    }
    BewkoofAir(){
        cy.xpath('//span[text()="BEWAKOOF AIR"]').click()
        cy.go('back')
    }
    OfficialMerch(){
        cy.xpath('//span[text()="OFFICIAL MERCH"]').click()
        cy.go('back')
    }
    PlusSize(){
        cy.xpath('//span[text()="PLUS SIZE"]').click()
        cy.go('back')
    }
}
export default HEADER;