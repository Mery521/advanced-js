
function multiply(){
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    document.getElementById("result").innerText= (input1 * input2).toFixed();


}
function divide(){
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    document.getElementById("result").innerText= (input1 / input2).toFixed();
}
