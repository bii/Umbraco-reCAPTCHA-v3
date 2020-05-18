import {Constants} from "../constants";
import {siteVerify} from "../services/recaptchaApi";

class Register {
    constructor() {
        this.signUpButton = document.getElementById(Constants.signUpButtonSelector());

        this.signUpButton.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('click');

            grecaptcha.ready(function () {
                grecaptcha.execute(Constants.reCAPTCHASiteKey(), {action: 'signUp'}).then(function (token) {
                    siteVerify(token, 'signUp');
                });
            });
        });
    }
}

export {Register};


