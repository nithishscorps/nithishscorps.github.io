import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  cities:string[] = ["bangalore","chennai","hyderabad","mumbai","delhi"];
  languages:string[]=["hindi","english","telugu"];
  expansionForm: FormGroup;
  expansionFormArr: FormGroup[]=[];
  detailsForm:FormGroup;
  items = [[],[],[]];
  j=0;
  
  requiredEmitter = new Subject<boolean>();
  verifyEmitter = new Subject<boolean[]>();
  name: boolean;
  air: boolean;
  cst: boolean;
  cty: boolean;

  constructor() { 
    this.expansionForm = new FormGroup({
      city: new FormControl(null,Validators.required),
      lng: new FormControl(null,Validators.required),
      cost: new FormControl(null,Validators.required),
      weekend: new FormControl(null,Validators.required)
  });
  this.expansionFormArr.push(this.expansionForm);

  this.detailsForm = new FormGroup({
    course_name: new FormControl(null,Validators.required),
    aircraft_type: new FormControl(null,Validators.required),
    course_details: new FormControl(null,Validators.required)
});
  
  }

  add_batch(){
    this.expansionFormArr.push(new FormGroup({
      city: new FormControl(null,Validators.required),
      lng: new FormControl(null,Validators.required),
      cost: new FormControl(null,Validators.required),
      weekend: new FormControl()
  }));
    console.log(this.expansionFormArr);
    console.log(this.detailsForm);
  
  }
  
  reset(i){
    this.expansionFormArr[i].reset({});
  }
  
  delete(i){
    if(this.expansionFormArr.length > 1)
    this.expansionFormArr.splice(i,1);
  }
  
  deleteFile(i,j){
    this.items[i].splice(j,1);
  }
  upload(i){
    this.items[i].push("file" + this.j + ".pdf");
    this.j=this.j+1;
  }

  formVerification(){//console.log(this.detailsForm.get('course_name').valid);
    this.detailsForm.get('course_name').valid ? this.name = true:this.name = false;
    this.detailsForm.get('aircraft_type').valid ? this.air = true:this.air = false;
    this.expansionForm.get('cost').valid ? this.cst = true:this.cst = false;
    this.expansionForm.get('city').valid ? this.cty = true:this.cty = false;
    this.verifyEmitter.next([this.name,this.air,this.cst,this.cty]);
  }

}
