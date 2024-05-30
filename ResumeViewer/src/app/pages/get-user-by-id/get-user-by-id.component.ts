import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../interfaces/user-model';

@Component({
  selector: 'app-get-user-by-id',
  templateUrl: './get-user-by-id.component.html',
  styleUrl: './get-user-by-id.component.css'
})
export class GetUserByIdComponent implements OnInit {
  user!: UserModel

  constructor( private service: UserService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(id!).subscribe(user => {
      this.user = user;
    });
  }
}
