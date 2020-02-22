$(document).ready(function){
    $("#tit1").hide();
    $("#tit2").hide();
    $("#tit3").hide();
    $("#des").hide();
    $("#dev").hide();
    $("#pro").hide();
}


$(document).ready(function() {
    $('#design').click(function() {
        $('img#icon1').toggle();
        $('label#icon1').toggle();
        $('h5#tit1').toggle();
        $('p#des').toggle();
    });
});

$(document).ready(function() {
    $('#dev').click(function() {
        $('img#icon2').toggle();
        $('label#icon2').toggle();
        $('h5#tit2').toggle();
        $('p#dev').toggle();
    });
});
