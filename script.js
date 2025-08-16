fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('product-list');
    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.price}</p>
        <a href="${product.link}" target="_blank">Voir sur Amazon</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Erreur chargement produits:', err));
