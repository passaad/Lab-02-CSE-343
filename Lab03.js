let Q = 0;

function updateAction(){
    document.getElementById("Show").innerText = "Quantity = " + Q;
}


function showQuantity(){
    alert("Quantity = " + Q);
    updateAction();
}

function addToCart(){
    Q = Q+1;
    updateAction();
}

function plusTwo(){
    Q = Q+2;
    updateAction();
}

function plusThree(){
    Q = Q+3;
    updateAction();
}

function reset(){
    Q = 0;
    updateAction();
}