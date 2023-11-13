const projects = [
	{
		"name": "Mirror Lib",
		"id":   "mirror_lib_id",
		"desc": "This is a project that simulates how lasers would reflect off mirrors",
		"link": "https://github.com/rfmineguy/mirror-lib.git",
		"image":"assets/mirror_lib.png"
	},
	{
		"name": "RF Lang",
		"id":   "rflang_id",
		"desc": "My first attempt at writing a compiler",
		"link": "https://github.com/rfmineguy/rflang-2.git",
		"image":"assets/rflang_logo.png"
	},
	{
		"name": "Firefly Lib",
		"id":   "fflib_id",
		"desc": "This is a project provides basic utilities for developing 2D games",
		"link": "https://github.com/rfmineguy/firefly-lib.git",
		"image":"assets/fflib_pong.png"
	},
	{
		"name": "6502 Emu",
		"id":   "_6502_id",
		"desc": "A 6502 cpu emulator",
		"link": "https://github.com/rfmineguy/6502emu-gui.git",
		"image":"assets/6502emu.png"
	}
]

const my_workspace = [
	{
		"name": "Obsession",
		"link": "subpages/obsession/obsession.html",
		"enabled": false
	},
	{
		"name": "Chat App",
		"link": "subpages/chatapp/chatapp.html",
		"enabled": false
	},
	{
		"name": "Future Project",
		"link": "subpages/future/future.html",
		"enabled": false
	}
]

const project_container = document.getElementById("project-container");
const modal_container   = document.getElementById("modal-container");
for (i in projects) {
	project_container.prepend(genProjectElement(projects[i]));
	modal_container.prepend(genModalElement(projects[i]));
}

const workspace_dropdown = document.getElementById("dropdown-container");
for (i in my_workspace) {
	workspace_dropdown.append(genWorkspaceItem(my_workspace[i]));
}
