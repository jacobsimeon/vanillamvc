var user = User.new();

var usernameField = new InputFieldView("username");
var usernameFieldController = new UsernameFieldController(usernameField, user);

var passwordView = new InputFieldView("password");
var passwordViewController = new PasswordFieldController(passwordView, user);

var passwordView = new InputFieldView("password-confirmation");
var passwordViewController = new PasswordConfirmationFieldController(passwordView, user);
