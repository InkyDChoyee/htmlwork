// let toggleBtn = document.querySelector(".navbar_toggleBtn");
// let menu = document.querySelector(".navbar_menu");

// toggleBtn.addEventListener('click', function(){
//     // active라는 이름의 클래스 추가/삭제
//     menu.classList.toggle('active');
// })

// 제이쿼리로 구현
$(function(){
    // alert("test");
    // toggle() - show()/hide()
    $(".navbar_toggleBtn").click(function(){
        $(".navbar_menu").toggle("active");
    })

});