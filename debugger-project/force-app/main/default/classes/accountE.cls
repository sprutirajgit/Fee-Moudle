public with sharing class accountE {
    @AuraEnabled(cacheable=true)
    public  static List<Event> getAccountRelatedEvents(string accId){
        List<Event> events=[SELECT Id,StartDateTime,EndDateTime, WhatId,EndDate, AccountId, Subject 
        FROM Event where AccountId=:accId and EndDate>=TODAY];
        try {
            return events;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}
