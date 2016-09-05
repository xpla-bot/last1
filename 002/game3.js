var curTable, amount, currency, fcurrency;

$.get('https://openexchangerates.org/api/latest.json', {app_id: 'b54fc8736f7142118122fddb2c9dc837'}, function(data){
  curTable = JSON.stringify(data);
});

//9/Get user data from input fields using class selectors and refresh on keystroke
$(".currencyIn").keyup(function(){
  amount = ($(this).val());
});
$(".currency").keyup(function(){
  currency = ($(this).val());
});
$(".currencyIn3").keyup(function(){
  fcurrency = ($(this).val());
});
