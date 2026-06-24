import {test , expect, Locator} from '@playwright/test';



test("screenshots" , async ({page}) =>{


    await page.goto("https://demowebshop.tricentis.com/")

   const timeStamp =  Date.now()

// page screenshots 
    // await page.screenshot({path:'screenshots/'+'homepage'+timeStamp+'.png'})

    // full page screenshot 

        // await page.screenshot({path:'screenshots/'+'homepage'+timeStamp+'.png',fullPage:true})


    //   const logo =  page.locator("img[alt='Tricentis Demo Web Shop']")

    //   // screen page of log

    //   await  logo.screenshot({path:'screenshots/'+'homepage'+timeStamp+'.png'})


    //   //screenshots of section 


    //   await page.locator("div[class='product-grid home-page-product-grid']").screenshot({path:'screenshots/'+'homepage'+timeStamp+'.png'})



})






test("screenshots from config " , async ({page}) =>{


    




})


