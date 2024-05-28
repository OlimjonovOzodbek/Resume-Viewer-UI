import { Component } from '@angular/core';
import { UserModel } from '../../interfaces/user-model';
import { UserService } from '../../services/UserService/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {
  users: UserModel[] = [];
  page: number = 1;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers(this.page, 10).subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (err) => {
        console.error('Error loading users:', err);
      }
    });
  }
}
