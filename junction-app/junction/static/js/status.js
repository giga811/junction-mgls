
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
        for (var i=0; i<4; i++)
            $("#image"+i).attr("src", "img/going.png");
        $("#image"+dic.last_checkpoint_id).attr("src", "img/stopped.png");
        if (dic.last_checkpoint_id==3){
            window.alert("ARRIVED!");
        }
    });  
};
$(document).ready(function(){
    ajax_call();
    var interval = 1000 * 5; // where X is your every X minutes
    setInterval(ajax_call, interval);
});
