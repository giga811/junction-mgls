var set = false;

var ajax_call = function() {
    $.ajax({
        type: "GET",
        url: "/api/chunag?ticket_id="+$("#ticket_id").html(),
    }).done(function (data) {
        dic = JSON.parse(data);
        console.log(dic);
        if (dic.status=='failed'){
            window.location.href = "/";
        }
        var cp = dic.last_checkpoint_id;
        for (var i=0; i<4; i++)
            $("#image"+i).attr("src", "img/going.png");
        $("#image"+cp).attr("src", "img/stopped.png");

        for (var i=0; i<3; i++)
            $(".class"+i).removeClass("green");
        $(".class"+cp).addClass("green");
        // setInterval(function(){
        //     setTimeout(function(){
        //         $(".class"+(2*cp)).toggleClass("green");
        //     },100);
        //     setTimeout(function(){
        //         $(".class"+(2*cp)).toggleClass("green");
        //     }, 1000);
        // }, 2000);

        if (dic.last_checkpoint_id==3 && set==false){
            setTimeout(window.alert("PASSENGER ARRIVED!"), 1000);
            set = true;
        }
    });  
};
$(document).ready(function(){
    ajax_call();
    var interval = 1000 * 1; // where X is your every X minutes
    setInterval(ajax_call, interval);

    // setInterval(function (){ set = false;}, 5000);
});
