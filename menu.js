function incrementar(id) {
    var input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrementar(id) {
    var input = document.getElementById(id);
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }
}