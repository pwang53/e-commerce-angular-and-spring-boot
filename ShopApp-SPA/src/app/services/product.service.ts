import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../entities/product';
import { ProductCategory } from '../entities/product-category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

    //private baseUrl = 'http://localhost:8080/api/products';
    //Spring Data JPA return only the first page of 20 items, to change that add size behind
    private productUrl = 'http://localhost:8080/api/products';

    private categoryUrl = 'http://localhost:8080/api/product-category';

    constructor(private httpClient: HttpClient) { }

    getProductList(categoryId: number): Observable<Product[]> {
        const searchUrl = `${this.productUrl}/search/findByCategoryId?id=${categoryId}`;

        // console.log(searchUrl);
        // this.httpClient.get<GetResponse>(searchUrl).pipe(
        //     map(response => response._embedded.products)
        // ).subscribe(data => console.log(data))
        // ;

        // this.httpClient.get<Product[]>(searchUrl).
        //     pipe(map(response => response)).subscribe(data => console.log(data['_embedded']['products']));

        // return this.httpClient.get<Product[]>(searchUrl).pipe(map(data => data['_embedded']['products']));
        return this.getProducts(searchUrl);
    }

    getProductCategories(): Observable<ProductCategory[]> {

        return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
            map(response => response._embedded.productCategory)
        );
    }

    //http://localhost:8080/api/products/search/findByNameContaining?name=mug
    searchProducts(theKeyword: string): Observable<Product[]> {
        const searchUrl = `${this.productUrl}/search/findByNameContaining?name=${theKeyword}`;

        return this.getProducts(searchUrl);
    }

    getProducts(searchUrl: string): Observable<Product[]> {
        return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
            map(response => response._embedded.products)
        );
    }
}

interface GetResponseProducts {
    _embedded: {
        products: Product[];
    };
}

interface GetResponseProductCategory {
    _embedded: {
        productCategory: ProductCategory[];
    };
}