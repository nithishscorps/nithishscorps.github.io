import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, NavigationStart } from '@angular/router';
import { DataStorageService } from '../service/data-storage.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  load: number;

  constructor(private data:DataStorageService){ }

  ngOnInit() {

    this.data.componentEmitter.subscribe(comp => {
           comp === "upload" ? this.load=40:this.load=80;
    });
    
  }
}
