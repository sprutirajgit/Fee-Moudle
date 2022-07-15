public with sharing class acctivitiesClass {
    @AuraEnabled(cacheable=true)    
    public static List<Account> getAccount() {
        List<Account> acclist = [Select id,Name From Account Where Id !=null];
        return acclist;

    }
    @AuraEnabled(cacheable=true)    
    public static List<Event> getEvent(String EventId){
        List<Event> evntObj = new List<Event>();
        List<Event> eventList = [SELECT AccountId,EndDate,StartDateTime,Subject FROM Event where AccountId =:EventId];
        for(Event evt:eventList){
            evntObj.add(evt);
        }
        return evntObj;
    }
}
