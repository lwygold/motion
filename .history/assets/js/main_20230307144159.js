const mobile_check = function () {
    var temp = window.outerWidth;
    if (temp <= 640) {
        temp = true;
    } else {
        temp = false;
    }
    return temp;
}