$(function() {
  $("#btn").on("click", function() {
    $("p").toggle("500", "linear")
  });
});


//function clickBtn() {
//  const button = document.getElementById("btn");
//  const parent = document.getElementById("parent");
//  button.addEventListener("click", function(e) {
//    console.log("buttonがクリックされました");
//  if (!confirm("ページを移動しますか？‘")) {
//  e.preventDefault();
//  });
//  button.addEventListener("click", function(e) {
//    alert("buttonがクリックされました");
//  }
//  });
//   parent.addEventListener("click", function() {
//    console.log("parentがクリックされました");
//  });
//}

//window.onload = clickBtn;