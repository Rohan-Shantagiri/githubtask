import { Component, OnInit } from '@angular/core';
import { GitService } from './git.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'githubtask';

  constructor(private git:GitService) {
  }
  
  user: any[] ;
  repo: any[] ;
  search;
  term: any;
  nameSearch: string ='';
 ngOnInit(){
   this.getUser();
   this.getRepo();
 }

 getUser(){
   this.git.getProfile().subscribe(
     result => {
       this.user = result;
       this.user= Array.of(this.user);
       console.log(result);
     },
     error => {
      console.log(error)
    }
   )
 }

 getRepo(){
   this.git.getRepos().subscribe(
     (result:any) =>{
       this.repo = result;
       console.log(result);
     },
     error => {
      console.log(error)
    }
   )
 }

}
