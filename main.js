(()=>{"use strict";let e=()=>{let e=document.getElementById("tab-data"),t=document.createElement("div");t.id="copy";let n=document.createElement("h3");n.textContent="So few have experieced...",t.appendChild(n);let d=document.createElement("p");d.textContent="Our one of a kind experience is that which cannot beheld. We are the pinnacle of all food creationg.\n    Some cower in fear over what might happen to their pallets. To try one dish from our 42 course meal\n    will be enough to bring you to tears. Many have died by the end. You have been warned.",t.appendChild(d),e.appendChild(t)},t=((()=>{let n=document.getElementById("content"),d=document.createElement("div");d.id="hero";let a=document.createElement("div");a.id="hero-text";let l=document.createElement("h1");l.innerHTML="3 &frac14; Star Restaurant",a.appendChild(l);let i=document.createElement("h2");i.textContent="Where flavor meets tongue",a.appendChild(i);let o=document.createElement("img");o.src="chef-picture.jpg",d.appendChild(o),d.appendChild(a),n.appendChild(d);let c=document.createElement("div");c.id="tab-menu";let m=document.createElement("div");m.id="home",m.textContent="Home",m.setAttribute("class","selected"),m.addEventListener("click",(()=>t("home")));let r=document.createElement("div");r.id="menu",r.textContent="Menu",r.addEventListener("click",(()=>t("menu")));let u=document.createElement("div");u.id="about",u.textContent="About",u.addEventListener("click",(()=>t("about"))),c.appendChild(m),c.appendChild(r),c.appendChild(u),n.appendChild(c);let h=document.createElement("div");h.id="tab-data",n.appendChild(h),e()})(),t=>{let n=document.getElementById("tab-data");for(;n.firstChild;)n.removeChild(n.lastChild);document.getElementsByClassName("selected")[0].setAttribute("class","unselected"),"home"==t?(document.getElementById("home").setAttribute("class","selected"),e()):"about"==t?(document.getElementById("about").setAttribute("class","selected"),document.getElementById("tab-data")):"menu"==t&&(document.getElementById("menu").setAttribute("class","selected"),(()=>{let e=document.getElementById("tab-data"),t=document.createElement("ul"),n=document.createElement("li");n.textContent="Bordeaux Chicken in a tallow whipped cream sauce",t.appendChild(n);let d=document.createElement("li");d.textContent="Brisket wrapped in 8 year ham trimmings laid in a basket of freeze dried mushrooms",t.appendChild(d);let a=document.createElement("li");a.textContent="Halibut trimmed to the bone and reshaped with a halibut chowder filling and flaky crust",t.appendChild(a),e.appendChild(t)})())})})();