var $newH1 = $('<H1>');
$newH1.html('Below ground veggies');
$('body').prepend($newH1);

var $belowVeggies = $('<ul>');
$('body').append($belowVeggies);

var $aboveH1 = $('<h1>');
$aboveH1.html('Above ground veggies');
$('body').append($aboveH1);

var $aboveVeggies = $('<ul>');
$('body').append($aboveVeggies);

$('ul li').each(function () {
  if ($(this).hasClass('below')){
  $belowVeggies.append($(this));
  } else {
  $aboveVeggies.append($(this));
}

});
