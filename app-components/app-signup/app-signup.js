import { BaseElement, html, css } from '../../core/base-element/base-element';
import { appStyles } from '../../styles/style'

export class AppSignup extends BaseElement {

    static get is() {
        return 'app-signup'
    }

    constructor() {
        super();
    }
    static get properties() {
        return {

        }
    }
    static get styles() {
        return [appStyles, css``];
    }
    registerUser(user) {
        let body = {};
        let formFields = this.shadowRoot.querySelector('#register-form').querySelectorAll('.form-group');
        Array.prototype.forEach.call(formFields, (field) => {
            let f = field.querySelector('input')
            switch (f.name) {
                case 'name':
                    body.name = f.value;
                    break;
                case 'email':
                    body.email = f.value;
                    break;
                case 'pass':
                    body.password = f.value;
                    break;
                case 're_pass':
                    body.repeatPassword = f.value;
                    break;
                default:
                    console.log('some error');

            }

        });


        body = JSON.stringify(body);

        var request = new Request('http://localhost:3000/register', {
            form: 'body=' + body,
            method: 'post',
            mode: 'cors'
        });

        fetch(request).then(function (data) {
            return data;
        });
    }

    render() {
        return html`
        <div class="main">
       
        <section class="signup">
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Sign up</h2>
                    <form  class="register-form" id="register-form">
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="name" id="name" required placeholder="Your Name"/>
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input type="email" name="email" id="email" required placeholder="Your Email"/>
                        </div> 
                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="pass" id="pass" required placeholder="Password"/>
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="password" name="re_pass" id="re_pass" required placeholder="Repeat your password"/>
                        </div>
                        <div class="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                            <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                        </div>
                        <div class="form-group form-button">
                            <input type='submit' @click=${this.registerUser.bind(this)}  name="signup" id="signup" class="form-submit" value="Register"/>
                        </div>
                    </form>
                </div>
                <div class="signup-image">
                    <figure><img src="../../src/assets/images/signup-image.jpg" alt="sing up image"></figure>
                    <a href="/" class="signup-image-link">I am already member</a>
                </div>
            </div>
        </div>
    </section>
    </div>
        `
    }



}
if (!window.customElements.get(AppSignup.is)) {
    window.customElements.define(AppSignup.is, AppSignup);
}