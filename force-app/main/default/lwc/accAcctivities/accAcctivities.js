import { LightningElement,wire,api} from 'lwc';
import getAccountRelatedEvents from '@salesforce/apex/LwcEvent.getAccountRelatedEvents';
import { NavigationMixin } from 'lightning/navigation';


export default class AccountEvent extends NavigationMixin(LightningElement)  {
    @api recordId
    eventDetails
    showEvent=false
    eventId
    @wire(getAccountRelatedEvents,{accId : '$recordId'})  
    events({data,error})
    {
       if(data)
       {
           this.eventDetails=data
           this.showEvent=true
           console.log(data)
       }
       if(error)
       {
           console.error(error)
           this.showEvent=false
       }
    }  
    
    navigateToViewEventPage(event) {
        this.eventId=event.target.value
        console.log('eventId'+this.eventId)
        
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:
            {
               recordId:this.eventId,
                objectApiName:'Event',
                actionName:'view'
 
            }
        })
 

    }
}