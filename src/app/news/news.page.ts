import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  [x: string]: any;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
open(){
  this.router.navigate(['pages'])
}
}
