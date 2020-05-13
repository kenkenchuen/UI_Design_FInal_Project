function timer(ms) { return new Promise(res => setTimeout(res, ms)); }

var text = "CONGRATULATIONS!"
var p = ""

async function highlight() {
    for (var i = 0; i < text.length; i++) {
        await timer(200); 

        p += "."

        let re = new RegExp(`(${p})`)

        var t = text.replace(re, '<mark>$1</mark>')
        $("#congrats").html(t)
    }

}

$(document).ready(function(){
    highlight()
})