import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/entities/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  currentCategoryId: number;
  currentCategoryName: string;
  searchMode: boolean;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.hanldeSearchProducts();
    } else {
      this.hanldeListProducts();
    }
  }

  hanldeListProducts() {
    // che ck if id parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    console.log(this.route);
    if (hasCategoryId) {
      // get the id param string and convert to a number using the "+";
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
    } else {
      // not category id available ... default to 1 as id
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Book';
    }

    // get the proudcts for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  hanldeSearchProducts() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // now search the keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
        // Check results

        this.currentCategoryName = `Search results for '${theKeyword}'`;

      }
    );
  }
}
