function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

var exampleText = "The flying pig was annoying the king."
var examplePatterns = ["[a-z]i[a-z]"]

var excerciseTexts = ["man",
                      "can",
                      "pan"]
var excerciseAnswers = ["<mark><b>man</b></mark>",
                        "<mark><b>can</b></mark>",
                        "pan"]

var solutionText = 'To match "m" and "c" and exclude "p", put "mc" in square brackets: "[mc]". This will match only "m" or "c". The complete regex pattern is "[mc]an".'

var match = false

async function exampleGIF() {
    for (var i = 0; i < examplePatterns.length; i++) {
        var curPattern = examplePatterns[i]
        
        var p = ""
        for(var j = 0; j < curPattern.length; j++) {
            p += curPattern[j]

            if(!(j == 4 || j == 5 || j == 10)) 
                continue
            
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
    
    var match = true;
    for(var i = 0; i < excerciseTexts.length; i++) {
        var t = excerciseTexts[i].replace(re, '<mark><b>$1</b></mark>')
        if($("#regexBox").val().length === 0 ) {
            t = excerciseText[i]
        }
        $(`.excercise${i+1}`).html(t)

        if(t == excerciseAnswers[i] && i < 2) {
            $(`.excercise${i+1}`).addClass("bg-success")
            $(`.excercise${i+1}`).css("color", "white")
        }
        else {
            $(`.excercise${i+1}`).removeClass("bg-success")
            $(`.excercise${i+1}`).css("color", "black")
        }

        if(t == excerciseTexts[i] && i == 2) {
            $(`.excercise${i+1}`).removeClass("bg-danger")
            $(`.excercise${i+1}`).css("color", "black")
        }
        else {
            $(`.excercise${i+1}`).addClass("bg-danger")
            $(`.excercise${i+1}`).css("color", "white")
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

    $("#solution").click(function(){
        viewSolution()
    })
})