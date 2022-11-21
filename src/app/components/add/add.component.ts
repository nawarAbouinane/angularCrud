import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Person } from 'src/app/Models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newPerson:Person=new Person();

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
  }
  addPerson(person:NgForm){
    this.newPerson.id=person.value.id;
    this.newPerson.name=person.value.name;
    this.newPerson.birthdate=person.value.birthdate;
    this.personService.postPerson(this.newPerson).subscribe(person=>this.newPerson=person)

  }
}
