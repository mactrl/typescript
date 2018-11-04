//import {clickResponse} from "./submitModule";
//export type clickResponse = clickResponse.clickResponse;
interface clickResponse
{
   
    score ?:number;
    submit():void;
}
var self:Window = this;
class login implements clickResponse{

    submit():void
    {
        //Write the code to perform the validation and accordingly navigate to QuizPage or 
        //render validation error messages.
        if(document.getElementById("nameError").innerHTML){
            document.getElementById("nameError").innerHTML=""
        }

        if(document.getElementById("passError").innerHTML){
            document.getElementById("passError").innerHTML=""
        }

        let userName:string= (<HTMLInputElement>document.getElementById("name")).value;
        let password:string= (<HTMLInputElement>document.getElementById("password")).value;
        if(userName!=="devodyuti.mukherjee"){
            document.getElementById("nameError").innerHTML = "userName is not valid";
            return;
        }
        else if(password!=="123") { 
            document.getElementById("passError").innerHTML = "password is not valid";
            return;
        }

        self.location.href = "QuizPage.html";

    }

    

}

namespace objectCreate
{
    export var loginObject=new login();
}

function invokeSubmit()
{
    //var loginObject = new login();
    //loginObject.submit()
    console.log(this);
    objectCreate.loginObject.submit();
}
