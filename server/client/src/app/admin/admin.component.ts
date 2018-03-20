import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService} from '../rest.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  fromAdmin=[];

  constructor(private route: ActivatedRoute, private rest:RestService) {
   }
 
 sendData(newProduct) {
     this.rest.admin(newProduct).subscribe(res=> {

    })
 }

  ngOnInit() {
   

  }
}
