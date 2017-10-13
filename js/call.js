$(document).ready(function() {
    $("#button").on('click', function(e) {
        e.preventDefault()
        var name = $('#name');
        var email = $('#email');
        var businessType = $('#businessType');
        var password = $('#password');

        var business = {
            name: name.val(),
            email: email.val(),
            businessType: businessType.val(),
            password: password.val(),
        }

        $.ajax({
            type: 'POST',
            url: 'http://18.220.175.109/account/register/business',
            data: business,
            dataType: "JSON",
            success: function() {
                alert('success');
            },
            error: function(status) {
                alert('error registering business' + status.responseText);
            }
        });
    });

    //form1 api call
    $("#login").on('click', function(e) {
        e.preventDefault()

        var email = $('#email');
        var password = $('#password');

        var login = {
            email: email.val(),
            password: password.val(),
        }

        $.ajax({
            type: 'GET',
            url: 'http://18.220.175.109/account/login',
            data: login,
            dataType: "JSON",
            success: function() {
                alert('success');
            },
            error: function(status) {
                alert('wrong email or password' + status.responseText);
            }
        })
    });
});