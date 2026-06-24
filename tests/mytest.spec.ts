import{test , expect} from '@playwright/test';



test("print the title ", async({page})=>{

      await page.goto("https://www.google.com/");

      let mytitle = await page.title();

      console.log(mytitle);

})