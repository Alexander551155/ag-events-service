// год в футере
document.getElementById('y').textContent = new Date().getFullYear();

// плавный скролл к секциям
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null,'',id);
    }
  });
});

// scroll reveal for content blocks
const revealItems = document.querySelectorAll('section, .card, .pill, .ratio, footer');
revealItems.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(el => revealObserver.observe(el));
