let kleur;
let vorm;

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

function KleurEnVorm() {
    document.getElementById("knop");
    let kleur = prompt("Kies een kleur van 1 t/m 5");
    let vorm = prompt(" Welke een vorm van 1 t/m 3");

    switch (kleur) {
        case '1':
            ctx.fillStyle = "purple";
            console.log("Dit is paars");
            break;
        case '2':
            ctx.fillStyle = "red";
            console.log("Dit is rood");
            break;
        case '3':
            ctx.fillStyle = "blue";
            console.log("Dit is blauw");
            break;
        case '4':
            ctx.fillStyle = "white";
            console.log("Dit is white");
            break;
        case '5':
            ctx.fillStyle = "yellow";
            console.log("Dit is geel");
            break;
        default:
            console.log("Kleur is onduidelijk");
    }
    
    
    switch (vorm) {
        case '1':
            ctx.fillRect(250, 250, 250, 250);
            console.log("Dit is een vierkant");
            break;
        case '2':
            ctx.beginPath();
            ctx.moveTo(100, 20);
            ctx.lineTo(180, 100);
            ctx.lineTo(20, 100);
            ctx.lineTo(100, 20);
            ctx.fill();
            console.log("Dit is een Driehoek");
            break;
        case '3':
            ctx.beginPath();
            ctx.arc(190, 100, 80, 0, 4 * Math.PI);
            ctx.fill();
            console.log("Dit is een cirkel");
            
            break;
        default:
            console.log("Vorm is onduidelijk");
    }
}





