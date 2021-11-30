import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Contact } from '../interfaces/contact';

@Injectable({
    providedIn: 'root'
})
export class ContactsService {

    constructor(private httpClient:HttpClient){

    }

    getContacts():Observable<Contact[]>{
        return this.httpClient.get<Contact[]>("assets/data/contacts.json");
    }
}
