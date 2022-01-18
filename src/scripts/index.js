// get the result element
const result  = document.getElementById("result");

// Input numbers by key pressed
function input(num){
  if(num === 'x') { num = '*'; }
  const number = result.value;
  result.value = number + num;
}

// Calculator logic
function calc() {
  if(result.value != "") {
    const result2  = result.value;
    result.value = eval(result2)
  } else{
    alert("Erro! Adicione valores válidos.")
  }
}

// Reset button
function reset(){
  result.value = "";
}

// Del button
function del(){
  const result2  = result.value;
  result.value = result2.substring(0, result2.length - 1);
}

document.querySelectorAll('.input').forEach((element) => {
	element.addEventListener('click', (evt) => {
    evt.preventDefault();
		input(element.value)
	});
});

document.getElementById('del').addEventListener('click', (evt) => {
  evt.preventDefault();
  del();
});

document.getElementById('equals').addEventListener('click', (evt) => {
  evt.preventDefault();
  calc();
});


document.getElementById('reset').addEventListener('click', (evt) => {
  evt.preventDefault();
  reset();
});