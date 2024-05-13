// let itemsContainerElement = document.querySelector('.items-container');


// Approch: This is how to create items using javascript.

// let item = {
//     item_image: '/Day 01/Myntra Images/CS12.jpg',
//     rating: {
//         stars: 4.5,
//         noOfreviews: 1400,
//     },
//     company_name: 'US Polo',
//     item_name: 'Plain T-Shirt',
//     current_price: '999',
//     original_price: '4599',
//     discount_percentage: 48,
// }


// Commenting the items and attaching the multiple items using items.js file which we will ceated by using the abpove method.


// itemsContainerElement.innerHTML = `
//             <div class="item-container">
//                 <img class="item-image" src="${item.item_image}" alt="intem image">
//                 <div class="rating">
//                     ${item.rating.stars} ⭐ | ${item.rating.noOfreviews}
//                 </div>
//                 <div class="company-name">${item.company_name}</div>
//                 <div class="item-name">${item.item_name}</div>
//                 <div class="price">
//                     <span class="current-price">Rs ${item.current_price}</span>
//                     <span class="original-price">Rs ${item.original_price}</span>
//                     <span class="discount">(${item.discount_percentage}% OFF)</span>
//                 </div>
//                 <button class="btn-add-bag">Add To Bag</button>
//             </div>
// //             `;


// let bagItems = [];  //Initially bag will be empty

let bagItems;

onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItems');  //Adding realod functionality
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []; 
    displayItemsOnHomePage();
    displayBagIcon();

}

function addToBag(itemId) {
    bagItems.push(itemId);
    //Approach: Add the bag items values into the local server. so reload doesnot delete the counts of the bag items
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}


function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}



function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');

    if (!itemsContainerElement) {
        return;
      }

        let innerHtml = '';
        items.forEach(item => {
        innerHtml += `
        <div class="item-container">
                    <img class="item-image" src="${item.image}" alt="intem image">
                    <div class="rating">
                        ${item.rating.stars} ⭐ | ${item.rating.count}
                    </div>
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current-price">Rs ${item.current_price}</span>
                        <span class="original-price">Rs ${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                    </div>
                    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
                </div>`
    });

    itemsContainerElement.innerHTML = innerHtml;
}

