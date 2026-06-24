import {test , expect, Locator} from '@playwright/test';


test("locate test" , async({page})=>{


    await page.goto("file:///C:/Users/express/Downloads/app.html") ; 

    await expect(page.getByText("colored text")).toBeVisible();



  


})