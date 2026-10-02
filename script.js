(function(){
  var btn = document.querySelector('.theme-toggle');
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch(e){}
  if(saved === 'dark'){
    document.body.classList.add('dark');
    btn.textContent = 'Light mode';
    btn.setAttribute('aria-pressed','true');
  }
  btn.addEventListener('click', function(){
    var isDark = document.body.classList.toggle('dark');
    btn.textContent = isDark ? 'Light mode' : 'Dark mode';
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch(e){}
  });
})();
