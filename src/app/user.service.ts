import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl='https://api.github.com/users?per_page=10';
  constructor(private http:HttpClient) { }
  getUsers(){return this.http.get(`${this.apiUrl}?per_page=10`);}
 // .subscribe(data=>{console.log(data);})}
  getUser(username:string){return this.http.get(`${this.apiUrl}/${username}`);
}
}
