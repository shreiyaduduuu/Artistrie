
function filterCards(){
  const q=(document.getElementById('searchInput').value||'').toLowerCase().trim();
  const cards=document.querySelectorAll('#artGrid > [data-title]');
  cards.forEach(el=>{
    const title=el.getAttribute('data-title');
    const artist=el.getAttribute('data-artist');
    const cat=el.getAttribute('data-category');
    const show=title.includes(q)||artist.includes(q)||cat.includes(q);
    el.style.display=show?'':'none';
  });
}
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.1});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
