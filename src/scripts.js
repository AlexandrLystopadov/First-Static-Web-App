function add(a, b) {
	return a + b;
}

const result = add(2, 3);

const resultDiv = document.getElementById('result');

resultDiv.textContent = 'Result: ' + result;

module.exports = add;