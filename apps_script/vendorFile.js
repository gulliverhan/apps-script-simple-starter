var LIBRARIES = {
  moment: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.js'
};

Object.keys(LIBRARIES).forEach(function(library) {
  var newFunc = loadJSFromUrl(LIBRARIES[library]);
  eval('var ' + library + ' = ' + newFunc);
});

function loadJSFromUrl(url) {
  return eval(UrlFetchApp.fetch(url).getContentText());
}
