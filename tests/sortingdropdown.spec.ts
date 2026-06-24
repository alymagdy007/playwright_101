import {test , expect , Locator} from '@playwright/test';

test('verify dropdown sorted ' , async({page}) => {


    await page.goto("https://testautomationpractice.blogspot.com/")

    const dropdownoption : Locator = page.locator("#animals>option")

    // console.log( await dropdownoption.allTextContents())


   const optiontext : string[] =  (await dropdownoption.allTextContents()).map(text=>text.trim())

   const originalText:string[] = optiontext

   const sortedlist : string[] = optiontext.sort()

   console.log("original array list" , originalText)
      console.log("sorted array list" , sortedlist)

   




   await page.waitForTimeout(3000)






})