
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './layout/main/about/about.component';
import { BlogComponent } from './layout/main/blog/blog.component';
import { ContactComponent } from './layout/main/contact/contact.component';
import { DetailsComponent } from './layout/main/details/details.component';
import { EstateplanningComponent } from './layout/main/estateplanning/estateplanning.component';
import { HomeComponent } from './layout/main/home/home.component';
import { InsuranceComponent } from './layout/main/insurance/insurance.component';
import { InvestmentComponent } from './layout/main/investment/investment.component';
import { GetaquoteComponent } from './layout/main/getaquote/getaquote.component';
import { NotfoundComponent } from './layout/main/notfound/notfound.component';

const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full' },
   { path: 'about', component: AboutComponent },
   { path: 'insurance', component: InsuranceComponent },
   { path: 'investment', component: InvestmentComponent },
   { path: 'estateplanning', component: EstateplanningComponent },
   { path: 'blog', component: BlogComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'getaquote', component: GetaquoteComponent },
   { path: 'details', component: DetailsComponent },
   {path: '**', pathMatch: 'full', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule],
  providers: [ ]
})
export class AppRoutingModule { }