import {test , expect , Locator} from '@playwright/test';


test("static web table " , async ({page}) =>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    const table : Locator = await page.locator("table[name='BookTable']>tbody")


await expect(table).toBeVisible()


// count number of the rows in the table 

const  rows : Locator = await page.locator('table[name="BookTable"] tbody tr') // return all the rows 

await expect(rows).toHaveCount(7) // 7  // approach 1 

const rowcounter : number = await rows.count()
console.log("number of row in the tABLE : " , rowcounter)

expect(rowcounter).toBe(7)


// COUNT NUMBER OF HEADERS AND COLUMS 

const COLUMS : Locator = await rows.locator('th')

await expect(COLUMS).toHaveCount(4)   // 4 approch 1













        })

