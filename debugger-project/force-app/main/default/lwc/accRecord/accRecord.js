import { LightningElement,api } from 'lwc';


export default class AccRecord extends LightningElement {
    @api recordId;
    handelSuccess(event){

    }
    handlesubmit(event){
        console.log('onsubmit event recordEditForm'+ event.detail.fields);

    }
   
}