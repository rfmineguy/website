const submit_button = document.getElementById("submit-button");
submit_button.addEventListener("click", submit);

const input_field = document.getElementById("input-field");

function submit() {
	const date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let isAM = hours < 12;

	if (input_field.value.length != 0) {
		addChatAppEntry(`${isAM ? hours : hours % 12}:${minutes}:${seconds}${isAM ? "AM" : "PM"}`, input_field.value);
	}

	input_field.value = "";
	console.log("Submit");
}

const message_container = document.getElementById("message-container");
for (let i = 0; i < 13; i++) {
	message_container.append(genChatAppEntry(`11:${i}:00`));;
}

function addChatAppEntry(time, message) {
	message_container.append(genChatAppEntry(time, message));
}
