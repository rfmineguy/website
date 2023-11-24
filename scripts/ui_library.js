class UINode {
	constructor(roottype) {
		this.roottype = roottype;
	}
}

class UIDomNode extends UINode {
	constructor(type) {
		super("DomNode");
		this.type = type;
	}
}

class UIControlNode extends UINode {
	constructor() {
		super("ControlNode");
	}
}

const DOM_NODES = ["div", "h1", "h2", "h3"]
const CTRL_NODES = ["switch", "case", "if", "elseif", "else"]

for (let tag of DOM_NODES) {
	window[tag] = () => new UIDomNode(tag);
}
