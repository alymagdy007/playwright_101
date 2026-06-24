import {test , expect , Locator} from '@playwright/test';


test("assertion  ",async ({page}) =>{


    await page.goto("https://demowebshop.tricentis.com/") ; 

    // // hard assertion 
    // await expect(page).toHaveTitle("Demo Web Shop")
    // await expect (page).toHaveURL("https://demowebshop.tricentis.com/")
    // const logo : Locator = page.locator("img[alt='Tricentis Demo Web Shop']")
    // await expect(logo).toBeVisible()



    // soft assertion 

      await expect.soft(page).toHaveTitle("Demo Web Shop")
    await expect.soft (page).toHaveURL("https://demowebshop.tricentis.com/")
    const logo : Locator = page.locator("img[alt='Tricentis Demo Web Shop']")
    await expect.soft(logo).toBeVisible()


    await page.waitForTimeout(5000) // wait for 5 seconds



})  