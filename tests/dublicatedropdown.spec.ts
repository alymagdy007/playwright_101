import {test , expect , Locator} from '@playwright/test';

test('verify dropdown contain dublicate ' , async({page}) => {


    await page.goto("https://testautomationpractice.blogspot.com/")


            const colorOption : Locator = page.locator("#colors>option") // having dublicates  


    // const dropdownoption : Locator = page.locator("#animal>option") // not having dublicates     


       const colortext : string[] =  ( await colorOption.allTextContents()).map(color=>color.trim())

       const  myset =  new Set<string>() // set - dublicate not allowed 

       const dublicate : string[] = []  // arryay can allow dublicate 


       for(const text of colortext){
        if(myset.has(text))
            {

                dublicate.push(text)

       }else{

        myset.add(text)

       }
    }

    console.log(dublicate)









})