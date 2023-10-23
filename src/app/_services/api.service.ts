import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  // getCommentaries(page: number): Observable<Comment[]> {
  //   return this.http.get(
  //     `https://jsonplaceholder.typicode.com/comments?page=${page}&per_page=10`
  //     ) as Observable<Comment[]>;
  // }

  get(url: string, options: any){
    return this.http.get(this.BASE_URL + url, {headers:options});
  }

  post(url: string, formData: any, options: any){
    return this.http.post(this.BASE_URL + url, formData, options);
  }
}
