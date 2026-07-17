const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const resultBox = document.getElementById("result");
const prizeText = document.getElementById("prize");

const prizes = [
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

let spinning = false;

spinBtn.addEventListener("click", function(){

if(spinning) return;

if(localStorage.getItem("gxSpinDone")){
alert("You have already used your Spin & Win offer.");
return;
}

spinning = true;

const random = Math.floor(Math.random() * prizes.length);

const degree = 360 * 6 + random * (360 / prizes.length);

wheel.style.transform = `rotate(${degree}deg)`;

setTimeout(function(){

prizeText.innerHTML = prizes[random];
resultBox.style.display = "block";

localStorage.setItem("gxSpinDone","yes");

spinning = false;

},5000);

});