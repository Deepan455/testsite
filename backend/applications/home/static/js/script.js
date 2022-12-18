

window.addEventListener('DOMContentLoaded',()=>{
	console.log("hello");
	let btn = document.querySelector('#send');
	let field = document.querySelector('#exampleInputEmail1');


	submit = (event)=> {
		if(event.keyCode == 13)
		{
			let email = field.value;
			console.log(email);
		}
	}

	btn.addEventListener('click', submit);
	field.addEventListener('keyup', submit);
});