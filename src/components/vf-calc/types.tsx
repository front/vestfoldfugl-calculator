
export interface Product {
  id: number,
  title: string,
  name: string,
}

export interface Ingredient {
  name?: string,
  product_id?: number,
  product?: Product,
  unit?: string,
  value?: number,
}
