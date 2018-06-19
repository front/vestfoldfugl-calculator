
import { Component, Prop, State } from '@stencil/core';

interface Ingredient {
  unit?: string,
  quantity?: number,
  name: string,
}

function getQuantity (item: Ingredient, defaultNum: number, numPersons: number) : string {
  let { quantity, unit } = item;
  if(!quantity) {
    return '';
  }

  const qty = quantity * numPersons / (defaultNum || 1);
  let value = qty.toString();

  if(unit === 'g' || unit === 'ml') {
    value = Math.round(qty).toString();
  }
  else if(qty % 1) {
    value = qty.toFixed(1);
  }
  return `${value} ${unit || ''}`;
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

  componentDidLoad () {
    console.log('Loading recipe', this.recipeId);

    setTimeout(() => {
      console.log('Data loaded');

      this.numPersons = 4;
      this.defaultNum = 4;
      this.ingredients.push({
        unit: 'g',
        quantity: 50,
        name: 'grønne erter',
      }, {
        quantity: 1,
        name: 'nevne pinjekjerner',
      }, {
        unit: 'dl',
        quantity: 2,
        name: 'olivenolje',
      }, {
        name: 'Basilikum',
      });
    },
    250);
  }

  addPerson = ev => {
    ev.preventDefault();
     this.numPersons++;
  };

  removePerson = ev => {
    ev.preventDefault();
    if(this.numPersons > 1) {
      this.numPersons--;
    }
  };

  render () {
    const { numPersons, defaultNum, ingredients } = this;
    return (
      <div class="container">
        <header>
          <p>Antall Porsjoner</p>
          <h2>
            <a href="" class="minus" onClick={ this.removePerson }></a>
            <span>{ numPersons } personer</span>
            <a href="" class="plus" onClick={ this.addPerson }></a>
          </h2>
        </header>
        <p>Ingredienser</p>
        <table>
          { ingredients.map(item => (
            <tr>
              <td>· { getQuantity(item, defaultNum, numPersons) }</td>
              <td>{ item.name }</td>
            </tr>
          )) }
        </table>
      </div>
    );
  }
}
