import { NgModule } from '@angular/core'; 
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './layout/main/about/about.component';
import { BlogComponent } from './layout/main/blog/blog.component';
import { ContactComponent } from './layout/main/contact/contact.component';
import { DetailsComponent } from './layout/main/details/details.component';
import { EstateplanningComponent } from './layout/main/estateplanning/estateplanning.component';
import { InsuranceComponent } from './layout/main/insurance/insurance.component';
import { InvestmentComponent } from './layout/main/investment/investment.component';
import { HomeComponent } from './layout/main/home/home.component';
import { NotfoundComponent } from './layout/main/notfound/notfound.component';
import { GetaquoteComponent } from './layout/main/getaquote/getaquote.component'; 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    DetailsComponent,
    EstateplanningComponent,
    InsuranceComponent,
    InvestmentComponent,
    HomeComponent,
    NotfoundComponent,
    GetaquoteComponent 
  ],
  imports: [
    HttpClientModule,
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    CarouselModule, 
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
