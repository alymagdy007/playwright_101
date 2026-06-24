import{Page,Locator} from '@playwright/test' // we will not import test 


export class homepage{
    
    private readonly page : page ; 
    private readonly productlist : Promise <Array<Locator>> ; 
    private readonly addtoCarButton : Locator ; 
    private readonly carLink : Locator ; 


    constructor (page : Page ){

        // css selector target all product links under product card 

        this.productlist = this.page.locator('div#tbodyid div.card h4.card-title a').all() 

        //add to cart button 
        this.addtoCarButton = this.page.locator("a[class='btn btn-success btn-lg']")

        // card link on the top menu 

        this.carLink = this.page.locator("#cartur")

    

    }


      // method to add sepcific product to the card 

        async addproducttocard(productName: String) : Promise<void> {

            const prodctElements = this.productlist
            for(const product of await prodctElements){
                const name = await product.textContent()

                if(name?.trim() === productName){
                    await product.click()
                    break ; 
                }
            }

            // handle alert/ dialog after clciking  " add to card "
            this.page.once('dialog' ,  async dialog =>{
                if(dialog.message().include('added')){
                    await   dialog.accept() ; 
                }

            })

            await this.addtoCarButton.click()


        }

        // method to naviagte to the card 
        async gotocard(){
            await this.carLink.click() ; 
        }
        



}


