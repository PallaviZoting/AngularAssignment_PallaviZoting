import { Component, OnInit } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3';
import {UserDataService} from '../../../app/user-data.service';
import { IUserData } from '../login/userData';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userName:any;
  emailId:any;
  password:any;
  userData;
  errorMessage:any;
  id:any;
  spresp:any;

  public userinfo: IUserData[]=[];
  constructor(private userdataService: UserDataService,public httpClient:HttpClient) {
    this.userName="";
    this.emailId="";
    this.password="";
    this.errorMessage="";
   }

  ngOnInit(): void {
  }
  onSubmit(value:any){
    this.userdataService.getAllData().subscribe((response:JSON)=>{
      this.userData=response;
      var user;
      var registered;
      registered=false;
      var totaluserdata;
     // var myJSON = JSON.stringify(this.userData);
      this.userinfo=this.userData;
      for (var i in this.userinfo) {
        user = this.userinfo[i];
        if (this.userName==user.username || this.emailId==user.emailId) {
           console.log("user already registered");
           this.errorMessage="user already registered";
           registered=true;
        }
        totaluserdata=user.id;
      }
      if(!registered){
        
        console.log("new user registered");
        this.errorMessage="new user registered";
        this.userdataService.registerData(totaluserdata,this.userName,this.password,this.emailId)
        .subscribe(resp => {
          return this.spresp.push(resp);
        });
      }
   });
  }

  onReset(){
    this.userName="";
    this.password="";
    this.emailId="";
    this.errorMessage="";
  }

}
