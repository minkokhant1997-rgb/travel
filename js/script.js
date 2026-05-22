//Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
    if(navMenu.classList.contains('active')){
        navToggle.innerHTML = 'x'
    }
    else{
        navToggle.innerHTML = '&#9776;'
    }
});

//image slider
const slides = document.querySelectorAll('.carousel-image');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide(index) {

    slides[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= slides.length) {
        nextIndex = 0; 
    }
    showSlide(nextIndex);
}


function prevSlide() {
    let prevIndex = currentSlide - 1;
    if (prevIndex < 0) {
        prevIndex = slides.length - 1; 
    }
    showSlide(prevIndex);
}
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

//contact

const form = document.querySelector("#form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries())
    let isValid = true;
    const validations = {
        name:data.name.trim() !== "",
        email:data.email.trim() !== "",
        subject:data.subject.trim() !== "",
        message:data.message.trim() !== ""
    };
    for(field in validations){
        if(!validations[field]){
            document.getElementById(field).style.borderColor = "red";
            isValid = false;
        }else{
            document.getElementById(field).style.borderColor = "#202020"
        }
    }
    if(isValid){
        alert("SUCCESS! Message successfully sent");
        this.reset()
    }
})



        // For slider 1
        const mountainData = [
            {
                img: "./img/myanmar.jpg",
                title: "ရွှေရောင်ဆည်းဆာနှင့် ပုဂံကဗျာ",
                text: "ရှေးဟောင်းစေတီပုထိုးများစွာ ကိန်းဝပ်စိုးစံရာ ပုဂံမြေပြင်ထက်သို့ ညို့မှိုင်းတဲ့ နေဝင်ဆည်းဆာ အလင်းတန်းများ ဖြာကျနေသည့် မြင်ကွင်းဖြစ်ပါသည်။"
            },
            {
                img: "./img/caption (2).jpg",
                title: "မှိုင်းပြာဝေဆာ တောင်တန်းပြာ",
                text: "မိုးကုတ်စက်ဝိုင်းအထိ သွယ်တန်းနေတဲ့ တောင်တန်းကြီးတွေနဲ့ လတ်ဆတ်တဲ့ သဘာဝလေညင်းတွေ ဖြတ်သန်းစီးဆင်းရာ နေရာဖြစ်ပါတယ်။ စိမ်းစိုနေတဲ့ တောတောင်ရေမြေ အလှတရားတွေက မြို့ပြရဲ့ မွန်းကျပ်မှုတွေကို ခဏတာ မေ့ပျောက်စေမှာပါ။"
            },
            {
                img: "./img/istockphoto-481873894-612x612.jpg",
                title: "ပုဂံမြေမှ လေပူဖောင်းကဗျာ",
                text: "ရွှေရောင်ဝင်းပနေတဲ့ နေခြည်နုနုအောက်မှာ စေတီပုထိုးတွေနဲ့အတူ လေပူဖောင်းနီနီလေးတွေ ပျံသန်းနေတဲ့ မြင်ကွင်းဟာ ပုဂံမြေရဲ့ မနက်ခင်းကို သက်ရှိထင်ရှား ကဗျာတစ်ပုဒ်လို ဖြစ်စေပါတယ်။"
            }
        ];

        let index1 = 0;
        function changeImage1(direction) {
            index1 += direction;
            if (index1 >= mountainData.length) index1 = 0;
            else if (index1 < 0) index1 = mountainData.length - 1;

            document.getElementById("slider-img-1").src = mountainData[index1].img;
            document.getElementById("slider-title-1").innerText = mountainData[index1].title;
            document.getElementById("slider-text-1").innerText = mountainData[index1].text;
        }

        // For slider 2
        const beachData = [
            {
                img: "./img/images (3).jpg",
                title: "ကျွန်းစိမ်းအလှနှင့် မြိတ်ကျွန်းစုရဲ့ ပုလဲရတနာ",
                text: "မိုးပြာရောင်ပင်လယ်ပြင်ကျယ်ကြီးရဲ့ အလယ်မှာ ထူးခြားဆန်းပြားစွာ တည်ရှိနေတဲ့ လခြမ်းကွေးပုံစံ ကျွန်းငယ်လေးတစ်ကျွန်း ဖြစ်ပါတယ်။ ကြည်လင်လွန်းလို့ ရေအောက်ခြေက သဲပွင့်လေးတွေအထိ မြင်တွေ့နိုင်တဲ့ မြိတ်ကျွန်းစုရဲ့ သဘာဝအတိုင်း မပျက်စီးသေးတဲ့ အလှတရားက ခရီးသွား ဝါသနာရှင်တွေကို ဆွဲဆောင်နေပါတယ်။"
            },
            {
                img: "./img/thande-beach-hotel.jpg",
                title: "ငပလီကမ်းခြေက ရွှေရောင်ဆည်းဆာ အမှတ်တရ",
                text: "နေဝင်ချိန်ဆည်းဆာ အလင်းရောင်ကြောင့် ရွှေရောင်ဝင်းနေတဲ့ သဲသောင်ပြင်ကျယ်ကြီးပေါ်မှာ အေးချမ်းစွာ အပန်းဖြေနိုင်မယ့် မြင်ကွင်းဖြစ်ပါတယ်။ ပင်လယ်လေညင်း တိုက်ခတ်မှုနဲ့အတူ လှိုင်းသံညင်းညင်းလေးတွေကို နားဆင်ရင်း အပန်းဖြေနိုင်မှာဖြစ်ပါတယ်။"
            },
            {
                img: "./img/the-longest-stretch-of.jpg",
                title: "ကြည်ပြာရောင်ပင်လယ်နှင့် သဲသောင်ဖြူဖြူ",
                text: "ကြည်လင်တောက်ပနေတဲ့ ကောင်းကင်ပြာပြာအောက်မှာ ဖွေးဖွေးလှုပ်နေတဲ့ သဲသောင်ပြင်နဲ့ စိမ်းပြာရောင် ပင်လယ်ရေပြင်တို့ သဟဇာတဖြစ်နေတဲ့ သာယာလှပလွန်းတဲ့ ကမ်းခြေအလှ ဖြစ်ပါတယ်။"
            }
        ];

        let index2 = 0;
        function changeImage2(direction) {
            index2 += direction;
            if (index2 >= beachData.length) index2 = 0;
            else if (index2 < 0) index2 = beachData.length - 1;

            document.getElementById("slider-img-2").src = beachData[index2].img;
            document.getElementById("slider-title-2").innerText = beachData[index2].title;
            document.getElementById("slider-text-2").innerText = beachData[index2].text;
        }

        // For slider 3
        const forestData = [
            {
                img: "./img/20190525-204918-largejpg.jpg",
                title: "ရွှေရောင်သန်းသော ပင်လယ်ပြင်",
                text: "ကောင်းကင်ပြာပြာမှာ တိမ်တိုက်ဖြူဖြူလေးတွေ လွင့်မျောနေပြီး၊ ပင်လယ်ရေပြင်ကျယ်ကြီးက နေဝင်ရီတရော အလင်းရောင်ကြောင့် ရွှေရောင်အတိ တောက်ပနေပါတယ်။ ပန်းချီကားတစ်ချပ်လို လှပလွန်းတဲ့ ကမ်းခြေဆည်းဆာ အမှတ်တရ ပုံရိပ်လေးတစ်ခုပါ။"
            },
            {
                img: "./img/bayview-the-beach-resort.jpg",
                title: "မြစ်ဝကျွန်းစုရဲ့ သစ်တောအလှ",
                text: "မြစ်ဝကျွန်းစုရဲ့ သစ်တောအလှကို ခံစားနိုင်မယ့် နေရာဖြစ်ပါတယ်။ သစ်တောထဲမှာ လေညင်းတွေကို နားဆင်ရင်း သဘာဝအလှတရားကို ခံစားနိုင်မှာပါ။"
            },
            {
                img: "./img/02.jpg",
                title: "သစ်တောထဲက ရေကန်အလှ",
                text: "သစ်တောထဲက ရေကန်အလှကို ခံစားနိုင်မယ့် နေရာဖြစ်ပါတယ်။ ရေကန်ပေါ်မှာ တောက်ပနေတဲ့ နေဝင်ချိန်ဆည်းဆာ အလင်းရောင်ကြောင့် ရွှေရောင်ဝင်းနေတဲ့ ရေကန်အလှကို ခံစားနိုင်မှာပါ။"
            }
        ];

        let index3 = 0;
        function changeImage3(direction) {
            index3 += direction;
            if (index3 >= forestData.length) index3 = 0;
            else if (index3 < 0) index3 = forestData.length - 1;

            document.getElementById("slider-img-3").src = forestData[index3].img;
            document.getElementById("slider-title-3").innerText = forestData[index3].title;
            document.getElementById("slider-text-3").innerText = forestData[index3].text;
        }


        let showbtn = document.getElementById("showbtn");
        let hide = document.getElementById("article");
        let judge = document.getElementById("judge");
        let profit = document.getElementById("profit");
        let shape = document.getElementById("shape");
        let attitude = document.getElementById("attitude");
        let method = document.getElementById("method");

        showbtn.addEventListener('click', function(){
            hide.style.display = 'block';
            judge.style.display = 'block';
            profit.style.display = 'block';
            shape.style.display = 'block';
            attitude.style.display = 'block';
            method.style.display = 'block';
        })