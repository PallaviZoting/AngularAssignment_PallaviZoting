import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {UserDataService} from '../../../app/user-data.service';
import { IUserData } from './userData';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName:any;
password:any;
errorMessage="";
userData;
public userinfo: IUserData[]=[];

  constructor(public routerService:Router,public httpClient:HttpClient,
    private userdataService: UserDataService) {
    this.userName="";
    this.password="";

   }

  ngOnInit(): void {
    this.userdataService.getAllData().subscribe((response:JSON)=>{});
  }

  onSubmit(value:any){

    this.userdataService.getAllData().subscribe((response:JSON)=>{
        this.userData=response;
        var user;
       // var myJSON = JSON.stringify(this.userData);
        this.userinfo=this.userData;
        for (var i in this.userinfo) {
          user = this.userinfo[i];
          if (this.userName==user.username && this.password==user.password) {
            this.errorMessage="Login Successfull";
            //this.routerService.navigate([""]);
            this.routerService.navigate(["home"]);
          }
          else{
            this.errorMessage="Invalid Credentials";
          }
      }
     });
    }

  onReset(){
    this.userName="";
    this.password="";
    this.errorMessage="";
  }

}
