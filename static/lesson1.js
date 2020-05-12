function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

var excerciseText = "The quick brown fox jumps over the lazy dog.";
var excerciseAnswer = "The quick brown <mark><b>fox</b></mark> jumps over the lazy dog."

var exampleText = "The exam grades will be posted on the website in 24 hours or less."
var examplePatterns = ["the", "The", "24"]

var solutionText = 'Simply type "fox" to exactly match the string.'

var match = false

async function exampleGIF() {
    for (var i = 0; i < examplePatterns.length; i++) {
        var curPattern = examplePatterns[i]
        
        var p = ""
        for(var j = 0; j < curPattern.length; j++) {
            p += curPattern[j]
            let re = new RegExp(`(${p})`)
    
            console.log(p);
            $("#examplePattern").html(p);

            var t = exampleText.replace(re, '<mark>$1</mark>')
            $("#exampleText").html(t)

            await timer(1100);    
        }
        await timer(1300); 
    }

    exampleGIF()
}


var checkMatch = function(regex) {
    var pattern = $("#regexBox").val()
    
    let re = new RegExp(`(${pattern})`)
    
    var t = excerciseText.replace(re, '<mark><b>$1</b></mark>')

    if($("#regexBox").val().length === 0 ) {
        t = excerciseText
    }

    $(".excercise").html(t)

    match = (t == excerciseAnswer)

    if(match) {
        $("#nextLesson").removeClass("disabled")
        $(".excercise").addClass("bg-success")
        $(".excercise").css("color", "white")
    }
    else {
        $("#nextLesson").addClass("disabled")
        $(".excercise").removeClass("bg-success")
        $(".excercise").css("color", "black")
    }
}

var viewSolution = function() {
    $("#solution").empty();

    $("#solution").append(`
    <div class="card" style="max-width: 61.5%; font-size: 14px; margin-top: 10px;">
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
                window.location = "/lesson2"
            }
    });

    $("#solution").click(function(){
        viewSolution()
    })


})