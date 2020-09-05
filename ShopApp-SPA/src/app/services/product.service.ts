import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../entities/product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

    //private baseUrl = 'http://localhost:8080/api/products';
    //Spring Data JPA return only the first page of 20 items, to change that add size behind
    private baseUrl = 'http://localhost:8080/api/products';

    constructor(private httpClient: HttpClient) { }

    getProductList(categoryId: number): Observable<Product[]> {
        const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}&size=12`;

        console.log(searchUrl);
        return this.httpClient.get<GetResponse>(searchUrl).pipe(
            map(response => response._embedded.products)
        );
    }
} 

interface GetResponse {
    _embedded: {
        products: Product[];
    };
}
