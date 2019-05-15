import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  private pagesNumber: number[] = [];
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.getPages();
  }

  getPages() {
    this.userService.getPages().subscribe(
      pages=> {
        for(let i = 1; i<= pages; i++) {
          this.pagesNumber.push(i)
        }
      }
    )
  }
}
