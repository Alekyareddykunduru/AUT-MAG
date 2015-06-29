module.exports = {

  "Demo test Magento" : function (browser) {
    console.log('creating sales order in magento...')
	 var orderid;
	browser
// Login to magento url
	  .url("http://54.186.176.60/enterpriseLatest/index.php/admin/")
      .waitForElementVisible('body', 60000)
	 
      .assert.title("Log into Magento Admin Page")
	
      .assert.visible("input[type=text]")
      .setValue("input[id=username]", "admin")
      .setValue("input[id=login]", "a43H4241PXQ5vCy")
	  .click("#loginForm > div > div.form-buttons > input")
      .pause(10000)
	  .assert.visible("input[type=text]")
	 
//Navigating to the Orders page
	  .click("#nav > li:nth-child(2) > a > span")
	  .pause(1000)
	  .waitForElementVisible('body',100000)
	  .click("#nav > li:nth-child(2) > ul > li:nth-child(1) > a > span")
	  .waitForElementVisible('body',100000)
//Clicking on Creating new sales order
	  .click('button[title="Create New Order"]')
	  .pause(1000)
//Search for customer 
	   .setValue("input[id=sales_order_create_customer_grid_filter_name]", "")
	   //.click('button[title="Search"]')
//Selecting a customer
	   .click("#sales_order_create_customer_grid_table > tbody > tr > td:nth-child(2)")
	   .pause(6000)
//Selecting a store 
	   .click('input[type="radio"][id="store_5"]')
       .waitForElementVisible('body', 60000)
	   .pause(10000)
//searching for the products 
	   .click("#order-items > div > div.entry-edit-head > div > button:nth-child(2) > span")
	   //.setValue("input[id=sales_order_create_search_grid_filter_name]", "sanity 1.6.6.1")
//use this if you want to search through Product id	  	 
	   //.setValue("input[id=sales_order_create_search_grid_filter_entity_id]", "914")

	 .setValue('input[id=sales_order_create_search_grid_filter_name]', ['sanity 1.6.6.1', browser.Keys.ENTER])
       .pause(10000)
//Selecting the product
      //.assert.value("#sales_order_create_search_grid_table > tbody > tr > td:nth-child(3)", "sanity 1.6.6.1")
	  .click("#sales_order_create_search_grid_table > tbody > tr > td:nth-child(3)")
	  .pause(1000)
	  //.assert.value("#sales_order_create_search_grid_table > tbody > tr > td:nth-child(1)", "sanity 1.6.6.1")

	  //.setValue("qty", "5")
	  //.setValue("input[name=qty]", "5")
	  
	
	  //.click('button[title="Update Items and Qty's"]') 
	  .pause(10000)
	  .click('button[title="Add Selected Product(s) to Order"]') 
	  .pause(10000)
//Selecting payment method
	  .click('input[type="radio"][title="Cash On Delivery"]') 
//Selecting shipping method
	  .click("#order-shipping-method-summary > a")
	  .pause(5000)
	  .click('input[type="radio"][value="freeshipping_freeshipping"]')
//Submitting the order
	  .click('button[title="Submit Order"]')
	  .pause(7000)
	  // .click("#nav > li:nth-child(2) > a > span")
	  .pause(1000)
	  //.waitForElementVisible('body',100000)
	  //.click("#nav > li:nth-child(2) > ul > li:nth-child(1) > a > span")
	  //.waitForElementVisible('body',100000)
	  .getText("#content > div > div.content-header > h3",function(result){
	  console.log('\nRESULT ' + -- result);
	  orderid  = result.text
	  console.log(orderid)
	  })
	
//Logging in into NS
	  .url("https://system.netsuite.com/pages/customerlogin.jsp?country=US")
	  .waitForElementVisible('body', 60000)
      .setValue("input[id=userName]", "alekya.kunduru@celigo.com")
      .setValue("input[name=password]", "42$india42")
	  .click("#header > div.header-left > form > div > div.button > input")
	   .setValue("input[name=answer]", "other")
	 .click('input[type="Submit"][name="submitter"]')
	 //.setValue("input[id=_searchstring]", "500000113")
	 //.click("Sales Order")
	 .pause(1000)
	 	 .setValue('input[id=_searchstring]', ['500000113', browser.Keys.ENTER])
		 .pause(1000)
		.click("#row0 > td.listtextctr.uir-list-row-cell > a:nth-child(2)")
//Verifying the sales order in NS
//Verifying Po number
 .verify.containsText("#tr_fg_fieldGroup929 > td:nth-child(2) > table > tbody > tr:nth-child(3) > td > div > span.uir-field.inputreadonly","500000113")
 //verify Customer
 .click('#qsTarget_1626616654')
 
	//.end();
  }
};


