function loadFinished(){
    rpgdatas = new RPGDatas(1080,1920)
    document.getElementById("Map").innerHTML ='<br><br><span class="dots-loader"></span>';
    sleep(2, function() {
        StartGame()
      });
    //rpgdatas = new RPGDatas(screen.availHeight,screen.availWidth)
}

window.onload = loadFinished;
document.onkeydown = keydown;

function keydown(event) {
    if(event.shiftKey){
        console.log("sift")
    }
    if(event.keyCode == 87){
        player.posy -=10;
        playerMove();
    }
    else if(event.keyCode == 83){
        player.posy +=10;
        playerMove();
    }
    else if(event.keyCode == 65){
        player.posx -=10;
        playerMove();
    }
    else if(event.keyCode == 68){
        player.posx +=10;
        playerMove();
    }
    console.log(event.keyCode)
}
function StartGame(){
    player = new PlayerData();
    create();
}

function playerMove(){
    player.dom.style.top = player.posy + "px";
    player.dom.style.left = player.posx + "px";
    //player.dom.style.transform = "transform: translate(12px, 50%)"
}

function create(){
    outputhtml = ''
    for(let i = 0; i < mapsizeh;i++){
        outputhtml += "<tr id = Map_"+i+">" ;
        for(let n = 0; n < mapsizew;n++){
            outputhtml += '<td id = "Map_'+i+'_'+n+'" background="img/grass.png"></td>'
        }
        outputhtml += "</tr>" ;
    }
    document.getElementById("Map").innerHTML =  '<table><tbody>'+outputhtml+"</tbody></table>";
    document.getElementById("object").innerHTML ='<img id ="player" src="img/player.png">';
    player.dom = document.getElementById("player");
    player.posy = player.dom.getBoundingClientRect().top;
    player.posx = player.dom.getBoundingClientRect().left;
}

function ChangeMap(H,W,imgtype){
    document.getElementById("Map_"+H+"_"+W).style.backgroundImage = 'url(img/road.png)';image.png
}