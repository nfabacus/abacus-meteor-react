// Simply 'inherites' helpers from AccountsTemplates
Template.atForm.helpers(AccountsTemplates.atFormHelpers);

Template.atForm.events({
	'click #logout': function(){
		event.preventDefault();
		AccountsTemplates.logout(function(){
    		event.preventDefault();
    		console.log('You are logged out!');
    		
    	});
		$("#loginToggleBtn").trigger("click");
	}
});
