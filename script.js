const themeBtn = document.getElementById('themeBtn')
const target = document.getElementById("containerContent");
const body = document.getElementsByTagName('body')[0]

window.matchMedia('prefers-color-scheme: dark').matches ? 
  body.classList.add('light') :
  body.classList.add('dark');

async function fetchHTML(path) {
    const res = await fetch(path);
    return await res.text();
}


function getContent(text) {
    const div = document.createElement("div");
    div.innerHTML = text;
    return div.getElementsByClassName("post-content")[0].innerHTML;
}

for (const elem of document.getElementsByClassName("list__link")) {
    elem.addEventListener("click", async (e) => {
        e.preventDefault();
        const html = await fetchHTML(e.currentTarget.href);
        target.innerHTML = getContent(html);
    })
}



themeBtn.innerText = body.classList.contains('dark') ? "Light" : "Dark";

themeBtn.addEventListener("click", () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark')
    body.classList.add('light')
  } else {
    body.classList.remove('light')
    body.classList.add('dark')
  }

  themeBtn.innerText = body.classList.contains('dark') ? "Light" : "Dark";

})
