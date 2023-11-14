let picture = ["images/header0.jpg", "Images/header1.jpg", "Images/header2.jpg"];
let picIdx = 0;

showSlide();

function showSlide() {
    let cupPic = document.getElementById("pic")
    cupPic.src = picture[picIdx];  // img 경로의 경우 -> src를 쓴다
    picIdx++;
    if(picIdx == picture.length){
        picIdx = 0;
    }
    setTimeout(showSlide, 2500);
}

// 시계 생성
setInterval(myWatch, 1000);

function myWatch() {
    const now = new Date(); // 날짜와 시간 함께 생성
    let time = now.toLocaleTimeString(); // 시간만 출력
    console.log(time);

    let watch = document.getElementById("show")
    watch.innerHTML = time;
    watch.style.color = "#99f";
}