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

  constructor(private git: GitService) {
  }

  user: any[] = [
    {
      avatar_url: "assets/logo.png",
      login: "Venkatesh Mogili"
    }
  ];
   repos: any[] // = [
  //   {
  //     name: "Example",
  //     private: true,
  //     fork: false,
  //     archived: false,
  //     language: "JavaScript",
  //     description: "This is sample project"
  //   },
  //   {
  //     name: "ckeditor",
  //     private: false,
  //     fork: false,
  //     archived: false,
  //     language: "Typescript",
  //     description: "This is sample project"
  //   },
  //   {
  //     name: "another repository",
  //     private: false,
  //     fork: true,
  //     archived: false,
  //     language: "Typescript",
  //     description: "This is sample project"
  //   },
  //   {
  //     name: "one more repo",
  //     private: false,
  //     fork: false,
  //     archived: true,
  //     language: "JavaScript",
  //     description: "This is sample project"
  //   }
  // ];
  search;
  term: any = '';
  search_type: any = '';
  search_language: any = '';

  ngOnInit() {
    this.getUser();
    this.getRepo();
  }

  getUser() {
    this.git.getProfile().subscribe(
      result => {
        this.user = result;
        this.user = Array.of(this.user);
        // console.log(result);
      },
      error => {
        console.log(error)
      }
    )
  }

  getRepo() {
    this.git.getRepos().subscribe(
      (result: any) => {
        this.repos = result;
        // console.log(result);
      },
      error => {
        console.log(error)
      }
    )
  }

  // ngOnchanges(){
  //   this.repos = this.repos.filter(lang => lang.language = this.repos)
  // }

}
