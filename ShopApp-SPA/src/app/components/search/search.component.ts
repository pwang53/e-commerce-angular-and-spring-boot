import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router,
              private productService: ProductService) { }

  ngOnInit() {
  }

  doSearch(input: string) {
    console.log(`keyword: ${input}`);
    this.router.navigateByUrl(`/search/${input}`);
  }
}
