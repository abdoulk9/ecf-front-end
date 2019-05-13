import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [

    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title:'Villes',
      url:'/villes',
      icon:'list'
    },
    {
      title:'Afficher une ville',
      url:'/select-ville',
      icon:'checkmark'
    },

    {
      title:'Ajouter une ville',
      url:'/insert-ville',
      icon:'add-circle'
    },
    {
      title:'Supprimer une ville',
      url:'/delete-ville',
      icon:'md-trash'
    },
    {
      title:'Modification de la ville',
      url:'/update-ville',
      icon:'refresh'
    }

    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
