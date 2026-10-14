/* Adaptações próprias das referências de interação Não Codei.
   Conteúdo e ações permanecem disponíveis sem esperar pelas animações. */
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
function hasMotion(){return !motionPreference.matches && typeof Element.prototype.animate==='function'}
function animateMenu(){
  if(!hasMotion())return;
  document.querySelectorAll('#products .product-card').forEach((card,i)=>{
    if(card.getBoundingClientRect().top>window.innerHeight+80)return;
    card.animate([{opacity:.25,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,delay:Math.min(i*35,105),easing:'cubic-bezier(.2,.8,.2,1)'});
  });
}
function animatePanel(panel,source){
  if(!hasMotion())return;
  const r=panel.getBoundingClientRect(),s=source?.getBoundingClientRect();
  const origin=s?Math.max(20,Math.min(80,((s.left+s.width/2-r.left)/r.width)*100))+'% 25%':'50% 90%';
  panel.animate([{opacity:.5,transform:'translateY(14px) scale(.98)',transformOrigin:origin},{opacity:1,transform:'none',transformOrigin:origin}],{duration:220,easing:'cubic-bezier(.2,.8,.2,1)'});
}
let previousBagCount,previousBagSum;
function animateBagUpdate(count,sum){
  const changed=previousBagCount!==undefined&&(count!==previousBagCount||sum!==previousBagSum);
  previousBagCount=count;previousBagSum=sum;
  if(!changed||!hasMotion())return;
  for(const selector of ['#top-count','#mobile-count','#mobile-total']){
    const el=document.querySelector(selector);
    el.getAnimations().forEach(a=>a.cancel());
    el.animate([{transform:'translateY(3px)',opacity:.55},{transform:'translateY(0)',opacity:1}],{duration:180,easing:'ease-out'});
  }
}
function selectCategory(id,mobile){
  if(!categories.some(c=>c.id===id)||category===id)return;
  category=id;renderMenu();
  const control=document.querySelector('[data-category="'+id+'"]');
  control?.focus({preventScroll:true});
  if(mobile&&control){const tabs=control.parentElement;const left=control.offsetLeft-tabs.offsetLeft;if(left<tabs.scrollLeft)tabs.scrollLeft=left;else if(left+control.offsetWidth>tabs.scrollLeft+tabs.clientWidth)tabs.scrollLeft=left+control.offsetWidth-tabs.clientWidth;}
}
document.addEventListener('pointerdown',event=>{
  const button=event.target.closest('.primary,.secondary,.category,.product-open');
  if(!button||button.disabled||!hasMotion())return;
  const r=button.getBoundingClientRect(),size=Math.max(r.width,r.height)*2;
  const wave=document.createElement('span');wave.className='touch-wave';wave.setAttribute('aria-hidden','true');
  wave.style.width=wave.style.height=size+'px';
  wave.style.left=(event.clientX-r.left-size/2)+'px';wave.style.top=(event.clientY-r.top-size/2)+'px';
  button.append(wave);
  const animation=wave.animate([{transform:'scale(0)',opacity:.16},{transform:'scale(1)',opacity:0}],{duration:420,easing:'ease-out'});
  animation.finished.then(()=>wave.remove(),()=>wave.remove());
});
motionPreference.addEventListener('change',()=>{
  if(motionPreference.matches)document.getAnimations().forEach(animation=>animation.cancel());
});
