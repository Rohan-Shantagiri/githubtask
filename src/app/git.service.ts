import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<any>('https://api.github.com/users/venkatesh-m-xelp')
  }

  getRepos() {
    return this.http.get<any>('https://api.github.com/users/venkatesh-m-xelp/repos')
  }
}
