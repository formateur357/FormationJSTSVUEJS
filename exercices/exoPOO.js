class Proprietaire {
    constructor (nom, adresse) {
        this.nom = nom;
        this.adresse = adresse;
    }

    afficherInfo() {
        console.log(`Nom: ${this.nom}, Adresse : ${this.adresse}`);
    }
}

class Animal {
    #proprietaire;

    constructor(nom, age, genre) {
        this.nom = nom;
        this.age = age;
        this.genre = genre;
        this.faim = true;
        this.#proprietaire = null;
    }

    manger() {
        this.faim = false;
        console.log(`${this.nom} a mange.`);
    }

    dormir() {
        console.log(`${this.nom} dort.`);
    }

    set proprietaire(prop) {
        this.#proprietaire = prop;
    }
}

class Oiseau extends Animal {
    constructor(nom, age, genre, envergure) {
        super(nom, age, genre);
        this.envergure = envergure;
    }

    voler() {
        if (this.faim) {
            console.log(`${this.nom} a trop faim pour voler.`);
            return ;
        }
        console.log(`${this.nom} vole dans les airs!`);
    }

    dormir() {
        if (this.faim) {
            console.log(`${this.nom} a trop faim pour dormir.`);
            return ;
        }
        super.dormir()
    }
}

class Mammifere extends Animal {
    constructor(nom, age, genre, couleurfur) {
        super(nom, age, genre);
        this.couleurfur = couleurfur;
    }

    allaiter() {
        if (this.genre !== "femelle") {
            console.log(`${this.nom} ne peut pas allaiter.`)
            return ;
        }
        console.log(`${this.nom} allaite ses petits.`)
    }

    dormir() {
        console.log(`${this.nom} dort tres bien.`);
    }
}

let perroquet = new Oiseau("Pierre", 5, "mâle", "30cm");
let lion = new Mammifere("Léo", 7, "femelle", "dorée");

// perroquet.manger();
perroquet.voler();

lion.manger();
lion.allaiter();
perroquet.dormir();
lion.dormir();
