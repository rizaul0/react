import conf from "../conf/conf";

import {Client ,Account ,ID} from "appwrite";

export class AuthService{
 client = new Client();
 account;


 constructor(){
    this.client
    .setEndpoint(conf.VITE_APPWRITE_URL)
    .setProject(conf.VITE_APPWRITE_PROJECT_ID);
    this.account =new  Account(this.client);
 }

 async createAccount({email,password,name}){
   try {
    const userAccount = await this.account.create(ID.unique(),email,password,name
    )
    if (userAccount) {
        return this.login({email,password});
        
    } else {
        return userAccount;
    }
    
   } catch (e) {
      console.error("Error creating account:", e);
      throw e;
   }
 }

async login({email,password}){
    try {
        return await this.account.createEmailPasswordSession(email,password);
    } catch (error) {
        throw error
    }
}

async logout (){
    try {
       const userLoginout = await this.account.deleteSessions()
       if (userLoginout) {
        return userLoginout;
        
        
    } else {
        return userLoginout;
    }
        
    } catch (error) {
        throw error
    }

}
async currentUser(){
    try {
        return await this.account.get();
    } catch (e) {
        console.warn("No active session:", e.message);
        return null; // important fix
    }
}

// async currentUser(){
//     try {
//         const result = await this.account.get()
//         if (result) {
//             return result
//         } else {
//             return result
//         }
//     } catch (e) {
//         throw e
//     }
// }

}
const authService = new AuthService();
export default authService;