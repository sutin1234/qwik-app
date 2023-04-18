export interface Product {
    id: number;
    name: string;
    description: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Wood Table",
      description: "A wood table",
    },
    {
      id: 2,
      name: "Plastic Table",
      description: "A plastic table",
    },
  ];