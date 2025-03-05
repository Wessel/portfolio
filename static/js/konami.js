// Easter egg (404)
var onKonamiCode = function (cb) {
  var key = '38384040373937396665';
  var input = '';
  document.addEventListener('keydown', function (e) {
    input += ('' + e.keyCode);
    if (input === key) return cb();
    if (!key.indexOf(input)) return;
    input = ('' + e.keyCode);
  });
}

onKonamiCode(function () {
  document.getElementById('body').style.background = 'url(static/img/backgrounds.3.png)';
  document.getElementById('title').innerHTML = '200: FOUND';
  document.getElementById('logo').src = 'static/img/easter_egg.png';
  document.getElementById('logo').className = 'logo';
  document.getElementById('content').innerHTML = [
    '<span style="font-size: 15px; color: #c9c9c9;">',
    'It seems like you\'ve found an existing page!',
    '<br />',
    '<span class="emerald">This is a secret konami easter egg</span>',
    '<br />',
    'You might\'ve found this page legitimately , if so well done!',
    '<br />',
    '<span style="color: red;">But if you lurked in the code and found this, you ruined the easter egg :(</span>',
    '<br />',
    '<span style="font-size: 10px;">You just wasted your precious time reading this >:^)</span>',
    '</span>',
  ].join('')
});

// Easter egg (avatar)
var hasWebP = (function() {
  var images = {
    basic: 'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==',
    lossless: 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA='
  };

  return function(feature) {
    var deferred = $.Deferred();

    $('<img>').on('load', function() {
      if(this.width === 2 && this.height === 1) deferred.resolve();
      else deferred.reject();
      }).on('error', function() {
        deferred.reject();
      }).attr('src', images[feature || 'basic']);

    return deferred.promise();
  }
})();

hasWebP('lossless').then(function() {
  var v = Math.floor(Math.random() * 50);

  if (v >= 3 && v <= 4) {
    document.getElementById('logo').src = 'static/img/logos/' + v + '.webp';
    document.getElementById('body').style.background = 'url(static/img/backgrounds/4.png)';
  }
  
  if (v >= 5 && v <= 6) document.getElementById('logo').src = 'static/img/logos/' + v + '.webp';
}, function() {
  document.getElementById('logo').src = 'static/img/logos/2.gif';
});