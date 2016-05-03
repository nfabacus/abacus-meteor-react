Meteor.methods({
	addResolution(resolution) {
		check(resolution, String);
		if(!Meteor.userId()) {
			throw new Meteor.Error('not-authorised');
		}
		Resolutions.insert({
			text: resolution,
			complete: false,
			createdAt: new Date(),
			user: Meteor.userId()
		});		
	},
	toggleResolution(resolution) {
		check(resolution, Object);
		if(Meteor.userId() !== resolution.user) {
			throw new Meteor.Error('not-authorised');
		}		
		Resolutions.update(resolution._id, {
			$set: {complete: !resolution.complete}
		});
	},
	deleteResolution(resolution) {
		check(resolution, Object);
		if(Meteor.userId() !== resolution.user) {
			throw new Meteor.Error('not-authorised');
		}
		Resolutions.remove(resolution._id);
	},

	// registerUserInfo(data) {
	// 	check(data, Object);
	// 	if(Meteor.email) {
	// 		throw new Meteor.Error('Email already registered');
	// 	}

	// 	Accounts.createUser({
	// 		email: data.email,
	// 		password: data.password
	// 	}, function(err) {
	// 	  if (err)
	// 	    console.log(err);
	// 	  else
	// 	    console.log('success!');
	// 	});
	// 	alert('form submitted!');
	// 	return false;
	// }

});