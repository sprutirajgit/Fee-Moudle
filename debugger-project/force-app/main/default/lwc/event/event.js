import { LightningElement,api,wire } from 'lwc';
import getAccRelEvents from '@salesforce/apex/accountE.getAccountRelatedEvents';
import { NavigationMixin } from "lightning/navigation"
export default class Event extends NavigationMixin(LightningElement) {
    @api recordId
    eventDetails
    showEvent=false
    eventId
    @wire(getAccRelEvents,{accId : '$recordId'})  
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