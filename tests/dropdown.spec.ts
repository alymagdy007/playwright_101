import{test , expect , Locator} from '@playwright/test';


test("text input action " , async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    const textbox : Locator = page.locator("#name")

  await  expect(textbox).toBeVisible()

  await expect(textbox).toBeEnabled()

  // to capture the value of attributes 

 const maxlength : any = await textbox.getAttribute("maxlength") // return the valu of attribute 
 expect(maxlength).toEqual("15")


 await textbox.fill("aly magdy aly")

//  console.log("the text content of text bos" ,  await textbox.textContent()) return empty 

 console.log("the input value of the text is " ,  await textbox.inputValue()) // return the input value 



 const entervalue : any = await textbox.inputValue()  // get the content 

 expect(entervalue).toBe("aly magdy aly")

 await page.waitForTimeout(3000)



})


// radio buttons 




test("radio button" , async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    const maleradio1 : Locator = await  page.locator("#male") ; 

    // verify if radiobutton checked or not before clicking 

    await expect(maleradio1).toBeVisible() ; 
    await expect(maleradio1).toBeEnabled()
    await maleradio1.check()


expect (await maleradio1.isChecked()).toBe(true)


})





test("check box " , async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")


    // select specific checkbox (sunday) using getByLabel and assert 


 const sundaycheckBox : Locator =   page.getByLabel('sunday')

//   await sundaycheckBox.check()

//   await expect(sundaycheckBox).toBeChecked()



  // select all checkboxes and asset that they are checked 

  const  days:string[]   =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  const checkboxes :Locator[] = days.map(index=>page.getByLabel(index))


   expect (checkboxes.length).toBe(7)


  for(const checkbox of checkboxes){
    await checkbox.check()
  }


  // uncheck the last 3 element 

  for (const checkbox of checkboxes.slice(-3)){

    await checkbox.uncheck()
    await expect(checkbox).not.toBeChecked()

  }


  // 5 toggle checkoxes : if checked unchek ; if unchecked , checked 


   for (const checkbox of checkboxes){


    if(await checkbox.isChecked)
{


    // applicable only if unchecked

    await checkbox.check()
    await expect(checkbox).toBeChecked()
}else{
    // only if checked 

    await checkbox.uncheck()
    await expect(checkbox).not.toBeChecked()
    }

  }


 


})









