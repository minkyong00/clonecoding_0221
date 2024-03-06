//banner

//슬라이드 이미지 감싸고 있는 부모요소
let $bannerBox = $(".banner-box");
//슬라이드 이미지
let $bannerImgs = $(".banner-img");

//슬라이드 이미지 너비
let bannerWidth = 970;
//슬라이드 이미지 인덱스 번호
let currentIdx = 0;
//총 슬라이드 이미지 수
let slideCnt = $bannerImgs.length;

console.log(`slideCnt : ${slideCnt}`);

// 슬라이드 번호 표시 요소
let $slideNumber = $(".number");

// 슬라이드 번호 업데이트 함수
function updateSlideNumber() {
    $slideNumber.text(`${currentIdx + 1}/${slideCnt}`);
}

$(".next").on("click", moveNext);
function moveNext() {
    console.log(`슬라이드 다음 클릭`);
    currentIdx++;
    console.log(`currentIdx : ${currentIdx}`);

    $bannerBox.css("left", -(currentIdx * bannerWidth));
    $bannerBox.css("transition", "0.5s ease");

    updateSlideNumber();
}

function moveFirst() {
    currentIdx = 0;
    $bannerBox.css("transition", "none");
    $bannerBox.css("transition", "0.5s ease");
    $bannerBox.css("left", 0);

    updateSlideNumber();
}

$(".prev").on("click", function () {
    console.log(`슬라이드 이전 클릭`);
    currentIdx--;
    console.log(`currentIdx : ${currentIdx}`);

    $bannerBox.css("left", -(currentIdx * bannerWidth));
    $bannerBox.css("transition", "0.5s ease");

    updateSlideNumber();
});

//배너에 마우스 올렸을 때 화살표 보이기
$bannerBox.on("mouseenter", function(){
    $(".prev, .next").css("display", "block");
});

//배너에서 마우스 뗐을 때 화살표 숨기기
$bannerBox.on("mouseleave", function(){
    $(".prev, .next").css("display", "none");
});

function autoChangeSlide() {
    if (currentIdx == slideCnt - 1) {
        moveFirst();
    } else {
        moveNext();
    }
}

updateSlideNumber();

setInterval(autoChangeSlide, 3000);

//main

// 숨고 인기 서비스
// 인기 서비스 이미지 감싸고 있는 부모요소
let $serviceBox = $(".main-service");
//인기 서비스 이미지
let $serviceImgs = $(".service-img");

//인기 서비스 이미지 너비
let serviceWidth = 241;
//인기 서비스 이미지 인덱스 번호
let serviceCurrentIdx = 0;
//총 인기서비스 이미지 수
let serviceSlideCnt = $serviceImgs.length;

console.log(`serviceSlidecut : ${serviceSlideCnt}`);

$(".next02").on("click", moveNext01);
function moveNext01() {
    console.log(`슬라이드 다음 클릭`);
    serviceCurrentIdx += 2;
    console.log(`serviceCurrentIdx : ${serviceCurrentIdx}`);

    $serviceImgs.css("left", -(serviceCurrentIdx * serviceWidth));
    $serviceImgs.css("transition", "0.5s ease");
    checkEnd();
}

$(".prev02").on("click", function () {
    console.log(`슬라이드 이전 클릭`);
    serviceCurrentIdx -= 2;
    console.log(`serviceCurrentIdx : ${serviceCurrentIdx}`);

    $serviceImgs.css("left", -(serviceCurrentIdx * serviceWidth));
    $serviceImgs.css("transition", "0.5s ease");
    checkEnd();
});

checkEnd();

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd() { 
    if (serviceCurrentIdx <= 0) {
        $(".prev02").css("display", "none");
    } else {
        $(".prev02").css("display", "block");
    }

    if (serviceCurrentIdx >= serviceSlideCnt - 3) {
        $(".next02").css("display", "none");
    } else {
        $(".next02").css("display", "block");
    }
}

// 숨은 고수 포트폴리오


// 배우고 성장하는 재미


// 숨고 이야기
