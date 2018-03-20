import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

     productid: number;
    product= {} ;

  constructor(private route: ActivatedRoute ,private rest: RestService) {
    this.productid = route.snapshot.params['id'];
  }

  ngOnInit() {
    console.log(this.productid);
    this.rest.showProductdetails(this.productid).subscribe(product=> {
      this.product = product;
    })
  }

}
