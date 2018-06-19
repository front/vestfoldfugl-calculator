var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getRecipe } from '../../api';
function getQuantity(item, defaultNum, numPersons) {
    let { value, unit } = item;
    if (!value) {
        return '';
    }
    const qty = value * numPersons / (defaultNum || 1);
    let res = qty.toString();
    if (unit === 'g' || unit === 'ml') {
        res = Math.round(qty).toString();
    }
    else if (qty % 1) {
        res = qty.toFixed(1);
    }
    return `${res} ${unit || ''}`;
}
export class VestfoldFuglCalc {
    constructor() {
        this.numPersons = 1;
        this.defaultNum = 1;
        this.ingredients = [];
        this.title = '';
        this.addPerson = ev => {
            ev.preventDefault();
            this.numPersons++;
            // Save setting
            localStorage.setItem('numPersons', this.numPersons.toString());
        };
        this.removePerson = ev => {
            ev.preventDefault();
            if (this.numPersons > 1) {
                this.numPersons--;
            }
            // Save setting
            localStorage.setItem('numPersons', this.numPersons.toString());
        };
    }
    componentDidLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            const recipe = yield getRecipe(this.recipeId);
            console.log('Recipe', this.recipeId, recipe);
            // Load setting
            const saved = localStorage.getItem('numPersons');
            this.numPersons = parseInt(saved) || 4;
            this.defaultNum = recipe.default_persons || 4;
            this.ingredients = recipe.ingredients;
            this.title = recipe.ingredients_text;
        });
    }
    render() {
        const { numPersons, defaultNum, ingredients } = this;
        return (h("div", { class: "ingridient-wrapper" },
            h("header", null,
                h("h3", null, "Antall porsjoner"),
                h("div", null,
                    h("a", { href: "", class: "minus", onClick: this.removePerson }, "-"),
                    h("span", null, numPersons),
                    h("a", { href: "", class: "plus", onClick: this.addPerson }, "+"))),
            h("div", null,
                h("h4", null, "Ingredienser"),
                h("ul", null, ingredients.map(item => (h("li", { class: "ingredient-text" },
                    getQuantity(item, defaultNum, numPersons),
                    " ",
                    item.name)))),
                h("div", { class: "recipe-tree" },
                    h("div", { "data-anim": "blow", "data-blow-dir": "1" }),
                    h("div", { "data-anim": "blow", "data-blow-dir": "1" })))));
    }
    static get is() { return "vf-calc"; }
    static get properties() { return {
        "defaultNum": {
            "state": true
        },
        "ingredients": {
            "state": true
        },
        "numPersons": {
            "state": true
        },
        "recipeId": {
            "type": Number,
            "attr": "recipe-id"
        },
        "title": {
            "state": true
        }
    }; }
}
