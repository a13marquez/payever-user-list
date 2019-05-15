import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  userList: User[];

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.getUsersByPage();
    this.route.url.subscribe(url => {
      const page: number = parseInt(url[1].path);
      this.getUsersByPage(page);
    })
  }

  getUsersByPage(page= 1) {
    this.userService.getUsersByPage(page).subscribe(
      users => this.userList = users
    );
  }




}
