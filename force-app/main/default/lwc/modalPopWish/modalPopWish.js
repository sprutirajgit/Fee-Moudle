import { LightningElement,track } from 'lwc';

export default class ModalPop extends LightningElement {
    handleCheckboxChange() {
        const filters = Array.from(
            this.template.querySelectorAll('lightning-input')
        )
            .filter((element) => element.checked)
            .map((element) => element.label);
        const filterChangeEvent = new CustomEvent('filterchange', {
            detail: { filters }
        });
        this.dispatchEvent(filterChangeEvent);
    }
}