const title = document.querySelector('.top-title');

window.addEventListener("load", function () {
  title.classList.add('typ');
});

document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('.top-title');
  const str = el.innerHTML.trim();
  let concatstr = '';
  concatstr2 = concatstr.replace(/\n/g, '<br>');
  console.log(concatstr2);
  for (let c of str) {
    concatstr2 += `<span class="typ">${c}</span>`;
  }
  el.innerHTML = concatstr2;
  console.log(el.innerHTML);
})

const title2 = document.querySelector('.top-title2');

window.addEventListener("load", function () {
  setTimeout(() => {
    title2.classList.add('typ');
    const el = document.querySelector('.top-title2');
    const str = el.innerHTML.trim();
    let concatstr = '';
    for (let c of str) {
      concatstr += `<span class="typ">${c}</span>`;
    }
    el.innerHTML = concatstr;
    console.log(el.innerHTML);
  }, 1600)
});
