const CONFIG={name:'Bras Burger',whatsapp:'5598984749589',phoneDisplay:'(98) 98474-9589',deliveryFee:null};
const ICONS={'shopping-bag':'<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>','message-circle':'<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>',flame:'<path d="M8.5 14.5A6 6 0 0 1 10 3c0 4 5 4 5 8a3 3 0 0 0 2-2 8 8 0 1 1-12 6c0-2 1-3 2-4 0 2 .5 3 1.5 3.5Z"/>',package:'<path d="m7.5 4.3 9 5.2M21 8l-9 5-9-5M12 22V13"/><path d="m21 8-9-5-9 5v10l9 5 9-5Z"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',x:'<path d="m18 6-12 12M6 6l12 12"/>',burger:'<path d="M4 10a8 8 0 0 1 16 0ZM3 14h18M4 18h16M6 21h12"/>',fries:'<path d="m5 9 2 13h10l2-13ZM8 9V3h3v6M13 9V1h3v8"/>',cup:'<path d="m6 7 2 15h8l2-15ZM4 7h16M12 7V2h5"/>',check:'<path d="m5 12 4 4L19 6"/>',trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/>',copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>'};
const $=s=>document.querySelector(s);const money=v=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(v/100);const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));const icon=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">${ICONS[n]||ICONS.burger}</svg>`;
function icons(){document.querySelectorAll('[data-icon]').forEach(e=>e.innerHTML=icon(e.dataset.icon))}
const products=[
  {
    "id": "simples",
    "category": "burgers",
    "name": "Burguer Simples",
    "price": 1600,
    "description": "Pão brioche, blend 110g, queijo cheddar, salada e molho especial.",
    "image": "images/oficial/simples.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "queridinho",
    "category": "burgers",
    "name": "Burguer Queridinho",
    "price": 1900,
    "description": "Pão brioche, blend 110g, queijo cheddar, calabresa, bacon, salada, molho especial e cebola caramelizada.",
    "image": "images/oficial/queridinho.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "bacon-royale",
    "category": "burgers",
    "name": "Bacon Royale",
    "price": 2000,
    "description": "Pão brioche, maionese da casa, blend 110g, queijo mussarela derretido e geleia de bacon crocante.",
    "image": "images/oficial/bacon-royale.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "burguer-bras",
    "category": "burgers",
    "name": "Burguer Bras",
    "price": 2500,
    "description": "Pão brioche, blend 130g, creme de queijo mussarela, bacon crocante, barbecue e cebola orion.",
    "image": "images/oficial/burguer-bras.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "moda-da-casa",
    "category": "burgers",
    "name": "Burguer Moda da Casa",
    "price": 2900,
    "description": "Pão brioche, 2 blends de 110g, queijo cheddar, bacon, ovo, calabresa, salada, molho especial e cebola caramelizada.",
    "image": "images/oficial/moda-da-casa.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "supreme",
    "category": "burgers",
    "name": "Supreme Burguer 2.0",
    "price": 2700,
    "description": "Pão brioche, blend 200g recheado com queijo mussarela, barbecue e picles.",
    "image": "images/oficial/supreme.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "cheese-bras",
    "category": "burgers",
    "name": "Cheese Brás",
    "price": 3000,
    "description": "Pão brioche, blend 130g, queijo coalho, geleia de pimenta e bacon em cubos crocante.",
    "image": "images/oficial/cheese-bras.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "combo-simples",
    "category": "combos",
    "name": "Combo Burguer Simples",
    "price": 3000,
    "description": "Burguer Simples + refrigerante 350ml + batata.",
    "image": "images/oficial/combo-simples.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "combo-queridinho",
    "category": "combos",
    "name": "Combo Burguer Queridinho",
    "price": 3800,
    "description": "Burguer Queridinho + refrigerante 350ml + batata.",
    "image": "images/oficial/combo-queridinho.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "combo-bras",
    "category": "combos",
    "name": "Combo Burguer Bras",
    "price": 4000,
    "description": "Burguer Bras + refrigerante 350ml + batata.",
    "image": "images/oficial/combo-bras.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "hot-bras",
    "category": "sandwiches",
    "name": "Hot Bras",
    "price": 2300,
    "description": "Pão semi-italiano 15cm, barbecue, salada, calabresa, creme de queijo e cebola orion.",
    "image": "images/oficial/hot-bras.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "hot-frango",
    "category": "sandwiches",
    "name": "Hot Frango",
    "price": 2000,
    "description": "Pão semi-italiano, salada, frango, queijo mussarela, cream cheese e molho especial.",
    "image": "images/oficial/hot-frango.webp",
    "available": true,
    "addons": true
  },
  {
    "id": "batata-simples",
    "category": "sides",
    "name": "Batata Frita Simples",
    "price": 1700,
    "description": "Porção de batata frita.",
    "image": "images/oficial/batata-simples.webp",
    "available": true,
    "addons": false
  },
  {
    "id": "batata-premium",
    "category": "sides",
    "name": "Batata Premium",
    "price": 2500,
    "description": "Batata frita com creme cheddar e bacon.",
    "image": "images/oficial/batata-premium.webp",
    "available": true,
    "addons": false
  },
  {
    "id": "porcao-fritas",
    "category": "sides",
    "name": "Porção de Fritas",
    "price": 3500,
    "description": "Cebola orion, batata e nuggets de frango.",
    "image": "images/oficial/porcao-fritas.webp",
    "available": true,
    "addons": false
  },
  {
    "id": "pasteis-queijo",
    "category": "sides",
    "name": "Porção de Pastéis de Queijo",
    "price": 1800,
    "description": "6 unidades.",
    "image": "images/oficial/pasteis-queijo.webp",
    "available": true,
    "addons": false
  },
  {
    "id": "bolinhas-carne-sol",
    "category": "sides",
    "name": "Bolinhas de Carne de Sol",
    "price": 2000,
    "description": "6 unidades.",
    "image": "images/oficial/bolinhas-carne-sol.webp",
    "available": true,
    "addons": false
  },
  {
    "id": "suco",
    "category": "drinks",
    "name": "Suco 300ml",
    "price": 900,
    "description": "Consulte os sabores disponíveis com a equipe.",
    "image": "images/oficial/suco.webp",
    "available": true,
    "addons": false
  },
  {
    "id": "refrigerante",
    "category": "drinks",
    "name": "Refrigerante 350ml",
    "price": 700,
    "description": "Informe sua preferência nas observações. Disponibilidade confirmada pela equipe.",
    "image": "images/oficial/refrigerante.webp",
    "available": true,
    "addons": false
  },
  {
    "id": "agua-gas",
    "category": "drinks",
    "name": "Água com Gás",
    "price": 500,
    "description": "Água mineral com gás.",
    "image": "images/oficial/agua.webp",
    "available": true,
    "addons": false
  },
  {
    "id": "agua",
    "category": "drinks",
    "name": "Água Mineral",
    "price": 400,
    "description": "Água mineral sem gás.",
    "image": "images/oficial/agua.webp",
    "available": true,
    "addons": false
  }
];
const categories=[{"id": "burgers", "name": "Hambúrgueres", "icon": "burger", "title": "Feitos na brasa", "sub": "Artesanal, do primeiro ao último pedaço."}, {"id": "combos", "name": "Combos", "icon": "package", "title": "Seu pedido completo", "sub": "Burger, refri de 350ml e batata."}, {"id": "sandwiches", "name": "Sanduíches", "icon": "burger", "title": "Os sanduíches da Bras", "sub": "Escolha seu favorito."}, {"id": "sides", "name": "Entradas", "icon": "fries", "title": "Para começar", "sub": "Entradas de R$ 17,00 a R$ 35,00."}, {"id": "drinks", "name": "Bebidas", "icon": "cup", "title": "Para acompanhar", "sub": "Bebidas de R$ 4,00 a R$ 9,00."}];
let category='burgers',cart=[],selected=null;
function renderMenu(){const categoryScroll=$('.category-tabs')?.scrollLeft||0;const c=categories.find(c=>c.id===category);$('#categories').innerHTML=`<div class="category-tabs">${categories.map(c=>`<button class="category ${c.id===category?'active':''}" data-category="${c.id}" aria-pressed="${c.id===category}">${icon(c.icon)}${c.name}</button>`).join('')}</div>`;$('.category-tabs').scrollLeft=categoryScroll;$('#menu-count').textContent='Cantanhede / MA';$('#category-title').textContent=c.title;$('#category-subtitle').textContent=c.sub;const list=products.filter(p=>p.category===category);$('#products').innerHTML=list.length?list.map(p=>`<article data-kind="${p.category}" class="product-card ${p.available?'':'unavailable'}"><button class="product-open" data-product="${p.id}" ${p.available?'':'disabled'} aria-label="${p.available?'Personalizar':'Indisponível:'} ${esc(p.name)}"><img class="product-image" src="${p.category==='burgers'?p.image.replace('.webp','-card.webp'):p.image}" alt="${esc(p.name)} · imagem do cardápio oficial" loading="lazy" decoding="async" width="400" height="300"><div class="product-body"><h4>${esc(p.name)}</h4><p>${esc(p.description)}</p><div class="product-bottom"><span class="product-price">${money(p.price)}</span><span class="add-circle">${p.available?'Adicionar':''}${icon(p.available?'plus':'minus')}</span></div></div></button></article>`).join(''):`<div class="catalog-consult"><h3>${c.name==='Entradas'?'Entradas para compartilhar':'Uma bebida para acompanhar'}</h3><p>${esc(c.sub)}</p><p>Consulte as opções disponíveis com a equipe antes de incluir no pedido.</p><a class="primary" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener">${icon('message-circle')} Consultar ${c.name.toLowerCase()}</a></div>`;animateMenu()}
const addons=[{"id": "bacon", "name": "Bacon", "price": 500}, {"id": "ovo", "name": "Ovo", "price": 300}, {"id": "blend-110", "name": "Blend 110g", "price": 700}, {"id": "blend-130", "name": "Blend 130g", "price": 900}, {"id": "geleia-bacon", "name": "Geleia de Bacon", "price": 800}, {"id": "geleia-pimenta", "name": "Geleia de Pimenta", "price": 500}, {"id": "picles", "name": "Picles", "price": 500}, {"id": "cheddar", "name": "Queijo Cheddar", "price": 500}, {"id": "coalho", "name": "Queijo Coalho", "price": 600}, {"id": "cebola-orion", "name": "Cebola Orion", "price": 500}];
const unitPrice=item=>products.find(p=>p.id===item.productId).price+item.addons.reduce((s,id)=>s+addons.find(a=>a.id===id).price,0);
const subtotal=()=>cart.reduce((s,i)=>s+unitPrice(i)*i.quantity,0);
const itemDetails=i=>[i.addons.map(id=>addons.find(a=>a.id===id).name).join(', '),i.notes?'Obs.: '+i.notes:''].filter(Boolean).join(' · ');
let toastTimer,order=null;
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2800)}
function toggleBag(open){const dialog=$('#bag-dialog'),bag=$('#bag');if(open&&mediaMatches('(max-width:850px)')){if(dialog.open)return;dialog.append(bag);bag.classList.add('open');if(!openDialog(dialog)){restoreBag();return;}animatePanel(dialog)}else{if(dialog.open)dialog.close();restoreBag()}}
function restoreBag(){const bag=$('#bag');bag.classList.remove('open');if(bag.parentElement===$('#bag-dialog'))$('.main-layout').append(bag)}
function renderCart(){syncCartRevision();saveSession();const count=cart.reduce((s,i)=>s+i.quantity,0),sum=subtotal();$('#mobile-bag').disabled=false;$('#top-count').textContent=count;$('#bag-count').textContent=count;$('#mobile-count').textContent=count;$('#mobile-total').textContent=money(sum);animateBagUpdate(count,sum);$('#bag-content').innerHTML=cart.length?`<div class="bag-items">${cart.map((i,index)=>{const p=products.find(p=>p.id===i.productId);return `<article class="bag-item"><div class="bag-item-top"><img src="${p.image}" alt="" width="45" height="45"><div class="bag-item-main"><h3>${esc(p.name)}</h3><p>${esc(itemDetails(i))}</p><button class="bag-edit" data-edit="${index}">Editar item</button></div><button class="icon-button remove-item" data-remove="${index}" aria-label="Remover ${esc(p.name)}">${icon('trash')}</button></div><div class="bag-item-actions"><div class="qty"><button data-quantity="${index}" data-delta="-1" aria-label="Diminuir quantidade de ${esc(p.name)}">${icon('minus')}</button><span>${i.quantity}</span><button data-quantity="${index}" data-delta="1" ${i.quantity>=20?'disabled':''} aria-label="Aumentar quantidade de ${esc(p.name)}">${icon('plus')}</button></div><strong>${money(unitPrice(i)*i.quantity)}</strong></div></article>`}).join('')}</div>`:`<div class="empty-bag"><div class="empty-icon">${icon('shopping-bag')}</div><h3>Sua fome merece um Bras.</h3><p>Escolha seus favoritos no cardápio e monte um pedido do seu jeito.</p></div>`;$('#bag-bottom').innerHTML=`<div class="summary-line"><span>Subtotal</span><strong>${money(sum)}</strong></div><div class="summary-line"><span>Entrega</span><small>Definida na próxima etapa</small></div><div class="summary-line total"><span>Total parcial</span><strong>${money(sum)}</strong></div><button class="primary" id="start-checkout" ${count?'':'disabled'}>Continuar pedido</button><p>${count?'Confira entrega e pagamento na próxima etapa':'Adicione um item para começar'}</p>${order?'<button class="secondary" id="resume-order">Retomar pedido gerado</button>':''}<p class="session-note">${storageAvailable?'Sacola e último pedido ficam salvos nesta aba até ela ser fechada.':'Armazenamento indisponível: copie o pedido antes de recarregar ou fechar esta página.'}</p>`}
function showProduct(id,index=null){const p=products.find(p=>p.id===id);if(!p?.available)return;const existing=index!==null?cart[index]:null;selected={productId:id,addons:existing?[...existing.addons]:[],notes:existing?.notes||'',quantity:existing?.quantity||1,index};$('#product-dialog').innerHTML=`<img class="modal-image" src="${p.image}" alt="${esc(p.name)}"><button class="modal-close" data-close="product-dialog" aria-label="Fechar produto">${icon('x')}</button><div class="modal-content"><h2 id="product-name">${esc(p.name)}</h2><p class="modal-description">${esc(p.description)}</p>${p.category==='combos'?'<p class="form-note">Informe a preferência de refrigerante nas observações. Os adicionais abaixo são para o hambúrguer do combo.</p>':''}<span class="modal-base-price">${money(p.price)}</span>${p.addons?`<section class="option-section"><div class="option-header"><h3>Deixe com a sua cara</h3><span>Valor por unidade</span></div>${addons.map(a=>`<label class="addon"><input type="checkbox" value="${a.id}" name="addon" ${selected.addons.includes(a.id)?'checked':''}>${esc(a.name)}<strong>+ ${money(a.price)}</strong></label>`).join('')}</section>`:''}<div class="option-section"><label class="field-label" for="product-notes">Alguma observação? <small>Opcional</small></label><textarea id="product-notes" maxlength="200" placeholder="Ex.: sem cebola, molho à parte...">${esc(selected.notes)}</textarea><div class="form-note">Até 200 caracteres. Restrições alimentares devem ser confirmadas com a loja.</div></div></div><div class="modal-footer"><div class="qty"><button id="product-minus" aria-label="Diminuir quantidade">${icon('minus')}</button><span id="product-quantity">${selected.quantity}</span><button id="product-plus" aria-label="Aumentar quantidade">${icon('plus')}</button></div><button class="primary" id="add-product"></button></div>`;updateProductTotal();$('#product-dialog').scrollTop=0;openDialog($('#product-dialog'));animatePanel($('#product-dialog'),document.querySelector('[data-product="'+id+'"]'))}
function updateProductTotal(){$('#product-quantity').textContent=selected.quantity;$('#product-minus').disabled=selected.quantity<=1;$('#product-plus').disabled=selected.quantity>=20;$('#add-product').textContent=(selected.index!==null?'Salvar':'Adicionar')+' · '+money(unitPrice(selected)*selected.quantity)}
function addProduct(){if(!selected)return;selected.notes=$('#product-notes').value.trim();const item={productId:selected.productId,addons:[...selected.addons].sort(),notes:selected.notes,quantity:selected.quantity};if(selected.index!==null)cart[selected.index]=item;else{const same=cart.find(i=>i.productId===item.productId&&i.notes===item.notes&&i.addons.join(',')===item.addons.join(','));if(same&&same.quantity+item.quantity<=20)same.quantity+=item.quantity;else cart.push(item)}$('#product-dialog').close();renderCart();toast(selected.index!==null?'Item atualizado na sacola':'Adicionado à sacola');selected=null}
function inputField(id,label,options={}){return `<div class="${options.full?'field-full':''}"><label class="field-label" for="${id}">${label}</label><input id="${id}" name="${id}" ${options.required===false?'':'required'} maxlength="${options.max||100}" ${options.attrs||''} placeholder="${options.placeholder||''}"><p class="field-error" id="${id}-error" hidden></p></div>`}
function startCheckout(){if(!cart.length)return;draft=null;toggleBag(false);$('#checkout-dialog').innerHTML=`<div class="checkout-head"><div><h2 id="checkout-title">Falta pouco pro seu Bras.</h2><p>Preencha os dados e confira seu pedido.</p></div><button class="icon-button" data-close="checkout-dialog" aria-label="Fechar checkout">${icon('x')}</button></div><form id="checkout-form" novalidate><div class="checkout-body"><div class="step-label"><b>1</b> Quem vai matar a fome?</div><div class="field-grid">${inputField('customer','Seu nome',{attrs:'autocomplete="name" enterkeyhint="next"',placeholder:'Como podemos chamar você?',max:80})}${inputField('phone','WhatsApp com DDD',{attrs:'type="tel" inputmode="tel" autocomplete="tel" enterkeyhint="next"',placeholder:'(98) 99999-9999',max:20})}</div><fieldset class="choice-group"><legend class="step-label"><b>2</b> Como você quer receber?</legend><div class="choice-grid"><label class="choice"><input type="radio" name="fulfillment" value="delivery" checked><span>Entrega<small>${CONFIG.deliveryFee===null?'Taxa e prazo a confirmar':CONFIG.deliveryFee===0?'Entrega grátis · prazo a confirmar':money(CONFIG.deliveryFee)+' · prazo a confirmar'}</small></span></label><label class="choice"><input type="radio" name="fulfillment" value="pickup"><span>Retirada<small>Sem taxa de entrega</small></span></label></div></fieldset><fieldset id="address-fields" style="border:0;padding:0;margin:0"><legend class="sr-only">Endereço de entrega</legend><div class="field-grid">${inputField('street','Rua e número <small>(obrigatório)</small>',{full:true,placeholder:'Ex.: Rua das Flores, 123',attrs:'autocomplete="address-line1" enterkeyhint="next" aria-describedby="street-help"'})}<p class="form-note field-full" id="street-help">Inclua o número e o complemento, se houver. Se não houver número, escreva “sem número”.</p>${inputField('reference','Referência <small>(obrigatório)</small>',{full:true,placeholder:'Ex.: Casa ao lado da farmácia',max:150})}${inputField('neighborhood','Bairro <small>(obrigatório)</small>',{full:true,placeholder:'Ex.: Centro',max:80})}</div></fieldset><p id="pickup-info" class="form-note" hidden>Retire na Av. Rio Branco, Centro, Cantanhede/MA, em frente ao quartel da Polícia Militar. Confirme o horário de retirada com a equipe.</p><fieldset class="choice-group"><legend class="step-label"><b>3</b> Como prefere pagar?</legend><div class="choice-grid payment-grid"><label class="choice"><input type="radio" name="payment" value="pix" checked><span>Pix</span></label><label class="choice"><input type="radio" name="payment" value="card"><span>Cartão</span></label><label class="choice"><input type="radio" name="payment" value="cash"><span>Dinheiro</span></label></div></fieldset><p id="payment-info" class="form-note">A loja informa a chave Pix pelo WhatsApp. Nenhum pagamento é feito neste site.</p><div id="cash-fields" class="field-grid" style="margin-top:16px" hidden><div class="field-full"><label class="addon"><input type="checkbox" id="need-change">Preciso de troco</label></div><div class="field-full" id="change-field" hidden><label class="field-label" for="change">Troco para quanto? <small>(obrigatório)</small></label><input id="change" name="change" aria-describedby="change-help" inputmode="decimal" placeholder="Ex.: 100,00" maxlength="10"><p class="field-error" id="change-error" hidden></p><p id="change-help" class="form-note">Informe o valor em dinheiro que você vai entregar. Ex.: 100,00.</p></div></div><div id="checkout-error" class="error-message" role="alert"></div><div id="checkout-totals" class="checkout-totals"></div><p class="form-note">A equipe confirma disponibilidade e prazo. ${CONFIG.deliveryFee===null?'Para delivery, a taxa de entrega será informada pelo WhatsApp antes da confirmação.':'Confira no resumo a taxa conforme entrega ou retirada.'}</p></div><div class="modal-footer"><button class="primary" type="submit">Conferir pedido</button></div></form><div id="review" hidden></div>`;restoreCheckoutFields();updateCheckout();openDialog($('#checkout-dialog'));animatePanel($('#checkout-dialog'));focusCheckoutTitle()}
function fulfillment(){return $('#checkout-form input[name="fulfillment"]:checked').value}
function checkoutTotals(){const sub=subtotal(),fee=fulfillment()==='delivery'?CONFIG.deliveryFee:0;return {subtotal:sub,fee,total:sub+(fee??0)}}
function feeLabel(t,mode){return t.fee===null?'A confirmar com a loja':t.fee?money(t.fee):mode==='delivery'?'Entrega grátis':'Grátis · retirada'}
function totalsHTML(t,mode=fulfillment()){return `<div class="summary-line"><span>Subtotal</span><strong>${money(t.subtotal)}</strong></div><div class="summary-line"><span>Entrega</span><strong>${feeLabel(t,mode)}</strong></div><div class="summary-line total"><span>${t.fee===null?'Total dos itens':'Total do pedido'}</span><strong>${money(t.total)}</strong></div>${t.fee===null?'<p class="form-note">O valor final inclui a taxa de entrega, que será confirmada pela equipe.</p>':''}`}
function updateCheckout(){const delivery=fulfillment()==='delivery',pay=$('#checkout-form input[name="payment"]:checked').value;$('#address-fields').hidden=!delivery;$('#address-fields').disabled=!delivery;$('#pickup-info').hidden=delivery;validateAddressFields();$('#cash-fields').hidden=pay!=='cash';$('#change-field').hidden=pay!=='cash'||!$('#need-change').checked;$('#need-change').disabled=pay!=='cash';$('#change').required=pay==='cash'&&$('#need-change').checked;$('#change').disabled=!$('#change').required;$('#payment-info').textContent=pay==='pix'?'A loja informa a chave Pix pelo WhatsApp. Nenhum pagamento é feito neste site.':pay==='card'?'Pagamento na entrega ou retirada. Confirme as bandeiras aceitas com a loja.':'Pagamento em dinheiro na entrega ou retirada. Se precisar de troco, informe abaixo. Para entrega, o troco depende da taxa confirmada pela loja.';$('#checkout-totals').innerHTML=totalsHTML(checkoutTotals());$('#checkout-error').textContent=''}
function validateAddressFields(){const delivery=fulfillment()==='delivery';for(const [id,message] of [['street','Informe a rua e o número (ou sem número) para entrega'],['reference','Informe um ponto de referência'],['neighborhood','Informe o bairro para entrega']]){const field=document.getElementById(id);field.required=delivery;field.setCustomValidity(delivery&&!field.value.trim()?message:'')}}
document.addEventListener('input',e=>{if(e.target.closest('#address-fields'))validateAddressFields()});
function customerError(fieldId,message){const error=new Error(message);error.fieldId=fieldId;throw error;}
function normalizePhone(raw){
  // Format only: Brazilian DDD + landline (2–5) or mobile (9). No account lookup.
  if(!/^\+?[\d\s().-]+$/.test(raw))return null;
  let digits=raw.replace(/\D/g,'');
  if(raw.startsWith('+')&&!(digits.startsWith('55')&&[12,13].includes(digits.length)))return null;
  if([12,13].includes(digits.length)&&digits.startsWith('55'))digits=digits.slice(2);
  const ddds='11 12 13 14 15 16 17 18 19 21 22 24 27 28 31 32 33 34 35 37 38 41 42 43 44 45 46 47 48 49 51 53 54 55 61 62 63 64 65 66 67 68 69 71 73 74 75 77 79 81 82 83 84 85 86 87 88 89 91 92 93 94 95 96 97 98 99'.split(' ');
  if(!ddds.includes(digits.slice(0,2))||!/^\d{2}(?:[2-5]\d{7}|9\d{8})$/.test(digits)||/^(\d)\1+$/.test(digits.slice(2)))return null;
  return digits;
}
function readCustomer(){
  const f=new FormData($('#checkout-form')),phone=normalizePhone(String(f.get('phone')||'').trim()),payment=f.get('payment');
  const name=String(f.get('customer')||'').trim();
  if(!name)customerError('customer','Informe seu nome.');
  if(!phone)customerError('phone','Confira o formato do WhatsApp: DDD válido e número, sem letras. Ex.: (98) 99999-9999.');
  const needsChange=payment==='cash'&&$('#need-change').checked,changeValue=String(f.get('change')||'').trim();
  if(needsChange&&!/^\d+(?:[,.]\d{1,2})?$/.test(changeValue))customerError('change','Informe um valor válido para o troco. Ex.: 100,00.');
  const change=needsChange?Math.round(Number(changeValue.replace(',','.'))*100):null,totals=checkoutTotals();
  if(change!==null&&(!Number.isSafeInteger(change)||change<totals.total))customerError('change','O valor para troco precisa ser igual ou maior que o total do pedido.');
  const delivery=f.get('fulfillment')==='delivery';
  const address=delivery?Object.fromEntries(['street','reference','neighborhood'].map(k=>[k,String(f.get(k)||'').trim()])):null;
  if(delivery&&!address.street)customerError('street','Informe a rua e o número (ou sem número) para entrega.');
  if(delivery&&!address.reference)customerError('reference','Informe um ponto de referência.');
  if(delivery&&!address.neighborhood)customerError('neighborhood','Informe o bairro para entrega.');
  return {name,phone,fulfillment:delivery?'delivery':'pickup',address,payment,change,totals};
}
function clearFieldError(field){
  field.removeAttribute('aria-invalid');
  const id=field.id+'-error',error=document.getElementById(id);if(error){error.hidden=true;error.textContent='';}
  const descriptions=(field.getAttribute('aria-describedby')||'').split(' ').filter(value=>value&&value!==id);
  if(descriptions.length)field.setAttribute('aria-describedby',descriptions.join(' '));else field.removeAttribute('aria-describedby');
}
function showFieldError(field,message){
  if(!field)return;const id=field.id+'-error',error=document.getElementById(id);
  field.setAttribute('aria-invalid','true');
  if(error){error.textContent=message;error.hidden=false;field.setAttribute('aria-describedby',[...new Set((field.getAttribute('aria-describedby')||'').split(' ').filter(Boolean).concat(id))].join(' '));}
  $('#checkout-error').textContent=message;
}
document.addEventListener('invalid',event=>{
  if(!event.target.closest('#checkout-form'))return;
  event.preventDefault();const field=event.target;
  const required={customer:'Informe seu nome.',phone:'Informe seu WhatsApp com DDD.',street:'Informe a rua e o número (ou sem número) para entrega.',reference:'Informe um ponto de referência.',neighborhood:'Informe o bairro para entrega.',change:'Informe o valor para troco.'};
  showFieldError(field,required[field.id]||field.validationMessage);
},true);
document.addEventListener('input',event=>{if(event.target.closest('#checkout-form')&&event.target.hasAttribute('aria-invalid')){clearFieldError(event.target);$('#checkout-error').textContent='';}});
const paymentLabel={pix:'Pix · chave a combinar com a loja',card:'Cartão na entrega/retirada',cash:'Dinheiro'};
function changeText(c,totals){if(c.payment!=='cash')return '';if(c.change===null)return 'Não precisa de troco';return 'Troco para: '+money(c.change)+'\n'+(totals.fee===null?'Troco a confirmar após definir a taxa de entrega.':'Troco previsto: '+money(c.change-totals.total))}
function addressText(c){if(c.fulfillment==='pickup')return 'Retirada: Av. Rio Branco, Centro, Cantanhede/MA. Em frente ao quartel da Polícia Militar. Horário a confirmar com a equipe.';const a=c.address||{};return [['Rua',a.street],['Referência',a.reference],['Bairro',a.neighborhood]].filter(([,value])=>String(value??'').trim()).map(([label,value])=>label+': '+String(value).trim()).join('\n')}
let draft=null;
function reviewOrder(event){event.preventDefault();$('#checkout-form').querySelectorAll('[aria-invalid]').forEach(clearFieldError);validateAddressFields();if(!$('#checkout-form').checkValidity()){$('#checkout-form input:invalid')?.focus();return;}try{draft={...readCustomer(),items:cloneData(cart),key:cartKey()};rememberCheckout()}catch(e){const field=document.getElementById(e.fieldId);showFieldError(field,e.message);field?.focus();return}$('#checkout-form').hidden=true;$('#checkout-title').textContent='Tudo certo com o seu pedido?';$('#review').hidden=false;$('#review').innerHTML=`<div class="checkout-body"><div class="step-label">CONFIRA ANTES DE ENVIAR</div>${cart.map(i=>`<div class="review-item"><div>${i.quantity}× ${esc(products.find(p=>p.id===i.productId).name)}<small>${esc(itemDetails(i))}</small></div><strong>${money(unitPrice(i)*i.quantity)}</strong></div>`).join('')}<div class="review-info"><strong>${esc(draft.name)}</strong> · ${esc(draft.phone)}<br><strong>${draft.fulfillment==='delivery'?'Entrega':'Retirada'}</strong><br>${esc(addressText(draft)).replace(/\n/g,'<br>')}<br><strong>Pagamento:</strong> ${paymentLabel[draft.payment]}${draft.payment==='cash'?'<br>'+esc(changeText(draft,draft.totals)).replace(/\n/g,'<br>'):''}</div><div class="checkout-totals">${totalsHTML(draft.totals)}</div><p class="form-note">${order?'Ao gerar novamente, a mensagem anterior será substituída. Copie-a antes se precisar guardá-la. ':''}Ao gerar o pedido, seus dados serão incluídos na mensagem para a Bras Burger. Você confirma o envio no WhatsApp.</p><p class="form-note">A equipe confirma o prazo, os adicionais solicitados ${CONFIG.deliveryFee===null?'e, para delivery, a taxa de entrega antes de finalizar.':'antes de finalizar.'}</p></div><div class="modal-footer"><button type="button" class="secondary" id="back-checkout">Editar</button><button type="button" class="primary" id="generate-order">${order?'Substituir pedido anterior':'Gerar pedido'}</button></div>`;$('#checkout-dialog').scrollTop=0;focusCheckoutTitle()}
function formatOrder(o){return [`*BRAS BURGER | PEDIDO ${o.number}*`,'*Aguardando confirmação da loja*','Pedido sujeito à confirmação da equipe.','',...o.items.flatMap(i=>[`${i.quantity}x ${i.name} — ${money(i.unitPrice*i.quantity)}`,`  Valor unitário${i.addons.length?" com adicionais":""}: ${money(i.unitPrice)}`,...i.addons.map(a=>`  + ${a.name} (${money(a.price)} por unidade)`),...(i.notes?[`  Observação: ${i.notes}`]:[])]),'',`*Cliente:* ${o.customer.name}`,`*WhatsApp:* ${o.customer.phone}`,`*Recebimento:* ${o.customer.fulfillment==='delivery'?'Entrega':'Retirada'}`,addressText(o.customer),`*Pagamento:* ${paymentLabel[o.customer.payment]}`,...(o.customer.payment==='cash'?[changeText(o.customer,o.totals)]:[]),'',`Subtotal: ${money(o.totals.subtotal)}`,`Entrega: ${feeLabel(o.totals,o.customer.fulfillment)}`,`*${o.totals.fee===null?"TOTAL DOS ITENS (sem entrega)":"TOTAL"}: ${money(o.totals.total)}*`,'','Confirme a disponibilidade, o valor final e o prazo, por favor.'].join('\n')}
function generateOrder(){
  if(!draft||!cart.length)return;
  if(draft.key!==cartKey()){syncCartRevision();toast('A sacola mudou. Confira o pedido novamente.');return;}
  const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Fortaleza',year:'2-digit',month:'2-digit',day:'2-digit'}).formatToParts(new Date());
  const date=['year','month','day'].map(type=>parts.find(p=>p.type===type).value).join('');
  const {items,key,...customer}=draft;
  order={number:'BR-'+date+'-'+orderSuffix(),createdAt:new Date().toISOString(),status:'awaiting_confirmation',customer:cloneData(customer),totals:{...draft.totals},items:items.map(i=>({productId:i.productId,name:products.find(p=>p.id===i.productId).name,quantity:i.quantity,addons:i.addons.map(id=>({...addons.find(a=>a.id===id)})),notes:i.notes,unitPrice:unitPrice(i)}))};
  order.message=formatOrder(order);order.url='https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(order.message);
  draft=null;renderCart();showReceipt();
}
function showReceipt(){if(!order)return;toggleBag(false);
$('#checkout-dialog').innerHTML=`<div class="receipt"><button class="modal-close" data-close="checkout-dialog" aria-label="Fechar comprovante">${icon('x')}</button><div class="success-icon">${icon('check')}</div><h2 id="checkout-title">Pedido gerado!</h2><p>Agora é só enviar para a Bras Burger.<br>A loja confirma seu pedido pelo WhatsApp.</p><strong class="order-number">${esc(order.number)}</strong><div class="summary-line total"><span>${order.totals.fee===null?"Total dos itens":"Total do pedido"}</span><strong>${money(order.totals.total)}</strong></div>${order.totals.fee===null?'<p class="form-note">Taxa de entrega a confirmar com a equipe.</p>':''}<div class="receipt-actions"><a class="primary" style="background:#25894e" href="${esc(order.url)}" target="_blank" rel="noopener" id="send-whatsapp">${icon('message-circle')} Enviar pelo WhatsApp</a><button class="secondary" id="copy-order">${icon('copy')} Copiar pedido</button><button class="secondary" id="edit-order">Conferir sacola atual</button><button class="secondary" id="new-order">Voltar ao cardápio</button></div><p class="form-note">${storageAvailable?'Retome este pedido pela sacola.':'Armazenamento indisponível: copie a mensagem antes de recarregar ou fechar a página.'} O pedido ainda não foi enviado. Alterar a sacola não altera esta mensagem; confira e gere novamente para substituí-la. Abra o WhatsApp e toque em enviar. Se ele não abrir, copie a mensagem e envie para (98) 98474-9589.</p><details><summary>Ver mensagem do pedido</summary><pre id="order-message"></pre></details></div>`;$('#order-message').textContent=order.message;$('#checkout-dialog').scrollTop=0;if(!$('#checkout-dialog').open)openDialog($('#checkout-dialog'));focusCheckoutTitle()}
document.addEventListener('click',async e=>{const c=e.target.closest('[data-category]');if(c)selectCategory(c.dataset.category,mediaMatches('(max-width:600px)'));const p=e.target.closest('[data-product]');if(p)showProduct(p.dataset.product);const edit=e.target.closest('[data-edit]');if(edit)showProduct(cart[Number(edit.dataset.edit)].productId,Number(edit.dataset.edit));const remove=e.target.closest('[data-remove]');if(remove){cart.splice(Number(remove.dataset.remove),1);renderCart()}const q=e.target.closest('[data-quantity]');if(q){const i=Number(q.dataset.quantity);cart[i].quantity+=Number(q.dataset.delta);if(cart[i].quantity<=0)cart.splice(i,1);renderCart()}const close=e.target.closest('[data-close]');if(close)document.getElementById(close.dataset.close).close();if(e.target.closest('#bag-top,#mobile-bag')){if(mediaMatches('(max-width:850px)'))toggleBag(true);else $('#bag').scrollIntoView({behavior:'smooth',block:'start'})}if(e.target.closest('#bag-close'))toggleBag(false);if(e.target.closest('#product-plus')){selected.quantity=Math.min(20,selected.quantity+1);updateProductTotal()}if(e.target.closest('#product-minus')){selected.quantity=Math.max(1,selected.quantity-1);updateProductTotal()}if(e.target.closest('#add-product'))addProduct();if(e.target.closest('#start-checkout,#edit-order')){if($('#checkout-dialog').open)$('#checkout-dialog').close();startCheckout()}if(e.target.closest('#resume-order'))showReceipt();if(e.target.closest('#back-checkout')){$('#review').hidden=true;$('#checkout-form').hidden=false;$('#checkout-title').textContent='Falta pouco pro seu Bras.';$('#checkout-dialog').scrollTop=0;focusCheckoutTitle()}if(e.target.closest('#generate-order'))generateOrder();if(e.target.closest('#copy-order')){try{await navigator.clipboard.writeText(order.message);toast('Pedido copiado!')}catch{const range=document.createRange();range.selectNodeContents($('#order-message'));$('#order-message').parentElement.open=true;const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);toast('Selecione a mensagem para copiar')}}if(e.target.closest('#new-order')){$('#checkout-dialog').close();window.scrollTo({top:$('#menu-heading').getBoundingClientRect().top+window.scrollY-30,behavior:'smooth'})}});
document.addEventListener('change',e=>{if(e.target.name==='addon'){selected.addons=[...document.querySelectorAll('input[name="addon"]:checked')].map(e=>e.value);updateProductTotal()}if(e.target.closest('#checkout-form')){rememberCheckout();updateCheckout()}});
document.addEventListener('submit',e=>{if(e.target.id==='checkout-form'){$('#checkout-error').textContent='';reviewOrder(e)}});
$('#bag-dialog').addEventListener('close',restoreBag);
window.addEventListener('resize',()=>{if(!mediaMatches('(max-width:850px)'))toggleBag(false)});
function syncHeader(){document.documentElement.style.setProperty('--header-height',$('.topbar').getBoundingClientRect().height+'px')}
syncHeader();window.addEventListener('resize',syncHeader);
if(typeof ResizeObserver==='function'){const headerObserver=new ResizeObserver(syncHeader);headerObserver.observe($('.topbar'));}
function syncDialogViewport(){document.documentElement.classList.toggle('compact-viewport',(window.visualViewport?.height||window.innerHeight)<600);if(!window.visualViewport)return;document.documentElement.style.setProperty('--dialog-height',window.visualViewport.height+'px');document.documentElement.style.setProperty('--dialog-top',window.visualViewport.offsetTop+'px')}
window.addEventListener('resize',syncDialogViewport);syncDialogViewport();
if(window.visualViewport){window.visualViewport.addEventListener('resize',syncDialogViewport);window.visualViewport.addEventListener('scroll',syncDialogViewport);syncDialogViewport()}
function registerMenuTools(){const context=document.modelContext;if(!context?.registerTool)return;const lifecycle=new AbortController();window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});const definitions=[{name:'read_menu_and_bag',title:'Consultar cardápio e sacola',description:'Consulta produtos, disponibilidade, adicionais, preços em centavos e os itens atuais da sacola. Não cria nem envia pedidos.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(){return cloneData({currency:'BRL',products:products.map(({id,name,category,price,available,addons})=>({id,name,category,price,available,allowsAddons:!!addons})),addons,bag:cart.map(i=>({...i,unitPrice:unitPrice(i)})),subtotal:subtotal()})}},{name:'add_items_to_bag',title:'Adicionar itens à sacola',description:'Adiciona produtos disponíveis à sacola, com quantidade, adicionais opcionais e observações. Não gera pedido, não conclui compra e não envia mensagens. Continue pela interface para preencher dados e confirmar.',inputSchema:{type:'object',properties:{items:{type:'array',minItems:1,maxItems:20,items:{type:'object',properties:{productId:{type:'string'},quantity:{type:'integer',minimum:1,maximum:20},addons:{type:'array',items:{type:'string'},uniqueItems:true},notes:{type:'string',maxLength:200}},required:['productId','quantity'],additionalProperties:false}}},required:['items'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||Object.keys(input).some(k=>k!=='items')||!Array.isArray(input.items)||input.items.length<1||input.items.length>20)throw Error('Informe de 1 a 20 itens.');const validated=input.items.map(i=>{if(!i||Object.keys(i).some(k=>!['productId','quantity','addons','notes'].includes(k)))throw Error('Item inválido.');const p=products.find(p=>p.id===i.productId);if(!p?.available)throw Error('Produto indisponível.');if(!Number.isInteger(i.quantity)||i.quantity<1||i.quantity>20)throw Error('Quantidade inválida.');const a=i.addons??[];if(!Array.isArray(a)||a.length>addons.length||new Set(a).size!==a.length||a.some(id=>!addons.find(a=>a.id===id))||(!p.addons&&a.length))throw Error('Adicionais inválidos.');if(i.notes!==undefined&&(typeof i.notes!=='string'||i.notes.length>200))throw Error('Observação inválida.');return {productId:p.id,quantity:i.quantity,addons:[...a].sort(),notes:(i.notes||'').trim()}});cart.push(...validated);renderCart();toast('Itens adicionados à sacola');return {itemsAdded:validated.length,bagQuantity:cart.reduce((s,i)=>s+i.quantity,0),subtotal:subtotal(),currency:'BRL'}}}];for(const t of definitions){try{Promise.resolve(context.registerTool(t,{signal:lifecycle.signal})).catch(()=>{})}catch{}}}
registerMenuTools();

ICONS.menu='<path d="M4 6h16M4 12h16M4 18h16"/>';
ICONS['chevron-down']='<path d="m6 9 6 6 6-6"/>';
document.addEventListener('click',e=>{if(e.target.closest('#store-info'))openDialog($('#store-dialog'))});




function mediaMatches(query){
  if(typeof window.matchMedia==='function')return window.matchMedia(query).matches;
  const max=query.match(/max-width:\s*(\d+)px/);return max?window.innerWidth<=Number(max[1]):false;
}
function openDialog(dialog){
  if(typeof dialog.showModal==='function'){
    if(!dialog.open){dialog.returnFocus=document.activeElement;dialog.showModal();}
    return true;
  }
  const warning=$('#compatibility-warning');warning.hidden=false;warning.focus();
  toast('Atualize o navegador para personalizar e conferir seu pedido.');return false;
}

// Session-only recovery: no request, permanent storage or external service.
const SESSION_KEY='bras-burger-session-v1';
let storageAvailable=true,checkoutData={};
const cloneData=value=>JSON.parse(JSON.stringify(value));
const cartKey=()=>JSON.stringify({cart,prices:cart.map(unitPrice),fee:CONFIG.deliveryFee});
function orderSuffix(){
  if(globalThis.crypto?.randomUUID)return crypto.randomUUID().replace(/-/g,'').slice(0,12).toUpperCase();
  if(globalThis.crypto?.getRandomValues)return Array.from(crypto.getRandomValues(new Uint8Array(6)),n=>n.toString(16).padStart(2,'0')).join('').toUpperCase();
  return Date.now().toString(16).slice(-8).padStart(8,'0').toUpperCase()+Math.floor(Math.random()*65536).toString(16).padStart(4,'0').toUpperCase();
}
function saveSession(){try{sessionStorage.setItem(SESSION_KEY,JSON.stringify({version:1,cart,order,checkoutData}));storageAvailable=true;}catch{storageAvailable=false;}}
function validCartItem(i){const p=products.find(p=>p.id===i?.productId);return p&&Number.isInteger(i.quantity)&&i.quantity>=1&&i.quantity<=20&&typeof i.notes==='string'&&i.notes.length<=200&&Array.isArray(i.addons)&&new Set(i.addons).size===i.addons.length&&i.addons.every(id=>addons.some(a=>a.id===id))&&(p.addons||!i.addons.length);}
function validStoredOrder(o){
  const c=o?.customer,t=o?.totals;
  if(!/^BR-\d{6}-[A-F0-9]{12}$/.test(o?.number)||!c||!t||!Array.isArray(o.items)||!o.items.length)return false;
  if(!['name','phone'].every(k=>typeof c[k]==='string')||!['pickup','delivery'].includes(c.fulfillment)||!['pix','card','cash'].includes(c.payment))return false;
  if(c.fulfillment==='delivery'&&(!c.address||!['street','reference','neighborhood'].every(k=>typeof c.address[k]==='string')))return false;
  if(c.change!==null&&(!Number.isSafeInteger(c.change)||c.change<0))return false;
  if(!o.items.every(i=>typeof i.name==='string'&&typeof i.notes==='string'&&Number.isInteger(i.quantity)&&i.quantity>=1&&i.quantity<=20&&Number.isSafeInteger(i.unitPrice)&&i.unitPrice>=0&&Array.isArray(i.addons)&&i.addons.every(a=>typeof a.name==='string'&&Number.isSafeInteger(a.price)&&a.price>=0)))return false;
  return Number.isSafeInteger(t.subtotal)&&(t.fee===null||Number.isSafeInteger(t.fee)&&t.fee>=0)&&t.subtotal===o.items.reduce((sum,i)=>sum+i.unitPrice*i.quantity,0)&&t.total===t.subtotal+(t.fee??0);
}
function restoreSession(){
  try{const saved=JSON.parse(sessionStorage.getItem(SESSION_KEY)||'null');if(saved?.version!==1)return;
    if(Array.isArray(saved.cart)&&saved.cart.every(validCartItem))cart=saved.cart;
    if(validStoredOrder(saved.order)){order=saved.order;order.message=formatOrder(order);order.url='https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(order.message);}
    if(saved.checkoutData&&typeof saved.checkoutData==='object')checkoutData=saved.checkoutData;
  }catch{storageAvailable=false;}
}
function rememberCheckout(){
  const form=$('#checkout-form');if(!form)return;
  for(const el of form.elements){if(!el.id&&!el.name)continue;if(el.type==='radio'){if(el.checked)checkoutData[el.name]=el.value;}else if(el.type==='checkbox')checkoutData[el.id]=el.checked;else if(el.tagName==='INPUT')checkoutData[el.id]=el.value;}
  saveSession();
}
function restoreCheckoutFields(){
  const form=$('#checkout-form');
  for(const el of form.elements){
    const value=checkoutData[el.type==='radio'?el.name:el.id];
    if(el.type==='radio'){
      // Ignore unknown stored choices and preserve the current default.
      const valid=[...form.elements].some(option=>option.type==='radio'&&option.name===el.name&&option.value===value);
      if(valid)el.checked=value===el.value;
    }else if(el.type==='checkbox')el.checked=value===true;
    else if(el.tagName==='INPUT'&&typeof value==='string')el.value=value.slice(0,el.maxLength>0?el.maxLength:200);
  }
}
function syncCartRevision(){
  if(!$('#checkout-form'))return;
  if(draft&&draft.key!==cartKey()){
    draft=null;$('#review').hidden=true;$('#checkout-form').hidden=false;$('#checkout-title').textContent='A sacola mudou. Confira novamente.';
    if($('#checkout-dialog').open)focusCheckoutTitle();
    toast('A sacola mudou. Confira os valores novamente.');
  }
  updateCheckout();
}
function focusCheckoutTitle(){const title=$('#checkout-title');title.setAttribute('tabindex','-1');title.focus({preventScroll:true});}
document.addEventListener('input',e=>{if(e.target.closest('#checkout-form'))rememberCheckout();});

document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('close',()=>{
  // A newly opened modal owns focus. Otherwise return to the opener, even if
  // renderCart replaced the desktop checkout button while generating a receipt.
  if(document.querySelector('dialog[open]'))return;
  const opener=dialog.returnFocus;
  if(opener?.isConnected&&opener.getClientRects().length&&!opener.closest('dialog:not([open])'))opener.focus({preventScroll:true});
  else (mediaMatches('(max-width:850px)')?$('#mobile-bag'):$('#start-checkout:not(:disabled)')||$('#bag-top')).focus({preventScroll:true});
}));

restoreSession();icons();renderMenu();renderCart();
if(typeof $('#product-dialog').showModal!=='function')$('#compatibility-warning').hidden=false;




