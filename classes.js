// ES5 class

function Plane(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
}

// methods "inherited" by all instances
Plane.prototype.startEngines = function () {
    console.log('starting engines...');
    this.enginesActive = true;
};

const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();



// ES6 class
//  ES6 classes are just a mirage and hide the fact that prototypal inheritance is actually going on under the hood
class Plane {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    static badWeather(planes) {
        for (plane of planes) {
            plane.enginesActive = false;
        }
    }

    startEngines() {
        console.log('starting engines…');
        this.enginesActive = true;
    }
}

typeof Plane // function



// ES5 subclasses
function Tree(size, leaves) {
    this.size = (typeof size === "undefined") ? 10 : size;
    const defaultLeaves = { spring: 'green', summer: 'green', fall: 'orange', winter: null };
    this.leaves = (typeof leaves === "undefined") ? defaultLeaves : leaves;
    this.leafColor;
}

Tree.prototype.changeSeason = function (season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
        this.size += 1;
    }
}

function Maple(syrupQty, size, leaves) {
    Tree.call(this, size, leaves);
    this.syrupQty = (typeof syrupQty === "undefined") ? 15 : syrupQty;
}

Maple.prototype = Object.create(Tree.prototype);
Maple.prototype.constructor = Maple;//?

Maple.prototype.changeSeason = function (season) {
    Tree.prototype.changeSeason.call(this, season);
    if (season === 'spring') {
        this.syrupQty += 1;
    }
}

Maple.prototype.gatherSyrup = function () {
    this.syrupQty -= 3;
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');




// ES6 subclasses
class Tree {
    constructor(size = '10', leaves = { spring: 'green', summer: 'green', fall: 'orange', winter: null }) {
        this.size = size;
        this.leaves = leaves;
        this.leafColor = null;
    }

    changeSeason(season) {
        this.leafColor = this.leaves[season];
        if (season === 'spring') {
            this.size += 1;
        }
    }
}

class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves) {
        super(size, leaves);
        this.syrupQty = syrupQty;
    }

    changeSeason(season) {
        super.changeSeason(season);
        if (season === 'spring') {
            this.syrupQty += 1;
        }
    }

    gatherSyrup() {
        this.syrupQty -= 3;
    }
}

const myMaple = new Maple(15, 5);
myMaple.changeSeason('fall');
myMaple.gatherSyrup();
myMaple.changeSeason('spring');





// super must be called before this
class Apple { }
class GrannySmith extends Apple {
    constructor(tartnessLevel, energy) {
        this.tartnessLevel = tartnessLevel; // `this` before `super` will throw an error!
        super(energy);
    }
}


