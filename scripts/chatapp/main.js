const submit_button = document.getElementById("submit-button");
submit_button.addEventListener("click", submit);

const localUser = "Userf";
const input_field = document.getElementById("input-field");
const entries = [];

function submit() {
	const date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let isAM = hours < 12;

	if (input_field.value.length != 0) {
		console.log(input_field.value);
		const time = `${hours % 12}:${minutes}:${seconds}${isAM ? "AM" : "PM"}`;
		entries.push(chat_entry(time, `User`, input_field.value).render());
		message_container.append(chat_entry(time, `User`, input_field.value).render());
	}

	input_field.value = "";
}

function chat_entry(time, user, message) {
	const entry =
		div().classes("row").children(
			// if(() => user == localUser).then(
			// 	button().classes("col-sm-1", "btn", "btn-primary", "p-2").css("width:10", "margin:3px").children(document.createTextNode("X")).event("click", () => {
			// 		entry.delete();
			// 	}),
			// ).else(
			// 	button().classes("col-sm-1", "btn", "btn-primary", "p-2").css("width:10", "margin:3px").children(document.createTextNode("X")).event("click", () => {
			// 	})
			// ),
			p().classes("col-sm-1", "p-2").children(document.createTextNode(time)).event("click", () => {}),
			p().classes("col-sm-1", "p-2").children(document.createTextNode(user)),
			p().classes("col-sm-7", "p-2").children(document.createTextNode(message))
		)
	return entry;
}

// testing conditional rendering
/*
function test() {
	return switch(state.type,
		case("Home", div().classes().children(
			if(count == 3,
				div().children(
					h1().children(document.createTextNode("count = 3!"))
				)
			)
			.elseif(count > 3,
				div().children(
					h1().children(document.createTextNode("count > 3!"))
				)
			)
		)),
		case("Layer", div()),
		default(div())
	)
}
*/

const message_container = document.getElementById("message-container");
message_container.addEventListener("resize", (event) => console.log("resized"));
