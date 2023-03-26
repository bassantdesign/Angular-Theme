import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"",redirectTo:"start-angular",pathMatch:"full"},
  {path:"start-angular",component:HomeComponent,title:"Start Angular Theme"},
  {path:"portfolio",component:PortfolioComponent,title:"Portfolio"},
  {path:"about",component:AboutComponent,title:"About"},
  {path:"contact",component:ContactComponent,title:"Contact"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
