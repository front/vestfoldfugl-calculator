
let endpoint = '/wp-json/api/v1';
const host = window.location.host;

if(host.includes('localhost') || host.includes('127.0.0.1')) {
  endpoint = `https://vestfoldfugl.devz.no${endpoint}`;
}

export async function getRecipe (id) {
  try {
    const res = await fetch(`${endpoint}/recipe/${id}`);
    if(res.status > 299) {
      return null;
    }
    return await res.json();
  }
  catch(err) {
    console.log(err);
    return null;
  }
}

export async function getProduct (id) {
  try {
    const res = await fetch(`${endpoint}/product/${id}`);
    if(res.status > 299) {
      return null;
    }
    return await res.json();
  }
  catch(err) {
    console.log(err);
    return null;
  }
}
