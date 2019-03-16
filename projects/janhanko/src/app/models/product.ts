import { ProductParam } from './product-param';

export interface Product {
  id: string;
  name: string;
  images: string[];
  params: ProductParam[];
  price: number;
  available_params: ProductParam[];
}
