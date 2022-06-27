import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o'; 


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { 
  }

  aboutlifeslider: OwlOptions = {
    loop: true,
    items: 3,
    autoplay: true, 
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  logoslider: OwlOptions = {
    loop: true,
    items: 4,
    autoplay: true, 
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin:5,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }










  lifeslider: OwlOptions = {
    loop: true,
    items: 4,
    autoplay: true, 
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin:5,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  groupslider: OwlOptions = {
    loop: true,
    items: 4,
    autoplay: true, 
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    margin:5,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }




}
