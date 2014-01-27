/*
  Mesosphere and server method should both run in shared space for dual client/server
  validation to work.
 */
Mesosphere({
    name: 'signupForm',
    method: 'signupUser',
    fields: {
        email: {
            required: true,
            format: 'email',
            message: 'Please enter a valid email address'
        },
        password: {
            required: true,
            rules: {
                minLength: 6,
                maxLength: 30,
            },
            message: "Password must be between 6 and 30 characters"
        }
    }

});

Meteor.methods({
  signupUser: function (rawData) {
    Mesosphere.signupForm.validate(rawData, function(errors, formData){
        if(!errors){
            console.log("No Errors Found");
            //Do what you want with the validated data.
        }else{
            _(errors).each( function( value, key ) {
              console.log(key+": "+value.message);
            });
        }
    });
  }
});


