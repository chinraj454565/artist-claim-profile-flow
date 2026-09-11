document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.choice').forEach(el=>el.addEventListener('click',()=>{
    const group=el.parentElement; group.querySelectorAll('.choice').forEach(x=>x.classList.remove('selected')); el.classList.add('selected');
  }));
  document.querySelectorAll('.slot').forEach(el=>el.addEventListener('click',()=>{
    document.querySelectorAll('.slot').forEach(x=>x.classList.remove('selected')); el.classList.add('selected');
  }));
  document.querySelectorAll('[data-toast]').forEach(el=>el.addEventListener('click',(e)=>{
    const t=document.querySelector('.toast'); if(!t)return; t.textContent=el.dataset.toast; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2400);
  }));
  const filterBtns=document.querySelectorAll('.filter');
  filterBtns.forEach(b=>b.addEventListener('click',()=>{filterBtns.forEach(x=>x.classList.remove('active'));b.classList.add('active')}));
  document.querySelectorAll('.topbar').forEach(header=>{
    const nav=header.querySelector('.nav'); if(!nav)return;
    const menu=document.createElement('button');
    menu.className='menu-toggle'; menu.type='button'; menu.setAttribute('aria-label','Open navigation'); menu.setAttribute('aria-expanded','false');
    menu.innerHTML='<span></span><span></span><span></span>';
    header.insertBefore(menu,nav);
    menu.addEventListener('click',()=>{
      const isOpen=header.classList.toggle('nav-open'); menu.setAttribute('aria-expanded',String(isOpen)); menu.setAttribute('aria-label',isOpen?'Close navigation':'Open navigation');
    });
  });
});
