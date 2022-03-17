//declarare variabile cu valori = elementele din HTML
const submitButton = document.getElementById("btnSubmit");
const clearButton = document.getElementById("btnClear");
const produse = document.getElementById("produse");
const messageElement = document.getElementById("message");

//adaugare de evenimente (butoane)
submitButton.addEventListener("click", adaugaActivitate);
clearButton.addEventListener("click", stergeLista);
produse.addEventListener("click", taieActivitate);

displayMessage("Lista este goala!");

//declararea functiei de stergere a task-urilor
function stergeLista() {
    const taskList = produse.getElementsByClassName("list-group-item");
    while (taskList.length > 0) {
        taskList[0].parentNode.removeChild(taskList[0]);
    }
    displayMessage("Tocmai ti-ai terminat lista de cumparaturi!");
}

//declararea functiei de "taiere" a atributelor realizate
function taieActivitate(event) {
    const style = event.target.style;
    if (!style.textDecoration) {
        style.textDecoration = "line-through";
    } 
    
}

//functia de adaugare a unei activitati
function adaugaActivitate() {
    const produsNou = document.getElementById("produsNou");
    if(inputIsValid(produsNou.value)){
        produse.innerHTML += `<li class="list-group-item">${produsNou.value}</li>`;
        messageElement.style.visibility = "hidden";        
        produsNou.value = "";
    }else{
        displayMessage("Actiune invalida! Asigura-te ca ai scris in casuta!");
    }  
}

//declarare functie de afisare mesaj
function displayMessage(message) {
    messageElement.style.visibility = "visible";
    messageElement.innerText = message;
}

//functie de tip bool, verificaa validarea mesajului
function inputIsValid(input){
    if(input){
        return true;
    }
    return false;
}
