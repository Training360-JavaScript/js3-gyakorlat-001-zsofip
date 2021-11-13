'use strict';

//Írj egy függvénykifejezést, amely a paraméterként megadott tömbből eltávolítja a duplikált elemeket!
// A függvény visszatérési értéke a duplikált elemektől mentes új tömb.

const removeDuplicatesFromArray = (anyArray = []) => {
    let noDupArray = [];
    
    for (let value of anyArray) {
        if(noDupArray.indexOf(value) === -1) {
            noDupArray.push(value);
        }
    }
    return noDupArray;
} 


// export default removeDuplicatesFromArray
export default removeDuplicatesFromArray;