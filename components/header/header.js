import React, {useState} from 'react';
import Link from 'next/link'
import Navig from '../navigation/nav';
import VendorList from '../navigation/vendorlist';
import Popup from '../popup/popup';
import InputType from '../form__inputs/inputtype';
import PrimaryBtn from '../buttons/primaryButton';
const header = () => {
    const [SignUppopupOpen, setSignUppopupOpen] = useState(false)
    const [SignInpopupOpen, setSignInpopupOpen] = useState(false)
    const onSignupClick = () => {
        setSignUppopupOpen(true)
    }
    {SignInpopupOpen ? document.body.classList.add('overflowHidden') : document.body.classList.remove('overflowHidden')}
    const onSigInpClick = () => {
        setSignInpopupOpen(true)
    }
    var inputPlaceholder=["Your email address","Password"];
    var inputs=[];
    for(var i=0;i<inputPlaceholder.length;i++){
        inputs.push(<InputType  placeholder={inputPlaceholder[i]} />);
    }
    let signUp = (
        <>
        <section className="wdpopup__signup">
            {inputs}
            <p className="wdpopup__signup__agree">By clicking ‘Sign Up’, I agree to The Knot's &nbsp;
                <a  className="wdpopup__signup__agree__link" target="_blank" href="/privacy-policy">Privacy Policy</a> &nbsp;and&nbsp;
                <a className="wdpopup__signup__agree__link" target="_blank" rel="noopener" href="/terms-and-conditions">Terms of Use</a>.
            </p>
            <section className="wdmatchbanner__detail__info__submitBtn">
                <PrimaryBtn />
            </section>
            <p className="wdpopup__signup__agree">Send me wedding ideas, tips, <a target="_blank" className="wdpopup__signup__agree__link"  href="/terms-and-conditions">Log In</a></p>  
        </section>   
        <style jsx>
            {
                `               
					.wdpopup__signup__agree{font-size:14px; line-height:18px; text-align: center;margin:12px 0;display: flex; justify-content: center;}
					.wdpopup__signup__agree__link{font-weight: 600;color: #1A1A1A;}
					.wdmatchbanner__detail__info__submitBtn{text-align:center}
                `
            }
        </style>
        </>
    )
    let signIn = (
        <>
        <section className="wdpopup__signup">
            {inputs}
            <p className="wdpopup__signup__agree"><a className="wdpopup__signup__agree__link" target="_blank" href="/terms-and-conditions">Forgot password?</a>.
            </p>
            <section className="wdmatchbanner__detail__info__submitBtn">
                <PrimaryBtn />
            </section>
            <p className="wdpopup__signup__agree">Are you a vendor?  <a target="_blank" className="wdpopup__signup__agree__link"  href="/terms-and-conditions">Are you a vendor? </a></p>  
            <p className="wdpopup__signup__agree">Not a member yet?  <a target="_blank" className="wdpopup__signup__agree__link"  href="/terms-and-conditions">Join now!</a></p>  
        </section>  
        <style jsx>
            {
                `               
					.wdpopup__signup__agree{font-size:14px; line-height:18px; text-align: center;margin:12px 0;display: flex; justify-content: center;}
					.wdpopup__signup__agree__link{font-weight: 600;color: #1A1A1A;}
					.wdmatchbanner__detail__info__submitBtn{text-align:center}
                `
            }
        </style>
        </>
    )
    console.log(SignUppopupOpen,"asf")
    return (        
        <header className="wdheader">
            <section className="container">
            <section className="wdheader__info">
                <a className="wdheader__link" href="/"><img src="http://www.magzter.com/static/images/maglogo/magzlogo__.svg" className="wdheader__logoimg"/></a>
                <Navig />
                <section className="wduser__register__login">
                    <span onClick={() => onSignupClick()} className="wduser__register__login__link wduser__register__login__link--heighlight">Sign Up</span>
                    <span onClick={() => onSigInpClick()} className="wduser__register__login__link">Log In</span>
                </section>
            </section>
            </section>
            <VendorList />
            {SignUppopupOpen ? <Popup isOpen={SignUppopupOpen} onClose={() => setSignUppopupOpen(false)}>{signUp}</Popup> : ""}
            {SignInpopupOpen ? <Popup isOpen={SignInpopupOpen} onClose={() => setSignInpopupOpen(false)}>{signIn}</Popup> : ""}
            
            <style jsx>
                {
                    `
                    .wdheader{}
                    .wdheader__info{display:flex;align-items:center;height: 72px;background:#fff;}
                    .wdheader__link{justify-content:flex-end}
                    .wduser__register__login{justify-content:flex-end}
                    .wdheader__logoimg{width:150px;}
                    .wduser__register__login{display:flex;align-items:center;justify-content: flex-end; flex: 1;}
                    .wduser__register__login__link.wduser__register__login__link--heighlight{background-color: #e96150; border: 1px solid #e96150; color: #fff;}
                    .wduser__register__login__link{background-color: #fff; border: none; color: #e96150; text-transform: capitalize;border-radius: 2px;font-weight: 500;font-size: 14px; margin: 0 5px; min-width: 80px; padding: 3px 15px 5px; text-align: center; line-height: 16px;cursor:pointer;}
                    `
                }
            </style>
        </header>
    );
    
}

export default header;
