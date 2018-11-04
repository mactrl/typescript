 
const founders:Array<string>=[" Bruce Wayne "," Barry Allen "," Diana Prince "];

//class for introduction
class introduction
{
    private manager:string="Clark Kent";

    public intro()
        {
            let fun=():string=>
                {
				 let founderNames:string="";
				 
                    // Write the code to get founders array and return in a founderNames variable
                    founderNames=founders.join(',');
                    return founderNames;
                    }

            let content=`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Infotech Quiz Portal or  better known as IQP is a fully operational web application for people, who are looking for a way to test their knowledge on different programming languages. It is over a decade old and the core members are
            ${fun()}. The Admin of this awesome endeavor is ${founders[0]} and the web manager is ${this.manager}.`;

            document.getElementById("intro").innerHTML=content;

        }

}

//introFun will be called from HTML-page onload
function introFun()
{
   //Write the code to instantiate the class and invoke the intro function
   new introduction().intro();
}