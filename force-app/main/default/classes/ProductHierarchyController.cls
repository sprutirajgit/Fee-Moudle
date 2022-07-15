public with sharing class ProductHierarchyController{
    //Load all the products
    @RemoteAction
    public static List<Account> loadProducts(){
        return [Select id,Name,ParentId from Account];
    }
}