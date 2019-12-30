import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;

  constructor(private router:Router,private route:ActivatedRoute) {}

  newsUp(){
    this.router.navigate(['news']);
  }
 actions(){
   this.router.navigate(['myexpenses']);
 }
 search(){
   this.router.navigate(['searchbar']);
 }
}
