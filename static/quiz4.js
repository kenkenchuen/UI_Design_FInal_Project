var questionTexts = ["01111000",
                    "00100001",
                    "01101101",
                    "11111111",
                    "00011111"]
var questionAnswers = ["<mark><b>01111000</b></mark>",
                        "<mark><b>00100001</b></mark>",
                        "<mark><b>01101101</b></mark>",
                        "11111111",
                        "00011111"]

var solutionText = 'As long as the MSB (most signifcant bit) is 0, and the bit representing 2<sup>5</sup> = 32 is 1, then the number is greater than or equal to 32. Thus, one possible solution is "0.1[01]{5}".' 

var checkMatch = function(regex) {
    var pattern = $("#regexBox").val()
    
    let re = new RegExp(`(${pattern})`)
    
    var match = true;
    for(var i = 0; i < questionTexts.length; i++) {
        var t = questionTexts[i].replace(re, '<mark><b>$1</b></mark>')
        $(`.q${i+1}`).html(t)

        if(t == questionAnswers[i] && i <= 2) {
            $(`.q${i+1}`).addClass("bg-success")
            $(`.q${i+1}`).css("color", "white")
        }
        else {
            $(`.q${i+1}`).removeClass("bg-success")
            $(`.q${i+1}`).css("color", "black")
        }

        if(i == 3 || i == 4) {
            if(t == questionTexts[i]) {
                $(`.q${i+1}`).removeClass("bg-danger")
                $(`.q${i+1}`).css("color", "black")
            }
            else {
                $(`.q${i+1}`).addClass("bg-danger")
                $(`.q${i+1}`).css("color", "white")
            }
        }
            
        console.log(t)
        match = (t == questionAnswers[i]) && match
    }
    
    if(match) {
        $("#next").removeClass("disabled")
    }
    else
        $("#next").addClass("disabled")
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
    $("#regexBox").keyup(function(){
        checkMatch()
    })

    $("#solution").click(function(){
        viewSolution()
    })
   
})