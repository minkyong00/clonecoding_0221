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
const prev02 = document.querySelector('.prev02');
const next02 = document.querySelector('.next02');
const serviceBox = document.querySelector('.main-service');

const serviceWidth = 241;
prev02.addEventListener('click', () => {
  serviceBox.scrollLeft -= serviceWidth * 2;
  
});

next02.addEventListener('click', () => {
  serviceBox.scrollLeft += serviceWidth * 2;
  
});

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd() {
    
    if (serviceBox.scrollLeft === 0) {
        prev02.style.display = 'none';
    } else {
        prev02.style.display = 'block';
    }
    
    
    if (serviceBox.scrollLeft === (serviceBox.scrollWidth - serviceBox.clientWidth)) {
        next02.style.display = 'none';
    } else {
        next02.style.display = 'block';
    }
}

checkEnd();

serviceBox.addEventListener('scroll', checkEnd);

// 숨은 고수 포트폴리오
const prev03 = document.querySelector('.prev03');
const next03 = document.querySelector('.next03');
const portpolioBox = document.querySelector('.main-portpolio');

const portpolioSlides = document.querySelectorAll('.portpolio-box');
let portpolioCurrentIndex = 0;

prev03.addEventListener('click', () => {
  if (portpolioCurrentIndex > 0) {
    portpolioCurrentIndex -= 2;
    moveSlide01();
    checkEnd01();
  }
});

next03.addEventListener('click', () => {
  if (portpolioCurrentIndex < portpolioSlides.length - 2) {
    portpolioCurrentIndex += 2;
    moveSlide01();
    checkEnd01();
  }
});

function moveSlide01() {
  const newPosition = -portpolioCurrentIndex * portpolioSlides[0].offsetWidth;
  portpolioBox.style.transform = `translateX(${newPosition}px)`;
}

function checkEnd01() {
  if (portpolioCurrentIndex === 0) {
    prev03.style.display = 'none';
  } else {
    prev03.style.display = 'block';
  }

  if (portpolioCurrentIndex === portpolioSlides.length - 1) {
    next03.style.display = 'none';
  } else {
    next03.style.display = 'block';
  }
}

prev03.style.display = 'none';

checkEnd01();

// 배우고 성장하는 재미
const prev04 = document.querySelector('.prev04');
const next04 = document.querySelector('.next04');
const learnBox = document.querySelector('.main-learn');

const slides = document.querySelectorAll('.learn-lesson');
let learnCurrentIndex = 0;

prev04.addEventListener('click', () => {
    if (learnCurrentIndex > 0) {
      learnCurrentIndex -= 2;
      moveSlide();
      checkEnd02();
    }
  });

  next04.addEventListener('click', () => {
    if (learnCurrentIndex < slides.length - 1) {
      learnCurrentIndex += 2;
      moveSlide();
      checkEnd02();
    }
  });

function moveSlide() {
    const newPosition = -learnCurrentIndex * slides[0].offsetWidth; 
    learnBox.style.transform = `translateX(${newPosition}px)`; 
  }

  function checkEnd02() {
    if (learnCurrentIndex === 0) {
        prev04.style.display = 'none';
      } else {
        prev04.style.display = 'block';
      }
    
      if (learnCurrentIndex === slides.length - 1) {
        next04.style.display = 'none';
      } else {
        next04.style.display = 'block';
      }
  }
  
  checkEnd02();

// 숨고 이야기
const prev05 = document.querySelector('.prev05');
const next05 = document.querySelector('.next05');
const storyBox = document.querySelector('.main-story');

const storyWidth = 327.4;
prev05.addEventListener('click', () => {
  storyBox.scrollLeft -= storyWidth;
  
});

next05.addEventListener('click', () => {
    storyBox.scrollLeft += storyWidth;
  
});

//처음 이미지와 마지막 이미지는 화살표 감추기
function checkEnd03() {
    
    if (storyBox.scrollLeft === 0) {
        prev05.style.display = 'none';
    } else {
        prev05.style.display = 'block';
    }
    
    
    if (storyBox.scrollLeft === (storyBox.scrollWidth - storyBox.clientWidth)) {
        next05.style.display = 'none';
    } else {
        next05.style.display = 'block';
    }
}

checkEnd03();

storyBox.addEventListener('scroll', checkEnd03);
