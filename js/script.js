$(document).ready(function() {
    $("#p").click(function(){
    $("#tit1").hide();
    $("#tit2").hide();
    $("#tit3").hide();
    $("#des").hide();
    $("#dev").hide();
    $("#produ").hide();
});
});


$(document).ready(function() {
    $('#design').click(function() {
        $('img#icon1').slideToggle();
        $('label#icon1').slideToggle();
        $('h5#tit1').slideToggle();
        $('p#des').slideToggle();
    });
});

$(document).ready(function() {
    $('#dev').click(function() {
        $('img#icon2').toggle();
        $('label#icon2').toggle();
        $('h5#tit2').toggle();
        $('p#devl').toggle();
    });
});

$(document).ready(function() {
    $('#prod').click(function() {
        $('img#icon3').toggle();
        $('label#icon3').toggle();
        $('h5#tit3').toggle();
        $('p#produ').toggle();
    });
});

$(document).ready(function() {
    $('#contact').submit(function(event) {
        var myName = $('#name').val();
        var myEmail = $('#email').val();
        var comment = $('#textarea').val();

        if (myName === '' || myEmail === '' || comment === '') {
            alert('Please fill in the required data');
        } else {
            alert(myName + ' ,we have received your message.Thank you for reaching out to us.');
        }
        event.preventDefault();
        $('#name').val('');
        $('#email').val('');
        $('#textarea').val('');
    });
});

$(document).ready(function() {
    $('#kwork4').mouseover(function() {
        $('#work4').show();
    });
    $('#kwork4').mouseleave(function() {
        $('#work4').hide();
    });

    $('#kwork3').mouseover(function() {
        $('#work3').show();
    });
    $('#kwork3').mouseleave(function() {
        $('#work3').hide();
    });

    $('#kwork2').mouseover(function() {
        $('#work2').show();
    });
    $('#kwork2').mouseleave(function() {
        $('#work2').hide();
    });

    $('#kwork1').mouseover(function() {
        $('#work1').show();
    });
    $('#kwork1').mouseleave(function() {
        $('#work1').hide();
    });

    $('#kwork5').mouseover(function() {
        $('#work5').show();
    });
    $('#kwork5').mouseleave(function() {
        $('#work5').hide();
    });

    $('#kwork6').mouseover(function() {
        $('#work6').show();
    });
    $('#kwork6').mouseleave(function() {
        $('#work6').hide();
    });

    $('#kwork7').mouseover(function() {
        $('#work7').show();
    });
    $('#kwork7').mouseleave(function() {
        $('#work7').hide();
    });

    $('#kwork8').mouseover(function() {
        $('#work8').show();
    });
    $('#kwork8').mouseleave(function() {
        $('#work8').hide();
    });
});