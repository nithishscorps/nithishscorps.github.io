import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
import { fadeInItems } from '@angular/material';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {
  
  sb:boolean=false;
  constructor(private data:DataStorageService,private active:ActivatedRoute,private router:Router) { }
 
  ngOnInit() {
   
    this.active.snapshot._routerState._root.value.children[0].component.name === "CourseComponent" ? this.sb=true:this.sb=false;
  
  }
  
  next(){
    if(this.data.items[this.data.items.length-1].length > 0){
       this.sb=true;console.log("inside")
       this.router.navigate(['/formPage']);
    }
    else {
      this.data.requiredEmitter.next(true);
    }
  }


  verify(){
    this.data.formVerification();
  }
  
}
