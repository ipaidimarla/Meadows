import { Router } from '@vaadin/router'



import 'bootstrap/dist/css/bootstrap.min.css';


import { AppLoginPage } from './src/app-components/app-login/app-login';
import { AppHeader } from './src/app-components/app-header/app-header';
import { AppFooter } from './src/app-components/app-footer/app-footer';
import { AppSignUp } from './src/app-components/app-signup/app-signup'
import { AppGallery } from './src/app-components/app-gallery/app-gallery'


// setup a Router instance
const outlet = document.getElementById('outlet');
const router = new Router(outlet, { baseUrl: '/' });


router.setRoutes([
    { path: '/', component: 'app-login' },

    { path: 'signup', component: 'app-signup' }

]);