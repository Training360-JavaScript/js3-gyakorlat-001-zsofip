'use strict';

//Készíts egy `HU` nevű objektumot, amelynek az alábbi property-jei vannak:
//- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően.
//- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt.
//- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: "első, második és harmadik" 
//(tehát vesszővel elválasztva, az utolsó elem előtt az "és" szóval).

const HU = {
    date(date) {return new Intl.DateTimeFormat('hu-HU').format(date)},
    curreny(currency) {return new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF'}).format(currency)},
    list(list) {return new Intl.ListFormat('hu-HU', { style: 'long', type: 'conjunction' }).format(list)},
}


// export default HU
export default HU;