import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/service/data-storage.service';

@Component({
  selector: 'app-main-upload',
  templateUrl: './main-upload.component.html',
  styleUrls: ['./main-upload.component.css']
})
export class MainUploadComponent implements OnInit {


 
 
  itemsArr = [[],[],[]];
  compulsory:boolean;
  categories=["INSTITUTE BROUCHER","CERTIFICATIONS","INSTITUTE GALLERY"];
  constructor(private data:DataStorageService) { }

  ngOnInit() {
    this.itemsArr = this.data.items;
    this.data.requiredEmitter.subscribe(comp =>{
      this.compulsory=comp;
    }); 
  }

upload(i){
  this.data.upload(i);
  this.compulsory=false;
}

delete(i,j){
  this.data.deleteFile(i,j);
  console.log(i);
  console.log(j);
  
}

}
