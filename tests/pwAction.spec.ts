import{test , expect , Locator} from '@playwright/test';

test("pwAction", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/"); 


// input box 

const textbox : Locator = page.locator("#name") ; 

await expect(textbox).toBeEnabled() ;
await expect(textbox).toBeVisible() ;


const maxLenngth : any = await textbox.getAttribute("maxlength") ;

expect(maxLenngth).toBe('15') ;

await textbox.fill("aly magdy aly") ;



const ourValue : string = await textbox.inputValue() ;

console.log("value first name : ", ourValue) // return the value of the input field

expect(ourValue).toBe("aly magdy aly") ;

await page.waitForTimeout(3000) ;



})



test("radio button ", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/"); 


const maleRdio : Locator = page.locator("#male") // male radio button

await expect(maleRdio).toBeEnabled() ;
await expect(maleRdio).toBeVisible() ;

expect (await maleRdio.isChecked()).toBe(false) ; // check the radio button

await maleRdio.check() ;

expect (await maleRdio.isChecked()).toBe(true) ; // check the radio button


await page.waitForTimeout(3000) ;




})

test.only("checkbox ", async({page})=>{ 


await page.goto("https://testautomationpractice.blogspot.com/");

const sundaycheckbox : Locator = page.getByLabel("sunday");

await sundaycheckbox.check() ; // check the checkbox

await expect(sundaycheckbox).toBeChecked


await page.waitForTimeout(3000) ;


// capture all checkboxes and assert each one of them

const days : string[] = ['sunday' , 'monday' , 'tuesday' , 'wednesday' , 'thursday' , 'friday' , 'saturday'] ;

const checkboxes : Locator[] = days.map(index => page.getByLabel(index)) ; // check all checkboxes

expect(checkboxes.length).toBe(7) ; // assert the number of checkboxes


//select all checkboxes

// for(const checkbox of checkboxes){


//     await checkbox.check() ; // check each checkbox



// }


//select last 2 checkboxes

for (const checkbox of checkboxes.slice(-2)){
    await checkbox.check() ; // check last 2 checkboxes


}

// uncheck lest 2 checkboxes
for (const checkbox of checkboxes.slice(-2)){
    await checkbox.uncheck()
    
    await expect(checkbox).not.toBeChecked(); // uncheck last 2 checkboxes 


}



// 5 toggle checkboxes : if checked  , uncheck , if unchecked , check it assert state flipped 


await page.waitForTimeout(3000) ;


 })