//id, email, pw 빈값 검사
let click = document.querySelector("input[type='text']");
const id = document.querySelector("input[id='id']");
const email = document.querySelector("input[id='email']");
const pw = document.querySelector("input[id='password']");
const idResult = document.querySelector("#id-result");
const emailResult = document.querySelector("#email-result");
const pwResult = document.querySelector("#pw-result");

click.addEventListener("click", () => {
    if(!id.value){
        idResult.innerText = "이름를 입력해주세요.";
        idResult.style.color = "red";
        return;
    }

    if(!email.value){
        emailResult.innerText = "이메일 주소를 입력해주세요.";
        emailResult.style.color = "red";
        return;
    }

    if(!pw.value){
        pwResult.innerText = "비밀번호를 입력해주세요.";
        pwResult.style.color = "red";
        return;
    }
})

//전체 약관 동의
$(".all").on("click", function(e) {
    $(".term1, .term2, .term3, .term4, .term5, .term6").prop("checked", $(this).prop("checked"));
});

$(".term1, .term2, .term3, .term4, .term5, .term6").on("click", function() {
    $(".all").prop("checked", $(".term1, .term2, .term3, .term4, .term5, .term6").length === $(".term1:checked, .term2:checked, .term3:checked, .term4:checked, .term5:checked, .term6:checked").length);
});