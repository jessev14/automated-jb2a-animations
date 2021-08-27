import AlpineFormApplication from "./alpineClass.js";

export class AAcustomRecog extends AlpineFormApplication {

    constructor(dialogData = {}, options = {}) {
        super(dialogData, options);
    }

    /* -------------------------------------------- */

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            title: "Simple AlpineJS Form",
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/aa-autorec-alpine.html',
            classes: ["dialog"],
            width: 150,
            height: 250
        });
    }

    getSettingsData() {
        let settingsData = {
            "aaAutoRecognition": game.settings.get("autoanimations", "aaAutoRecognition"),
        }
        return settingsData;
    }

    initializeAlpineData() {
        return {
            //new_item: "",
            items: this.getSettingsData(),
            /*
            items: [
                "several",
                "individual",
                "strings",
                "like",
                "this"
            ],
            */
            addItem() {
                this.items.push(this.new_item)
                this.new_item = "";
            },
        };
    }

    async _updateObject(_, formData) {
        console.log(this.alpineData.items);
        /*
        console.log(formData)
        const data = expandObject(formData);
        for (let [key, value] of Object.entries(data)) {
            console.log(key)
            console.log(value)
                const compacted = {};
                Object.values(value.overrides).forEach((val, idx) => compacted[idx] = val);
                value.overrides = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        */
    }

}
export default AAcustomRecog;
