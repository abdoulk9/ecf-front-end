import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-villes',
  templateUrl: './villes.page.html',
  styleUrls: ['./villes.page.scss'],
})
export class VillesPage implements OnInit {

  //Injection de httpclient, Router
  constructor(private httpClient: HttpClient,
    private router: Router) { }

  //Variable tableau pour la récuperation des villes
  public townTab = [];

  ngOnInit() {
  }


  //Generation de la  liste des villes
  ionViewDidEnter() {
    console.log("Falg1");
    this.httpClient.get("http://localhost:4000/villes")
      .subscribe(
        (data: any) => {
          this.townTab = data;
          console.log('voici:' + this.townTab);
        },
        err => console.log(err)
      );
  }


}
