import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { saveAs } from 'file-saver';
import { IUserData } from './accounts/login/userData';
// import { writeFile } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public userData: IUserData[]=[];
  constructor(private http: HttpClient) {
    
   }
   getAllData(): Observable<any> {
    return this.http.get<any>("/userData.json");
  }

  registerData(id1,username1,password1,emailid1):Observable<IUserData>{
     const userData={
       id:id1,
       username:username1,
       emailId:emailid1,
       password:password1
     }
     const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/xml',
        'Authorization': 'jwt-token'
      })
    };
     console.log("userdata",userData);
     return this.http.post<IUserData>("/userData.json",userData,httpOptions);

  }
}
