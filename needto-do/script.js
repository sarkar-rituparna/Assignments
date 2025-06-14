const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("bg-neutral-900");
    document.querySelector("body > header > h1").classList.toggle("text-white");
    document.querySelector("body > header > button").classList.toggle("bg-red-600");
});