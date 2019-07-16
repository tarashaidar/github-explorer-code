import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService} from '../search/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [SearchService]
})
export class UserComponent implements OnInit, OnDestroy {
  userCard;
  userRepos;
  error:any;
  subscription1;
  subscription2;
  constructor(private httpService: SearchService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const userName = this.route.snapshot.paramMap.get('username');
    this.subscription1 = this.httpService.getUser(userName).subscribe( 
      user => this.userCard = user,
      error => {this.error = error.message; console.log(error);});
    this.subscription2 = this.httpService.getRepos(userName).subscribe( 
      repos => this.userRepos = repos,
      error => {this.error = error.message; console.log(error);});

      this.sendUser();
  }

  ngOnDestroy(){
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
  }

  sendUser(){
    return {
      avatar: this.userCard.avatar_url,
      name: this.userCard.name,
      login: this.userCard.login,
      created_at: this.userCard.created_at,
      location: this.userCard.location,
      company: this.userCard.company,
      email: this.userCard.email
    }
  }


}










   


