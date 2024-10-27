var TxtType = function( e, toRotate, p ) {
  this.toRotate = toRotate;
  this.e = e;
  this.loopNum = 0;
  this.p = parseInt( p, 10 ) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.e.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 65; // 200 - Math.random() * 100

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.p;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    if ( this.loopNum >= 2 ) this.loopNum = 0; 
    this.isDeleting = false;
    this.loopNum++;
    delta = 65;
  }


  setTimeout( function() { that.tick(); }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
    var p        = elements[ i ].getAttribute( 'data-period' );
    var r = elements[ i ].getAttribute( 'data-type' );
    if ( r ) new TxtType( elements[ i ], JSON.parse( r ), p);
  }
  // INJECT CSS
  var css      = document.createElement( 'style' );
  css.type     = 'text/css';
  css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
  document.body.appendChild(css);
};

/*
let txtType = function( el, toRotate, period ) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt( period, 10 ) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

txtType.prototype.tick = function() {
  let i    = this.loopNum % this.toRotate.length;
  let full = this.toRotate[i];

  if ( this.isDeleting ) this.txt = full.substring( 0, this.txt.length - 1 );
  else                   this.txt = full.substring( 0, this.txt.length + 1 );

  this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

  let delta  = 200 - Math.random() * 100;
  const that = this;

  if ( this.isDeleting ) delta /= 2;

  if ( !this.isDeleting && this.txt === full ) {
    delta = this.period;
    this.isDeleting = true;
  } else if ( this.isDeleting && this.txt === '' ) {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(this.tick, delta)
};

window.onload = function() {
  const elements = document.getElementsByClassName( 'typewrite' );

  for ( let i = 0; i < elements.length; i++ ) {
    const period   = elements[i].getAttribute( 'data-period' );
    const toRotate = elements[i].getAttribute( 'data-type' );

    if ( toRotate ) new txtType( elements[i], JSON.parse( toRotate ), period );
  }

  let css = document.createElement( 'style' );
  css.type = 'text/css';
  css.innerHTML = '.typewrite > .wrap {border-right: 0.08em solid #fff}';
  document.body.appendChild( css );
};
 */