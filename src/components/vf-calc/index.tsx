
import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'vf-calc',
  styleUrl: 'style.css',
  shadow: true
})
export class VestfoldFuglCalc {
  @Prop() recipeId: number;

  @State() numPersons: number = 1;
  @State() defaultNum: number = 1;
  @State() ingredients: any[] = [];

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
        unit: 'dl',
        quantity: 2,
        name: 'olivenolje',
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
              <td>{ Math.round(item.quantity * numPersons / defaultNum) } { item.unit }</td>
              <td>{ item.name }</td>
            </tr>
          )) }
        </table>
      </div>
    );
  }
}
