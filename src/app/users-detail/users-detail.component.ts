import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {
  private user: User;
  private page: number;
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.url.subscribe(url =>{
      const id: number = parseInt(url[2].path);
      this.page = parseInt(url[1].path);
      this.getUserByIdAndPage(id, this.page);
    })
  }

  getUserByIdAndPage(id, page) {
    this.userService.getUserByIdAndPage(id, page).subscribe(
      user => this.user = user
    );
  }

  backToUsersList() {
    this.router.navigate([`/users/${this.page}`])
  }

}
