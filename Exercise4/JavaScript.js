function changeBorder()
{
    //Access the tag:
    var paragraph = document.getElementById("p");


    var red = document.getElementById("redBorder").value;
    var green = document.getElementById("greenBorder").value;
    var blue = document.getElementById("blueBorder").value;

    var width = document.getElementById("width").value;
    //Change the style attribute
    document.getElementById("p").style.border = "thick solid rgb(" + red + ',' + green + ',' + blue + ')';

    document.getElementById("p").style.borderWidth = width + 'px';

    console.log(width);
}

function changeBackground() {
    //Access the tag:
    var paragraph = document.getElementById("p");

    var red = document.getElementById("redBackground").value;
    var green = document.getElementById("greenBackground").value;
    var blue = document.getElementById("blueBackground").value;

    //Change the style attribute
    document.getElementById("p").style.backgroundColor = "rgb(" + red + ',' + green + ',' + blue + ')';
}