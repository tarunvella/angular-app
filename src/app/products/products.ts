// This is a specification related to set of
// properties and methods, an interface will be used as a data type
export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
  // declaring method name
  // calculateDiscount(percent:number):number;
}

//a class commits to supporting the specification by implementing the interface

export class Product implements IProduct {

  constructor(
    /**
     *  productId: number;
     *  productName: string;
     *  productCode: string;
     *  releaseDate: string;
     *  description: string;
     *  price: number;
     *  starRating: number;
     *  imageUrl: string;
     */
      public productId: number,
      public productName: string,
      public productCode: string,
      public releaseDate: string,
      public description: string,
      public price: number,
      public starRating: number,
      public imageUrl: string){

      }
    }
