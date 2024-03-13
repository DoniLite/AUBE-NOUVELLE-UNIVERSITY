document.getElementById("btnAdd").addEventListener("click", function() {
    
    var inputValue = document.getElementById("todo").value;

    
    if (inputValue.trim() !== "") {
        
        var newItem = document.createElement("li");

        
        var textNode = document.createTextNode(inputValue);

        
        newItem.appendChild(textNode);

        
        var deleteButton = document.createElement("button");

        
        deleteButton.innerHTML = "Supprimer";

        
        deleteButton.addEventListener("click", function() {
            
            this.parentElement.remove();
        });

        
        newItem.appendChild(deleteButton);

        
        document.getElementById("liste").appendChild(newItem);

        document.getElementById("todo").value = "";
    } else {
        alert("Veuillez entrer un élément valide.");
    }
});
