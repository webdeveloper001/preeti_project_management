$("#register-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        email:true
      }, 
      password: {
  			required: true,
  			minlength: 5
  		},
      password_again: {
        required: true,
        minlength: 5, 
        equalTo: "#password"
      }
    },
    errorElement : 'div',
    errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
 });
