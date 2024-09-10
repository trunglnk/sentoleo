// Thay đổi nội dung búc thư ở đây
var letterContent =
  " Cảm ơn em đã dành thời gian để nhìn những trò trẻ con của anhh và anh có những điều muốn gởi gắm đến em❤️. Từ cái ngày đầu tiên chúng ta bắt đầu nói chuyện với nhau a đã cảm thấy e rất đặc biệt. Đừng nghi ngờ tình cảm của a nhé. A không có khái niệm yêu người này để thay thế người kia, một khi đã mở lòng thì nhất định chỉ có duy nhất người đó trong tim. A biết người thích e rất nhiều, thiếu a cũng chả sao, người a thích rất ít ngoài e ra chả còn ai. Gặp được e là 1 sự may mắn, được e yêu nữa... Thì ô trời quá ưu ái a rồi..💕";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});
