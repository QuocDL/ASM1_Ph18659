import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  Product!: Product
  constructor(
    private Service: ProductService,
    private route: ActivatedRoute
  ){}

  ngOnInit():void{
    this.loadProduct()
  }

  loadProduct():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.Service.getDetailProduct(id).subscribe((data)=>{
      this.Product = data
    })
  }
}
