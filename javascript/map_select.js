const showDivLinks = document.querySelectorAll('.route');
const hiddenDivs = document.querySelectorAll('.route-map');

showDivLinks.forEach(function(link, index) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // 防止链接跳转
        // 隐藏所有 div 元素
        hiddenDivs.forEach(function(div) {
            div.classList.remove('active');
        });
        // 显示与链接位置相对应的 div 元素
        hiddenDivs[index].classList.add('active');
    });
});

const showintro = document.querySelectorAll('.sta');
const hiddenintro = document.querySelectorAll('.intro');

showintro.forEach(function(link, index) {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // 防止链接跳转
        // 隐藏所有 div 元素
        hiddenintro.forEach(function(div) {
            div.classList.remove('active');
        });
        // 显示与链接位置相对应的 div 元素
        hiddenintro[index].classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const verticalLines = document.querySelectorAll(".vertical-line");
    verticalLines.forEach((verticalLine) => {
      const aTags = verticalLine.querySelectorAll(".station a");
      const height = aTags.length * 34; // 每個a標籤的高度是34px
      verticalLine.style.setProperty("--height", height-10 + "px");
    });
  });