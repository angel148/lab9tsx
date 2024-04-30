( async () => {

  const ID = Math.ceil(Math.random() * 100);

  const response = await fetch(`https://dummyjson.com/products/${ID}`);
  const data = await response.json();
  console.log(data);
  

})();