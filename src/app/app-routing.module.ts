import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  {
    path: `home`,
    component: HomeComponent
  },
  {
    path: `search`,
    component: SearchComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch:'full'
  },
  {
    path: `user/:username`,
    component: UserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//unsubscribe
