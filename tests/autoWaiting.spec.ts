import {test , expect , Locator} from '@playwright/test';


test("auto waiting",async ({page}) =>{

    test.setTimeout(10000); // set timeout for this test case local 


  await  page.goto("https://demowebshop.tricentis.com/");

  await expect(page).toHaveURL("https://demowebshop.tricentis.com/");



    await expect(page.locator("h2[class='topic-html-content-header']")).toBeVisible({timeout:5000}); // wait for this element to be visible for 5 seconds

    await page.locator("#small-searchterms").fill("laptop",{force:true}); // force action (it will not do action ability )

})