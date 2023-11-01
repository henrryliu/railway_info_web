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
