import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee = (data:any) =>{
    return this.http.post("http://localhost:8080/addEmployee",data)
  }
}