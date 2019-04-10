

// 1. English Section:
$(".englishButton").click(function(){
    var englishInput = $(".english").val();
        if(englishInput=== "Mon"){
            $("body").html("Correct!");
        } else {
            $("body").html("Wrong! Try again.");
        }    
    
    $(".englishMessage").text("Correct!");
    
    // display this text if the answer is incorrect
    $(".englishMessage").text("Wrong! Try again."); 
});


// 2. Social Studies section
$(".ssButton").click(function(){
    var ssInput = $(".socialStudies").val();
         var ssInput = $(".socialStudies").val();
        if(ssInput=== "Albany"){
            $("body").html("Correct!");
        } else {
            $("body").html("Wrong! Try again.");
        }    

    
});


// 3. Math section
$(".mathButton").click(function(){
    var mathInput = $(".math").val();        
        if(mathInput=== "30"){
            $("body").html("Correct!");
        } else {
            $("body").html("Wrong! Try again.");
        }    
    
    // below, we are using the parseInt() function to convert the input value (a string) into a number
    mathInput = parseInt(mathInput);


});


// 4. Science section
    $(".scienceButton").click(function(){
       var sciInput = $(".science").val();
            if(sciInput=== "solid"){
                $("body").html("Correct!");
            } else {
                $("body").html("Wrong! Try again.");
            }    
    });        
   