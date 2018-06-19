
import { Ingredient } from './types';

export function getQuantity (item: Ingredient, defaultNum: number, numPersons: number) : string {
  let { value, unit } = item;
  if(!value) {
    return '';
  }

  const qty = value * numPersons / (defaultNum || 1);
  let res = qty.toString();

  if(unit === 'g' || unit === 'ml') {
    res = Math.round(qty).toString();
  }
  else if(qty % 1) {
    res = qty.toFixed(1);
  }
  return `${res} ${unit || ''}`;
}
