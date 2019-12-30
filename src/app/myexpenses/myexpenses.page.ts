import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myexpenses',
  templateUrl: './myexpenses.page.html',
  styleUrls: ['./myexpenses.page.scss'],
})
export class MyexpensesPage implements OnInit {
  [x: string]: any;
  list: any;
  nName;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

  }
// values(){
//   if(this.list == ''){ 
//     document.write("List :" + this.list);
//   }
// }

values(){
  document.write(this.nName);
  this.name.push(
    {name: this.nName}
  )
}
// values(){
//   document.write("this is it");
// }
view(){
  this.router.navigate(['finn-view'])
}
benn(){
  this.router.navigate(['benview'])
}
col(){
  this.router.navigate(['finn-view'])
}
cli(){
  this.router.navigate(['benview'])
}
}
