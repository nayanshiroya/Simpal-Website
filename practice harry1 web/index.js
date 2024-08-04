



burger = $(".burger").on("click",function(){
    $(".navbar").css("transition" ," all 0.5s ease-in-out");
    $(".nav-list , .nav-right").toggleClass("vclass");
    $(".navbar").toggleClass("hclass");
    // $(".nav-list").toggleClass("vclass");
   



})