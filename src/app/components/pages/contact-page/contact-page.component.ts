import { InputType, InputValidator } from './../../../library/utilities/validators/input-validator';
import { ContactsService } from './../../../library/services/contacts-service';
import { AgePredictionResult} from './../../../library/services/agify-service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/library/interfaces/contact';
import { AgifyService } from 'src/app/library/services/agify-service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  searchField:string = "";
  selectedContact:Contact;
  selectedContactAge:number = 0;
  originalContacts:Contact[] = [];
  contacts:Contact[] = [];

  firstName:InputValidator = new InputValidator(InputType.Name, "");
  lastName:InputValidator = new InputValidator(InputType.Name, "");
  address:InputValidator = new InputValidator(InputType.General, "");
  phone:InputValidator = new InputValidator(InputType.Phone, "");
  bio:InputValidator = new InputValidator(InputType.General, "")

  constructor(private agify:AgifyService, private contactsService:ContactsService) { }

  ngOnInit(): void {
    this.getContacts();
    this.viewContact(this.contacts[0]);
  }

  getContectsInitials(fName:string, lName:string){
    return fName[0].toUpperCase() + lName[0].toUpperCase()
  }

  filterContacts(searchString:string){

    if(searchString != "" && searchString != " "){

      this.contacts = this.originalContacts.filter((contact) => {

        searchString = searchString.toLowerCase();
        console.log(contact)

        if(contact.firstName.toLowerCase().includes(searchString)) return true;
        else if(contact.lastName.toLowerCase().includes(searchString)) return true;
        else if((contact.firstName + " " + contact.lastName).toLowerCase().includes(searchString)) return true;
        else if(contact.cellNumber.includes(searchString)) return true;
        else return false;

      });

    } else {
      this.contacts = this.originalContacts 
    }

  }

  getContacts(){

    this.contactsService.getContacts().subscribe(
      data => {
        this.originalContacts = data
        this.contacts = data;
        this.viewContact(data[0]);
      }
    )

  }

  viewContact(contact:Contact){

    this.predictAge(contact.firstName);
    this.selectedContact = contact

  }

  predictAge(name:string){
    
    this.agify.predictAge(name).subscribe(
      data => this.selectedContactAge = data.age
    );

  }

  addNewContact(){
    if(this.inputAreValid()){
      let newContact = {
      
        firstName: this.firstName.Value,
        lastName: this.lastName.Value,
        address: this.address.Value,
        cellNumber: this.phone.Value,
        bio: this.bio.Value,
  
      } as Contact

      this.originalContacts.push(newContact);
      this.contacts = this.originalContacts;
      this.viewContact(newContact);

    }
  }

  inputAreValid(){
    return this.lastName.IsValid || this.firstName.IsValid 
    || this.address.IsValid || this.phone.IsValid || this.bio.IsValid 
  }

}
