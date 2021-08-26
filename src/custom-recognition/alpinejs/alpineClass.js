export default class AlpineFormApplication extends FormApplication{

	constructor(dialogData={}, options={}) {
		super(dialogData, options);
		Hooks.once("renderAlpineFormApplication", () => {
			this.alpineData = this.initializeAlpineData();
			this.form.setAttribute("x-data", `ui.windows[${this.appId}].alpineData`);
		})
	}

	initializeAlpineData(){
		return {};
	}

}