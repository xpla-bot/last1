var curTable;
//3/Use jQuery method .get to request data from API
$.get('https://openexchangerates.org/api/latest.json', {app_id: 'b54fc8736f7142118122fddb2c9dc837'}, function(data){
  //1/Write JSON response as string to variable for later use
  curTable = JSON.stringify(data);
});
