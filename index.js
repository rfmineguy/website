function newElement(type, classes, attributes, children) {
	const el = document.createElement(type);
	for (let cclass of classes) {
		el.classList.add(cclass);
	}
	for (let attribute of attributes) {
		el.setAttribute(attribute.name, attribute.value);
	}
	for (let child of children) {
		el.appendChild(child);
	}
	return el;
}

function genModalElement(project) {
	let modal_attrs = [
		{name:"id", value:project.id},
		{name:"tabindex", value:"-1"},
		{name: "aria-labelledby", value:project.id},
		{name: "aria-hidden", value: "true"}
	]
	return newElement("div", ["modal", "fade"], modal_attrs, [
		newElement("div", ["modal-dialog"], [], [
			newElement("div", ["modal-content"], [], [
				newElement("div", ["modal-header"], [], [
					newElement("h1", [], [], [ document.createTextNode(project.name) ])
				]),
				newElement("div", ["modal-body"], [], [
					newElement("p", [], [], [ document.createTextNode(project.desc) ]),
					newElement("a", [], [{name:"href", value:project.link}], [
						newElement("h4", [], [], [ document.createTextNode(project.name) ])
					])
				]),
			])
		])
	]);
}

function genProjectElement(project) {
	const card_attrs = [
		{name:"type",value:"button"},
		{name:"data-bs-toggle",value:"modal"},
		{name:"data-bs-target",value:"#"+project.id}
	]

	const img_attrs = [
		{name:"src",value:project.image},
		{name:"alt",value:"..."}
	]

	return newElement("div", ["col-sm-4", "p-2"], [], [
		newElement("div", ["card"], card_attrs, [
			newElement("img", ["project_item"], img_attrs, [])
		])
	]);
}

// root node where project elements live
const project_container = document.getElementById("project-container");
const modal_container   = document.getElementById("modal-container");
const projects = {
	"mirror_lib": {
		"name": "Mirror Lib",
		"id":   "mirror_lib_id",
		"desc": "This is a project that simulates how lasers would reflect off mirrors",
		"link": "https://github.com/rfmineguy/mirror-lib.git",
		"image":"assets/mirror_lib.png"
	},
	"rflang": {
		"name": "RF Lang",
		"id":   "rflang_id",
		"desc": "My first attempt at writing a compiler",
		"link": "https://github.com/rfmineguy/rflang-2.git",
		"image":"assets/rflang_logo.png"
	},
	"fflib": {
		"name": "Firefly Lib",
		"id":   "fflib_id",
		"desc": "This is a project provides basic utilities for developing 2D games",
		"link": "https://github.com/rfmineguy/firefly-lib.git",
		"image":"assets/fflib_pong.png"
	},
	"6502": {
		"name": "6502 Emu",
		"id":   "_6502_id",
		"desc": "A 6502 cpu emulator",
		"link": "https://github.com/rfmineguy/6502emu-gui.git",
		"image":"assets/6502emu.png"
	}
}

for (p in projects) {
	console.log("Generating modal");
	project_container.appendChild(genProjectElement(projects[p]));
	modal_container.appendChild(genModalElement(projects[p]));
}
