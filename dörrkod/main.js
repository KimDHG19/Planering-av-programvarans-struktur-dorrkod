var pin = [1, 2, 3, 4]
var enter_pin = []

function presskey(key) {
	enter_pin.push(key)


	if (enter_pin.length === 4) {
		console.log(enter_pin)
		console.log(pin)
		if (enter_pin.join(',') === pin.join(',')) {
			alert("successful login")
		}
		else {
			enter_pin = []
			alert("wrong password")
		}
	}
}


