import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts : string = "./assets/images/allProducts.jpg"
  foodGrains :string ="./assets/images/foodGrains.jpg"
  Vegetables :string ="./assets/images/vegetables.jpg"
  NonVeg :string ="./assets/images/nonveg.jpg"

  public AllProductList : any ;
  
  


  constructor(private api :ApiService,private cartService : CartService,private router: Router) { }
  adminLogin(): void{
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.api.getAllProduct()
    .subscribe(res=>{
      this.AllProductList = res;

      this.AllProductList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
    
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}