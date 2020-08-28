import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../service/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private data:DataStorageService,private router:Router) { }

  ngOnInit() {
  }

  next(){
    if(this.data.items[this.data.items.length-1].length > 0){
       this.router.navigate(['/formPage']);
    }
    else {
      this.data.requiredEmitter.next(true);
    }
  }

}
