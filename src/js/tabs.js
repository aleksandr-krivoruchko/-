"use strict";

class Tabs {

	constructor({rootSelector, activeControlClass = 'active', 	activePanelClass = 'active', activeTab = 1
}) {
		this._refs = this._getRefs(rootSelector);
		this._activeControlClass = activeControlClass;
		this._activePanelClass = activePanelClass;
		this._activeTabIndex = activeTab - 1;
		this._bindEvents();
		this._setActiveTab();
	}

	_getRefs(root){
		const refs = {};

		refs.controls = document.querySelector(`${root} [data-controls]`);
		refs.panels = document.querySelector(`${root} [data-panels]`);

		return refs;
	}

	_bindEvents(){
		this._refs.controls.addEventListener('click', this._onControllsClick.bind(this))
		
	}

	_onControllsClick(event){
	event.preventDefault();

		if(event.target.nodeName !== 'A'){
		return
	}

const currentItemControl = this._refs.controls.querySelector(`.${this._activeControlClass}`);


if(currentItemControl){
currentItemControl.classList.remove(this._activeControlClass);
const panelId = this._getPanelId(currentItemControl);
this._removeActivePanel(panelId)
}

event.target.classList.add(this._activeControlClass);
const panelId = this._getPanelId(event.target);

this._setActivePanel(panelId);
	}

	_setActiveTab(){
				const controlItems = this._refs.controls.querySelectorAll('a');
		const control = controlItems[this._activeTabIndex];

		control.classList.add(this._activeControlClass);
const panelId = this._getPanelId(control);

this._setActivePanel(panelId);

	}

	_getPanelId(control){
	return control.getAttribute('href').slice(1);
	}

	_getPanelById(id){
		return this._refs.panels.querySelector(`#${id}`);
	}

	_setActivePanel(panelId){
		const panel = this._getPanelById(panelId);
panel.classList.add(this._activePanelClass);
	}

	_removeActivePanel(panelId){
		const panel = this._getPanelById(panelId);
panel.classList.remove(this._activePanelClass);

	}
}

const tabs = new Tabs({
	rootSelector: '#tabs-1',
	activeControlClass: 'controls-item-active',
	activePanelClass: 'panel-active',
	activeTab: 1
});











// const refs = {
// 	controls: document.querySelector('#tabs-1 [data-controls]'),
// 	panels: document.querySelector('#tabs-1 [data-panels]')
// }
// refs.controls.addEventListener('click', event => {

// 	if(event.target.nodeName !== 'A'){
// 		return
// 	}

// const currentItemControl = refs.controls.querySelector(".controls-item-active");

// if(currentItemControl){

// currentItemControl.classList.remove('controls-item-active');
// const panelId = currentItemControl.getAttribute('href').slice(1);
// const panel = refs.panels.querySelector(`#${panelId}`);
// panel.classList.remove("panel-active");

// }

// event.target.classList.add('controls-item-active');

// const panelId = event.target.getAttribute('href').slice(1);

// const panel = refs.panels.querySelector(`#${panelId}`);

// panel.classList.add("panel-active");

// })