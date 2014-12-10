$(document).ready(function() {
    
    var passwordEntry = function () {
        return prompt('Please enter in the correct password');
    };
        var correctPass = passwordEntry();
        var showPage = function (password) {
        switch (password) {
            case 'Correct Password':
                $('#dimScreen').fadeOut('slow');
                break;
            default:
                alert('That is not a valid password. Goodbye.');
                // use this to avoid redirects when a user clicks "back" in their browser
                window.location.replace('http://redew.github.io/huehuehue/');

                // use this to redirect, a back button call will trigger the redirection again
                window.location.href = "http://redew.github.io/huehuehue/";
                
                // given for completeness, essentially an alias to window.location.href
                window.location = "http://redew.github.io/huehuehue/";
                return false;
            }
       };
    var correctPage = showPage(correctPass);
});
