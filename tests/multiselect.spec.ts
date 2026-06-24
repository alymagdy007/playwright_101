import {test , expect , Locator} from '@playwright/test';

test('single select dropdown' , async({page}) => {


    await page.goto("https://testautomationpractice.blogspot.com/")

    // select option from the drop down (multible color )

    // await page.locator("#colors").selectOption(['Red',"Yellow","Blue",'Green']) // visable text 

    //     await page.locator("#colors").selectOption([{index:0}, {index:1}]) // using indexes 







        // check number of option in dropdown 

    //  const numberofOption : Locator  =   page.locator("#colors>option")
     
    //  await expect(numberofOption).toHaveCount(7)





        // check an option present in the dropdown 

        const dropdownColor : Locator  = page.locator("#colors>option")
        const colorText : string[] = (await dropdownColor.allTextContents()).map((color)=>color.trim()) 
        console.log(colorText)


     
     

    // printing option from the dropdown 





await page.waitForTimeout(3000)



})