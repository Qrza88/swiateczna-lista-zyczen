// BAG_FEEDBACK_START
// Potwierdzenie przy worku i opcjonalna animacja korzystają ze wspólnego stanu formularza.
const giftMotionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
let giftFlight=null,bagLandingAnimations=[];
function giftTotal(){return [...state.bag.values()].reduce((a,b)=>a+b,0);}
function stopGiftFlight(){
 if(giftFlight){const current=giftFlight;giftFlight=null;current.animation.onfinish=null;current.animation.oncancel=null;current.animation.cancel();current.element.remove();}
 bagLandingAnimations.forEach(animation=>animation.cancel());bagLandingAnimations=[];
}
function pulseMiniBag(){
 if(giftMotionPreference.matches||santa.open||session.open||$('mini-bag').hidden)return;
 const mark=$('mini-bag-mark'),label=$('mini-bag-label');
 if(typeof mark.animate!=='function')return;
 bagLandingAnimations.forEach(animation=>animation.cancel());
 bagLandingAnimations=[
  mark.animate([{transform:'scale(1) rotate(0deg)'},{transform:'scale(1.14) rotate(-5deg)'},{transform:'scale(1) rotate(0deg)'}],{duration:320,easing:'ease-out'}),
  label.animate([{transform:'translateY(0)'},{transform:'translateY(-2px)'},{transform:'translateY(0)'}],{duration:300,easing:'ease-out'})
 ];
}
function animateGiftToMiniBag(p,qty){
 stopGiftFlight();
 if(!mobileCategories.matches||giftMotionPreference.matches||santa.open||session.open||$('mini-bag').hidden)return;
 const source=$('add-slot-'+p.id).firstElementChild,target=$('mini-bag-mark');
 if(typeof source?.animate!=='function')return;
 const a=source.getBoundingClientRect(),b=target.getBoundingClientRect();
 if(!a.width||!b.width)return;
 const fromX=a.left+a.width/2-24,fromY=a.top+a.height/2-24;
 const dx=b.left+b.width/2-24-fromX,dy=b.top+b.height/2-24-fromY;
 const flyer=make('span','gift-flight');flyer.setAttribute('aria-hidden','true');
 flyer.style.left=fromX+'px';flyer.style.top=fromY+'px';flyer.append(icon('art-'+p.art));
 if(qty>1)flyer.append(make('span','gift-flight-qty','×'+qty));
 document.body.append(flyer);
 const animation=flyer.animate([
  {transform:'translate(0px,0px) scale(1) rotate(-5deg)',opacity:1},
  {transform:'translate('+dx*.45+'px,'+(dy*.35-35)+'px) scale(.9) rotate(6deg)',opacity:1,offset:.45},
  {transform:'translate('+dx+'px,'+dy+'px) scale(.25) rotate(0deg)',opacity:0}
 ],{duration:520,easing:'cubic-bezier(.2,.6,.35,1)',fill:'forwards'});
 const current={element:flyer,animation};giftFlight=current;
 animation.onfinish=()=>{flyer.remove();if(giftFlight===current){giftFlight=null;pulseMiniBag();}};
 animation.oncancel=()=>{flyer.remove();if(giftFlight===current)giftFlight=null;};
}
function syncMiniBag(){
 const mini=$('mini-bag'),catalog=$('catalog-section');
 writeUiText($('mini-bag-label'),'Twój worek: '+giftTotal()+' szt.');
 if(!state.bag.size){$('mini-bag-last').hidden=true;writeUiText($('mini-bag-last'),'');}
 const r=catalog.getBoundingClientRect();
 const compact=window.matchMedia('(max-height:520px)').matches;
 const visible=mobileCategories.matches&&!$('form-content').hidden&&(compact||r.top<window.innerHeight*.85&&r.bottom>110);
 mini.hidden=!visible&&!mini.contains(document.activeElement);
}
const originalRenderBag=renderBag;
renderBag=function(){originalRenderBag();syncMiniBag();};
const originalAddGift=addGift;
addGift=function(p){
 stopGiftFlight();const before=giftTotal();originalAddGift(p);const added=giftTotal()-before;
 if(added<=0)return;
 const message='Dodano: '+p.name+' · '+added+' szt. W worku: '+giftTotal()+' szt.';
 writeUiText($('mini-bag-last'),'Dodano: '+added+' szt.');$('mini-bag-last').hidden=false;
 if(santa.open)writeUiText($('bag-status'),'');else writeUiText($('bag-status'),message);
 syncMiniBag();animateGiftToMiniBag(p,added);
};
const originalRemoveGift=removeGift;
removeGift=function(id){stopGiftFlight();originalRemoveGift(id);if(state.bag.size){writeUiText($('mini-bag-last'),'Usunięto prezent.');$('mini-bag-last').hidden=false;}};
let miniFrame=0;
function queueMiniSync(){if(!miniFrame)miniFrame=requestAnimationFrame(()=>{miniFrame=0;syncMiniBag();});}
window.addEventListener('scroll',()=>{stopGiftFlight();queueMiniSync();},{passive:true});
window.addEventListener('resize',()=>{stopGiftFlight();queueMiniSync();},{passive:true});
mobileCategories.addEventListener('change',()=>{stopGiftFlight();queueMiniSync();});
giftMotionPreference.addEventListener('change',stopGiftFlight);
document.addEventListener('focusin',()=>{
 queueMiniSync();
 if(!mobileCategories.matches||$('mini-bag').hidden||$('mini-bag').contains(document.activeElement))return;
 requestAnimationFrame(()=>{const el=document.activeElement;if(!el||el===document.body)return;const r=el.getBoundingClientRect(),bar=$('mini-bag').getBoundingClientRect();if(bar.top>0&&r.bottom>bar.top&&r.top<window.innerHeight)el.scrollIntoView({block:'center',behavior:'auto'});});
});
$('reset-show').addEventListener('click',()=>{stopGiftFlight();syncMiniBag();});
$('letter-form').addEventListener('submit',()=>{stopGiftFlight();queueMiniSync();});
$('edit-letter').addEventListener('click',queueMiniSync);
$('page-language').addEventListener('change',()=>{stopGiftFlight();queueMiniSync();});
if(typeof ResizeObserver!=='undefined')new ResizeObserver(queueMiniSync).observe($('catalog-section'));
// BAG_FEEDBACK_END
