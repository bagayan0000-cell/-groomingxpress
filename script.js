const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const popup = document.getElementById("popup");
const prize = document.getElementById("prize");
const resultText = document.getElementById("resultText");
const couponCode = document.getElementById("couponCode");
const closePopup = document.getElementById("closePopup");
const claimBtn = document.getElementById("claimBtn");
const offers = [
"✂️ Free Hair Cut",
"🎁 10% OFF",
"🌸 Lotus Facial",
"😢 Better Luck Next Time",
"🔥 50% OFF All Service",
"💆 Hair Spa",
"💳 Free Membership",
"✨ Keratin Treatment",
"🧴 Product 20% OFF",
"🎉 Surprise Gift",
"🖋️ Tattoo 50% OFF",
"💅 Nail Extension ₹799"
];

spinBtn.addEventListener("click", () => {

const random = Math.floor(Math.random() * offers.length);

const segment = 360 / offers.length;
const rotate = 3600 + (random * segment);

wheel.style.transition = "transform 5s ease-out";
wheel.style.transform = `rotate(${rotate}deg)`;

setTimeout(() => {

prize.innerHTML = offers[random];
resultText.innerHTML = "🎉 You Won";

const coupon = "GX" + Math.floor(1000 + Math.random() * 9000);

couponCode.innerHTML = "Coupon: " + coupon;

const message =
`Hello Grooming Xpress 👋

I won:

${offers[random]}

Coupon Code:
${coupon}

I'd like to claim my offer.`;

claimBtn.onclick = function () {
    window.open(
        "https://wa.me/+91 81003 45294?text=" + encodeURIComponent(message),
        "_blank"
    );
};

popup.style.display = "flex";
const claimBtn = document.getElementById("claimBtn");

const coupon = "GX" + Math.floor(1000 + Math.random() * 9000);
couponCode.innerHTML = "Coupon: " + coupon;

const message =
`Hello Grooming Xpress 👋

I won:

${offers[random]}

Coupon Code:
${coupon}

I'd like to claim my offer.`;

claimBtn.href =
`https://wa.me/91+81003 45294?text=${encodeURIComponent(message)}`;

},5000);

});

closePopup.addEventListener("click", () => {

popup.style.display = "none";

});