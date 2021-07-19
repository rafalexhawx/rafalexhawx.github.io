function disappear (x) {
    if(confirm("Do you want to make the paragraph disappear?")) {
        x.style.display = "none";
        alert("Something disappeared");
    } else {
        alert("You made the right choice");
    } 
}

