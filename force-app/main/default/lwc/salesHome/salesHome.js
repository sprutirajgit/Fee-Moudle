import { LightningElement,api } from 'lwc';
import myPNG_icon from '@salesforce/resourceUrl/camp';
import myPNG2_icon from '@salesforce/resourceUrl/lead';
import myPNG3_icon from '@salesforce/resourceUrl/account';
import myPNG4_icon from '@salesforce/resourceUrl/contact';
import myPNG5_icon from '@salesforce/resourceUrl/opportunity';
import myPNG6_icon from '@salesforce/resourceUrl/repo';
import myPNG7_icon from '@salesforce/resourceUrl/dashboa';

import { NavigationMixin } from 'lightning/navigation';

export default class SalesHome extends NavigationMixin(LightningElement) {
    @api recordId;
    camp = myPNG_icon;
    lead = myPNG2_icon
    contact = myPNG4_icon;
    account = myPNG3_icon;
    opportunity = myPNG5_icon;
    repo = myPNG6_icon;
    dashboa = myPNG7_icon;
    handleclick(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Campaign',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
    handle(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Lead',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
    handle2(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
    handle4(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
    handle5(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
    handle6(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Report',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
    handle7(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Dashboard',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
}