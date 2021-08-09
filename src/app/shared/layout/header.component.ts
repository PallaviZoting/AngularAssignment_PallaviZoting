import { Component, OnInit } from '@angular/core';

import { User, UserService } from '../../core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {
    this.myImagePath="/myImage.PNG";
  }

  currentUser: User;
  myImagePath:string;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
    this.myImagePath="/myImage.PNG";
  }
}
