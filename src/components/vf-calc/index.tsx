
import { Component, Prop, State } from '@stencil/core';
import { Ingredient } from './types';
import { getQuantity } from './helpers';
import { getRecipe } from '../../api';


@Component({
  tag: 'vf-calc',
  // styleUrl: 'style.scss',
  // shadow: true
})
export class VestfoldFuglCalc {
  @Prop() recipeId: number;

  @State() loaded: boolean = false;
  @State() numPersons: number = 1;
  @State() defaultNum: number = 1;
  @State() ingredients: Ingredient[] = [];
  @State() title: string = '';

  async componentDidLoad () {
    const recipe = await getRecipe(this.recipeId);
    if(!recipe) {
      return console.error('Failed to load recipe');
    }

    // Load and set number of persons
    const saved = localStorage.getItem('numPersons');
    this.defaultNum = parseInt(recipe.persons) || 4;
    this.numPersons = parseInt(saved) || this.defaultNum;

    // Assign ingredients and title
    this.ingredients = recipe.ingredients;
    this.title = recipe.ingredients_text || '';

    this.loaded = true;
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
    const { numPersons, defaultNum, ingredients, loaded } = this;
    if(!loaded) {
      return null;
    }

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
