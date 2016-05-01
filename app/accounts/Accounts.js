var myLogoutFunc = function() {
	FlowRouter.go('/');
}

AccountsTemplates.configure({
 // Behavior
    onLogoutHook: myLogoutFunc,
    confirmPassword: false,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: true,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use'


});

AccountsTemplates.addFields([
	{
		_id: 'firstName',
		type: 'text',
		displayName: 'First Name',
		required: true
	},
	{
		_id: 'surname',
		type: 'text',
		displayName: 'Surname',
		required: true
	},



]);