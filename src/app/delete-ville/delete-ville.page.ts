import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-ville',
  templateUrl: './delete-ville.page.html',
  styleUrls: ['./delete-ville.page.scss'],
})
export class DeleteVillePage implements OnInit {

  public idVille : number;

//Injection des dependances
  constructor(private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }


  validateDelete(id){
    console.log(id);
    this.httpClient.delete("http://localhost:4000/ville" + id )
    .subscribe(
      () => {
        console.log('supprimer');
        this.router.navigateByUrl('/home');
      },
      (err) => {
        console.log(err);
      }
    )
    console.log(id);
  }

}
