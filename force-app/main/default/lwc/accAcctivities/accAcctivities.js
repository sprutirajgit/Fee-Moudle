import { LightningElement,wire } from 'lwc';
import obj from '@salesforce/apex/examTest.obj';


export default class AccountEvent extends LightningElement  {
    @wire (obj) obj;
}