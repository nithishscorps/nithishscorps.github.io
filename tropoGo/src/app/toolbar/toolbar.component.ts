import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  load: number;

  constructor(private ac:Router) { }

  ngOnInit() {

    this.ac.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        
        e.url === "/mainLoad" ? this.load=40:this.load=80;
       
      }
    });
    
  }
}
