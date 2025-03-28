const messages = {
    appName: "Meal Mancer",
    logoutBtn: "Logout",

    // index
    indexTitle: "Welcome to Meal Mancer!",
    adminIndexTitle: "Welcome, admin",
    indexDesc: "Tell the Meal Mancer what ingredients you have and it will conjure a recipe for you!",
    startCooking: "CONJURE RECIPE →",
    goToUserList: "See User list →",
    apiInfo: "You have %TOKENS% tokens left, has called a total of %TOTAL_API_CALLS% API calls",

    // cookingConjuration
    castTitle: "Start Conjuring Recipe",
    ingredientPlaceholder: "List Ingredients",
    castSpell: "Conjure Recipe",
    ingredientsTitle: "Ingredients",
    instructionsTitle: "Instructions",
    addToFavBtn: "Add to Favorites",

    // login
    loginTitle: "Login",
    emailPlaceholder: "Email",
    pwPlaceholder: "Password",
    loginBtn: "LOG IN",
    signupDir: "Don't have an account? Sign up",

    // signup
    signupTitle: "Signup",
    pwConfirm: "Confirm Password",
    signupBtn: "SIGN UP",
    loginDir: "Already have an account? Log in",

    // favorites
    favTitle: "Favorite Recipes",
    noFavsFound: "There are no favorite recipes",

    // user list
    userListTitle: "Users",
    noUsersFound: "No users were found",

    // Error popup
    errorTitle: "Error",
    error: "Oops! Something went wrong!",
    emptyInput: "Input is empty",
    recipeInputError: "Please remove numbers or special characters",
    pwMatchError: "Password does not match",
    tokenEmpty: "You used all your free trials",
    ok: "Ok",

    // Non-admin msg
    notAdmin: "Only admins can access this page!",

    // Session expired msg
    sessionExpired: "Your session has expired. Please log in again.",

    // Logged out msg
    loggedOut: "You are now logged out",
};

const genNavItems = [
    "Favorites",
    "Conjure Recipe"
];

const adminNavItems = [
    "Users",
    "Favorites",
    "Conjure Recipe"
];