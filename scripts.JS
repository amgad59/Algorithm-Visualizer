const slider = document.getElementById("slider_bar")
const value = document.getElementById("valueBox")
value.textContent = slider.value;
slider.oninput = function(){
    value.textContent = this.value;
}