import {Trinkort} from "./trinkort-model";

export interface Kneipentour {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  trinkorte?: Trinkort[];
}
