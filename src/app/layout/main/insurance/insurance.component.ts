import { Component, OnInit } from '@angular/core'; 
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';  
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
    
  name = 'Set iframe source';
  url: string = "https://estatenest.ca/blog/future-financial";
  urlSafe!: SafeResourceUrl;

  title = 'Insurance, Benefits, Investments, & Retirement';
  constructor (public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  
  }
}