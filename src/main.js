
//fetch the items from the JSON file
function loadItems() {
   return fetch('data/data.json')
   .then(response => response.json())  //json으로 변환
   .then(json => json.items);
}

function displayItems(items){
    const container = document.querySelector('.items');  //ul 내를
    container.innerHTML = items.map(item => createHTMLString(item)).join(''); //map 결과 HTML문자열배열을 join해서 하나의 긴 문자열로 저장
}


function createHTMLString(item){
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span>
  </li>`
};
//main
loadItems()
.then(items => {
    displayItems(items);
    /*setEventListeners(items)*/
})
.catch(console.log);