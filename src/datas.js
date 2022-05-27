TimreMapW = 32;
TimreMaph = 32;
mapsizeh = 20;
mapsizew = 15;

class RPGDatas{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class PlayerData{
    dom = '';
    name = "name";
    hp = 100;
    attack = 5;
    posx = 0;
    posy = 0;
}

function sleep(waitSec, callbackFunc) {
    var spanedSec = 0;
    var waitFunc = function () {
        spanedSec++;
        if (spanedSec >= waitSec) {
            if (callbackFunc) callbackFunc();
            return;
        }
        clearTimeout(id);
        id = setTimeout(waitFunc, 1000);
    };   
    var id = setTimeout(waitFunc, 1000);
}
