import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    debugger

    this.getUsers();
  }

  getUsers() {

    this.userService.getUsers().subscribe(ret => {
      debugger
      this.users = ret;
    });

  }
}
