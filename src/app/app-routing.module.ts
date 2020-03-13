import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { ExploreComponent } from './components/explore/explore.component';
import { MyContestsComponent } from './components/my-contests/my-contests.component';
import { MyPinsComponent } from './components/my-pins/my-pins.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'howitworks',component:HowItWorksComponent},
  {path:'explore',component:ExploreComponent},
  {path:'mycontests',component:MyContestsComponent},
  {path:'mypins',component:MyPinsComponent},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
