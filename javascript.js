var input_field = document.querySelector("#list"); 
var button = document.querySelector(".but");
var block = document.querySelector(".todos");

//When button is pressed
button.addEventListener("click",function(){
    var string = input_field.value;

    if(string === "" || string == " "){
        document.querySelector(".error").innerHTML = "Please enter a Value";
    }

    else{
        
        //Error ko reset kardiya hai yaha par
        document.querySelector(".error").innerHTML="";

        //Create a empty paragraph
        var para = document.createElement("li");
        para.innerText = string;
        // block.appendChild(para);
        var spa = document.createElement("span");
        spa.innerHTML = "x";
        spa.className = "close";
        spa.addEventListener("click",closee);
        para.appendChild(spa);


        para.addEventListener("click",function(){
            para.style.textDecoration = "line-through";
            para.style.backgroundColor = "grey";

        });

        para.addEventListener("dblclick",function(){
            para.style.textDecoration = "none";
            para.style.backgroundColor = "white";

        });

        function closee(){
            block.removeChild(para);
        }

        block.appendChild(para);
        
    }
    //Reseting the value of the Input Field
    document.querySelector("#list").value = null;
}
);




