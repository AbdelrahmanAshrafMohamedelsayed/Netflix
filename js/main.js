let tab = document.querySelectorAll(".tab");
let tabc = document.querySelectorAll(".con");

function border() {
    tab.forEach(e => e.classList.remove('border'));
    this.classList.add('border')
    tabc.forEach(e => e.classList.remove("show"));
    let x = document.querySelector(`#${this.id}-content`)

    x.classList.add("show")

}
tab.forEach(e => e.addEventListener('click', border));