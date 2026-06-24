import {test , expect , Locator} from '@playwright/test';

test('verify dropdown sorted ' , async({page}) => {


    await page.goto("https://demowebshop.tricentis.com/")


   const products : Locator =  page.locator(".product-title") // 6 element 

   // innerText vs textcontent 

console.log(await products.nth(1).innerText())
console.log(await products.nth(1).textContent())

// products is not an array so we use the tradionatl for loop 

// const count = await products.count()

// for(let i = 0 ; i <count ; i++){
//    // const productname : string = (await products.nth(i).innerText())
//    // console.log(productname)
   



// }


//2. the diffrence between allinnertext()  vs alltextcontent

// const prodductname : string[] = await products.allInnerTexts()

// console.log("products captured by AALLINNERTEXT " , prodductname )


// const prodductname : string[] = (await products.allTextContents()).map(product=>product.trim())

//  console.log("products captured by AALLINNERTEXT " , prodductname )


//3. all method 


const productLocators : Locator[] = await products.all()


console.log(productLocators) 

console.log( await productLocators[1].innerText())

for(let product of productLocators){

    console.log(await product.innerText())




}




})