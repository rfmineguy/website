class DomElement {
	constructor(type, state) {
		this.id = Math.floor(Math.random() * 999999999);
		this.type = type;
		this.classList = [];
		this.styles = [];
		this.attrList = [];
		this.childList = [];
		this.events = [];
		this.state = state;
		this.shouldRender = () => true;
	}

	classes(...class_list) {
		this.classList = class_list;
		return this;
	}

	attr(attr_name, attr_value) {
		this.attrList.push({name:attr_name, value:attr_value})
		return this;
	}

	css(...css) {
		this.styles.push(...css);
		return this;
	}

	children(...children) {
		this.childList = children;
		return this;
	}

	event(name, func) {
		this.events.push({name:name, func:func});
		return this;
	}

	state(state_obj) {
		this.state = state_obj;
		return this;
	}

	render() {
		const el = document.createElement(this.type);
		if (!this.shouldRender()) {
			return div().render();
		}

		// Set css classes
		el.classList.add(...this.classList);

		// Set html attributes
		this.attrList.forEach((item) => el.setAttribute(item.name, item.value));

		// Set inline styles
		if (this.styles.length > 0)
			el.setAttribute("style", this.styles.join(";"));

		// Set ID
		el.setAttribute("id", this.id);
		for (let i = 0; i < this.childList.length; i++) {
			let child = this.childList[i];
			if (child instanceof DomElement) {
				el.appendChild(child.render());
			}
			else {
				el.appendChild(child);
			}
		}
		for (let i = 0; i < this.events.length; i++) {
			let event = this.events[i];
			el.addEventListener(event.name, event.func);
		}
		return el;
	}

	if(func) {
		this.shouldRender = () => func();
		return this;
	}

	delete() {
		document.getElementById(this.id).remove();
	}
}

const TAGS = ["canvas","div","h1","h2","h3","button","p","span","select"]
for (let tag of TAGS) {
	window[tag] = (state = {}) => new DomElement(tag, state);
}

const projects = ["1", "2"]

const project_list = () =>
	div().classes("container").children(
		projects.foreach((p) => project(p.title).event("click", () => console.log("clicked project 1")))
		// project("1").event("click", () => console.log("clicked project 1")),
		// project("2").event("click", () => console.log("clicked project 2"))
	)
	.event("click", () => console.log("clicked project list"))

const project = (title) =>
	div().classes("container").children(
		h1().children(document.createTextNode(`${title}: text`)),
		button().classes("btn", "btn-primary").attr("id", "buttonme")
			.event("click", () => { console.log("click 1") })
			.event("click", () => console.log("click 2")),
		p().classes("project-item", "da")
	)

const render = () => {
	document.getElementById("root").replaceChildren(project_list.render())
}
