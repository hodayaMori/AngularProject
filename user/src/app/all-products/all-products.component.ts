import { Component } from '@angular/core';
import { product } from 'src/models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  public arr:product[]=[new product(1,"hhh",78,"assets/img/imges-Salty/image1.jpg","solty"),
  new product(1,"hhh",78,"assets/img/imges-Salty/image2.jpg","solty"),
  new product(2,"hhh",758,"assets/img/imges-Salty/image3.jpg","solty"),
  new product(3,"hhh",100,"assets/img/images-Sweet/image1S.jpg","sweet"),
  new product(5,"hhh",780,"assets/img/images-Sweet/image2S.jpg","sweet"),
  new product(1,"hhh",728,"assets/img/images-Sweet/image3S.jpg","sweet")
]
}
