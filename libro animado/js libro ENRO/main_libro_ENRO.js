$(document).ready(init);

function init(){
    $("#libro").booklet(
        {
            width:1000,
            height:500,

            closed:true,
            covers:true,
            autoCenter:true,

            pagePadding:0,
            hoverWidth:100,


        }
    );
    $("#bt_go").click(function(){
        $("#libro").booklet("gotopage",$("#in_go").val());
    });
}