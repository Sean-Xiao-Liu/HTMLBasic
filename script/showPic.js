
// define a function called showPic, the argument is which_pic, as JS doesn't require data type to be claimed
function showPic(picture){
    // get src from the picture
    var source = picture.getAttribute("href");
    var placeHolder = document.getElementById("placeHolder");
    // inject the src of picture into the place holder
    placeHolder.setAttribute("src",source)

}