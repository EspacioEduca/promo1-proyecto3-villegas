$(".ayudar").hide();
$(".ignorar").hide();
$(".buscar").hide();
$(".lugares").hide();
/*/desaparese todo /*/

$(".ayudar?").click(function(){
    $(".inicio").hide();
    $(".ayudar").show();
});
/*/desaparese el inicio y aparese el ayuda /*/

$(".ayudar?").click(function(){
    $(".inicio").hide();
    $(".ignorar").show();
});
/*/desaparese el inicio y aparese el ignorar /*/

$(".ok").click(function(){
    $(".ayudar").hide();
    $(".busdar").show();
});
/*/ desaparese la ayuda y aparese bucar/*/

$(".repetir").click(function(){
    $(".inicio").show();
    $(".ignorar").hide();
});
/*/buelbe al inicio/*/

$(".de-a-cuerdo").click(function(){
    $(".buscar").hide();
    $(".lugares").show();
});
/*/desaparese buscar y aparese los lugsres/*/

$(".sigueme").click(function(){
    $(".sigueme").hide();
    $(".peliqueria").hide();
});
/*/ desaparase el sigueme y aparese la peluqueria/*/

