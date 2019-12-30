import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage  {
items: any=[];

  constructor(private router:Router,private route:ActivatedRoute) { this.initializaItems }
 initializaItems(){

    this.items = [
      "GHI",
      "HOME",
      "MYEXPENSES",
      "123",
      "ABC",
      "DEF",
      "COMPU",
      "LAPTOP",
    ];
  }

  getItems(event){
    this.initializaItems();
    const val = event.target.value;
    if(val && val.trim() !=''){
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  
  me(){
    this.router.navigate(['home'])
  }
}
