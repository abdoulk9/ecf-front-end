import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-select-ville',
  templateUrl: './select-ville.page.html',
  styleUrls: ['./select-ville.page.scss'],
})
export class SelectVillePage implements OnInit {

  //Creation d'une variable pour l'id
  public idTown: number;

  public dataTown: Array<any> = [];
  public dataTowns: [];

  //Injection de Htttpclient
  constructor(private httpClient: HttpClient,
    private toater: ToastController) {



  }

  ngOnInit() {
  }


  validateId(id) {
    console.log(" voici l'id:" + id);
    if (id > 0) {
      this.httpClient.get("http://localhost:4000/ville/" + id)
        .subscribe(
          (data: any) => {
            console.log(data)
            if (data) {
              this.dataTown = data;
              console.log(this.dataTown);
            }
            err => console.log(err)

            console.log(this.dataTown);
          })
    }
  }



  ionViewDidEnter() {
    this.httpClient.get("http://localhost:4000/ville/" + this.idTown)
      .subscribe(
        (dataTown: any) => {
          this.dataTowns = dataTown;
          console.log(this.dataTowns);
        },
        err => console.log(err)
      );
  }




}
