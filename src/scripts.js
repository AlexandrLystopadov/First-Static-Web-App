function add(a, b) {
	return a + 1;
}

window.onload = function(){
	
	let inp1 = document.getElementById('inp1');
	let inp2 = document.getElementById('inp2');

	document.getElementById('btn').onclick = function(){
		
		let num1 = parseFloat(inp1.value);
		let num2 = parseFloat(inp2.value);
		
		document.getElementById('result').textContent = "Result: " + add(num1, num2);

	}

	document.getElementById('inp1').addEventListener('input', function (e) {
		this.value = this.value.replace(/[^-+?0-9]/g, '');
	});
	document.getElementById('inp2').addEventListener('input', function (e) {
		this.value = this.value.replace(/[^-+?0-9]/g, '');
	});
}

module.exports = add;