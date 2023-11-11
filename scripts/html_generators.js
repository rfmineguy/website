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

