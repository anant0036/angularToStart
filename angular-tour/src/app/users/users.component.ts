import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName: string = 'Bhushan';

  newUser: boolean = false;

  constructor() { }



  ngOnInit(): void {
    //this.makeItDisable();
  }

  makeItDisable() {
    // setTimeout(() => {
    this.newUser = true;
    // }, 5000);
  }


}
