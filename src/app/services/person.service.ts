import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../Models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }
  
  url="http://localhost:3000/persons";

  getPersons(){
    return this.http.get<Person[]>(this.url);
  }

  postPerson(person: any){
    return this.http.post<Person>(this.url,person)
  }

  deletePerson(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }

  updatePerson(id:any,person:any){
    return this.http.put(`${this.url}/${id}`,person)
  }
}
