// Memory cost
document.getElementById('memory1').addEventListener('click', function(){
    const bestPrice = document.getElementById('memory-cost');
    bestPrice.innerText = '0';
    totalPrice()
})
document.getElementById('memory2').addEventListener('click', function(){
    const bestPrice = document.getElementById('memory-cost');
    bestPrice.innerText = '180';
    totalPrice()
})

// Storage Cost
document.getElementById('storage1').addEventListener('click', function(){
    const bestPrice = document.getElementById('storage-cost');
    bestPrice.innerText = '0';
    totalPrice()
})
document.getElementById('storage2').addEventListener('click', function(){
    const bestPrice = document.getElementById('storage-cost');
    bestPrice.innerText = '180';
    totalPrice()
})
document.getElementById('storage3').addEventListener('click', function(){
    const bestPrice = document.getElementById('storage-cost');
    bestPrice.innerText = '280';
    totalPrice()
})

// Delevery Charge 
document.getElementById('delevery-fee1').addEventListener('click', function(){
    const bestPrice = document.getElementById('delevery-cost');
    bestPrice.innerText = '0';
    totalPrice()
})
document.getElementById('delevery-fee2').addEventListener('click', function(){
    const bestPrice = document.getElementById('delevery-cost');
    bestPrice.innerText = '20';
    totalPrice()
})

// Total price
function totalPrice(){
    const basic = parseInt(document.getElementById('best-price').innerText)
    console.log(basic)
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText)
    const storageCost = parseInt(document.getElementById('storage-cost').innerText)
    const deleveryCost = parseInt(document.getElementById('delevery-cost').innerText)
    const leatestTotal = document.getElementById('leatest-total')
    const total = document.getElementById('total-cost')
    total.innerText = basic + memoryCost + storageCost + deleveryCost;
    leatestTotal.innerText = total.innerText
}
totalPrice()

// Use Promo

document.getElementById('apply').addEventListener('click', function(){
    const previousCostText = document.getElementById('total-cost')
    const previousCost = parseInt(previousCostText.innerText)
    const discountCost = previousCost/20;
    const discunt = document.getElementById('apply-feild')
    const leatestTotal = document.getElementById('leatest-total')
    if(discunt.value == 'talha'){
        leatestTotal.innerText = previousCost - discountCost;
    }else{
        leatestTotal.innerText = previousCost
    }
    discunt.value = ''
})