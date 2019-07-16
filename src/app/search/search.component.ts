import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService} from './search.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit, OnDestroy {
  pageOfItems: Array<any>;
  users:Array<any>;
  searchText: string;
  subscription;
  constructor(private httpService: SearchService) { }

  ngOnInit() {
  this.subscription = this.httpService.getData().subscribe(data => this.users = data);

  this.users = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

  onChangePage(pageOfItems: Array<any>) {
    // update current page of users
    this.pageOfItems = pageOfItems;
    }
 

}




   

