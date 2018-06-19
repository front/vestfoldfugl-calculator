
let endpoint = '/wp-json/api/v1';
const host = window.location.host;

if(host.includes('localhost')) {
  endpoint = `https://vestfoldfugl.devz.no${endpoint}`;
}

export async function getRecipe (id) {
  try {
    const res = await fetch(`${endpoint}/recipe/${id}`);
    const data = await res.json();
    return data;
  }
  catch(err) {
    console.log(err);
    return null;
  }
}

export async function getProduct (id) {
  try {
    const res = await fetch(`${endpoint}/product/${id}`);
    const data = await res.json();
    return data;
  }
  catch(err) {
    console.log(err);
    return null;
  }
}
