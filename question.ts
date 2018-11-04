//import {clickResponse} from "./submitModule";

interface clickResponse
{
   
    score ?:number;
    submit():void;
}
enum performance{"Needs Improvement"=0,"Good"=25,"Very Good"=35,"Excellent"=50}

class page implements clickResponse{
    score:number=0;

    submit() :void
    {
    //Write the code to calculate the score based on the selected radio button.
    let numberOfRightAnswers:number =0;
    [1,2,3,4,5].forEach((questionNumber)=>{
        if((<HTMLInputElement> document.getElementById(`a${questionNumber}`)).checked) {
            console.log(`value for a${questionNumber}`+(<HTMLInputElement> document.getElementById(`a${questionNumber}`)).checked);
            numberOfRightAnswers+=1;
        }
    })

    switch(numberOfRightAnswers){
        case 1:
            this.score=0;
            break;
        case 2:
            this.score=0;
            break;
        case 3:
            this.score=25;
            break;
        case 4:
            this.score=35;
            break;
        case 5:
            this.score=50;
            break;
        default:
            this.score=0;
            break;
    }
	
    let res=`<span class="alert alert-success">Your score is ${this.score} !   <a class="btn btn-success" href="SuggestionPage.html">Click here to Proceed</a> </span>`;

    localStorage.performanceDetails=performance[this.score];
 
    document.getElementById("result").innerHTML=res;
  

    }
}
function invokeSubmit()
{
    let pageObject=new page();
    pageObject.submit();
}

