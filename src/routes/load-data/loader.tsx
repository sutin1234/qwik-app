import { loader$ } from '@builder.io/qwik-city';
import { products } from "./products";

export const useProductsLoader = loader$(() => {
  return products;
});
