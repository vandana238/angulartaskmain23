import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }

  getData() {
  return this.http.get("http://localhost:3092/get")
  }

  postData(body:any){
    return this.http.post('http://localhost:3092/postdata',body)
  }

  putData(body: any,params:any){
    let username=params.username
    return this.http.put(`http://localhost:3092/put/${username}`,body)
  }

  deletedata(username:any){
    return this.http.delete('http://localhost:3092/delete/'+username)
  }

}
