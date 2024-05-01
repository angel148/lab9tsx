import fetch from 'node-fetch';

(async () => {
  const id = Math.floor(Math.random() * 100);
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  const data = await response.json();
 
})();
