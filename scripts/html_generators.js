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
function newElement(html_tag, class_list, attribute_list, child_list, events=[]) {
	const el = document.createElement(html_tag);
	for (let classs of class_list) {
		el.classList.add(classs);
	}
	for (let attribute of attribute_list) {
		el.setAttribute(attribute.name, attribute.value);
	}
	for (let child of child_list) {
		el.appendChild(child);
	}
	for (let event of events) {
		el.addEventListener(event.event, event.func);
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
	* 			- the `image` of the project
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
	* 			- the `image` of the project
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

/**
	* Generate an html project element populatd with the fields in 'project'
	* @param {dictionary} project
	* 		A dictionary containing the information of the modal such as
	* 			- the `id` of the modal
	* 			- the `name` of the project
	* 			- the `desc` of the project
	* 			- the `link` to the project
	* 			- the `image` of the project
	**/
function genWorkspaceItem(workspace_item) {
	const wrksp_attr = [
		{name:"href", value:workspace_item.link}
	]
	return newElement("li", [], [], [
		newElement("a", ["dropdown-item", workspace_item.enabled ? "enabled": "disabled"], wrksp_attr, [ 
			document.createTextNode(`${workspace_item.name} (${workspace_item.status})`)
		])
	]);
}

function genChatAppEntry(time, user, message) {
	const msg_attr = [
		{name:"style", value:"border-left: solid"}
	]
	const button_attr = [
		{name:"style", value:"width: 10; margin: 3px;"}
	]
	const button_events = [
		{name:"click", value: () => 
			{
				
			}
		}
	]
	return newElement("div", ["row"], [], [
		newElement("button", ["col-sm-1", "p-2"], button_attr, [ document.createTextNode("X") ]),
		newElement("p",      ["col-sm-1", "p-2"], [], [ document.createTextNode(time) ]),
		newElement("p",      ["col-sm-1", "p-2"], msg_attr, [ document.createTextNode(user) ]),
		newElement("p",      ["col-sm-7", "p-2"], msg_attr, [ document.createTextNode(message) ])
	]);
}

function testClickListener() {
	const events = [
		{
			"event": "click",
			"func": () => { console.log("Hello world"); }
		},
		{
			"event": "mouseover",
			"func": () => { console.log("Hovering"); }
		},
		{
			"event": "bogus",
			"func": () => { console.log("Bogus"); }
		}
	];
	return newElement("button", [], [], [], events);
}
