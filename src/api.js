
let endpoint = '/wp-json/api/v1/recipe';
const host = window.location.host;

if(host.includes('localhost')) {
  endpoint = `https://vestfoldfugl.devz.no${endpoint}`;
}

export async function getRecipe (id) {
  try {
    const res = await fetch(`${endpoint}/${id}`);
    const data = await res.json();
    return data;
  }
  catch(err) {
    console.log(err);
    return null;
  }
}
