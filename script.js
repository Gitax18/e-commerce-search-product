const searchbar = document.getElementById('searchbar');
const rows = document.getElementsByClassName('product-row');
const row_titles = [...document.getElementsByClassName('product-title')];

function showSearchedProduct(product){
    const prdt = product.toLowerCase();

    for(let item = 0; item < row_titles.length; item++){
        const rowItem = row_titles[item].textContent.toLowerCase().includes(prdt)
        if(rowItem === false){
            rows[item].style.display = 'none';
        }else{
            rows[item].style.display='grid';
        }
    }
}

setInterval(()=>{
    if (searchbar.value.length != 0){
        showSearchedProduct(searchbar.value);
    } else{
        for(let item = 0; item < row_titles.length; item++){
            rows[item].style.display = 'grid';
        }
    }
}, 100)
