let input = document.getElementById('inp');
let imageBox = document.getElementById('imageBox');
let qr_image = document.getElementById('code');


function fun(){
    if(input.value!=""){
        qr_image.style.display = "block";
        qr_image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        qr_image.style.marginLeft = "40%";
    }
}