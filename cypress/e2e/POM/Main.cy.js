import SIGNUP from "../../support/PageClass/signup.cy";
import LOGIN from "../../support/PageClass/login.cy";
import ADDTOCART from "../../support/PageClass/addcart.cy";
import PLACEORDER from "../../support/PageClass/placeorder.cy";
const signup =new SIGNUP();
const loginpage=new LOGIN();
const makeorder=new PLACEORDER();

const addtocart=new ADDTOCART();
beforeEach(() => {
    signup.enterURL()
});
describe('', () => {
    it('SIGNUP', () => {
        signup.signBew();
    });
    it('LOGIN', () => {
        loginpage.loginbew();
    });
    it('addtocart', () => {
        loginpage.loginbew();
        addtocart.addProduct();
        makeorder.address();
    });
    
});
    