class MenuHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
    <nav class="menuNav">
        <ul class="menuUl">
            <li class="menuLi"><a class="menuA" href="#">Strona główna</a></li>
            <li class="menuLi"><a class="menuA" href="#">Portofolio</a></li>
            <li class="menuLi"><a class="menuA" href="#">Mój GitHub</a></li>
            <li class="menuLi"><a class="menuA" href="#">Kontakt</a></li>
        </ul>
        <div class="menuBtn">
            <div class="hamburger"></div>
            <div class="hamburger"></div>
            <div class="hamburger"></div>
        </div>
    </nav>
</header>`;
  }
}

customElements.define("menu-header", MenuHeader);

const menuUl = document.querySelector(".menuUl");
        const menuBtn = document.querySelector(".menuBtn");

        menuBtn.addEventListener("click", function () {
            menuUl.classList.toggle("menuActive");
            menuBtn.classList.toggle("menuActive");
        });
