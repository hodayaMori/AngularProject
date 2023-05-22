import { Component } from '@angular/core';
import { product } from 'src/models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  public arr:product[]=[  new product(2,"hhh",758,"assets/imges-Salty/image8.jpg","solty"),
   

  new product(2,"hhh",758,"assets/imges-Salty/image3.jpg","solty"),
  new product(1,"hhh",78,"../assets/imges-Salty/image2.jpg","solty"),
  new product(1,"hhh",78,"assets/imges-Salty/image1.jpg","solty"),
  new product(2,"hhh",758,"assets/imges-Salty/image4.jpg","solty"),
  new product(2,"hhh",758,"assets/imges-Salty/image5.jpg","solty"),
  new product(2,"hhh",758,"assets/imges-Salty/image4.jpg","solty"),
  new product(2,"hhh",758,"assets/imges-Salty/image7.jpg","solty"),
  new product(2,"hhh",758,"assets/imges-Salty/image9.jpg","solty"),
  new product(3,"hhh",100,"assets/images-Sweet/image1S.jpg","sweet"),
  new product(5,"hhh",780,"assets/images-Sweet/image2S.jpg","sweet"),
  new product(1,"hhh",728,"assets/images-Sweet/image3S.jpg","sweet"),
  new product(1,"hhh",728,"assets/images-Sweet/image4S.jpg","sweet"),
  new product(1,"hhh",728,"assets/images-Sweet/image5S.jpg","sweet"),
  new product(1,"hhh",728,"assets/images-Sweet/image6S.jpg","sweet"),
  new product(1,"hhh",728,"assets/images-Sweet/image7S.jpg","sweet"),
  new product(1,"hhh",728,"assets/images-Sweet/image8S.jpg","sweet"),
  new product(1,"hhh",728,"assets/images-Sweet/image9S.jpg","sweet"),

]

}
