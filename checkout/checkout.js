const products=[{
    Image:'images/Indian Sandalwood-Sandalwood Attar- ITR - Concentrated Perfume Oil (CPO) - Natural Perfume - Alcohol Free - Import Oil - Long Lasting.jpg',
    name:' Indian Sandalwood-Sandalwood Attar- ITR -Concentrated Perfume Oil CPO - Natural Perfume Alcohol Free - Import Oil - Long Lasting',
    price:355
},{
    Image:'images/Touch Perfume oil 5ml - Yellow.jpg',
    name:'Touch oil purfume 5ml- Yellow',
    price:10

},{
    image:'images/White Musk (Clear Oil) 12 mL Perfume Fragrance for Women and Men in Traditional Attar Style Cologne_ Great Gift Party Favor and Pocket Size.jpg',
    name:'White Musk (Clear Oil) 12 mL Perfume Fragrance for Women and Men in Traditional Attar Style Cologne_ Great Gift Party Favor and Pocket Size',
    price:310
}];

let productsHtml=''
products.forEach(products => {
    productsHtml +=`
        <div class="Touch">
        <img src="${products.image}" alt="Touch" height="190PX" width="200px">
        <p>${products.name}</p>
        <p>GHS${products.price}</p>
        <button>ADD TO CART</button>
        </div>
        <div class="Musk">
        <img src="${products.image}" alt="WHITE MUSK" height="220px" width="150px">
        <p>${products.name}</p>
        <p>GHS ${products.price}</p>
        <button>ADD TO CART</button>
        </div> 
        <div class="India">
      <img src="${products.image}" alt="AURASENSA" style="color: beige;" height="190px" width="200px">
        <p>
           ${products.name}
        </p>
        <p>ghs ${products.price}</p></p>
        
        
        <button>ADD TO CART</button>

        </div>`;
        });
        console.log(productsHtml);

        document.querySelector('.container').innerHTML=productsHtml;