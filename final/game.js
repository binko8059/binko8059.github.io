$(document).ready(function() {

    var money = 0;
    $('#pic').hide();



    $('#seed').on("click", function() {
        f = "no";

        $('#farmland1').attr('src', './pic/nothing.png');
        $('#farmland2').attr('src', './pic/nothing.png');
        $('#farmland1').css('cursor', 'default');
        $('#farmland2').css('cursor', 'default');
        // $('#land').empty()

        grow();

    });


    var grow = () => {
        var delay = function(s) {
            return new Promise(function(resolve, reject) {
                setTimeout(resolve, s);
            });
        };

        var grow1 = Math.floor(Math.random() * 2) + 1;
        var grow2 = Math.floor(Math.random() * 2) + 1;
        var grow3 = Math.floor(Math.random() * 2) + 1;
        var grow4 = Math.floor(Math.random() * 2) + 1;

        delay().then(function() {

            $('#farmland1').attr('src', './pic/' + grow1 + '.png');
            $('#farmland2').attr('src', './pic/' + grow2 + '.png');
            return delay(2000); // 延遲
        }).then(function() {
            $('#farmland1').attr('src', './pic/' + grow1 + '_' + grow3 + '.png');
            $('#farmland2').attr('src', './pic/' + grow2 + '_' + grow4 + '.png');
            return delay(3000); // 延遲
        }).then(function() {
            $('#farmland1').attr('src', './pic/' + grow1 + '_' + grow3 + '_1.png');
            $('#farmland2').attr('src', './pic/' + grow2 + '_' + grow4 + '_1.png');
            f = 'finish';
            return lucky(f);

        });


    }
    var lucky = (f) => {
        if (f = 'finish') {
            $('#farmland1').css('cursor', 'pointer');
            $('#farmland2').css('cursor', 'pointer');

            $('#farmland1').one("click", function() {
                console.log("click");
                change();
                $('#ans').css('display', 'block');
                $('#ans').css('cursor', 'pointer');
                $('#farmland1').attr('src', './pic/nothing.png');
                ans1();
                f = "no";
            });

            $('#farmland2').one("click", function() {
                console.log("click");
                change();
                $('#ans').css('display', 'block');
                $('#ans').css('cursor', 'pointer');
                $('#farmland2').attr('src', './pic/nothing.png');
                ans2();
                f = "no";

            });

        } else {
            console.log('no');
        }
    }

    var ans1 = () => {
        $('#farmland1').css('cursor', 'default');
        $('#ans').one("click", function() {
            console.log("click2");
            f = "no";
            $("#farmland1").off("click");
            money = money + Math.floor(Math.random() * 5) + 1;
            $('#ans').css('display', 'none');
            console.log(money);
        });
    }

    var ans2 = () => {
        $('#farmland2').css('cursor', 'default');
        $('#ans').one("click", function() {
            console.log("click2");
            f = "no";
            $("#farmland2").off("click");
            money = money + Math.floor(Math.random() * 5);
            $('#ans').css('display', 'none');
            console.log(money);

        });

    }

    var change = () => {

        var c = Math.floor(Math.random() * 48) + 1;
        $('#ans img').attr('src', './ans/0' + c + '.png');


    }


    $('#book').on("click", function() {
        $('#pic').toggle();

    });

    $('#story').on("click", function() {

        $('#story img').hide();
    });

    $('#money').on("click", function() {
        window.alert(money + "元");
    });


});