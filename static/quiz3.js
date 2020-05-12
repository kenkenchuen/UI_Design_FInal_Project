var questionTexts = ["img0912.jpg",
                    "updated_img0912.png",
                    "favicon.gif",
                    "documentation.html",
                    "img0912.jpg.tmp"]
var questionAnswers = ["<mark><b>img0912.jpg</b></mark>",
                        "<mark><b>updated_img0912.png</b></mark>",
                        "<mark><b>favicon.gif</b></mark>",
                        "documentation.html",
                        "img0912.jpg.tmp"]
var answer = "(\w*).(png|jpg|gif)$"


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