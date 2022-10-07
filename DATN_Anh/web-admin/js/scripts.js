(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"#F2B33F", cursorwidth: '6', cursorborderradius: '10px', background: '#424f63', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

    $(".scrollbar1").niceScroll({styler:"fb",cursorcolor:"rgba(97, 100, 193, 0.78)", cursorwidth: '6', cursorborderradius: '0',autohidemode: 'false', background: '#F1F1F1', spacebarenabled:false, cursorborder: '0'});

	
	
    $(".scrollbar1").getNiceScroll();
    if ($('body').hasClass('scrollbar1-collapsed')) {
        $(".scrollbar1").getNiceScroll().hide();
    }

})(jQuery);


let uploadButton = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
}   

let uploadButton1 = document.getElementById("upload-button1");
let chosenImage1 = document.getElementById("chosen-image1");
let fileName1 = document.getElementById("file-name1");

uploadButton1.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton1.files[0]);
    reader.onload = () => {
        chosenImage1.setAttribute("src",reader.result);
    }
    fileName1.textContent = uploadButton1.files[0].name;
}  

let uploadButton2 = document.getElementById("upload-button2");
let chosenImage2 = document.getElementById("chosen-image2");
let fileName2 = document.getElementById("file-name2");

uploadButton2.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton2.files[0]);
    reader.onload = () => {
        chosenImage2.setAttribute("src",reader.result);
    }
    fileName2.textContent = uploadButton2.files[0].name;
}  

let uploadButton3 = document.getElementById("upload-button3");
let chosenImage3 = document.getElementById("chosen-image3");
let fileName3 = document.getElementById("file-name3");

uploadButton3.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton3.files[0]);
    reader.onload = () => {
        chosenImage3.setAttribute("src",reader.result);
    }
    fileName3.textContent = uploadButton3.files[0].name;
}  

let uploadButton4 = document.getElementById("upload-button4");
let chosenImage4 = document.getElementById("chosen-image4");
let fileName4 = document.getElementById("file-name4");

uploadButton4.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton4.files[0]);
    reader.onload = () => {
        chosenImage4.setAttribute("src",reader.result);
    }
    fileName4.textContent = uploadButton4.files[0].name;
}  


let uploadButton5 = document.getElementById("upload-button5");
let chosenImage5 = document.getElementById("chosen-image5");
let fileName5 = document.getElementById("file-name5");

uploadButton5.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton5.files[0]);
    reader.onload = () => {
        chosenImage5.setAttribute("src",reader.result);
    }
    fileName5.textContent = uploadButton5.files[0].name;
}  


     
  