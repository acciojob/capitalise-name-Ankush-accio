//your JS code here. If required.
let input = document.getElementById("fname")

input.addEventListener("blur" , () => {
	let temp = input.value.toUpperCase()
	input.value = temp
})
