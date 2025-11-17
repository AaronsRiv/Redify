
const header=document.getElementById('site-header');const hero=document.getElementById('hero');
function onScroll(){if(window.scrollY>((hero?.offsetHeight||60)-60)){header?.classList.add('header-scrolled')}else{header?.classList.remove('header-scrolled')}}
document.addEventListener('scroll',onScroll);onScroll();
function sendWhatsApp(){const name=document.getElementById('name').value.trim();const phone=document.getElementById('phone').value.trim();const msg=`Hola Redify, me interesa contratar. Mi nombre es ${name} y mi teléfono es ${phone}.`;const url=`https://wa.me/529995421285?text=${encodeURIComponent(msg)}`;window.open(url,'_blank');}
document.addEventListener('DOMContentLoaded',()=>{document.getElementById('ctaBtn')?.addEventListener('click',sendWhatsApp)});
