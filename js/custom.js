	var state = false
function changeView(){
	if(!state){
			var myinput = document.getElementById("myinput")
			console.log("my input   "+myinput.style.backgroundColor)
			var myspan = document.getElementById("myspan")
			myspan.style.backgroundColor = "rgb(245, 245, 245);"
			console.log("my input   "+myspan.style.backgroundColor)
			state = !state
	}
}
