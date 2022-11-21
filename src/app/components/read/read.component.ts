import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  persons:Person[]=[];

  constructor(private personService : PersonService) { }

  ngOnInit(): void {
    this.DisplayPersons();
  }
  public DisplayPersons(){
    this.personService.getPersons()
    .subscribe(persons => this.persons=persons)
  }
  delete(id:any){
    this.personService.deletePerson(id).subscribe(()=>this.persons=this.persons.filter((l: {id:any;}) => l.id!= id))
  }
}
