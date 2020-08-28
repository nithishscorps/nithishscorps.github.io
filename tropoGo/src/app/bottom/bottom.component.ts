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
  
  sb:boolean;
  constructor(private data:DataStorageService,private router:Router) { }
 
  ngOnInit() {
    this.sb=false;
    this.data.componentEmitter.subscribe(comp => {
      comp === "upload" ? this.sb=false:this.sb=true;
      console.log(this.sb);
});
   
    //this.active.snapshot._routerState._root.value.children[0].component.name === "CourseComponent" ? this.sb=true:this.sb=false;
  
  }
  
  


  verify(){
    this.data.formVerification();
  }
  
}
