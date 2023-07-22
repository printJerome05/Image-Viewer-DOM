var imgCount = 0;
var title;
var desc;
var imgContent1 = ["imgOption1", "BOM", "Lorem ipsum dolor sit amet."];
var imgContent2 = ["imgOption2", "DOM", "Nullam fringilla imperdiet eleifend"];
var imgContent3 = ["imgOption3", "JavaScript", "Cras dapibus ipsum a consequat tincidunt"];



function previewImg(imgSrc){
 document.getElementById("imgViewer").src = imgSrc.src;
 imgContent1[imgCount][0] = imgSrc.id;
 document.getElementById("topicTtl").innerHTML= imgContent1[1];
 document.getElementById("topicDescrpt").innerHTML= imgContent1[2];
}

function previewImg1(imgSrc){
 document.getElementById("imgViewer").src = imgSrc.src;
 imgContent2[imgCount][0] = imgSrc.id;
 document.getElementById("topicTtl").innerHTML= imgContent2[1];
 document.getElementById("topicDescrpt").innerHTML= imgContent2[2];
}

function previewImg2(imgSrc){
 document.getElementById("imgViewer").src = imgSrc.src;
 imgContent3[imgCount][0] = imgSrc.id;
 document.getElementById("topicTtl").innerHTML= imgContent3[1];
 document.getElementById("topicDescrpt").innerHTML= imgContent3[2];
}

