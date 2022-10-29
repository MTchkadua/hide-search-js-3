let input = document.querySelector("input")
console.log(input)
let icon = document.querySelector(".icon")

icon.addEventListener("click", function(){
    input.classList.toggle("myStyle")
})
