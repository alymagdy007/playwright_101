import{test , expect , Locator} from '@playwright/test';


test("xpath", async({page})=>{

   await page.goto("https://demowebshop.tricentis.com/");

  
   const products : Locator = page.locator("//a[contains(@href,'computer')]")

   const count = await products.count();
   expect(count).toBeGreaterThan(0);

//    console.log(await products.textContent()); 

console.log(await products.first().textContent())


const productsTitle: string[] = await products.allTextContents();
console.log(productsTitle);





})