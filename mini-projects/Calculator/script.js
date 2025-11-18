var string = '';
var equation = '';
document.querySelectorAll(".btn").forEach(function (btn){
	btn.addEventListener('click',(e)=>{
		if(e.target.innerText == 'C'){
			string = '';
			equation = '';
			document.querySelector("input").value = string;
		}else if(e.target.innerText == 'Del'){
			string = string.slice(0,-1);
			equation = equation.slice(0,-1);
			document.querySelector("input").value = string;
		}else if(e.target.innerText == 'X'){
			string = string + 'X';
			document.querySelector("input").value = string;
			equation = equation + '*';
		}else if (e.target.innerText == '÷') {
			string = string + '÷';
			document.querySelector("input").value = string;
			equation = equation + '/';
		}else if (e.target.innerText == '=') {
			string = eval(equation);
			document.querySelector("input").value = string;
		}
		else{
			string = string + e.target.innerText;
			equation = equation + e.target.innerText;
			document.querySelector("input").value = string; 
		}
	});
})