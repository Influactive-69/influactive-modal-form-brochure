window.addEventListener("load", function() {
  const r = document.querySelectorAll('a[href*="#brochure"]'), t = document.querySelector("#modal-form"), c = document.querySelector("#modal-form-close");
  let l;
  t && getComputedStyle(t).display === "block" && (document.body.style.overflow = "hidden"), r && t && c && (r.forEach(function(o) {
    o.addEventListener("click", function(d) {
      d.preventDefault();
      const e = o.getAttribute("href");
      if (e.includes("?")) {
        const s = e.split("?");
        if (s.length > 1) {
          const i = s[1].split("=");
          i[0] === "file" && (l = i[1]);
        }
      }
      t.style.display = "block", document.body.style.overflow = "hidden";
    });
  }), c.addEventListener("click", function() {
    t.style.display = "none", document.body.style.overflow = "auto", document.body.style.overflowX = "hidden";
  }), window.addEventListener("click", function(o) {
    o.target === t && (t.style.display = "none", document.body.style.overflow = "auto", document.body.style.overflowX = "hidden");
  }));
  const n = document.querySelector("#modal-form form");
  n && n.addEventListener("submit", function(o) {
    o.preventDefault();
    const d = new FormData(n);
    l && d.append("file", l);
    const e = new XMLHttpRequest();
    e.open("POST", n.action, !0), e.onreadystatechange = function() {
      e.readyState === 4 && e.status === 200 && (t.querySelector(".message").innerHTML = e.responseText);
    }, e.send(d);
  });
});
