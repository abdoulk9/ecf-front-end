import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-insert-ville',
  templateUrl: './insert-ville.page.html',
  styleUrls: ['./insert-ville.page.scss'],
})
export class InsertVillePage implements OnInit {

   public modelTown ={
    ville: '',
    pays:'',
    continent: '',
    population:''
   }
      
   

  //Injection des dependances
  constructor(private httpClient: HttpClient,
     private router: Router) { }

  ngOnInit() {
  }

 isValidModelTown(){

  return this.modelTown.ville && this.modelTown.ville.length > 0
      &&  this.modelTown.pays && this.modelTown.pays.length > 0
      &&  this.modelTown.continent && this.modelTown.continent.length > 0
      &&  this.modelTown.population  && this.modelTown.population.length > 0;
 }

 validateInsert(){
   if(this.isValidModelTown){

   
    this.httpClient.post("http://localhost:4000/ville", this.modelTown )
    .subscribe(
       () =>{
           console.log(this.modelTown);
           this.router.navigateByUrl('/home');
       },
       (err) => {
         console.log(err);
       }
    )}else{
      console.log('Verifier le  formulaire ');
    }
   
   
 }



}
