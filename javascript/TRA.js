var coordinates = [  // 定義座標陣列，格式為 [top, left]
    [0, 260],[57,218],[35, 237],[7,220],[49, 176],
    [79,145],[101, 176],[109,124],[157, 121],[197,45],
    [228, 102],[237,22],[278, 75],[323,45],[353, 37],
    [330,92],[398,80],[350, 137],[195,200],[99,236]
];
var countyElements = document.querySelectorAll('.county');  // 獲取所有標籤元素
for (var i = 0; i < countyElements.length; i++) {  // 使用循環設置每個標籤的位置
  const countyElement = countyElements[i];

  countyElement.addEventListener('click', (event) => {
    event.preventDefault();
    countyElements.forEach(item => {
      item.classList.remove('active');
    });
    countyElement.classList.add('active');
  });

  const coordinate = coordinates[i];
  if (coordinate) {
    // 設置標籤的位置
    // countyElement.style.position = 'absolute';
    countyElement.style.top=coordinate[0] +21+ 'px';
    countyElement.style.left = coordinate[1] +19+ 'px';
  }
}
var showDivLinks = countyElements;
var hiddenDivs = document.querySelectorAll(".map-country");

// 为每个链接添加点击事件监听器
showDivLinks.forEach(function(link, index) {
  link.addEventListener("click", function(event) {
      event.preventDefault(); // 防止链接跳转
      // 隐藏所有 div 元素
      hiddenDivs.forEach(function(div) {
          div.style.display = "none";
      });
      // 显示与链接位置相对应的 div 元素
      hiddenDivs[index].style.display = "block";
  });
});