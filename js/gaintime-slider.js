function gtSlides(
  config = {
    prefix: "slide-",
    nopass: ["A","INPUT","SELECT","OPTION","TEXTAREA","BUTTON","LABEL"]
  }
) {
  var verticalScroll = function(e, t, o) {
    if (t = Math.round(t), o = Math.round(o), 0 > o) return Promise.reject("bad duration");
    if (0 === o) return e.scrollTop = t, Promise.resolve();
    var n = Date.now(),
        a = n + o,
        l = e.scrollTop,
        r = t - l,
        s = function(e, t, o) {
            if (e >= o) return 0;
            if (o >= t) return 1;
            var n = (o - e) / (t - e);
            return n * n * (3 - 2 * n)
        };
    return new Promise(function(t, o) {
        var i = e.scrollTop,
            c = function() {
                var o = Date.now(),
                    d = s(n, a, o),
                    u = Math.round(l + r * d);
                return e.scrollTop = u, o >= a ? void t() : e.scrollTop === i && e.scrollTop !== u ? void t() : (i = e.scrollTop, void setTimeout(c, 0))
            };
        setTimeout(c, 0)
    })
};
  this.slides = [];
  this.count = 0;
  this.play = triggerEvents();

  document.querySelectorAll('*[id^="' + config.prefix + '"]').forEach(function(x, i) {
    var span = document.createElement('span');
    span.classList.add('gt-slider-number');
    span.appendChild(document.createTextNode(i))
    x.appendChild(span);
    x.style.position = "relative";
    x.style.height = "100%";
    x.style.padding = "50px 8%";
    this.slides.push(x.id)
  })


  function triggerClick() {
    document.addEventListener("click", function(n){
      return (-1 != config.nopass.indexOf(n.target.tagName.toUpperCase()) || 3 == n.which) ? !1 : (void roll(n))
    });
  }

  function triggerContextMenu() {
    document.addEventListener('contextmenu', function(n) {
      return (-1 != config.nopass.indexOf(n.target.tagName.toUpperCase())) ? !1 : (void roll(n))
    })
  }

  function triggerKeypress() {
    document.addEventListener("keypress", function(e){
      e.key >= 0 && e.key <= 9 && roll(e, e.key)
    });
  }

  function triggerEvents() {
    triggerClick();
    triggerContextMenu();
    triggerKeypress();
  }

  function roll(t, counter = -1) {
    count <= slides.length && count >=0 && (count = (3 == t.which)? count - 1: count + 1),
    -1 == count && (count = slides.length-1),
    count > slides.length-1 && (count=0);
    -1 != counter && (count = parseInt(counter));

    if (f = slides[count], void 0 != f) {
      t.preventDefault();
      var r = document.scrollingElement || document.documentElement,
      s = document.getElementById(f).offsetTop;
      verticalScroll(r, s, 500)
    }
  }


}
