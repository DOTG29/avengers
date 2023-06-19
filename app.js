function combat(thanos, ironmanP, spidermanP, captainamericaP, thorP) {
    let ironman = ironmanP;
    let spiderman = spidermanP;
    let captainamerica = captainamericaP;
    let thor = thorP;
    let ingéniosité = ironman * 3 + 10;
    let vitesse = spiderman * 4 + 5;
    let force = captainamerica * 3 + 7;
    let foudre = thor * 4 + 20;
    let forcetotale = ingéniosité + vitesse + force + foudre;
    let nbrDeTour = 1;
    while (thanos >= forcetotale) {


        nbrDeTour += 1

        if (nbrDeTour % 2 === 0) {
            spiderman += 1
        } else if (nbrDeTour % 3 === 0) {
            captainamerica += 1
        } else if (nbrDeTour % 4 === 0) {
            thor += 1
        } else {
            ironman += 1
        }

        ingéniosité = ironman * 3 + 10;
        vitesse = spiderman * 4 + 5;
        force = captainamerica * 3 + 7;
        foudre = thor * 4 + 20;

        forcetotale = ingéniosité + vitesse + force + foudre;
    }
    return nbrDeTour
}

const ironman = 4;
const spiderman = 3;
const captainamerica = 5;
const thor = 3;
const thanos = 163;
console.log(combat(thanos, ironman, spiderman, captainamerica, thor));