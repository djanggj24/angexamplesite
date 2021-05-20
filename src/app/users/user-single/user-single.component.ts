import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-single',
  template: ` <section class="section">
  <div class="container">

    <div class="card" *ngIf="user">
      <img [src]="user.avatar_url">
      <h2>{{ user.login }}</h2>
    </div>
  </div>
  </section>`,
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
user;
  constructor(private userservice:UserService,private route:ActivatedRoute) { }

  ngOnInit() {this.route.params
    .subscribe(data=>{const username=data['username'];
    this.userservice.getUser(username).subscribe(datas=>{this.user=datas;});
        });
  }

}
