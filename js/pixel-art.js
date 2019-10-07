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

// Variable para guardar el elemento 'color-personalizado el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

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

// declaro variable que va a cambiar el color de la grilla y la paleta
var indicadorDeColor = document.getElementById("indicador-de-color");

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

// Paso 1: Seleccioná un color de la paleta y mostralo en el indicador de color
// Primero, vamos a hacer que nuestro programa permita al usuario seleccionar un color de la paleta. Para eso, necesitamos lograr que, al hacer clic en algún color, el indicador-de-color cambie y refleje la selección.

paleta.addEventListener("click", cambiaColorPincel);

// guardo en un variable el id del div del pincel que quiero que cambie el color, y le asigno dinamicamente el background del evento, es decir de la variable paleta
function cambiaColorPincel(e) {
    indicadorDeColor.style.background = e.target.style.background;
}

// Paso 2: Pintá un pixel de la grilla
// Un vez que tenemos un color seleccionado en el indicador-de-color se deberá programar la funcionalidad para que el usuario pueda pintar un pixel al hacer clic en un cuadrado de la grilla.

grilla.addEventListener("click", pintaGrilla);

//guarde en la variable el id del div que indica el color del pincel, y le asigno su background al evento, a grilla-pixeles
function pintaGrilla(e) {
    e.target.style.background = indicadorDeColor.style.background;
}

// Paso 4: Detectá si el Mouse está Apretado o no
// Para poder pintar en movimiento, vamos a necesitar una variable que nos diga si el mouse está o no apretado. El valor de esta variable deberá cambiar cada vez que se apriete el mouse y cada vez que se suelte. Tené en cuenta que vas a necesitar más de un evento para detectar cuando se aprieta el mouse y cuando se suelta.

// Esta acción no va a tener representación visual por ahora, de eso nos vamos a encargar en el paso siguiente.
var mouseDown = 1;

$('#grilla-pixeles').mousedown(function() {
    mouseDown = 1;
});

$('#grilla-pixeles').mouseup(function() {
    mouseDown = 0;
});

$('#grilla-pixeles div').hover(function() {
    // var color = colorActual;
    if (mouseDown) {
        $(this).css("background", indicadorDeColor);
    }
});
//Paso 1: Permití borrar la pantalla apretando un botón
//Todos los divs de la grilla hijos de #cursor-personalizado
var $container = $("#grilla-pixeles div");
//Borrar todo
$("#borrar").click(function() {
    $container.animate({ "background-color": 'white' }, 1200);
});


// Paso 2: Cargá a los superhéroes en forma de píxeles

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

// Paso 3: Habilitá la descarga de cada obra de arte
//Guardar pantalla
$("#guardar").click(guardarPixelArt);