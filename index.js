console.log("From index.js");

function generateProjectElement(modal_id) {
  // Parent modal
  const project_list = document.querySelector("#project_list");

  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.classList.add("fade");
  modal.setAttribute("id", modal_id).setAttribute("tabindex", "-1").setAttribute("aria-labelledby", "ff_lib_label").setAttribute("aria-hidden", "true");

  const modal_dialog = document.createElement("div");
  modal_dialog.classList.add("modal-dialog");

  const modal_content = document.createElement("div");
  modal_content.classList.add("modal-content");
}

generateProjectElement("test_modal");
