import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';  

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  name = 'Set iframe source';
  url: string = "https://estatenest.ca/blog/contact-form/";
  urlSafe!: SafeResourceUrl;

//  name = "";
//  email= "";
//  phone= "";
//  subject = "";
//  message= "";
 

 
constructor(public sanitizer: DomSanitizer) { }
  

//   ngOnInit(): void { }

  // submitForm() {  
  // //console.warn(this.basicDetails.value);
  // // const nameInput = document.querySelector('input[name=name]');
  //     console.log();
  //      const name = this.name;  
  //      const email = this.email;
  //      const phone = this.phone;
  //      const subject = this.subject;
  //      const message = this.message;
       

  //      console.log(name); 
  //      console.log(email); 
  //      console.log(phone); 
  //      console.log(subject); 
  //      console.log(message); 
  //    }
 


     ngOnInit() {
      this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }

}
