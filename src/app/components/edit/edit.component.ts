import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  persons:Person[]=[];
  person:Person=new Person();
  constructor(private servicePerson:PersonService) { 
 
  }

  ngOnInit(): void {
  }

  searchById() {
    this.servicePerson.getPersons().subscribe(person => {
      this.persons= person.filter(l => l.id == this.person.id);
      
    })
  }
  editS(bk: any) {
    this.servicePerson.updatePerson(this.person.id,bk).subscribe((data) => {
      bk = data;
    });
  }
}

