// HTML/CSS Progress Circular Bar
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress");
let htmlStartValue = 0, htmlEndValue = 90, htmlSpeed = 30;
let progresshtml = setInterval(() => {
  htmlStartValue++;
  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;
  if (htmlStartValue == htmlEndValue) { clearInterval(progresshtml); }
}, htmlSpeed);

// JavaScript Progress Circular Bar
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress");
let javascriptStartValue = 0, javascriptEndValue = 75, jsSpeed = 30;
let progressjs = setInterval(() => {
  javascriptStartValue++;
  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;
  if (javascriptStartValue == javascriptEndValue) { clearInterval(progressjs); }
}, jsSpeed);

// PHP Progress Circular Bar
let phpProgress = document.querySelector(".php"),
  phpValue = document.querySelector(".php-progress");
let phpStartValue = 0, phpEndValue = 80, phpSpeed = 30;
let progressphp = setInterval(() => {
  phpStartValue++;
  phpValue.textContent = `${phpStartValue}%`;
  phpProgress.style.background = `conic-gradient(#20c997 ${phpStartValue * 3.6}deg, #ededed 0deg)`;
  if (phpStartValue == phpEndValue) { clearInterval(progressphp); }
}, phpSpeed);

// ReactJS Progress Circular Bar
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress");
let reactStartValue = 0, reactEndValue = 30, rjsSpeed = 30;
let progressreact = setInterval(() => {
  reactStartValue++;
  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${reactStartValue * 3.6}deg, #ededed 0deg)`;
  if (reactStartValue == reactEndValue) { clearInterval(progressreact); }
}, rjsSpeed);

// Java Progress Circular Bar
let javaProgress = document.querySelector(".java"),
  javaValue = document.querySelector(".java-progress");
let javaStartValue = 0, javaEndValue = 70, javaSpeed = 30;
let progressJava = setInterval(() => {
  javaStartValue++;
  javaValue.textContent = `${javaStartValue}%`;
  javaProgress.style.background = `conic-gradient(#f8981d ${javaStartValue * 3.6}deg, #ededed 0deg)`;
  if (javaStartValue == javaEndValue) { clearInterval(progressJava); }
}, javaSpeed);

// Node.js Progress Circular Bar
let nodejsProgress = document.querySelector(".nodejs"),
  nodejsValue = document.querySelector(".nodejs-progress");
let nodejsStartValue = 0, nodejsEndValue = 80, nodejsSpeed = 30;
let progressNodejs = setInterval(() => {
  nodejsStartValue++;
  nodejsValue.textContent = `${nodejsStartValue}%`;
  nodejsProgress.style.background = `conic-gradient(#8cc84b ${nodejsStartValue * 3.6}deg, #ededed 0deg)`;
  if (nodejsStartValue == nodejsEndValue) { clearInterval(progressNodejs); }
}, nodejsSpeed);

// MongoDB Progress Circular Bar
let mongodbProgress = document.querySelector(".mongodb"),
  mongodbValue = document.querySelector(".mongodb-progress");
let mongodbStartValue = 0, mongodbEndValue = 70, mongodbSpeed = 30;
let progressMongoDB = setInterval(() => {
  mongodbStartValue++;
  mongodbValue.textContent = `${mongodbStartValue}%`;
  mongodbProgress.style.background = `conic-gradient(#4db33d ${mongodbStartValue * 3.6}deg, #ededed 0deg)`;
  if (mongodbStartValue == mongodbEndValue) { clearInterval(progressMongoDB); }
}, mongodbSpeed);

// Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar-top').classList.add('fixed-top');
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar-top').classList.remove('fixed-top');
      document.body.style.paddingTop = '0';
    }
  });
});

// Filter Functionality (optional, if you're using filters for your project)
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post").not("." + value).hide("1000");
      $(".post").filter("." + value).show("1000");
    }
  });
});

// Back to Top Button
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
