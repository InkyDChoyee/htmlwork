// let toggleBtn = document.querySelector(".navbar_toggleBtn");
// let menu = document.querySelector(".navbar_menu");

// toggleBtn.addEventListener('click', function(){
//     // active라는 이름의 클래스 추가/삭제
//     menu.classList.toggle('active');
// })

// 제이쿼리로 구현
$(function(){
    // alert("test");
    // toggle() - 애니메이션기능
    $(".navbar_toggleBtn").click(function(){
        $(".navbar_menu").toggle("active");
    });

    // pc기준에서 상단메뉴가 보이지 않을 때 처리
    $(window).resize(function(){
        if(parseInt($("nav").css("width")) > 768){
            $(".navbar_menu").css("display", "flex");
        }else {
            $(".navbar_menu").css("display", "none");
        }
    })

});