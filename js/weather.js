function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.querySelector("forecast").style.display="block";






    //Set default location if one isn't provided
    let location;
    // Your code here.
    if (!document.querySelector("#location").value)
        location="Ann Arbor"
    else
        location=document.querySelector("#location").value;
    console.log("Location is: " + location);






    //set default temperature format if one isn't provided
    let format;
    // Your code here.
    if (!document.querySelector('input[name=temp]:checked'))
        format="imperial"
    else   
        format=document.querySelector('input[name=temp]:checked').value;
    console.log("Format is:" + format);






    //set the query  
    // Your code here.  
    let query = "https://api.openweathermap.org/data/2.5/weather?q="+ location + "&units=" + format + "&api_key=f7f3701277d6235393bf4c6471135ce5";
    console.log("Query is :" + query);






    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.
    // Your code here.
    let loc = document.querySelector("#loc");  
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");




    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        loc.innerHTML = (json["name"]);
        temp.innerHTML = (json["main"].temp) + " with " + (json["weather"][0].description)
        console.log("Icon is" + json["weather"][0].icon)
        tempImg.src = "http://openweathermap.org/img/wn/" + json["weather"][0].icon +".png"
        tempImg.alt = (json["weather"][0].description)

    });
}
