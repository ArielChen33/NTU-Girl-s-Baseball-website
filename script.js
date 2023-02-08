// Test
console.log("Hishishishi");

// 先等頁面加載完再執行
window.onload = function(){
  
  // 這裡雖然只有一個img,但num變量的結果還是一個數組
  var num = document.getElementsByTagName("img")[0];
  console.log(num);
  
  // 定義圖像位址
  var photo = ["https://www.linkpicture.com/q/1C7CDBD3-2ED7-44CA-8EDC-E445BCF9FE70.jpg", 
               "https://www.linkpicture.com/q/4FE01D3B-BCE4-496B-956A-9525C0298E5E.jpg", 
               "https://www.linkpicture.com/q/11CDC2B9-FE85-42DB-A936-8B2B92D3EBC0.jpg", 
               "https://www.linkpicture.com/q/882EB728-38E7-4518-BAF8-0168280B73FA.jpg", 
               "https://www.linkpicture.com/q/49218E3A-6B4D-406F-83A4-4E93C142F871.jpg", 
               "https://www.linkpicture.com/q/A635EC92-47FD-4533-847D-4BB5DB89EE61.jpg", 
               "https://www.linkpicture.com/q/AD5DB414-BAC8-4CD6-9FDC-0C5A08144E9D.jpg", 
               "https://www.linkpicture.com/q/B4ABFECE-1B7E-4322-87B1-5B43A2CE730E.jpg", 
               "https://www.linkpicture.com/q/C5982070-B621-402A-98DE-819BDECF1FD9.jpg"
              ];
  


  
    
  // 獲取按鈕
  var prev = document.getElementById("pre");
  var next = document.getElementById("next");
  var index = 0;
  
  // 描述圖片
  var p_desc = document.getElementById("desc");
  p_desc.innerHTML = "There are " + photo.length + " photos" + ", and it is the " + (index + 1) + " one.";
  
  // 點擊切換圖片
  prev.onclick = function(){
    index--;
    // 此處讓他循環
    if (index < 0)
        index = photo.length - 1;
    num.src = photo[index];
    p_desc.innerHTML = "There are " + photo.length + " photos" + ", and it is the " + (index + 1) + " one.";
  }
  
  next.onclick = function(){
    index++;
    console.log(index);
    if (index > photo.length - 1)
        index = 0;
    num.src = photo[index];
    console.log("There are " + photo.length + " photos" + ", and it is the " + (index + 1) + " one.");
    p_desc.innerHTML = "There are " + photo.length + " photos" + ", and it is the " + (index + 1) + " one.";
  }
  
}


// function button_function(){
//   console.log("Button clicked!");
  
// }

// const button1 = document.getElementById("button");
// button1.addEventListener("click", button_function);

