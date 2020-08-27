import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  detailedForm : FormGroup;
  cname: boolean;
  ctype: boolean;

  

  constructor(private data:DataStorageService) { }

  ngOnInit() {
    
    this.detailedForm = this.data.detailsForm;
    this.data.verifyEmitter.subscribe((req) => {
      console.log(req);
      this.cname=!req[0];
      this.ctype=!req[1];
    });
     
  }

formSubmit(){
  
}  

add_batch(){
  this.data.add_batch();
}


}
