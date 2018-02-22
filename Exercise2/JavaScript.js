var images = new Array(5);
images[0] = "http://webneel.com/daily/sites/default/files/images/daily/05-2014/12-sunrise-picture.jpg";
images[1] = "http://ichef.bbci.co.uk/news/976/media/images/83351000/jpg/_83351965_explorer273lincolnshirewoldssouthpicturebynicholassilkstone.jpg";
images[2] = "https://twistedsifter.files.wordpress.com/2016/07/dulmen_bornste_waldweg.jpg";
images[3] = "http://cdn.newsapi.com.au/image/v1/9fdbf585d17c95f7a31ccacdb6466af9";
images[4] = "https://apod.nasa.gov/apod/image/1611/ChicagoClouds_Hersch_3600.jpg";

var numimg = 4;
var curimg = 0;

function previous() {
    var im = document.getElementById("image");
    if (curimg > 0) {
        im.src = images[curimg - 1];
        curimg = curimg - 1;
    }
    else {
        im.src = images[4];
        curimg = 4;
    }
}

function next() {
    var im = document.getElementById("image");
    if (curimg < numimg) {
        im.src = images[curimg + 1];
        curimg = curimg + 1;
    }
    else
    {
        im.src = images[0];
        curimg = 0;
    }
}