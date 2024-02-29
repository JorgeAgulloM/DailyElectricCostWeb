import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
import { FormComponent } from "../form/form.component";

@Component({
  selector: "app-product",
  standalone: true,
  imports: [FormComponent],
  templateUrl: "./product.component.html",
  styleUrl: "./product.component.css",
})
export class ProductComponent implements OnInit {
  
  products: Product[] = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.findAll().subscribe(products => this.products = products);
  }
}
