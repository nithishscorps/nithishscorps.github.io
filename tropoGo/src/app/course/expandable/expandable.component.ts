import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataStorageService } from 'src/app/service/data-storage.service';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.css']
})
export class ExpandableComponent implements OnInit {

  
  cits = [];
  lngs =[];
  expandFormArr : FormGroup[] = [];
  expandForm: FormGroup;
  ccost: any;
  ccity: any;
  setColor: boolean;

  constructor(private data:DataStorageService) { }

  ngOnInit() {

    this.cits = this.data.cities;
    this.lngs = this.data.languages;
    this.expandForm = this.data.expansionForm;
    this.expandFormArr = this.data.expansionFormArr;
    this.data.verifyEmitter.subscribe(req => {
         this.ccost=!req[2];
         this.ccity=!req[3];
         if(!req[2] || !req[3])this.setColor=true;
    });
  
  }

  
  delete(i){
    this.data.delete(i);
  }
  reset(i){
    this.data.reset(i);
  }

 

}
