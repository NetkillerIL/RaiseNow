
/*
* Usage: simply include this file i.e tasks_intern.js in the HTML 
* file, call each function according to the task solution
*/


/* if needed, set testMode*/
function setTestMode() {
    window.rnwWidget = window.rnwWidget || {};
    window.rnwWidget.configureWidget = [];
    window.rnwWidget.configureWidget.push(function(options) {
        options.epikOptions.test_mode = "true";
    });
    alert("Test mode");
}


/* 
*	Task 3.1 - adding a custom field
* 	The field I have added was **Middle Name**
* 	Located between first name and last name
*/
function addCustomField(){
    window.rnwWidget = window.rnwWidget || {};
    window.rnwWidget.configureWidget = [];
    window.rnwWidget.configureWidget.push(function(options) {
    	options.extend({
        	custom_fields : {
                stored_customer_RNWtask : {
                    type : 'text',
                    location : 'after',
                    reference : 'customer_firstname',
                    placeholder : 'Middle Name',
                	}
           	 	}
        	});
      	});
}

/*
* Task 3.2 - changed amount of one time donation to 
* 10 CHF in both purpose 1 and 2
*
*/
function changeAmount(){

	window.rnwWidget = window.rnwWidget || {};
	window.rnwWidget.configureWidget = window.rnwWidget.configureWidget || [];
	window.rnwWidget.configureWidget.push(function(options) {
	options.translations.step_amount.onetime_amounts = [{text: '10', value: '1000'}];
	});
}

/*
* Task 3.3 - change the minimal amount of donation in Purpose 2 to 5 (formerly 1)
*
* **Remark** - my simple alteration of code works for 2 Purposes.
* it won't work for 3 or more, the reason is - I could not find the values
* that state the Purpose's name, thus could not check whether the purpose
* was switched from first purpose to second purpose or the other way around
*/
function changeAmountPurpose() {
	window.rnwWidget = window.rnwWidget || {};
	window.rnwWidget.configureWidget = window.rnwWidget.configureWidget || [];
    window.rnwWidget.configureWidget.push(
    		function(options) {
        	options.widget.on(window.rnwWidget.constants.events.PURPOSE_CHANGED, 
        	function(event) {
        		if (options.widget.options.common.min_amount.single == 5) {
        			options.widget.options.common.min_amount.single = 1;	
        		}
        		else {
        					options.widget.options.common.min_amount.single = 5;
        		}
        				
        				
          	});
    	});
}