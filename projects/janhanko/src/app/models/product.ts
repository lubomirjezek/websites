import { ProductParam } from './product-param';
import { Image } from './image';

export interface Product {
  id: string;
  name: string;
  images: Image[];
  params: ProductParam[];
  price: number;
  available_params: ProductParam[];
}
