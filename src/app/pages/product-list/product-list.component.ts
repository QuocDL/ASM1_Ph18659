import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = []  
  constructor(
    private Services: ProductService
  ){}
ngOnInit():void{
  this.loadProduct()
}
loadProduct():void{
  this.Services.getProduct().subscribe((data)=>{
    this.products = data
  })
}
}
