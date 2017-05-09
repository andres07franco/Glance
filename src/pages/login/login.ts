import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
    selector:'page-login',
    templateUrl:'login.html'
})

/**
 * Pagina de logueo
 */
export class LoginPage {



    constructor(public navCtrl: NavController, private fb: Facebook,public platform:Platform) {
         
    }

    /**
     * Realiza el login de facebook
     */
    loginFb(event) {
        
        //Si estamso en el browser, no inica sesion
        if (this.platform.is('cordova') ){
             this.navCtrl.push(TabsPage, { user: null });
         /*   this.fb.login(['public_profile', 'user_friends', 'email'])
                .then(
                (res: FacebookLoginResponse) => {
                    this.goHome();
                    console.log('Logged into Facebook!', res);
                }
                )
                .catch(e => console.log('Error logging into Facebook', e));
                */
        }
        else{
             this.navCtrl.push(TabsPage, { user: null });
        }
         

    }

    /**
     * Redirecciona a la pagina de inicio de la App
     */
    goHome() {
        this.fb.api("me?fields=id,first_name,picture", ['public_profile']).then(
            (res: any) => {
                this.navCtrl.push(TabsPage, { user: res });
            }
        );
    }

}