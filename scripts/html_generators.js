/**
	* Generate an html element with the specified classes, attributes, and children
	* @param {string} html_tag
	* 	The type of element to generate
	* @param {[string]} class_list
	* 	A list of css classes to apply to the element
	* @param {dictionary} attribute_list
	* 	A list of attributes to apply to the element
	* 	Each element has the shape of {name: "...", value: "..."}
	* @param {[element]} children
	* 	A list of children to add to this element
	* 	Can be chained together as demonstrated below in @genModalElement and @genProjectElement
	* */
function newElement(html_tag, class_list, attribute_list, child_list) {
	const el = document.createElement(html_tag);
	for (let cclass of class_list) {
		el.classList.add(cclass);
	}
	for (let attribute of attribute_list) {
		el.setAttribute(attribute.name, attribute.value);
	}
	for (let child of child_list) {
		el.appendChild(child);
	}
	return el;
}

/**
	* Generate an html project modal element populatd with the fields in 'project'
	* @param {dictionary} project 
	* 		A dictionary containing the information of the modal such as
	* 			- the `id` of the modal
	* 			- the `name` of the project
	* 			- the `desc` of the project
	* 			- the `link` to the project
	* */
function genModalElement(project) {
	let modal_attrs = [
		{name: "id", value:project.id},
		{name: "tabindex", value:"-1"},
		{name: "aria-labelledby", value:project.id},
		{name: "aria-hidden", value: "true"}
	]
	let btn_attrs = [
		{name: "data-bs-dismiss", value: "modal"}
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
				newElement("div", ["modal-footer"], [], [
					newElement("button", ["btn", "btn-secondary"], btn_attrs, [ document.createTextNode("Close") ])
				])
			])
		])
	]);
}

/**
	* Generate an html project element populatd with the fields in 'project'
	* @param {dictionary} project 
	* 		A dictionary containing the information of the modal such as
	* 			- the `id` of the modal
	* 			- the `name` of the project
	* 			- the `desc` of the project
	* 			- the `link` to the project
	* */
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

