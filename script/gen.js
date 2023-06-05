var cards = [];



class Card{
    constructor(name, year, pic, leiras, kiado, tipus){
        this.name = name;
        this.year = year;
        this.pic = pic;
        this.leiras = leiras;
        this.kiado = kiado;
        this.tipus = tipus;
    }
}

function readData(){
    cards = localStorage.getItem("ATTAKRVAMENNYIREEZ");
    cards.forEach(element => {
        
    });
    cards.forEach(element =>)
}

function writedata(){
    localStorage.setItem("ATTAKRVAMENNYIREEZ", cards);
}

function genCard(game){
    var s = [
        '<div class="card" style="width: 18rem" id="',
        '"><img src="./src/',
        '" class="card-img-top img img-fluid" alt="..."><div class="card-body"><h5 class="card-title">',
        '</h5><p class="card-text">',
        '</p><a class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#',
        'Modal">Mutass többet</a></div></div>',
    ]
    document.getElementById("pakolo").innerHTML += s[0] + game.name + s[1] + game.pic + s[2] + game.name + s[3] + game.leiras + s[4] + game.name + s[5];
}

function genNagy(game){
    var s = [
        '<div class="modal fade" id="card_tart_1" tabindex="-1" aria-labelledby="',
        'Label" aria-hidden="true"><div class="modal-dialog modal-xl"><div class="modal-content mod-content"><div class="modal-header mod-keret" data-bs-theme="dark"><h1 class="modal-title fs-5 text-white" id="',
        'Label">',
        '</h1><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"><img src="./src/',
        '" class="img img-fluid center" alt="..."><table class="table table-dark d-flex justify-content-center py-5"><tr><td><i>Kiadó:</i></td><td>',
        '</td></tr><tr><td><i>Megjelent:</i></td><td>',
        '</td></tr><tr><td><i>Típus:</i></td><td>',
        '</td></tr></table><p class="text-white">',
        '</p></div><div class="modal-footer mod-keret"><button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Vissza</button></div></div></div></div>'
    ]
    document.getElementById("modaldiv").innerHTML += s[0] + game.name + s[1] +game.name + s[2] + game.name + s[3] + game.pic + s[4] + game.kiado + s[5] + game.year + s[6] + game.tipus + s[7] + game.leliras + s[8];
}