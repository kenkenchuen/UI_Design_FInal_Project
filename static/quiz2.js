var questionTexts = ["ID: 20098 > 02/14/2019 - 02/28/2019",
                    "ID: 31227 > 11/11/2019 - 11/25/2019",
                    "ID: 72803 > 04/06/2020 - 04/20/2020"]
var questionAnswers = ["ID: 20098 > 02/14/2019 - <mark><b>02/28/2019</b></mark>",
                      "ID: 31227 > 11/11/2019 - <mark><b>11/25/2019</b></mark>",
                      "ID: 72803 > 04/06/2020 - <mark><b>04/20/2020</b></mark>"]


var checkMatch = function(regex) {
    var pattern = $("#regexBox").val()
    
    let re = new RegExp(`(${pattern})`)
    
    var match = true;
    for(var i = 0; i < questionTexts.length; i++) {
        var t = questionTexts[i].replace(re, '<mark><b>$1</b></mark>')
        $(`.q${i+1}`).html(t)

        if(t == questionAnswers[i]) {
            $(`.q${i+1}`).addClass("bg-success")
            $(`.q${i+1}`).css("color", "white")
        }
        else {
            $(`.q${i+1}`).removeClass("bg-success")
            $(`.q${i+1}`).css("color", "black")
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

$(document).ready(function(){
    $("#regexBox").keyup(function(){
        checkMatch()
    })
})