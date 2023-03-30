let prices = [13,78,90,34,67,58]

// frontward
for(let i = 0; i<prices.length;i+=1)
{
    console.log(prices[i]);
}

//backward
for(let i =prices.length;i>=0;i-=1)
{
    console.log(prices[i])
}

// another way
for(let price of prices)
{
    console.log(price);
}