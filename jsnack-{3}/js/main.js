var triangoloRettangolo =
  {
    'base' : 15,
    'altezza' : 15
  };

var area = ((triangoloRettangolo.base * triangoloRettangolo.altezza) / 2);

console.log(area);

var ipotenusa = (((triangoloRettangolo.base **2)+(triangoloRettangolo.altezza**2))**0.5);

console.log(ipotenusa);

var perimetro = ipotenusa + triangoloRettangolo.base + triangoloRettangolo.altezza;

console.log(perimetro);
