/**
 * @param {any[]} array
 * @param {string | number} key
 */
export function sort_by_key(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

/**
 * @param {number} id
 */
export async function fetchPokemon(id) {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const res = await fetch(url + id);
    const data = await res.json();
    const pokemon = {
        name: data.name,
        id: data.id,
        types: ((data) => {
            let types = [];
            for (var index in data.types) {
                types.push(data.types[index].type['name']);
            }
            return types;
        })(data),
        abilities: ((data) => {
            let abilities = [];
            for (var index in data.abilities) {
                abilities.push(data.abilities[index].ability['name']);
            }
            return abilities;
        })(data),
        height: data.height,
        weight: data.weight,
        image: data.sprites.other["official-artwork"].front_default
    };

    return pokemon;
}