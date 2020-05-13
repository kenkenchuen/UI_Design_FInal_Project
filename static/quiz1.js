$(document).ready(function(){
    $(".card-body").hover(
        function(){ 
            $(this).addClass("bg-primary")
            $(this).addClass("highlight")
        },
        function(){ 
            $(this).removeClass("bg-primary")
            $(this).removeClass("highlight")
        }
    )

    $(".correct").click(function(){
        $(this).addClass("bg-success")
        $(this).css("color", "white")
        $("#next").removeClass("disabled")
    })

    $(".wrong").click(function(){
        $(this).addClass("bg-danger")
        $(this).css("color", "white")
    })
})