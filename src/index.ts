import './styles/sass/styles.scss';

class Calculator {
    // get the result element
    result = (document.getElementById("result") as HTMLInputElement);

    constructor(){}

    // Input numbers by key pressed
    input(num: string): void {
        if (num === 'x') { num = '*'; }
        const number = this.result.value;
        this.result.value = number + num;
    }

    // Calculator logic
    calc(): void {
        if (this.result.value != "") {
            const result2 = this.result.value;
            this.result.value = eval(result2);
        } else {
            alert("Erro! Adicione valores válidos.")
        }
    }

    // Reset button
    reset() {
        this.result.value = "";
    }

    // Del button
    del() {
        const result2 = this.result.value;
        this.result.value = result2.substring(0, result2.length - 1);
    }
}

const calculator: Calculator = new Calculator();

document.querySelectorAll('.calc__input').forEach((elemento) => {
    let element:HTMLInputElement = (elemento as HTMLInputElement);
	element.addEventListener('click', (evt) => {
    evt.preventDefault();
		calculator.input(element.value)
	});
});

document.getElementById('del').addEventListener('click', (evt) => {
  evt.preventDefault();
  calculator.del();
});

document.getElementById('equals').addEventListener('click', (evt) => {
  evt.preventDefault();
  calculator.calc();
});


document.getElementById('reset').addEventListener('click', (evt) => {
  evt.preventDefault();
  calculator.reset();
});