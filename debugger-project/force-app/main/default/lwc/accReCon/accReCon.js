import { LightningElement,api,wire } from 'lwc';
import getAccountReContact from '@salesforce/apex/getContact.getAccountRelatedContact';
import { NavigationMixin } from "lightning/navigation"

export default class Contact extends NavigationMixin(LightningElement) {
    @api recordId
    conDetails
    showContact=false
    consId
    @wire(getAccountReContact,{accId : '$recordId'})  
    con({data,error})
    {
       if(data)
       {
           this.conDetails=data
           this.showContact=true
           console.log(data)
       }
       if(error)
       {
           console.error(error)
           this.showContact=false
       }
    }  
    
    navigateToViewContactPage(event) {
        console.log('ConId')
        this.consId=event.target.value
        console.log('consId'+this.consId)
        
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:
            {
               recordId:this.consId,
                objectApiName:'Contact',
                actionName:'view'
 
            }
        })
 

    }
}