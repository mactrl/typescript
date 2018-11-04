var suggestionList:string[]=[];
var identification:any="Anonymous";

function final()
{
    let result=`Your performance is <span class="text-danger">
    //write the code to get the performance from the previous page
    ${localStorage.performanceDetails}
	</span>, based on your scores. 
    Please do fill up the details mentioned below.`;

    document.getElementById("performance").innerHTML=result;

}

function storeVal(value) {
    identification=value
}

function addSuggestion()
{
   //Write the code to get the suggestion details entered in the fields of the SuggestionPage
   //and make use of the done function given below to render the appropriate informations on the screen.
   //suggestionList.push(String(identification));
   suggestionList.push((<HTMLInputElement>document.getElementById("suggestion")).value);
   (<HTMLInputElement>document.getElementById("suggestion")).value = ''
   done(identification,suggestionList);

}

function done(...feedback:any[])
{
 
    let finalStatement=`<pre class="alert alert-success"><strong>Employee Name or Id:</strong> <span class="text-danger">${feedback[0]}</span>
<strong>Suggestions:</strong><span class="text-danger"> ${feedback[1]?feedback[1]:"None"}</span>
                        <strong>Thank You for using the app!</strong></pre`;
    document.getElementById("final").innerHTML=finalStatement;

}