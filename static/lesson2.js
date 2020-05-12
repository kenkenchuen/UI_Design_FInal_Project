function timer(ms) { return new Promise(res => setTimeout(res, ms)); }


var exampleText = "The flying pig was annoying the king."
var examplePatterns = [".ing"]

var excerciseTexts = ["I was not able to get the limited-edition t-shirt.",
                      "Please call the office and tell Mary that we're late."]
var excerciseAnswers = ["I was not <mark><b>able</b></mark> to get the limited-edition t-shirt.",
                        "Please <mark><b>call</b></mark> the office and tell Mary that we're late."]

var solutionText = 'To match the first two characters and the last charcter, use "."; The third character in both strings can just be matched with "l". Thus, the regex pattern should be "..l.".'

var match = false

async function exampleGIF() {
    for (var i = 0; i < examplePatterns.length; i++) {
        var curPattern = examplePatterns[i]
        
        var p = ""
        for(var j = 0; j < curPattern.length; j++) {
            p += curPattern[j]
            let re = new RegExp(`(${p})`, "g")
    
            console.log(p);
            $("#examplePattern").html(p);

            var t = exampleText.replace(re, '<mark>$1</mark>')
            $("#exampleText").html(t)

            await timer(1000);    
        }
        await timer(1000); 
    }

    exampleGIF()
}

var checkMatch = function(regex) {
    var pattern = $("#regexBox").val()
    
    let re = new RegExp(`(${pattern})`)
    
    match = true;
    for(var i = 0; i < excerciseTexts.length; i++) {
        var t = excerciseTexts[i].replace(re, '<mark><b>$1</b></mark>')
        if($("#regexBox").val().length === 0 ) {
            t = excerciseText
        }
        $(`.excercise${i+1}`).html(t)

        if(t == excerciseAnswers[i]) {
            $(`.excercise${i+1}`).addClass("bg-success")
            $(`.excercise${i+1}`).css("color", "white")
        }
        else {
            $(`.excercise${i+1}`).removeClass("bg-success")
            $(`.excercise${i+1}`).css("color", "black")
        }

        match = (t == excerciseAnswers[i]) && match
    }
    
    if(match) {
        $("#nextLesson").removeClass("disabled")
    }
    else {
        $("#nextLesson").addClass("disabled")
    }
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
            window.location = "/lesson3"
        }
    });

    $("#solution").click(function(){
        viewSolution()
    })
})