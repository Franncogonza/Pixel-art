var nombreColores = ['White', 'LightYellow',
    'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
    'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
    'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
    'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
    'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
    'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
    'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
    'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
    'LightGreen', 'PaleGreen', 'PaleTurquoise',
    'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
    'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
    'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
    'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
    'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
    'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
    'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
    'BlueViolet', 'DarkViolet', 'DarkOrchid',
    'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
    'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//======================== VARIABLES ===============================================================================================
//==================================================================================================================================

// Variable para guardar el elemento 'color-personalizado el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

//asigna el color que se elige en la rueda de coolor personalizado
colorPersonalizado.addEventListener('change',
    (function() {
        // Se guarda el color de la rueda en colorActual
        colorActual = colorPersonalizado.value;
        // cambia el indicador-de-color al colorActual elegido en la rueda de colores personalizados
        indicadorDeColor.style.background = colorActual;
    })
);

var paleta = document.getElementById("paleta");
//invoco la función
paletteCreate();

var grilla = document.getElementById("grilla-pixeles");
//invoco la función
gridCreate();

// declaro variable que va a indicarle el color con el que se está pintando
var indicadorDeColor = document.getElementById("indicador-de-color");

//Todos los divs de la grilla hijos de #cursor-personalizado
var $container = $("#grilla-pixeles div");

//======================== FUNCIONES Y EVENTOS  ====================================================================================
//==================================================================================================================================

//Creación de la paleta de colores 
function paletteCreate() {
    nombreColores.forEach(function getColor(color, i) {
        var div = document.createElement('div');
        div.style.background = color;
        div.className = "color-paleta";
        paleta.appendChild(div);
    });
}

//Creación de la grilla
function gridCreate() {
    for (var i = 0; i < 1750; i++) {
        var div = document.createElement('div');
        div.style.background = "white";
        grilla.appendChild(div);
    }
}

// Seleccioná un color de la paleta y refleja la seleccion del color en el indicador de color
paleta.addEventListener("click", cambiaColorPincel);

// guardo en un variable el id del div del pincel que quiero que cambie el color, y le asigno dinamicamente el background del evento, es decir de la variable paleta
function cambiaColorPincel(e) {
    indicadorDeColor.style.background = e.target.style.background;
}

// evento que escucha si se hace click en la grilla, si es true invoca la funcion pintaGrilla
grilla.addEventListener("click", pintaGrilla);

//el background de la grilla va a ser el background que tiene el indicadorDeColor
function pintaGrilla(e) {
    e.target.style.background = indicadorDeColor.style.background;
}

// Detecta si el Mouse está Apretado o no, arranca en false
var mouseDown = 0;

// evento que escucha si el mouse esta apretado
$('#grilla-pixeles').mousedown(function() {
    mouseDown = 1;
});

//evento que escucha si se suelta el mouse
$('#grilla-pixeles').mouseup(function() {
    mouseDown = 0;
});

//Cuando el mouse pasa por grilla pixeles div activa el evento, y pregunta si mouse esta apretado o no esta apretado, y se reutiliza la funcion pintaGrilla que ya funcionaba bien, si esta apretado pintaGrilla, sino, no hace nada.
$($container).mousemove(function(e) {
    if (mouseDown) {
        pintaGrilla(e);
    }
});


//Borra lo que este en la pantalla de la grilla
$("#borrar").click(function() {
    $container.animate({ "background-color": 'white' }, 1200);
});

//Carga a los superhéroes en forma de píxeles al hacer click en la imagen de cada superheroe
$("#batman").click(function() {
    cargarSuperheroe(batman);
});

$("#wonder").click(function() {
    cargarSuperheroe(wonder);
});

$("#flash").click(function() {
    cargarSuperheroe(flash);
});

$("#invisible").click(function() {
    cargarSuperheroe(invisible);
});

//Habilita la descarga del dibujo en formato png
$("#guardar").click(guardarPixelArt);