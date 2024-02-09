/*function of sliding ads*/
var images = ['imgcard/frag.jpg', 'imgcard/ABOUT-US1.jpg', 'imgcard/ww.jpg', 'imgcard/Apple_Macbook_Pro_2021_10_19_17_09_32.jpg', 'imgcard/gh-best-skincare-products-6557978b58b57.png', ];
var imageElement = document.getElementById('image');
var nextBtn = document.getElementById('nad');
let currentimg = 0;
function updateImage(){
    imageElement.src = images[currentimg];
}
function nextads(){
    currentimg++;

    if (currentimg >= images.length){
        currentimg = 0;
    }

    updateImage();
}

function backads() {
    currentimg--;

    if (currentimg < 0) {
        currentimg = images.length - 1;
    }

    updateImage();
}
/*function of slidingads-close*/

// menu function //
function menufunction(){
    var menuContainer = document.getElementById('menucon');

    if (menuContainer.style.visibility === 'visible'){
        menuContainer.style.visibility = 'hidden';
    } else{
        menuContainer.style.visibility = 'visible';
    }
}
//menufunctuin-close/
//featured 1//
function featured1(){
    
}
// featured1//
  
// function of cart function //

function cartFunction(){
   
 var cartIcon = document.querySelector('#cart i');
 if (cartIcon.classList.contains('bx-cart')){
    cartIcon.classList.remove('bx-cart');
    cartIcon.classList.add('bxs-cart');
 } else {
    cartIcon.classList.remove('bxs-cart');
    cartIcon.classList.add('bx-cart');
 }
    var cartContainer = document.getElementById('cartcon');
    if(cartContainer.style.display === 'block'){
        cartContainer.style.display = 'none';
    } else {
        cartContainer.style.display = 'block';
    }
}

//function of cart function//
// featured1//

    var images1 = ['imgcard/ph-11134207-7qukx-lgnjnjg8t7mub4.jpg', 'imgcard/swat1.jpg', 'imgcard/swat2.jpg', 'imgcard/swat3.jpg', 'imgcard/swat4.jpg', ];
    var imageElement1 = document.getElementById('image1');
    var nextarrow1 = document.getElementById('f1arrow');
    let currentImg1 = 0;

function updateImage1(){
  imageElement1.src = images1[currentImg1];
}
function f1arrow() {
    currentImg1++;
    if (currentImg1 >= images1.length) {
        currentImg1 = 0;
    }
    updateImage1();
}

function f1arrowback(){
    currentImg1--;
    if (currentImg1 < 0){
        currentImg1 = images1.length - 1;
    }
    updateImage1();
}








function featured1(){
    var featured1 = document.getElementById('featured1');
    var overflow = document.getElementById('overflow');

    if (overflow.style.display === 'block'){
        overflow.style.display = 'none';
    } else {
        overflow.style.display = 'block';
    }

    if (featured1.style.display === 'none'){
        featured1.style.display = 'block';
    } else {
        featured1.style.display = 'block';
    }
}

function cancelfeatured1(){
    var featured1 = document.getElementById('featured1');
   var overflow = document.getElementById('overflow');
    featured1.style.display = 'none';
    overflow.style.display = 'none';
}

// ffeatured1-close//

// array//
let shoppingCart = [];
//done//

//fetch////
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
    var products = data.products;


    var mainshopContainer = document.getElementById('mainshopContainer');
  

    products.forEach(product => {
        var productDiv = document.createElement('div');
        productDiv.className = 'mainshopimgbox';
        productDiv.onclick = () => handleOnClickContainers();
        function handleOnClickContainers(){
            updateContainer();
            var mainProductCotaniner = document.getElementById('mainProductContainer');
            var overflow = document.getElementById('overflow');
            mainProductCotaniner.style.display = 'block';
            overflow.style.display = 'block';
            var imageMain = document.createElement('img');
            imageMain.src = product.thumbnail;
            imageMain.id = 'imgSrc';
            imageMain.alt = product.title;
            mainProductCotaniner.appendChild(imageMain);
        }
        // use later: Product containers//
        //productDiv.onclick = () => handleOnClickEvents(product);
        //function handleOnClickEvents(product){
            //alert(`test ${product.title}`);
            //shoppingCart.push(product);
            //var ul = document.getElementById('list');
        
            //var li = document.createElement('li');
            //var imgProduct = document.createElement('img');
            //imgProduct.src = product.thumbnail;
            //imgProduct.alt = product.title;
        
            //ul.appendChild(li);
            //li.appendChild(imgProduct);
        
         
       // }//
    


        


 
        var mainshopdescription = document.createElement('div');
        mainshopdescription.className = 'mainshopdescription';
        mainshopdescription.innerHTML = `<h1>${product.title}</h1> <p>Price:  ₱${product.price}</p`;
        var discountedPrice = document.createElement('div');
 
        discountedPrice.innerHTML = `<p id="discounted">${product.discountPercentage}% OFF</p>`
        productDiv.appendChild(discountedPrice);
        var productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productImage.alt = product.title;
       
        productDiv.appendChild(mainshopdescription);
        productDiv.appendChild(productImage);
        mainshopContainer.appendChild(productDiv);
    });

    
    
})
.catch(error => {
    console.error('Error fetching data: ', error);
});








//fetch--end//

// function of each product Containers //

function eliminate(){
 var mainProductContainer = document.getElementById('mainProductContainer');
 

  if (mainProductContainer.style.display === 'block'){
    mainProductContainer.style.display = 'none';
    overflow.style.display = 'none';
 
    
  } else {
   
  }
}
function updateContainer(){
 var mainProductContainer = document.getElementById('mainProductContainer');

 var productImage = mainProductContainer.querySelector('img');
 if (productImage){
    
    productImage.remove();
 }
   
}
//done//

// fetch categories//

fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(categories => {
       
        categories.forEach(category => {
         
            const categoryElement = document.createElement('div');
            categoryElement.id = 'categoryele';
         
         
            var ulcategory = document.createElement('ul');
            
            var licategory = document.createElement('li');
            licategory.textContent = category;
            

            categoryElement.appendChild(ulcategory);

            categoryElement.appendChild(licategory);
            document.getElementById('navside').appendChild(categoryElement);

           
            categoryElement.addEventListener('click', () => {
            
                fetchItems(category);
            });
        });
    })
    .catch(error => {
        console.error('Error fetching categories:', error);
    });
//fetch categories//

document.getElementById('recommended').addEventListener('click', function(){
    fetchAllProducts();
    function fetchAllProducts(){
        fetchItems('');
    }
});
//feth product category//
function fetchItems(category){
    const url = category === '' ? 'https://dummyjson.com/products' : `https://dummyjson.com/products/category/${category}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (Array.isArray(data.products)){
                displayItems(data.products);
            } else {
                console.error(`Items array not found in the data for category '${category}' :`, data);
            }
        })
        .catch(error => {
            console.error('Error fetching items:', error);
        });





    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (Array.isArray(data.products)){
            displayItems(data.products);
        } else {
            console.error(`Items array not found in the data for category '${category}' :`, data);
        }
    })
    .catch(error => {
        console.error('Error fetching items:', error);
    });

  


}
// display categories items//
function displayItems(products){
    var mainshopContainer = document.getElementById('mainshopContainer');
    if (!mainshopContainer){
        console.error('Main shop container not found');
        return;
    }
    mainshopContainer.innerHTML = '';

     if (products.length === 0 ){
        console.log('No items found');
     } else {
        products.forEach(product => {
            var productDiv = document.createElement('div');
            productDiv.className = 'mainshopimgbox';
            var mainshopdescription = document.createElement('div');
            mainshopdescription.className = 'mainshopdescription';
            mainshopdescription.innerHTML = `<h1>${product.title}</h1> <p>Price:  ₱${product.price}</p`;
            var discountedPrice = document.createElement('div');
            productDiv.onclick = () => handleOnClickContainers();
            function handleOnClickContainers(){
                updateContainer();
                var mainProductCotaniner = document.getElementById('mainProductContainer');
                var overflow = document.getElementById('overflow');
                mainProductCotaniner.style.display = 'block';
                overflow.style.display = 'block';
                var imageMain = document.createElement('img');
                imageMain.src = product.thumbnail;
                imageMain.id = 'imgSrc';
                imageMain.alt = product.title;
                mainProductCotaniner.appendChild(imageMain);
            }
            discountedPrice.innerHTML = `<p id="discounted">${product.discountPercentage}% OFF</p>`
            productDiv.appendChild(discountedPrice);
            var productImage = new Image();
            productImage.src = product.thumbnail;
            productImage.alt = product.title;
            productDiv.appendChild(mainshopdescription);
            productDiv.appendChild(productImage);
            mainshopContainer.appendChild(productDiv);
        });
     }

    
}

// done//


//fgetch product category//
//done//

//fetch ratings//

//done //done//

// adding buttons to products//


//done//


//function of searchBar//



//end//




// function of chatBot//

function chatBtn(){
    var chatBotContainer = document.getElementById('chatBotContainer');

   
    if (chatBotContainer.style.display === 'block'){
        chatBotContainer.style.display = 'none';
    } else {
        chatBotContainer.style.display = 'block';
    }

}


//first option//
let optionClicked = false;
function firstOption(){
    var chatBotContainer = document.getElementById('chatBotContainer');
   

      
    if (!optionClicked){
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.textContent = ' What do you need help with?';
        chatBotContainer.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(span);
        optionClicked = true;
    } else {
    
    }

    
  
    
}

// end//


// end//



