
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function closeCurrentSong() {
    document.getElementById("playSong").style.width = "0";
    document.getElementById("playSong").style.height = "121px";
    document.getElementsByClassName("picSong")[0].style.display = "block";
    document.getElementById("playSong").style.backgroundColor = "black";
    document.getElementById("displayPlaylist").style.height = "0px";
    document.getElementById("playlist").style.color = "white";
}

function openCurrentSong() {
    document.getElementById("playSong").style.width = "100%"
    document.getElementsByClassName("lyric").style.display = "none";
}

function openNav2(nameactive) {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById(nameactive).click();

}

function closeNav2() {
    document.getElementById("myNav").style.height = "0%";
}

function openForm(evt, nameForm, activeForm) {
    var i, contentForm, activeMenuForm;
    contentForm = document.getElementsByClassName("content-form");
    for (i = 0; i < contentForm.length; i++) {
        contentForm[i].style.display = "none";
    }
    activeMenuForm = document.getElementsByClassName("active-menu-form");
    for (i = 0; i < activeMenuForm.length; i++) {
        activeMenuForm[i].className = activeMenuForm[i].className.replace(" active", "");

    }
    document.getElementById(nameForm).style.display = "block";

    evt.currentTarget.className += " active";
}

function openMain(evt, tagmenu) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("menulink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" activemenu", "");
    }
    document.getElementById(tagmenu).style.display = "block";
    if (tagmenu == "Topic" || tagmenu == "Album") {
        document.body.style.backgroundColor = "beige";
        document.body.style.color = "Black";
    } else {
        document.body.style.backgroundColor = "rgb(28, 37, 37)";
        document.body.style.color = "aliceblue";

    }
    evt.currentTarget.className += " activemenu";

}
/////////////////////////////////////////////////////
var nameeee;

function openInfoArtist(stt) {
    var artistTab = document.getElementsByClassName("artist");
    for (var i = 0; i < artistTab.length; i++) {
        artistTab[i].style.display = "none";
    }
    var id = document.getElementsByClassName("artist")[stt].id;
    var link = "artist/" + id + ".html";
    $(".displayArtist").load(link);
    nameeee = id;
    var displayArtist = document.getElementsByClassName("displayArtist")[0];
    displayArtist.style.display = "block";


}

function openInfoArtist1(stt) {
    var artistTab = document.getElementsByClassName("artist");
    for (var i = 0; i < artistTab.length; i++) {
        artistTab[i].style.display = "none";
    }
    t = stt.innerHTML;
    for (var i = 0; i < artistObj.length; i++) {
        if (t == artistObj[i].name) id = artistObj[i].id;
    }
    //alert(id);
    var link = "artist/" + id + ".html";
    $(".displayArtist").load(link);
    nameeee = id;
    openMain(event, 'Artist');

}
var nameeA;

function openInfoAlbum(id) {

    //alert(id);
    var link = "album/" + id + ".html";
    $(".displayAlbum").load(link);
    nameeA = id;
    openMain(event, 'Album');

}

var imgArtist = document.getElementsByClassName("imgArtist");
var nameArtist = document.getElementsByClassName("nameArtist");
var background = document.getElementsByClassName("background");
var listsong = document.getElementsByClassName("listsong");


//var artistList = document.getElementsByClassName("artistList");
var order = document.getElementsByClassName("order");
var picListSong = document.getElementsByClassName("picListSong");
var nameListSong = document.getElementsByClassName("nameListSong");
var viewListSong = document.getElementsByClassName("viewListSong");
var getOrderSong = document.getElementsByClassName("getOrderSong");
var order1 = document.getElementsByClassName("order1");
var picListSong1 = document.getElementsByClassName("picListSong1");
var nameListSong1 = document.getElementsByClassName("nameListSong1");
var viewListSong1 = document.getElementsByClassName("viewListSong1");
var getOrderSong1 = document.getElementsByClassName("getOrderSong1");
var jd = 0;
var jdd = 0;

for (var i = 0; i < songObj.length; i++) {
    if (songObj[i].id == nameeee) {
        getOrderSong[jd].innerHTML = i;
        order[jd].innerHTML = jd + 1;
        picListSong[jd].src = songObj[i].pic;
        nameListSong[jd].innerHTML = songObj[i].nameSong;
        viewListSong[jd].innerHTML = songObj[i].view + " Views";
        jd++;
    }

}
var listsong1= document.getElementsByClassName("listsong1");
var arrPlaylist = [];
for (var i = 0; i < songObj.length; i++) {
    if (nameeA == 'top100usuk') {
        if (songObj[i].country == "US" || songObj[i].country == "UK") {
            arrPlaylist[jdd] = i;

            getOrderSong1[jdd].innerHTML = i;
            order1[jdd].innerHTML = jdd + 1;
            picListSong1[jdd].src = songObj[i].pic;
            nameListSong1[jdd].innerHTML = songObj[i].nameSong;
            viewListSong1[jdd].innerHTML = songObj[i].view + " Views";
            jdd++;
            zz = 0;
        }

    }
    if (nameeA == 'top100vn') {
        if (songObj[i].country == "VN") {
            arrPlaylist[jdd] = i;

            getOrderSong1[jdd].innerHTML = i;
            order1[jdd].innerHTML = jdd + 1;
            picListSong1[jdd].src = songObj[i].pic;
            nameListSong1[jdd].innerHTML = songObj[i].nameSong;
            viewListSong1[jdd].innerHTML = songObj[i].view + " Views";
            jdd++;
            zz = 0;
        }

    }

}
var blur = document.getElementsByClassName('blur');
var picAlbum1 = document.getElementsByClassName('picAlbum1');
var tieudealbum = document.getElementsByClassName("tieudealbum");
var viewAlbum = document.getElementsByClassName('viewAlbum');
var soluongbaihat = document.getElementsByClassName('soluongbaihat');
var thoiluongalbum = document.getElementsByClassName('thoiluongalbum');
var backgroundAlbum = document.getElementsByClassName("backgroundAlbum");


for (var i = 0; i < backgroundAlbum.length; i++) {
    for (var j = 0; j < album1.length; j++) {
        if (backgroundAlbum[i].id == album1[j].id) {
            tieudealbum[i].innerHTML = album1[j].name;
            blur[i].src = album1[j].pic;
            picAlbum1[i].src = album1[j].pic;
            soluongbaihat[i].innerHTML = jdd + " Songs";
            viewAlbum[i].innerHTML = album1[j].view + " Views";
        }
    }

}

function openMusic(label) {

    phatnhac(getOrderSong[label].innerHTML);

}

function openMusic1(label) {

    phatnhac(getOrderSong1[label].innerHTML);

}

function openMusic3(label) {
    //alert(label);
    var textSlide = document.getElementsByClassName("textSlide");
    for (var i = 0; i < songObj.length; i++) {
        if (textSlide[label].innerHTML == songObj[i].nameSong)
            phatnhac(i);
        break;
    }

}

function phatnhac(t) {
    displayPlayer();
    var song = document.getElementById("songgg");
    document.getElementById('play').className = "fa fa-pause";
    var play = document.getElementById("play");
    player.onloadedmetadata = function () {
        duration = player.duration;
        document.getElementById('end-time').innerHTML = getTime(parseInt(duration));
        progress_bar.progressbar("option", {
            'max': duration
        });
    };
    player.load();
    tracksong.innerHTML = songObj[t].nameSong;
    picCurrentSong1.src = songObj[t].pic;
    picCurrentSong2.src = songObj[t].pic;
    song.src = songObj[t].linkSong;
    for (var i = 0; i < artistObj.length; i++) {
        if (artistObj[i].id == songObj[t].id) {
            trackname.innerHTML = artistObj[i].name;
            break;
        }

    }
}
var arr = [];

function openAlbumSong(name) {
    var namee = document.getElementsByClassName("nameListAlbum")[name].innerHTML;
    //alert(namee);

    var j = 0;
    for (var i = 0; i < songObj.length; i++) {
        if (namee == songObj[i].album) {
            arr[j] = i;

            //alert( j+"/"+i);
            j++;
        }
    }

    zz = 0;
    nextSong();
}

/////////////////////////////////////////////////////
for (var i = 0; i < artistObj.length; i++) {
    for (var j = 0; j < artistObj.length; j++) {
        if (imgArtist[i].id == artist[j].id) {
            imgArtist[i].src = artistObj[j].pic;
            nameArtist[i].innerHTML = artistObj[j].name;
            //background[i].style.backgroundImage = artistObj[j].pic;


        }


    }
}

var centerSlide = document.getElementsByClassName("centerSlide");
var text = document.getElementsByClassName("textSlide");
for (var i = 0; i < text.length; i++) {
    //alert("Helo");
    text[i].innerHTML = "Hello vxccz";
}

function openPage1(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent2");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink2");
    for (i = 0; i < tablinks.length; i++) {

        tablinks[i].style.color = "";
    }
    document.getElementById(pageName).style.display = "block";

    elmnt.style.color = "crimson";
}

///




//Slide SHow
var centerSlide = document.getElementsByClassName("centerSlide");
for (var i = 0; i < centerSlide.length; i++) {
    centerSlide[i].src = songObj[i].pic;
}
//Slide show

function backArtist() {
    var artist = document.getElementsByClassName("artist");
    var displayArtist = document.getElementsByClassName("displayArtist")[0];
    for (var i = 0; i < artist.length; i++) {
        artist[i].style.display = "block";

    }
    displayArtist.style.display = "none";
}

function nextArtist() {
    var artist = document.getElementsByClassName("artist");
    var displayArtist = document.getElementsByClassName("displayArtist")[0];
    for (var i = 0; i < artist.length; i++) {
        artist[i].style.display = "none";

    }
    displayArtist.style.display = "block";
}

function displayPlayer() {
    var playSong = document.getElementById("playSong");
    var picSong = document.getElementsByClassName("picSong")[0];
    playSong.style.display = "block";
    picSong.style.display = "block";
}