let $bannerBox = $(".banner-box");
let $bannerImgs = $(".banner-img");

let bannerWidth = 970;
let currentIdx = 0;
let slideCnt = $bannerImgs.length;

console.log(`slideCnt : ${slideCnt}`);

$(".next").on("click", moveNext);
function moveNext(){
    console.log(`다음 슬라이드 클릭`)
    currentIdx++;
    console.log(`currentIdx : ${currentIdx}`);

    $bannerBox.css("left", -(currentIdx * bannerWidth));
    $bannerBox.css("transition", "0.5s ease");
}

function moveFirst(){
    currentIdx = 0;
    $bannerBox.css("transition", "none");
    $bannerBox.css("transition", "0.5s ease");
    $bannerBox.css("left", 0);
}

$(".prev").on("click", movePrev);
function movePrev(){
    console.log(`이전 슬라이드 클릭`)
    currentIdx--;
    console.log(`currentIdx : ${currentIdx}`);

    $bannerBox.css("left", -(currentIdx * bannerWidth));
    $bannerBox.css("transition", "0.5s ease");
}

function checkEnd() {
    if (currentIdx < 0) {
        currentIdx = 0; 
    }
    if (currentIdx >= slideCnt) {
        currentIdx = slideCnt - 1; 
    }

    
    $(".prev, .next").css("display", "block");
}

setTimeout(() => {
    if(currentIdx == slideCnt - 1) {
        moveFirst();
    }else{
        moveNext();
    }
}, 3000);


$(".banner-img").hover (
    function(){
        $(".prev, .next").css("display", "block")
    },
    function(){
        $(".prev, .next").css("display", "none")
    }
);
