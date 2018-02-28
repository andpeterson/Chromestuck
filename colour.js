var fontStyle = document.createElement('style');
fontStyle.appendChild(document.createTextNode("\
@font-face{\
  font-family: Daedra;\
  src: url('Daedra.otf');\
}\
"));
if(getCookie("colour") == "true")
{
  $("font:contains('John:')").attr("style", "color:#0715CD");
  $("font:contains('Dave:')").attr("style", "color:#E00707");
  $("font:contains('Rose:')").attr("style", "color:#B536DA");
  $("font:contains('Jade:')").attr("style", "color:#4AC925");
  $("font:contains('Aradia:')").attr("style", "color:#A10000");
  $("font:contains('Tavros:')").attr("style", "color:#A15000");
  $("font:contains('Sollux:')").attr("style", "color:#A1A100");
  $("font:contains('Nepeta:')").attr("style", "color:#416600");
  $("font:contains('Kanaya:')").attr("style", "color:#008141");
  $("font:contains('Terezi:')").attr("style", "color:#008282");
  $("font:contains('Vriska:')").attr("style", "color:#005682");
  $("font:contains('Equius:')").attr("style", "color:#000056");
  $("font:contains('Gamzee:')").attr("style", "color:#2B0057");
  $("font:contains('Eridan:')").attr("style", "color:#6A006A");
  $("font:contains('Feferi:')").attr("style", "color:#77003C");
  $("font:contains('Karkat:')").attr("style", "color:#626262");
}
if(getCookie("names") == "true")
{
  document.body.innerHTML = document.body.innerHTML.replace(/John/gi, 'Zoosmell');
  document.body.innerHTML = document.body.innerHTML.replace(/Egbert/gi, 'Pooplord');
  document.body.innerHTML = document.body.innerHTML.replace(/Dave/gi, 'Insufferable');
  document.body.innerHTML = document.body.innerHTML.replace(/Strider/gi, 'Prick');
  document.body.innerHTML = document.body.innerHTML.replace(/Rose/gi, 'Flighty');
  document.body.innerHTML = document.body.innerHTML.replace(/Lalonde/gi, 'Broad');
  document.body.innerHTML = document.body.innerHTML.replace(/Jade/gi, 'Farmstink');
  document.body.innerHTML = document.body.innerHTML.replace(/Harley/gi, 'Buttlass');
  //document.body.innerHTML - 
  //document.body.innerHTML = 
}

if(getCookie("Daedra") == "true")
{
  document.head.appendChild(fontStyle);
  $('p').css("font-family", "Daedra");
  $('font').css("font-family", "Daedra");
  $('a').css("font-family", "Daedra");
}
//$(":contains('John')")