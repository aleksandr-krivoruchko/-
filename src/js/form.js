"use strict";
//!==========script for checkbox======================
const checkboxSection = document.querySelector(".checkbox-section");
checkboxSection.addEventListener('click', onCheckboxClick);

function onCheckboxClick(e) {
	e.target.classList.toggle("active");

	if(e.target.classList.contains("active")){
			e.target.setAttribute("checked", 'checked');
	} else {
		e.target.removeAttribute("checked");
	}
}


//!==========script for radio======================
const radioBtns = document.querySelector(".radio-buttons");
radioBtns.addEventListener("click", onRadioBtnsClick);

function onRadioBtnsClick(e) {
	if( e.target.nodeName !== "LABEL"){
		return
	}

const currentActiveRadioBtn = radioBtns.querySelector(".radio-item--active");

if(currentActiveRadioBtn){
	currentActiveRadioBtn.classList.remove("radio-item--active");
}

e.target.classList.add("radio-item--active");

}
