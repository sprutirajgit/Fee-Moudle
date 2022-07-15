public with sharing class getContact {
     @AuraEnabled(cacheable=true)
    public  static List<Contact> getAccountRelatedContact(string accId){
        List<Contact> con=[SELECT Id,Name,Title,Department,Phone,Email,AccountId
        FROM Contact where AccountId=:accId];
        try {
            return con;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
