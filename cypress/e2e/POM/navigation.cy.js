
import SIGNUP from "../../support/PageClass/signup.cy";
import HEADER from "../../support/PageClass/header.cy";
const signup =new SIGNUP();
const headerpage=new HEADER();
beforeEach(() => {
    signup.enterURL()
});

describe('', () => {
        it('SHOPNOW', () => {
            headerpage.ShopNowPage();
           
        });
        it('MEN', () => {
            headerpage.MenPage();
        });
        it('WOMEN', () => {
            headerpage.WomenPage();
        });
        it('ACCESSORIES', () => {
            headerpage.AccessoriesPage();
        });
        it('livenow', () => {
            headerpage.LiveNow();
            
        });
        it('heavyduty', () => {
            headerpage.HeavyDuty();
        });
        it('BewkoofAir', () => {
            headerpage.BewkoofAir();
        });
        it('OfficialMerch', () => {
            headerpage.OfficialMerch();
        });
        it('PlusSize', () => {
            headerpage.PlusSize();
        });
       
    
    });
