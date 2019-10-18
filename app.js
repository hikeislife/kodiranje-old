"serviceWorker"in navigator&&(navigator.serviceWorker.controller?console.log(`Dobro došli na sajt za učenje kodiranja i programiranja. Ovo je naša konzola :)`):navigator.serviceWorker.register("service-worker.js",{scope:"./"}).then(function(){console.log(`Dobro došli na sajt za učenje kodiranja i programiranja. Ovo je naša konzola :)`)})),(()=>{window.onmouseup=()=>document.querySelector("#side-nav").style.display="none",document.querySelector("#mobile-cog").addEventListener("click",function(){let a=document.getElementById("side-nav");a.style.display=a.style.display.match("block")?"none":"block"})})();let xhr=new XMLHttpRequest;xhr.open("GET","js/content.json"),xhr.send(null),(xhr.onreadystatechange=function(){let a=xhr.responseText;200===xhr.status&&4===xhr.readyState&&conParser(a)})();var contents;function conParser(a){contents=JSON.parse(a),pageInit()}location.hash||(location.hash="#home");function pageInit(){const a=location.hash.substr(1);initContent(a,contents)}function backToTop(){const a=Array.from(document.querySelectorAll("a[rel$='chapter']"));for(topSide in a)a[topSide].onclick=()=>window.scrollTo(0,0)}function setActive(a){var b=document.querySelectorAll("#side-nav a");for(let c=0;c<b.length;c++)b[c].getAttribute("href").substr(1)===a?b[c].firstChild.setAttribute("class","active"):b[c].firstChild.removeAttribute("class");backToTop()}function initContent(a,b){for(e in b)if(b[e].tag==a){loadMain(b[e].content),document.title=` Kodiranje | ${b[e].pagetitle} `,document.querySelector("#metadesc").content=b[e].pagedesc,loadSideNav(b[e].id);break}setActive(a)}function textAreaSizer(){const a=document.getElementsByClassName("code_snippet");for(let b,c=0;c<a.length;c++)b=a[c].scrollHeight,a[c].style.height=a[c].scrollHeight+4+"px",a[c].style.width="100%"}function detailsFixer(){const a=Array.from(document.getElementsByTagName("details"));for(em in a)a[em].addEventListener("toggle",()=>{textAreaSizer(),closeDetails(a)})}function closeDetails(){}function loadMain(a){const b=document.getElementById("placeholder");b.innerHTML=a,textAreaSizer(),detailsFixer()}window.addEventListener("hashchange",pageInit);function leftRightNav(a){let b=document.getElementById("left"),c=document.getElementById("right"),d=location.hash,f=a.indexOf(d);if("#home"==d&&(b.style.display="none",c.style.display="none"),0==f)b.style.display="none";else{b.innerHTML="";let c=document.createElement("a");b.appendChild(c),c.setAttribute("href",a[f-1]),c.setAttribute("rel","prev chapter"),c.setAttribute("rev","next"),c.innerHTML="pr."}if(f==a.length-1)c.style.display="none";else{c.innerHTML="";let b=document.createElement("a");c.appendChild(b),b.setAttribute("href",a[f+1]),b.setAttribute("rev","prev"),b.setAttribute("rel","next chapter"),b.innerHTML="sl."}}function loadSideNav(a){const b=[["mp",["#recnik","#brauzeri_i_editori","#HTML_u_JSON_izbegavanje_karaktera","#bitcoin-white","#ada","#turing","#aleksandar_totic","#brendan_eich","#vitalik_buterin","#grace_hopper","#lajnus_torvalds","#maja_pantic","#mika_alas","#ryan_dahl","#rajko_tomovic","#timbl","#hedy_lamarr"],["Re\u010Dnik","Softver","HTML u JSON","Beli dokument bitkojna","Ada Lovlejs","Alan Turing","Aleksandar Toti\u0107","Brendan Ajk","Vitalik Buterin","Grejs Hoper","Lajnus Torvalds","Maja Panti\u0107","Mihailo Petrovi\u0107 Alas","Rajan Dal","Rajko Tomovi\u0107","TimBL","Hedi Lamar"]],["hc",["#uvod_u_HTML_i_CSS","#struktura_HTML_stranice","#prvi_sajt","#linkovi","#css_border","#css_border_radius","#osnovni_css","#css_linkova","#predah","#uvod_u_slike","#boje","#klase_i_id-ijevi","#divovi_i_spanovi","#html_liste","#css_liste","#meta","#css_flexbox"],["Uvod","HTML struktura","Prvi Sajt","Linkovi","Uvod u CSS - Border","Zaobljeni \u0107o\u0161kovi","Osnovni CSS","CSS Linkova","Predah","Uvod u slike","Boje","Klase i Id-ijevi","Divovi i Spanovi","Liste","Stilizacija Lista","Meta tagovi","Flexbox"]],["gc",["#uvod_u_cmd","#cd_md_rd","#uvod_u_git","#git_instalacija","#git_inicijacija","#dodavanje_i_komit","#pregled_loga","#git_hash","#git_status","#git_diff","#git_brisanje","#git_preimenovanje"],["Uvod u cmd","CD, MD, RD","Uvod u Git","Instalacija, Pode\u0161avanja","Inicijacija Repo-a","Dodavanje i Komit","Pregledanje loga","Ha\u0161ovanje","Status","Pregled izmena","Brisanje Fajlova","Promena Naziva"]],["js",["#uvod_u_js","#js_konzola","#js_tipovi","#js_typeof","#js_varijable_i_konstante","#js_brojevi","#js_math","#js_if","#js_switch","#js_stringovi","#js_arrayi_uvod","#es1_array","#es5_array","#es6_array","#js_petlje","#js_funkcije","#js_objekti","#js_objekti_metode","#js_prototipovi","#js_proto_nasledjivanje","#prototipovi_i_klase","#js_closure","#js_simboli","#json","#uvod_u_node","#node_modularnost","#node_konzola","#node_fs_modul_uvod","#pwa_uvod_manifest","#js_kako_brauzer_radi"],["Uvod u JS","Konzola","Primitivni tipovi","Spec. tipovi i typeof","Varijable","Brojevi","Math","Bulijani i If blokovi","Switchevi","Stringovi","Array-i uvod","Array metode ES1","Array metode ES3 i ES5","Array metode ES6 i ES7","Petlje","Funkcije","Objekti","Metode Objekata","Prototipovi","Prototipsko nasle\u0111ivanje","Prototipovi i klase","Closure","Simboli na\u0161iroko","JSON","Node uvod","Node modularnost","Konzolna aplikacija","Uvod u rad sa fajlovima","PWA Manifest","JS Motor"]],["ar",["#arduino_uvod_i_instalacija","#arduino_pregled_arduina","#arduino_diode","#arduino_otpornici","#arduino_ide","#arduino_varijable","#arduino_rgb_led","#arduino_if_blokovi","#arduino_predah"],["Uvod i instalacija","Pregled arduina","LED","Otpornici","IDE","Varijable","RGB LED","If blokovi","Jo\u0161 jedan if"]]];for(let c=1;c<b.length;c++)document.getElementById(b[c][0]).removeAttribute("class");for(e in b)if(b[e][0]==a){getSideNavList(b[e]);var c=b[e][1]}let d=document.getElementsByClassName("leftright");if("mp"!=a){document.getElementById(a).setAttribute("class","selected");for(var f=0;2>f;f++)d[f].style.display="inline"}else if("mp"==a)for(var f=0;2>f;f++)d[f].style.display="none";leftRightNav(c)}function getSideNavList(a){let b="<ul id=\"side-menu\">";var[c,d,f]=a;for(el in d)b=b+"<a href=\""+d[el]+"\" rel=\"chapter\"><li>"+f[el]+"</li></a>";document.getElementById("side-nav").innerHTML=b+"</ul>"}function bindMenu(){let a=document.getElementById("header-bottom"),b=document.getElementById("backhome"),c=window.innerWidth;70<=document.body.scrollTop||70<=document.documentElement.scrollTop?(a.className="fixed-top",b.style.visibility="visible"):(a.className="",b.style.visibility="hidden")}window.onscroll=()=>bindMenu(),(copid=function(){let a=new Date().getFullYear();document.querySelector("#copydate").innerHTML="&copy; \u010C\u010E\u0160 "+a})();