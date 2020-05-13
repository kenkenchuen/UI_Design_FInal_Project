function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

var exampleText = "The AK-47 has many variants such as the AKS-74U and AK-74M." 
var examplePatterns = ["[A-Z]{2,3}.{2,4}"]

var excerciseTexts = ["aabbcc",
                      "aaaabbccc",
                      "abc",
                      "aaabbc"]
var excerciseAnswers = ["<mark><b>aabbcc</b></mark>",
                        "<mark><b>aaaabbccc</b></mark>",
                        "abc",
                        "aaabbc"]

var solutionText = "The strings we want to match should have 2-4 a's, 2 b's, and 2-3 c's. Thus, the regex pattern should be \"a{2,4}b{2}c{2,3}\"." 

var match = false

async function exampleGIF() {
    for (var i = 0; i < examplePatterns.length; i++) {
        var curPattern = examplePatterns[i]
        
        var p = ""
        for(var j = 0; j < curPattern.length; j++) {
            p += curPattern[j]

            if(!(j == 4 || j == 9 || j == 10 | j == 15)) 
                continue
            
            let re = new RegExp(`(${p})`, "g")
    
            console.log(p);
            $("#examplePattern").html(p);

            var t = exampleText.replace(re, '<mark>$1</mark>')
            $("#exampleText").html(t)

            await timer(1500);    
        }
        await timer(2000); 
    }

    exampleGIF()
}

var checkMatch = function(regex) {
    var pattern = $("#regexBox").val()
    
    let re = new RegExp(`(${pattern})`)
    
    match = true;
    for(var i = 0; i < excerciseTexts.length; i++) {
        var t = excerciseTexts[i].replace(re, '<mark><b>$1</b></mark>')
  
        $(`.excercise${i+1}`).html(t)

        if(t == excerciseAnswers[i] && i < 2) {
            $(`.excercise${i+1}`).addClass("bg-success")
            $(`.excercise${i+1}`).css("color", "white")
        }
        else {
            $(`.excercise${i+1}`).removeClass("bg-success")
            $(`.excercise${i+1}`).css("color", "black")
        }

        if(i == 2 || i == 3) {
            if(t == excerciseTexts[i]) {
                $(`.excercise${i+1}`).removeClass("bg-danger")
                $(`.excercise${i+1}`).css("color", "black")
            }
            else {
                $(`.excercise${i+1}`).addClass("bg-danger")
                $(`.excercise${i+1}`).css("color", "white")
            }
        }
        

        match = (t == excerciseAnswers[i]) && match
    }
    
    if(match)
        $("#nextLesson").removeClass("disabled")
    else
        $("#nextLesson").addClass("disabled")
}

var viewSolution = function() {
    $("#solution").empty();

    $("#solution").append(`
    <div class="card" style="max-width: 61.5%; font-size: 14px; margin-top: 10px; background-color: lightgray ;">
        <div class="card-header">
            ${solutionText}
        </div>
    </div>
    `)
}

$(document).ready(function(){
    exampleGIF()

    $("#regexBox").keyup(function(){
        checkMatch()
    })

    $('#regexBox').on("keypress", function(e) {
        if (e.keyCode == 13 && match) {
            window.location = "/lessonComplete"
        }
    });


    $("#solution").click(function(){
        viewSolution()
    })
})