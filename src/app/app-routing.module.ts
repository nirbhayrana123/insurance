
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
import { PrivacyComponent } from './layout/main/privacy/privacy.component';
import { EthicsComponent } from './layout/main/ethics/ethics.component';
import { TermsComponent } from './layout/main/terms/terms.component';
import { NotfoundComponent } from './layout/main/notfound/notfound.component';

const routes: Routes = [
   { path: '', component: HomeComponent, pathMatch: 'full',
   data: {
    "pageTitle": "Insurance",
    "description": "Instant no obligation quote: Life insurance  Group Benefits  No-Medical Exam Coverage  Supervisa Insurance"
  }
  },
   { path: 'about', component: AboutComponent },
   { path: 'insurance', component: InsuranceComponent },
   { path: 'investment', component: InvestmentComponent },
   { path: 'estateplanning', component: EstateplanningComponent },
   { path: 'blog', component: BlogComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'getaquote', component: GetaquoteComponent },
   { path: 'details', component: DetailsComponent },
   { path: 'terms', component: TermsComponent },
   { path:  'ethics', component: EthicsComponent },
   { path: 'privacy', component: PrivacyComponent },
   {path: '**', pathMatch: 'full', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ ]
})
export class AppRoutingModule { }