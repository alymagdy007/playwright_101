import {test , expect , Locator} from '@playwright/test';

test('single select dropdown' , async({page}) => {


    await page.goto("https://testautomationpractice.blogspot.com/")

    // select option from the drop down 

     page.locator("#country").selectOption("Germany") // visable text 
        //   page.locator("#country").selectOption({value : "uk"}) // using value attribute 




        // check number of option in dropdown 

        const dropdownOptions : Locator =  page.locator("#country>option")


        await expect(dropdownOptions).toHaveCount(10);


        // check an option present in the dropdown 

     const optiontext : String[]  = (await  dropdownOptions.allTextContents()).map((text)=>text.trim())

     console.log(optiontext)

     expect(optiontext).toContain("Germany")

     

    // printing option from the dropdown 
    for (let option in optiontext){
        console.log(optiontext[option])
    }

        await page.waitForTimeout(3000)








})