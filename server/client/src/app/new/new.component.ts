import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

    productGroup: number;
    products = [];

  constructor(private route: ActivatedRoute ,private rest: RestService) {
    this.productGroup = route.snapshot.data['group'];
  }

  ngOnInit() {
    console.log(this.productGroup);
    this.rest.showProduct(this.productGroup).subscribe(products=> {
      this.products = products;
    })
  }


}
