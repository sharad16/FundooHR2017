$(document).ready(function()
{
    $(window).resize(function(){
      eventLoading();
    });
    eventLoading();
});
function eventLoading() {
  if($( window ).width()<768)
  {
    console.log("hide...");
      //  $(".collid").attr("data-toggle","collapse");
      //  $(".collid").attr("data-target","#hr-nav");
      $("collapse").hide();
 }else {
       $(".collid").removeAttr("data-toggle");
       $(".collid").removeAttr("data-target");
 }
}
