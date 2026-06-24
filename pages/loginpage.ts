// import{Page,Locator} from '@playwright/test' // we will not import test 

// class loginpage{

//     // define the variable `


//    private readonly page : Page 
//    private readonly loginlink : Locator 
//    private readonly usernameinput : Locator 
//    private readonly password : Locator
//    private readonly loginbutton : Locator



//     // constructor 

//     constructor(page : Page , loginlink : Locator ){
//         this.page = page  ;
//         this.loginlink = this.page.locator("#login2")
//         this.usernameinput = this.page.locator("#loginusername")
//         this.password = this.page.locator("#loginpassword")
//         this.loginbutton = this.page.locator('button[onclick="logIn()"]')


        
//     }



//     // action method 


//     async clickLoginLink(): Promise<void>{
//        await  this.loginlink.click() ; 

//     }

//     async enterUserName(username : string): Promise<void>{

//         this.usernameinput.clear()
//         this.usernameinput.fill(username)

//     }

//     async enterpassword(password:string){
//         this.password.clear()
//         this.password.fill(password)

//     }

//     async clickLogin(){
//        await this.loginbutton.click()
    

//     }

//     async performLogin (username : string , password : string){
//         await this.clickLoginLink() ; 
//             await this.enterUserName(username) ; 
//             await this.enterpassword(password) ; 
//             await this.clickLogin() ; 

    

//     }


// }




