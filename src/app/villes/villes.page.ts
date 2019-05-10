import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.page.html',
  styleUrls: ['./villes.page.scss'],
})
export class VillesPage implements OnInit {

  //Injection de httpclient
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

}
