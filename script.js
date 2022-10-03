window.onload = function () { 
    if (localStorage.getItem("tema") === "ligth") {
        document.body.classList.toggle('ligth')
    }
}


document.getElementById("btn-tema").onclick = () => {

    if (localStorage.getItem("tema") === "ligth") {
        document.body.classList.remove('ligth') 
        localStorage.clear();
     } else {
        localStorage.setItem("tema", "ligth")
        document.body.classList.toggle('ligth')
     }
}