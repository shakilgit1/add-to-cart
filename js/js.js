let total = 0;
function clickBtn(target){
    const name = target.parentNode.childNodes[1].innerText;
    const container = document.getElementById('container');
    const  li = document.createElement('li');
    li.innerText = name;
    container.appendChild(li);
    const price = target.parentNode.childNodes[5].innerText.split(' ')[1];
    const totalPrice = document.getElementById('total-price');
    total = parseInt(total) + parseInt(price);
    totalPrice.innerText = total;
    
};