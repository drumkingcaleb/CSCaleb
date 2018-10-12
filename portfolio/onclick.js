var click=0;
function myFunction(x) {
    x.classList.toggle("change");
    if(click==0){
        var right = document.getElementById("right");
        right.style.width = "35%";
        var left = document.getElementById("left");
        left.style.width = "60%";
        var footer = document.getElementById("footer");
        footer.style.right = "38%";
        click=2;
    }else{
        var right = document.getElementById("right");
        right.style.width = "0%";
        var left = document.getElementById("left");
        left.style.width = "100%";
        var footer = document.getElementById("footer");
        footer.style.right = "2%";
        click=0;   
    }
}