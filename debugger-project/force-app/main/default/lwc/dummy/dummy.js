import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import BILLINGSTREET_FIELD from '@salesforce/schema/Account.BillingStreet';
import BILLINGCITY_FIELD from '@salesforce/schema/Account.BillingCity';
import BILLINGSTATE_FIELD from '@salesforce/schema/Account.BillingState';
import BILLINGPOSTALCODE_FIELD from '@salesforce/schema/Account.BillingPostalCode';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import MAILING_STREET_FIELD from '@salesforce/schema/Contact.MailingStreet';
import MAILING_CITY_FIELD from '@salesforce/schema/Contact.MailingCity';
import MAILING_STATE_FIELD from '@salesforce/schema/Contact.MailingState';
import MAILING_POSTALCODE_FIELD from '@salesforce/schema/Contact.MailingPostalCode';
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId';
export default class Dummy extends LightningElement {
    acctcon = {};

    handleChange(event){
        this.acctcon[event.target.name] = event.target.value;
    }

    handleAddressChange(event){
        this.acctcon["street"] = event.detail.street;
        this.acctcon["city"] = event.detail.city;
        this.acctcon["province"] = event.detail.street;
        this.acctcon["postalCode"] = event.detail.street;
    }

    createAccount() {
        var fields = {};
        fields[NAME_FIELD.fieldApiName] = this.acctcon["companyName"];
        fields[BILLINGSTREET_FIELD.fieldApiName] = this.acctcon["street"];
        fields[BILLINGCITY_FIELD.fieldApiName] = this.acctcon["city"];
        fields[BILLINGSTATE_FIELD.fieldApiName] = this.acctcon["province"];
        fields[BILLINGPOSTALCODE_FIELD.fieldApiName] = this.acctcon["postalcode"];              
        var recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(account => {
               fields = {};
                recordInput = {};
                fields[FIRST_NAME_FIELD.fieldApiName] = this.acctcon["firstName"];
                fields[LAST_NAME_FIELD.fieldApiName] = this.acctcon["lastName"];
                fields[ACCOUNTID_FIELD.fieldApiName] = account.id;
                fields[MAILING_STREET_FIELD.fieldApiName] = this.acctcon["street"];
                fields[MAILING_CITY_FIELD.fieldApiName] = this.acctcon["city"];
                fields[MAILING_STATE_FIELD.fieldApiName] = this.acctcon["province"];
                fields[MAILING_POSTALCODE_FIELD.fieldApiName] = this.acctcon["postalcode"];                            
                recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields };
                createRecord(recordInput)
                    .then(contact => {
                        console.log('contact : ' + JSON.stringify(contact));
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: 'Success',
                                message: 'Account Contact created',
                                variant: 'success',
                            }),
                        );

                    })
                    .catch(error => {
                        this.dispatchEvent(
                            new ShowToastEvent({
                                title: 'Error creating record',
                                message: error.body.message,
                                variant: 'error',
                            }),
                        );                        

                    });
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }
}