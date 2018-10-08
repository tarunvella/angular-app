import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductListComponent {
    productListTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    products: any[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "./assets/images/Leaf-Rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode" : "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "./assets/images/garden-cart.png"
          },
    ];
}