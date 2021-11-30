import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AgifyService {

constructor(private httpClient: HttpClient){

}

predictAge(name:string):Observable<AgePredictionResult>{
    return this.httpClient.get<AgePredictionResult>(`https://api.agify.io?name=${name}`);
}

}

export class AgePredictionResult{
    name:string;
    age:number;
    count:number;
}
