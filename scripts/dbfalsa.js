var caras = [
    {
        nombre: 'negra',
        url: './assets/negra.jpg'
    },
    {
        nombre: 'baby',
        url: './assets/baby.jpg'
    },
    {
        nombre: 'man',
        url: './assets/man.png'
    },
    {
        nombre: 'old',
        url: './assets/old.png'
    },
    {
        nombre: 'lunatica',
        url: './assets/lunatica.jpg'
    }
];

function ObtenerCara(nombre) {
    return caras.find(function (x) {
        return x.nombre == nombre;
    });
}

