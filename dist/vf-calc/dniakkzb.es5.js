/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function u(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=r[2&o[0]?"return":o[0]?"throw":"next"])&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[0,i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};VfCalc.loadBundle("dniakkzb",["exports"],function(e){var t=window.VfCalc.h,n="/wp-json/api/v1/recipe";window.location.host.includes("localhost")&&(n="https://vestfoldfugl.devz.no"+n);var r=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function u(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((r=r.apply(e,t||[])).next())})},i=function(){function e(){var e=this;this.numPersons=1,this.defaultNum=1,this.ingredients=[],this.title="",this.addPerson=function(t){t.preventDefault(),e.numPersons++,localStorage.setItem("numPersons",e.numPersons.toString())},this.removePerson=function(t){t.preventDefault(),e.numPersons>1&&e.numPersons--,localStorage.setItem("numPersons",e.numPersons.toString())}}return e.prototype.componentDidLoad=function(){return r(this,void 0,void 0,function(){var e,t;return __generator(this,function(i){switch(i.label){case 0:return[4,function(e){return r(this,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch(n+"/"+e)];case 1:return[4,r.sent().json()];case 2:return[2,r.sent()];case 3:return t=r.sent(),console.log(t),[2,null];case 4:return[2]}})})}(this.recipeId)];case 1:return e=i.sent(),console.log("Recipe",this.recipeId,e),t=localStorage.getItem("numPersons"),this.numPersons=parseInt(t)||4,this.defaultNum=e.default_persons||4,this.ingredients=e.ingredients,this.title=e.ingredients_text,[2]}})})},e.prototype.render=function(){var e=this.numPersons,n=this.defaultNum,r=this.ingredients;return t("div",{class:"ingridient-wrapper"},t("header",null,t("h3",null,"Antall porsjoner"),t("div",null,t("a",{href:"",class:"minus",onClick:this.removePerson},"-"),t("span",null,e),t("a",{href:"",class:"plus",onClick:this.addPerson},"+"))),t("div",null,t("h4",null,"Ingredienser"),t("ul",null,r.map(function(r){return t("li",{class:"ingredient-text"},function(e,t,n){var r=e.value,i=e.unit;if(!r)return"";var o=r*n/(t||1),s=o.toString();return"g"===i||"ml"===i?s=Math.round(o).toString():o%1&&(s=o.toFixed(1)),s+" "+(i||"")}(r,n,e)," ",r.name)})),t("div",{class:"recipe-tree"},t("div",{"data-anim":"blow","data-blow-dir":"1"}),t("div",{"data-anim":"blow","data-blow-dir":"1"}))))},Object.defineProperty(e,"is",{get:function(){return"vf-calc"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{defaultNum:{state:!0},ingredients:{state:!0},numPersons:{state:!0},recipeId:{type:Number,attr:"recipe-id"},title:{state:!0}}},enumerable:!0,configurable:!0}),e}();e.VfCalc=i,Object.defineProperty(e,"__esModule",{value:!0})});