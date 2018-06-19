
import { Component, Prop, State } from '@stencil/core';
import { Ingredient } from './types';
import { getRecipe } from '../../api';


function getQuantity (item: Ingredient, defaultNum: number, numPersons: number) : string {
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


@Component({
  tag: 'vf-calc',
  // styleUrl: 'style.scss',
  // shadow: true
})
export class VestfoldFuglCalc {
  @Prop() recipeId: number;

  @State() numPersons: number = 1;
  @State() defaultNum: number = 1;
  @State() ingredients: Ingredient[] = [];
  @State() title: string = '';

  async componentDidLoad () {
    const recipe = await getRecipe(this.recipeId);
    if(!recipe) {
      return;
    }

    // Load and set number of persons
    const saved = localStorage.getItem('numPersons');
    this.defaultNum = parseInt(recipe.persons) || 4;
    this.numPersons = parseInt(saved) || this.defaultNum;

    // Assign ingredients and title
    this.ingredients = recipe.ingredients;
    this.title = recipe.ingredients_text || '';
  }

  addPerson = ev => {
    ev.preventDefault();
     this.numPersons++;
     // Save setting
     localStorage.setItem('numPersons', this.numPersons.toString());
  };

  removePerson = ev => {
    ev.preventDefault();
    if(this.numPersons > 1) {
      this.numPersons--;
    }
    // Save setting
    localStorage.setItem('numPersons', this.numPersons.toString());
  };

  render () {
    const { numPersons, defaultNum, ingredients } = this;
    return (
      <div class="ingridient-wrapper">
        <header>
          <h3>Antall porsjoner</h3>
          <div>
            <a href="" class="minus" onClick={ this.removePerson }>-</a>
            <span>{ numPersons }</span>
            <a href="" class="plus" onClick={ this.addPerson }>+</a>
          </div>
        </header>
        <div>
          <h4>Ingredienser</h4>
          <ul>
            { ingredients.map(item => (
              <li class="ingredient">
                { item.product ?
                  <a href={`/produkter/${item.product.name}/`}>
                    { getQuantity(item, defaultNum, numPersons) } {item.product.title}
                  </a> :
                  <span>{ getQuantity(item, defaultNum, numPersons) } {item.name}</span>
                }
              </li>
            )) }
          </ul>
          <div class="recipe-tree">
            <div data-anim="blow" data-blow-dir="1"></div>
            <div data-anim="blow" data-blow-dir="1"></div>
          </div>
        </div>
      </div>
    );
  }
}
