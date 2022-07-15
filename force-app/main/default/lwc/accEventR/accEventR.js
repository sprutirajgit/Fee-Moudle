import { LightningElement,api,track,wire} from 'lwc';
import getEvent from '@salesforce/apex/LwcEvent.getEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class AccountEvent extends NavigationMixin(LightningElement) {
    @api recordId  ;

    @track consData = [];
    wiredeventRecs;
    @track showEvent = false;
    @wire( getEvent, {accId : '$recordId'} )  
    wiredRecs( value ) {
    
        this.wiredeventRecs = value;
        const { data, error } = value;
    
        if ( data ) {
                        
            this.consData = data;
            this.error = undefined;
            this.showEvent = true;
    
        } else if ( error ) {
    
            this.error = error;
            this.consData = undefined;
            this.showEvent = false;
    
        }
    
    }  
    
    navigateToViewEventPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Event',
                actionName: 'home'
            },
        });
    }
}