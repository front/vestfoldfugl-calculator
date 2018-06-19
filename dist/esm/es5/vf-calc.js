var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/*! Built with http://stenciljs.com */
import { h } from './vf-calc.core.js';
var endpoint = '/wp-json/api/v1/recipe';
var host = window.location.host;
if (host.includes('localhost')) {
    endpoint = "https://vestfoldfugl.devz.no" + endpoint;
}
function getRecipe(id) {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(endpoint + "/" + id)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [2 /*return*/, null];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getQuantity(item, defaultNum, numPersons) {
    var value = item.value, unit = item.unit;
    if (!value) {
        return '';
    }
    var qty = value * numPersons / (defaultNum || 1);
    var res = qty.toString();
    if (unit === 'g' || unit === 'ml') {
        res = Math.round(qty).toString();
    }
    else if (qty % 1) {
        res = qty.toFixed(1);
    }
    return res + " " + (unit || '');
}
var VestfoldFuglCalc = /** @class */ (function () {
    function VestfoldFuglCalc() {
        var _this = this;
        this.numPersons = 1;
        this.defaultNum = 1;
        this.ingredients = [];
        this.title = '';
        this.addPerson = function (ev) {
            ev.preventDefault();
            _this.numPersons++;
            // Save setting
            localStorage.setItem('numPersons', _this.numPersons.toString());
        };
        this.removePerson = function (ev) {
            ev.preventDefault();
            if (_this.numPersons > 1) {
                _this.numPersons--;
            }
            // Save setting
            localStorage.setItem('numPersons', _this.numPersons.toString());
        };
    }
    VestfoldFuglCalc.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var recipe, saved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getRecipe(this.recipeId)];
                    case 1:
                        recipe = _a.sent();
                        console.log('Recipe', this.recipeId, recipe);
                        saved = localStorage.getItem('numPersons');
                        this.numPersons = parseInt(saved) || 4;
                        this.defaultNum = recipe.default_persons || 4;
                        this.ingredients = recipe.ingredients;
                        this.title = recipe.ingredients_text;
                        return [2 /*return*/];
                }
            });
        });
    };
    VestfoldFuglCalc.prototype.render = function () {
        var _a = this, numPersons = _a.numPersons, defaultNum = _a.defaultNum, ingredients = _a.ingredients;
        return (h("div", { class: "ingridient-wrapper" }, h("header", null, h("h3", null, "Antall porsjoner"), h("div", null, h("a", { href: "", class: "minus", onClick: this.removePerson }, "-"), h("span", null, numPersons), h("a", { href: "", class: "plus", onClick: this.addPerson }, "+"))), h("div", null, h("h4", null, "Ingredienser"), h("ul", null, ingredients.map(function (item) { return (h("li", { class: "ingredient-text" }, getQuantity(item, defaultNum, numPersons), " ", item.name)); })), h("div", { class: "recipe-tree" }, h("div", { "data-anim": "blow", "data-blow-dir": "1" }), h("div", { "data-anim": "blow", "data-blow-dir": "1" })))));
    };
    Object.defineProperty(VestfoldFuglCalc, "is", {
        get: function () { return "vf-calc"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VestfoldFuglCalc, "properties", {
        get: function () {
            return {
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
            };
        },
        enumerable: true,
        configurable: true
    });
    return VestfoldFuglCalc;
}());
export { VestfoldFuglCalc as VfCalc };
