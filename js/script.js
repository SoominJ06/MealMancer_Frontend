/** String Constants */

// Session Storage
const userInfo = "userInfo";
const adminConst = "admin";

// Data Table JQuery plugin
const hashtagUserList = "#userList";
const hashtagApiStats = "#apiStats";

// Endpoints
const backendUrl = "https://meal-mancer-api-q3zh9.ondigitalocean.app/v1/";
const loginEndpoint = "login";
const logoutEndpoint = "logout";
const signupEndpoint = "signup";
const favEndpoint = "favourites";
const apiStatsEndpoint = "apiStats";
const userListEndpoint = "users";
const infoPageEndpoint = "info"
const cookingEndpoint = "cooking";
const generateEndpoint = "generate/?ingredients=";
const updateUserEndpoint = "users?user="
const deleteFavEndpoint = "favourites?recipe=";
const indexApiInfoEndpoint = "userConsumption";
const idconst = "id";
const userIdconst = "user_id";

// API request 
const methodPost = "POST";
const methodGet = "GET";
const methodPut = "PUT";
const methodDelete = "DELETE";
const contentType = "Content-Type";
const appJson = "application/json";

// HTML pages
const indexPage = "index.html";
const loginPage = "login.html";
const signupPage = "signup.html";
const cookingPage = "cookingConjuration.html";
const favPage = "favourites.html";
const infoPage = "info.html";

// ContentIDs
const errorPopup = "errorPopupWrap";
const closeErrorPopup = "closeErrorPopupBtn";
const errorStatus = "errorStatus";
const errorMsg = "errorMsg";
const errorDesc = "errorDesc";
const recipeTitle = "recipeTitle";
const ingredientsTitle = "ingredientsTitle";
const ingredientList = "ingredientList";
const instructionsTitle = "instructionsTitle";
const instructionList = "instructionList";
const addToFav = "addToFav";
const outputBg = "outputBg";
const apiStatsTitle = "apiTitle";
const apiStatsList = "apiStats";
const userListTitle = "userListTitle";
const userList = "userList";
const actionItems = "actions";
const editUserBtn = "editUserBtn";
const deleteUserBtn = "deleteUserBtn";
const modalToggled = "modalToggled";
const editUserModal = "editUserModal";
const deleteUserModal = "deleteUserModal";
const cancelEditBtn = "cancelEditButton";
const cancelDeleteBtn = "cancelDeleteButton";
const confirmDeleteButton = "confirmDeleteButton";
const updateButton = "updateButton";
const editTokensInput = "editTokens";
const editScrollTop = "editScrollTop";
const editScrollBottom = "editScrollBottom";
const deleteScrollTop = "deleteScrollTop";
const deleteScrollBottom = "deleteScrollBottom";
const outputWrap = "outputWrap";
const favoritesWrap = "favoritesWrap";
const favoriteBg = "favoriteBg";
const favoritesConst = "favorites";
const favorite = "favorite";
const loginBtn = "loginBtn";
const logoutBtn = "logoutBtn";
const signupBtn = "signupBtn";
const conjureBtn = "conjureBtn";
const emailInput = "emailInput";
const pwInput = "pwInput";
const pwConfirm = "pwConfirm";
const ingredientInput = "ingredientInput";
const titleConst = "title";
const goCook = "goCook";
const descConst = "desc";
const loginDir = "loginDir";
const signupDir = "signupDir";
const customCurConst = "customCur";
const headerConst = "header";
const navBarConst = "navBar";
const loaderConst = "loader";
const prevConst = '.prev';
const nextConst = '.next';
const translateStyleConst = "translateX(%OFFSET%px)";
const hoverableConst = ".hoverable";
const scrollTopConst = "scrollTop";
const scrollBottomConst = "scrollBottom";
const tokensLeftConst = "tokensLeft";
const sucessPopupWrap = "sucessPopupWrap";
const successMsg = "successMsg";
const successDesc = "successDesc";
const closeSuccessPopupBtn = "closeSuccessPopupBtn";
const editUserModalLabel = "editUserModalLabel";
const editTokensLabel = "editTokensLabel";
const updateBtn = "updateButton";
const deleteUserModalLabel = "deleteUserModalLabel";
const cancelDeleteButton = "cancelDeleteButton";
const deleteFavBtn = ".deleteFavBtn";

// Styling
const emptyString = "";
const spaceString = " ";
const zero = "0";
const one = "1";
const hiddenConst = "hidden";
const visibleConst = "visible";
const noneConst = "none";
const flexConst = "flex";
const blockConst = "block";
const headerFont = "headerFont";
const autoConst = "auto";
const divConst = "div";
const ulConst = "ul";

// Replaceable strings
const recipeItem = "%ITEM%";
const cellItem = "%CELL%";
const idItem = "%ID%";
const cellContents = "%CELL_CONTENTS%";
const offsetConst = "%OFFSET%"
const errorCodeConst = "%ERROR_CODE%";
const getUserSelector = (id) => `[data-userid="${id}"]`;

// HTML elements
const trConst = "tr";
const listTemplate = `<li>%ITEM%</li>`;
const tableHeadBuild = `<table><thead><tr>`;
const tableHeadTemplate = `<th>%ITEM%</th>`;
const tableHeadEnd = `</tr></thead><tbody>`;
const tableRowTemplate = `<tr>%CELL_CONTENTS%</tr>`;
const tableCellTemplate = `<td>%CELL%</td>`;
const tableEndConst = `</tbody></table>`;
const tableButtonsTemplate = `<div class="userListBtnWrap">
                                <button id="editUser%ID%" class="editUserBtn headerFont" data-userid="%ID%">Edit</button>
                                <button id="deleteUser%ID%" class="deleteUserBtn headerFont" data-userid="%ID%">Delete</button>
                            </div>`;
const initButtonTemplate = `<div class="logo titleFont hoverable">
                                <a href="index.html">
                                    <div class="headerLogo">
                                        <img src="public/images/logo.png" alt="Logo">
                                    </div>
                                    %APP_NAME%
                                </a>
                            </div>`;
const initLoginButtonTemplate = `<li class="loginNav hoverable">
                                    <a href="login.html">%LOGIN_TITLE%</a>
                                  </li>`;
const logoutButtonTemplate = `<li class="logout hoverable">
                                    <button id="logoutBtn">%LOGOUT_BTN%</button>
                                  </li>`;
const menuItemTemplate = `<li class="hoverable"><a href="%ITEM_NAV%">%ITEM%</a></li>`;
const favoritesTemplate = `<div class="favoriteBg"><div class="scrollTop" id="scrollTop%TID%"></div>
                                <div class="scrollMiddle">
                                    <div class="favorite">
                                        <div class="title titleFont">%RECIPE_TITLE%</div>
                                        <div class="ingredients divide">
                                            <div class="desc headerFont">%INGREDIENTS_TITLE%</div>
                                            <ul>%INGREDIENT_LIST%</ul>
                                        </div>
                                    <div class="instructions divide">
                                        <div class="desc headerFont">%INSTRUCTIONS_TITLE%</div>
                                        <ul id="instructionList">%INSTRUCTION_LIST%</ul>
                                    </div>
                                    <button id="deleteFromFav" class="hoverable btnFont deleteFavBtn" data-favid="%FAV_ID%">%DELETE_BTN%</button>
                                    </div></div><div class="scrollBottom" id="scrollBottom%BID%"></div></div>`;

// Event Listeners
const DOMContentLoadConst = "DOMContentLoaded";
const clickConst = "click";
const mouseleave = "mouseleave";
const mouseenter = "mouseenter";
const mousemove = "mousemove";

/**
 * SessionController class to manage the user session by 
 * storing and retrieving user tokens, role, and the time session expires.
 */
class SessionController {
    /**
     * Constructor to initialize the session object
     */
    constructor() {
        this.session = JSON.parse(sessionStorage.getItem(userInfo)) || {};
    }

    /**
     * Sets the users role, tokens, total number of API calls they've made, and the time the session expires in the session storage
     * @param {*} role
     * @param {*} tokens 
     * @param {*} totalAPI 
     * @param {*} expiresAt  
     */
    setUserInfo(role, tokens, totalAPI, expiresAt) {
        this.session = { role, tokens, totalAPI, expiresAt };
        sessionStorage.setItem(userInfo, JSON.stringify(this.session));
    }

    /**
     * Reduces the token count by 1, while preventing negative tokens
     */
    reduceToken() {
        if (this.session.tokens > 0) { // Prevent negative tokens
            this.session.tokens--;
            sessionStorage.setItem(userInfo, JSON.stringify(this.session)); // Save the update
        }
    }

    /**
     * Getter for the user role from the session storage
     * @returns the user role from the session storage
     */
    getUserRole() {
        return this.session.role || null;
    }

    /**
     * Getter for the user tokens from the session storage
     * @returns the user tokens from the session storage
     */
    getUserTokens() {
        return this.session.tokens || null;
    }

    /**
     * Getter for the total number of API calls the user has made from the session storage
     * @returns the the total number of API calls the user has made from the session storage
     */
    getTotalAPI() {
        return this.session.totalAPI || null;
    }

    /**
     * Getter for the expiration time from the session storage
     * @returns the expiration time from the session storage
     */
    getExpireTime() {
        return this.session.expiresAt || null;
    }

    /**
     * Checks if the session has expired based on the expiration time
     * @returns true if the session has expired, false otherwise
     */
    isSessionExpired() {
        if (!this.session.expiresAt) return true; // If no expiry time, consider expired
        const expiresAt = new Date(this.session.expiresAt).getTime();
        return isNaN(expiresAt) || Date.now() >= expiresAt;
    }

    /**
     * Clears the session storage of the user information
     */
    clearSession() {
        sessionStorage.removeItem(userInfo);
        this.session = {};
    }
}

/**
 * RecipeAPI class to handle the API calls for the recipe generation.
 * Takes in the user input and returns a recipe based on the input.
 * Also handles the login and signup API calls.
 */
class RecipeAPI {
    /**
     * Constructor to initialize the RecipeAPI object
     */
    constructor() {
        this.xhttp = new XMLHttpRequest();
        this.outputController = new OutputController();
        this.session = new SessionController();
        this.baseUrl = backendUrl;
    }

    /**
     * Checks if the session has expired and redirects to the login page if it has
     * expired. Clears the session if it has expired.
     */
    checkSession() {
        if (this.session.isSessionExpired()) {
            this.session.clearSession();
            alert(messages.sessionExpired);
            window.location.href = loginPage; // Redirect to login page
        }
    }

    /**
     * Retrieves a recipe based on the user input from the API
     * @param string ingredients 
     */
    getRecipe(ingredients) {
        // testing with dummy data
        this.outputController.displayLoadingIcon();

        const title = "avocado and tomato breakfast toast";
        const ingredient = ["2 slices whole grain bread", "1 slice avocado", "1 medium tomato, sliced", "2 slices cooked bacon", "2 eggs", "salt and pepper to taste", "olive oil spray"];
        const method = ["toast the bread slices in a toaster or under the broiler until golden brown.", "lightly spray a frying pan with olive oil spray and heat over medium heat.", "add the sliced avocado, tomato, and cooked bacon to the pan.", "season with salt and pepper, and cook for 3-4 minutes, or until the avocado is soft.", "add the eggs to the pan and scramble until fully cooked.", "remove from heat and cover the pan with a lid.", "serve immediately."];
        
        setTimeout(() => {
            this.outputController.hideLoadingIcon();
            this.outputController.displayRecipe(title, ingredient, method)
        }, 2000)

        // check if session has expired or not
        // this.checkSession();

        // // Show loading spinner
        // this.outputController.displayLoadingIcon();

        // // Actual fetch
        // this.xhttp.open(methodGet, this.baseUrl + generateEndpoint + ingredients, true);
        // this.xhttp.withCredentials = true; // for Cookies
        // this.xhttp.send();
        // this.xhttp.onreadystatechange = () => {
        //     if (this.xhttp.readyState === 4) {
        //         const response = JSON.parse(this.xhttp.responseText);
        //         if (this.xhttp.status === 200) {
        //             this.session.reduceToken();
        //             this.outputController.displayRecipe(response.title, response.ingredients, response.directions)
        //         } else {
        //             this.outputController.displayErrorPopup(messages.error, this.xhttp.status);
        //         }
        //         // Hide loading icon
        //         this.outputController.hideLoadingIcon(); 
        //     }
        // }
    }

    /**
     * Logs in the user based on the email and password, and stores the user
     * info in the session storage.
     * @param string email 
     * @param string pw 
     */
    login(email, pw) {
        // this.xhttp.open(methodPost, this.baseUrl + loginEndpoint, true);
        // this.xhttp.withCredentials = true;
        // this.xhttp.setRequestHeader(contentType, appJson);
        // const requestData = JSON.stringify({ email: email, password: pw });
        // this.xhttp.send(requestData);   
        // this.xhttp.onreadystatechange = () => { 
        //     if (this.xhttp.readyState === 4) {
        //         const response = JSON.parse(this.xhttp.responseText);
        //         if (this.xhttp.status === 200) {
        //             // Store user info in session storage
        //             this.session.setUserInfo(response.role, response.tokens, response.httpRequests, response.expiresAt );
        //             window.location.href = indexPage;
        //         } else {
        //             this.outputController.displayErrorPopup(response.message, this.xhttp.status);
        //         }
        //     }
        // }
        
        // For testing admin
        this.session.setUserInfo("admin", 20, 40, "2026-03-19T10:33:18.885Z");
        window.location.href = "index.html";
    }

    /**
     * Signs up the user based on the email and password, and stores the user
     * info in the session storage.
     * @param string email 
     * @param string pw 
     */
    signup(email, pw) {
        // this.xhttp.open(methodPost, this.baseUrl + signupEndpoint, true);
        // this.xhttp.withCredentials = true;
        // this.xhttp.setRequestHeader(contentType, appJson);
        // const requestData = JSON.stringify({ email: email, password: pw });
        // this.xhttp.send(requestData);   
        // this.xhttp.onreadystatechange = () => { 
        //     if (this.xhttp.readyState === 4) {
        //         const response = JSON.parse(this.xhttp.responseText);
        //         if (this.xhttp.status === 200) {
        //             this.session.setUserInfo(response.role, response.tokens, response.httpRequests, response.expiresAt );
        //             window.location.href = indexPage;
        //         } else {
        //             this.outputController.displayErrorPopup(response.message, this.xhttp.status);
        //         }
        //     }
        // }

        // For testing admin
        this.session.setUserInfo("admin", 20, 40, "2026-03-19T10:33:18.885Z");
        window.location.href = "index.html";
    }

    /**
     * Logs out the user by clearing the session storage and
     * redirecting to the index page.
     */
    logout() {
        // this.xhttp.open(methodPost, this.baseUrl + logoutEndpoint, true);
        // this.xhttp.withCredentials = true;
        // this.xhttp.send();   
        // this.xhttp.onreadystatechange = () => { 
        //     if (this.xhttp.readyState === 4) {
        //         const response = JSON.parse(this.xhttp.responseText);
        //         if (this.xhttp.status === 200) {
        //             // Clear session
        //             this.session.clearSession();
        //             window.location.href = indexPage;
        //             alert(messages.loggedOut);
        //         } else {
        //             this.outputController.displayErrorPopup(response.message, this.xhttp.status);
        //         }
        //     }
        // }

        // Clear session
        this.session.clearSession();
        window.location.href = indexPage;
    }

    /**
     * Retrieves the API information for the user and displays it in the index page.
     */
    getIndexApiInfo() {
        // check if session has expired or not
        // this.checkSession();
        // this.xhttp.open(methodGet, this.baseUrl + indexApiInfoEndpoint, true);
        // this.xhttp.withCredentials = true;
        // this.xhttp.send();
        // // Get the API information for the user
        // this.xhttp.onreadystatechange = () => { 
        //     if (this.xhttp.readyState === 4) {
        //         const response = JSON.parse(this.xhttp.responseText);
        //         if (this.xhttp.status === 200) {
        //             this.session.setUserInfo(this.session.getUserRole(), response.tokens, response.httpRequests, this.session.getExpireTime());
        //             this.outputController.displayUserApiInfo(response.tokens, response.httpRequests);
        //         } else {
        //             this.outputController.displayErrorPopup(messages.error, this.xhttp.status);
        //         }
        //     }
        // }

        // Displaying dummy data
        this.outputController.displayUserApiInfo(20, 5);
    }

    /**
     * Retrieves the API statistics for the admin and displays it in the info page.
     */
    getApiStats() {
        // check if session has expired or not
        // this.checkSession();

        // // Using a new XMLHttpRequest instance
        // let xhttp = new XMLHttpRequest();  
        // xhttp.open(methodGet, this.baseUrl + apiStatsEndpoint, true);
        // xhttp.withCredentials = true;
        // xhttp.send();
        // xhttp.onload = () => {  // Use onload safely now
        //     if (xhttp.status === 200) {
        //         const response = JSON.parse(xhttp.responseText);
        //         this.outputController.displayApiStats(response);
        //     } else {
        //         this.outputController.displayErrorPopup(messages.error, xhttp.status);
        //     }
        // }; 

        // Testing DataTable
        let dummy = [
            {"id":1,"method":"GET","endpoint":"/API/v1/login","requests":0},
            {"id":1,"method":"GET","endpoint":"/API/v1/login","requests":0},
            {"id":1,"method":"GET","endpoint":"/API/v1/login","requests":0},
        ];
          
        this.outputController.displayApiStats(dummy);
    }

    /**
     * Retrieves the list of users from the API and displays it in the table
     * for admins to view.
     */
    getUserList() {
        // check if session has expired or not
        // this.checkSession();
        // this.xhttp.open(methodGet, this.baseUrl + userListEndpoint, true);
        // this.xhttp.withCredentials = true;
        // this.xhttp.send();
        // this.xhttp.onreadystatechange = () => { 
        //     if (this.xhttp.readyState === 4) {
        //         const response = JSON.parse(this.xhttp.responseText);
        //         if (this.xhttp.status === 200) {
        //             this.outputController.displayUserList(response);
        //         } else {
        //             this.outputController.displayErrorPopup(messages.error, this.xhttp.status);
        //         }
        //     }
        // }

        // Testing DataTable
        let dummy = [
            {"user_id": 1, "email": "example1@gmail.com", "tokens": 20, "httpRequests": 0 }, 
            {"user_id": 2, "email": "example1@gmail.com", "tokens": 20, "httpRequests": 0 }, 
            {"user_id": 3, "email": "example1@gmail.com", "tokens": 20, "httpRequests": 0 }, 
        ];
          
        this.outputController.displayUserList(dummy);
    }

    /**
     * Updates the user token count based on the user id and the amount
     * @param {*} id 
     * @param int amount 
     */
    updateUserToken(id, amount) {
        // check if session has expired or not
        this.checkSession();
        this.xhttp.open(methodPut, this.baseUrl + updateUserEndpoint + id, true);
        this.xhttp.withCredentials = true;
        this.xhttp.setRequestHeader(contentType, appJson);
        const requestData = JSON.stringify({ newTokens: amount });
        this.xhttp.send(requestData);   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (this.xhttp.status === 200) {
                    this.outputController.displaySuccessPopup(response.message);
                } else {
                    this.outputController.displayErrorPopup(response.message, this.xhttp.status);
                }
            }
        }
    }

    /**
     * Deletes the user based on the user id
     * @param {*} id 
     */
    delteUser(id) {
        // check if session has expired or not
        this.checkSession();
        this.xhttp.open(methodDelete, this.baseUrl + updateUserEndpoint + id, true);
        this.xhttp.withCredentials = true;
        this.xhttp.send();   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (this.xhttp.status === 200) {
                    this.outputController.displaySuccessPopup(response.message);
                } else {
                    this.outputController.displayErrorPopup(response.message, this.xhttp.status);
                }
            }
        }
    }

    /**
     * Retrieves the list of favorite recipes from the API and displays it
     * for the user to view.
     */
    getFavorites() {
        // check if session has expired or not
        // this.checkSession();
        // this.xhttp.open(methodGet, this.baseUrl + favEndpoint, true);
        // this.xhttp.withCredentials = true;
        // this.xhttp.send();
        // this.xhttp.onreadystatechange = () => { 
        //     if (this.xhttp.readyState === 4) {
        //         const response = JSON.parse(this.xhttp.responseText);
        //         if (this.xhttp.status === 200) {
        //             this.outputController.displayFavorites(response)
        //         } else {
        //             this.outputController.displayErrorPopup(messages.error, this.xhttp.status);
        //         }
        //     }
        // }

        // Testing dummy data
        const ingredient1 = ["2 slices whole grain bread", "1 slice avocado", "1 medium tomato, sliced", "2 slices cooked bacon", "2 eggs", "salt and pepper to taste", "olive oil spray"];
        const ingredient2 = ["2 slices whole grain bread", "1 slice avocado", "1 medium tomato, sliced"];
        const method1 = ["toast the bread slices in a toaster or under the broiler until golden brown.", "lightly spray a frying pan with olive oil spray and heat over medium heat.", "add the sliced avocado, tomato, and cooked bacon to the pan.", "season with salt and pepper, and cook for 3-4 minutes, or until the avocado is soft.", "add the eggs to the pan and scramble until fully cooked.", "remove from heat and cover the pan with a lid.", "serve immediately."];
        const method2 = ["toast the bread slices in a toaster or under the broiler until golden brown.", "toast the bread slices in a toaster or under the broiler until golden brown.", "toast the bread slices in a toaster or under the broiler until golden brown.", "toast the bread slices in a toaster or under the broiler until golden brown.", "toast the bread slices in a toaster or under the broiler until golden brown.", "toast the bread slices in a toaster or under the broiler until golden brown."]
        const method3 = ["toast the bread slices in a toaster or under the broiler until golden brown.", "lightly spray a frying pan with olive oil spray and heat over medium heat.", "add the sliced avocado, tomato, and cooked bacon to the pan.", "season with salt and pepper, and cook for 3-4 minutes, or until the avocado is soft.", "add the eggs to the pan and scramble until fully cooked.", "remove from heat and cover the pan with a lid.", "serve immediately.", "toast the bread slices in a toaster or under the broiler until golden brown.", "lightly spray a frying pan with olive oil spray and heat over medium heat.", "add the sliced avocado, tomato, and cooked bacon to the pan.", "season with salt and pepper, and cook for 3-4 minutes, or until the avocado is soft.", "add the eggs to the pan and scramble until fully cooked.", "remove from heat and cover the pan with a lid."];
        const dummy = [
            {"title": "Recipe 1", "ingredients": ingredient1, "directions": method1},
            {"title": "Recipe 2", "ingredients": ingredient2, "directions": method2},
            {"title": "Recipe 3", "ingredients": ingredient1, "directions": method3}
        ];
        this.outputController.displayFavorites(dummy)
    }

    /**
     * Adds a recipe to the favorites list based on the title, ingredients, and instructions,
     * and displays a success message if it works and an error message if it does not.
     * @param {*} title 
     * @param {*} ingredients 
     * @param {*} instructions 
     */
    addToFavorites(title, ingredients, instructions) {
        // check if session has expired or not
        this.checkSession();
        this.xhttp.open(methodPost, this.baseUrl + favEndpoint, true);
        this.xhttp.withCredentials = true;
        this.xhttp.setRequestHeader(contentType, appJson);
        const requestData = JSON.stringify({ recipe: {title: title, ingredients: ingredients, directions: instructions} });
        this.xhttp.send(requestData);   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (this.xhttp.status === 200) {
                    this.outputController.displaySuccessPopup(response.message);
                } else {
                    this.outputController.displayErrorPopup(response.message, this.xhttp.status);
                }
            }
        }
    }

    /**
     * Deletes a recipe from the favorites list based on the recipe id
     * @param {*} id 
     */
    delteFavorite(id) {
        // check if session has expired or not
        this.checkSession();
        this.xhttp.open(methodDelete, this.baseUrl + deleteFavEndpoint + id, true);
        this.xhttp.withCredentials = true;
        this.xhttp.send();   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (this.xhttp.status === 200) {
                    this.outputController.displaySuccessPopup(response.message);
                } else {
                    this.outputController.displayErrorPopup(response.message, this.xhttp.status);
                }
            }
        }
    }
}

/**
 * InputValidator class to validate the user input for the login,
 * signup, and recipe generation.
 */
class InputValidator {
    /**
     * Constructor to initialize the InputValidator object
     */
    constructor() {}

    /**
     * Checks if the value is empty or consists of only whitespace
     * @param {*} value 
     * @returns true if the value is empty or consists of only whitespace, false otherwise
     */
    isEmpty(value) {
        return !value || value.trim() === emptyString;
    }

    /**
     * Checks if the two values are equal
     * @param {*} value1 
     * @param {*} value2 
     * @returns true if the two values are equal, false otherwise
     */
    confirmInput(value1, value2) {
        return value1 === value2;
    }

    /**
     * Checks if the value contains numbers
     * @param {*} value 
     * @returns true if the value contains numbers, false otherwise
     */
    containsNumbers(value) {
        return !/^[A-Za-z, ]+$/.test(value);
    }

}

/**
 * OutputController class to handle the output of the recipe, user list,
 * and favorites to the user interface. Determines the visibility of the
 * error popup and the recipe output. Also formats the padding of the output.
 */
class OutputController {

    /**
     * Constructor to initialize the OutputController object
     */
    constructor() {}

    /**
     * Determines the visibility of the error popup and the recipe output
     * @param {*} tokens 
     * @param {*} totalApi 
     */
    displayUserApiInfo(tokens, totalApi) {
        let apiInfo = messages.apiInfo;
        apiInfo = apiInfo.replace("%TOKENS%", tokens);
        apiInfo = apiInfo.replace("%TOTAL_API_CALLS%", totalApi);
        document.getElementById(tokensLeftConst).innerHTML = apiInfo;
    }

    /**
     * Hides the error popup
     */
    hideErrorPopup() {
        document.getElementById(errorPopup).style.opacity = zero;
        document.getElementById(errorPopup).style.visibility = hiddenConst;
        document.getElementById(errorPopup).style.zIndex = -99;
    }

    /**
     * Displays the error popup with the error message
     * @param {*} errorDetails 
     */
    displayErrorPopup(errorDetails, status) {
        document.getElementById(closeErrorPopup).innerHTML = messages.ok;
        document.getElementById(errorMsg).innerHTML = status ? messages.errorTitle.replace(errorCodeConst, status + spaceString) : messages.errorTitle.replace(errorCodeConst, emptyString);
        document.getElementById(errorDesc).innerHTML = errorDetails
        document.getElementById(errorPopup).style.opacity = one;
        document.getElementById(errorPopup).style.visibility = visibleConst;
        document.getElementById(errorPopup).style.zIndex = 99;
        document.getElementById(closeErrorPopup).addEventListener(clickConst, () => {
            this.hideErrorPopup();
        });
    }

    /**
     * Hides the success popup
     */
    hideSuccessPopup() {
        document.getElementById(sucessPopupWrap).style.opacity = zero;
        document.getElementById(sucessPopupWrap).style.visibility = hiddenConst;
        document.getElementById(sucessPopupWrap).style.zIndex = -99;
    }

    /**
     * Displays the success popup with the error message
     * @param {*} errorDetails 
     */
    displaySuccessPopup(successDetails) {
        document.getElementById(closeSuccessPopupBtn).innerHTML = messages.ok;
        document.getElementById(successMsg).innerHTML = messages.successTitle;
        document.getElementById(successDesc).innerHTML = successDetails;
        document.getElementById(sucessPopupWrap).style.opacity = one;
        document.getElementById(sucessPopupWrap).style.visibility = visibleConst;
        document.getElementById(sucessPopupWrap).style.zIndex = 99;
        document.getElementById(closeSuccessPopupBtn).addEventListener(clickConst, () => {
            this.hideSuccessPopup();
            location.reload();
        });
    }

    /**
     * Empties the recipe output
     */
    emptyRecipeOutput() {
        document.getElementById(recipeTitle).innerHTML = emptyString;
        document.getElementById(ingredientsTitle).innerHTMLinnerHTML = emptyString;
        document.getElementById(ingredientList).innerHTML = emptyString;
        document.getElementById(instructionsTitle).innerHTML = emptyString;
        document.getElementById(instructionList).innerHTML = emptyString;
        document.getElementById(addToFav).style.display = noneConst;
        document.getElementById(outputBg).style.display = noneConst;
    }

    /**
     * Displays the recipe with the title, ingredients, and instructions
     * @param {*} title 
     * @param {*} ingredients 
     * @param {*} instructions 
     */
    displayRecipe(title, ingredients, instructions) {
        this.emptyRecipeOutput();

        document.getElementById(outputBg).style.display = blockConst;

        // document.getElementById("outputWrap").style.display = "block";
        document.getElementById(recipeTitle).innerHTML = title;

        document.getElementById(ingredientsTitle).innerHTML = messages.ingredientsTitle;
        ingredients.forEach(element => {
            document.getElementById(ingredientList).innerHTML += listTemplate.replace(recipeItem, element);
        });

        document.getElementById(instructionsTitle).innerHTML = messages.instructionsTitle;
        instructions.forEach(element => {
            document.getElementById(instructionList).innerHTML += listTemplate.replace(recipeItem, element);
        });

        document.getElementById(addToFav).style.display = blockConst;

        // initialize add to fav button
        const buttonController = new ButtonController();
        buttonController.initFavBtn(title, ingredients, instructions);

        this.formatPadding(scrollTopConst, scrollBottomConst);
    }

    /**
     * Displays the loading icon
     */
    displayLoadingIcon() {
        document.getElementById(loaderConst).style.zIndex = 99;
        document.getElementById(loaderConst).style.display = flexConst;
    }
    
    /**
     * Hides the loading icon
     */
    hideLoadingIcon() {
        document.getElementById(loaderConst).style.zIndex = -99;
        document.getElementById(loaderConst).style.display = noneConst;
    }

    /**
     * Displays the user list in a table format for admin to view
     * @param {*} stats 
     * @returns 
     */
    displayApiStats(stats) {
        const tableOutput = document.getElementById(apiStatsList);
    
        // Check if there are users to display
        if (stats.length === 0) {
            tableOutput.innerHTML = emptyString;
            document.getElementById(apiStatsList).innerHTML = messages.noApiStatsFound;
            return;
        }
        
        // Extract column names dynamically, but exclude "id"
        const columnNames = Object.keys(stats[0]).filter(column => column !== idconst);
    
        let table = tableHeadBuild;
    
        // Generate table headers dynamically (excluding "id")
        columnNames.forEach(column => {
            table += tableHeadTemplate.replace(recipeItem, column);
        });
    
        table += tableHeadEnd;
    
        // Generate table rows dynamically
        stats.forEach(row => {
            let rowContent = emptyString;
            
            // Populate row cells, excluding "id"
            columnNames.forEach(column => {
                rowContent += tableCellTemplate.replace(cellItem, row[column] !== undefined ? row[column] : emptyString);
            });
    
            table += tableRowTemplate.replace(cellContents, rowContent);
        });
    
        table += tableEndConst;
    
        // Update the table output
        tableOutput.innerHTML = table;
    
        // Convert the table into a DataTable
        $(hashtagApiStats).DataTable();
    }
    
    /**
     * Displays the user list in a table format for admin to view
     * @param {*} users 
     * @returns the user list in a table format
     */
    displayUserList(users) { 
        const tableOutput = document.getElementById(userList);
    
        // Check if there are users to display
        if (users.length === 0) {
            tableOutput.innerHTML = emptyString;
            document.getElementById(userList).innerHTML = messages.noUsersFound;
            return;
        }
        
        // Extract column names dynamically, but exclude "user_id"
        const columnNames = Object.keys(users[0]).filter(column => column !== userIdconst);
    
        let table = tableHeadBuild;
    
        // Generate table headers dynamically (excluding "user_id")
        columnNames.forEach(column => {
            table += tableHeadTemplate.replace(recipeItem, column);
        });
    
        // Add an extra "Actions" column
        table += tableHeadTemplate.replace(recipeItem, actionItems);
        table += tableHeadEnd;
    
        // Generate table rows dynamically
        users.forEach(row => {
            let rowContent = emptyString;
            
            // Populate row cells, excluding "user_id"
            columnNames.forEach(column => {
                rowContent += tableCellTemplate.replace(cellItem, row[column] !== undefined ? row[column] : emptyString);
            });
    
            // Insert "Edit" and "Delete" buttons with user_id embedded in the ID
            const actionButtons = tableButtonsTemplate.replaceAll(idItem, row.user_id);
            rowContent += tableCellTemplate.replace(cellItem, actionButtons);
    
            table += tableRowTemplate.replace(cellContents, rowContent);
        });
    
        table += tableEndConst;
    
        // Update the table output
        tableOutput.innerHTML = table;
    
        // Convert the table into a DataTable
        $(hashtagUserList).DataTable();
    }   
    
    /**
     * Displays the edit user modal with the user id and token amount
     * @param {*} userId 
     */
    displayEditUserModal(userId) {
        document.getElementById(editUserModalLabel).innerHTML = messages.editUserToken;
        document.getElementById(editTokensLabel).innerHTML = messages.editTokensLabel;
        document.getElementById(cancelEditBtn).innerHTML = messages.cancelBtn;
        document.getElementById(updateBtn).innerHTML = messages.updateBtn;

        // Find the row associated with this userId
        const row = document.querySelector(getUserSelector(userId)).closest(trConst);
    
        // Extract the token amount from the appropriate column
        const tokenColumnIndex = 1; // Adjust index based on table structure
        const tokenValue = row.cells[tokenColumnIndex].textContent.trim();
    
        // Set the extracted token value in the input field
        document.getElementById(editTokensInput).value = tokenValue;
    }

    /**
     * Displays the delete user modal with the user id and email address
     * @param {*} userId 
     */
    displayDeleteUserModal(userId) {
        document.getElementById(deleteUserModalLabel).innerHTML = messages.deleteUserModalLabel;
        document.getElementById(cancelDeleteButton).innerHTML = messages.cancelBtn;
        document.getElementById(confirmDeleteButton).innerHTML = messages.deleteBtn;

        // Find the row associated with this userId
        const row = document.querySelector(getUserSelector(userId)).closest(trConst);
    
        // Extract the token amount from the appropriate column
        const emailColumnIndex = 0; // Adjust index based on table structure
        const emailAddress = row.cells[emailColumnIndex].textContent.trim();
    
        // Set the extracted token value in the input field
        document.getElementById(deleteUserConfirm).innerHTML = messages.deleteUserConfirm.replace("%USER%", emailAddress);
    }

    /**
     * Formats the padding of the output based on the offset width of each scroll
     * @param {*} topScroll 
     * @param {*} bottomScroll 
     */
    formatPadding(topScroll, bottomScroll) {
        const top = document.getElementById(topScroll);
        if (top) top.style.height = `${top.offsetWidth / 316 * 100}px`;

        const bottom = document.getElementById(bottomScroll);
        if (bottom) bottom.style.height = `${bottom.offsetWidth / 316 * 100}px`;
    }

    /**
     * Displays the favorites in a div format by iterating through the favorites
     * and displaying the title, ingredients, and instructions.
     * @param {*} favorites 
     * @returns the favorites in a div format
     */
    displayFavorites(favorites) {
        const favoritesContainer = document.getElementById(favoritesConst);
    
        favoritesContainer.innerHTML = emptyString;
    
        if (!favorites || favorites.length === 0 || favorites === null) {
            favoritesContainer.innerHTML = messages.noFavsFound;
            return;
        }

        let dummyID = 0;

        // Iterate through the favorites and display them
        favorites.forEach(recipe => {
            let content = favoritesTemplate;

            let ingredientList = emptyString;
            recipe.ingredients.forEach(ingredient => {
                ingredientList += listTemplate.replace(recipeItem, ingredient);
            });

            let methodList = emptyString;
            recipe.directions.forEach(method => {
                methodList += listTemplate.replace(recipeItem, method);
            });

            content = content
                .replace("%RECIPE_TITLE%", recipe.title)
                .replace("%INGREDIENTS_TITLE%", messages.ingredientsTitle)
                .replace("%INGREDIENT_LIST%", ingredientList)
                .replace("%INSTRUCTIONS_TITLE%", messages.instructionsTitle)
                .replace("%INSTRUCTION_LIST%", methodList)
                .replace("%FAV_ID%", recipe.recipeId).replace("%DELETE_BTN%", messages.deleteFromFav)
                // .replace("%TID%", recipe.recipeId).replace("%BID%", recipe.recipeId);
                .replace("%TID%", dummyID).replace("%BID%", dummyID);

            // Append updated `content`
            favoritesContainer.innerHTML += content;

            // Adjust scroll top & bottom dynamically
            // this.formatPadding(scrollTopConst+recipe.recipeId, scrollBottomConst+recipe.recipeId);
            this.formatPadding(scrollTopConst+dummyID, scrollBottomConst+dummyID);

            dummyID++;
        });
    
        favoritesContainer.style.width = `${favorites.length * 100}%`;
    
        // Use ButtonController to initialize navigation
        const buttonController = new ButtonController();
        buttonController.initFavNavigation(document.querySelector(prevConst), document.querySelector(nextConst), favorites.length, this.displayNextFav);
        buttonController.initDeleteFavBtns();
    }

    /**
     * Displays the next favorite recipe based on the index
     * @param {*} index 
     */
    displayNextFav(index) {
        const offset = -index * (document.getElementById(favoritesWrap).clientWidth); // Calculate the offset
        document.getElementById(favoritesConst).style.transform = translateStyleConst.replace(offsetConst, offset);
    }
}

/**
 * ButtonController class to handle the button events for the login,
 * signup, recipe generation, and favorite navigation.
 */
class ButtonController {
    /**
     * Constructor to initialize the ButtonController
     * object with the RecipeAPI and InputValidator objects
     */
    constructor() {
        this.xhr = new RecipeAPI();
        this.inputValidator = new InputValidator();
    }

    /**
     * Initializes the login button event listener.
     */
    initLoginBtn() {
        document.getElementById(loginBtn).addEventListener(clickConst, (e) => {
            e.preventDefault();
            const email = document.getElementById(emailInput).value;
            const pw = document.getElementById(pwInput).value;
            this.xhr.login(email, pw);
        });
    }

    /**
     * Initializes the logout button event listener.
     */
    initLogoutBtn() {
        document.getElementById(logoutBtn).addEventListener(clickConst, (e) => {
            e.preventDefault();
            this.xhr.logout();
        });
    }

    /**
     * Initializes the signup button event listener.
     */
    initSignupBtn() {
        document.getElementById(signupBtn).addEventListener(clickConst, (e) => {
            e.preventDefault();
            const email = document.getElementById(emailInput).value;
            const pw = document.getElementById(pwInput).value;
            const pwConfirmed = document.getElementById(pwConfirm).value;
            if (!this.inputValidator.confirmInput(pw, pwConfirmed)) {
                this.xhr.outputController.displayErrorPopup(messages.pwMatchError);
                return;
            }
            this.xhr.signup(email, pw);
        });
    }

    /**
     * Initializes the conjure button event listener with the input validation
     * and token check.
     * @param {*} tokensLeft 
     */
    initConjureBtn(tokensLeft) {
        document.getElementById(conjureBtn).addEventListener(clickConst, (e) => {
            e.preventDefault();
            const input = document.getElementById(ingredientInput).value;
            if (this.inputValidator.isEmpty(input)) {
                this.xhr.outputController.displayErrorPopup(messages.emptyInput);
                return;
            }
            if (this.inputValidator.containsNumbers(input)) {
                this.xhr.outputController.displayErrorPopup(messages.recipeInputError);
                return;
            }
            if (tokensLeft <= 0) {
                this.xhr.outputController.displayErrorPopup(messages.tokenEmpty);
            }
            this.xhr.getRecipe(input.trim());
        });
    }

    /**
     * Initializes the favorite button event listener.
     */
    initFavBtn(title, ingredients, instructions) {
        document.getElementById(addToFav).addEventListener(clickConst, (e) => {
            e.preventDefault();
            this.xhr.addToFavorites(title, ingredients, instructions);
        });
    }

    /**
     * Initializes the favorite navigation buttons with the index and display
     * function for the favorites
     * @param {*} prevBtn 
     * @param {*} nextBtn 
     * @param {*} favoritesLength 
     * @param {*} displayNextFav 
     */
    initFavNavigation(prevBtn, nextBtn, favoritesLength, displayNextFav) {
        let index = 0;
    
        // Controls the click event for the next button, including handling looping
        nextBtn.addEventListener(clickConst, () => {
            if (index < favoritesLength - 1) {
                index++;
            } else {
                index = 0; // Loop back to the first page
            }
            displayNextFav(index);
        });
    
        // Controls the click event for the previous button, including handling looping
        prevBtn.addEventListener(clickConst, () => {
            if (index > 0) {
                index--;
            } else {
                index = favoritesLength - 1; // Loop back to the last page
            }
            displayNextFav(index);
        });
    
        // Show buttons only if there are multiple favorites
        if (favoritesLength > 1) {
            nextBtn.style.display = blockConst;
            prevBtn.style.display = blockConst;
        }
    }

    /**
     * Initializes the delete favorite button event listener.
     */
    initDeleteFavBtns() {
        document.querySelectorAll(deleteFavBtn).forEach(btn => {
            btn.addEventListener(clickConst, () => {
                this.xhr.delteFavorite(btn.dataset.favid);
            })
        });
    }

    /**
     * Initializes the user list buttons for edit and delete actions
     * and attaches event listeners to them.
     */
    initUserListBtns() {
        const tableOutput = document.getElementById(userList);

        // Use event delegation to handle button clicks dynamically
        tableOutput.addEventListener(clickConst, (event) => {
            const target = event.target;

            if (target.classList.contains(editUserBtn)) {
                const userId = target.dataset.userid; // Fetch user_id from data attribute
                this.initEditUser(userId);
            }

            if (target.classList.contains(deleteUserBtn)) {
                const userId = target.dataset.userid;
                this.initDeleteUser(userId);
            }
        });
    }

    /**
     * Initializes the edit user modal with the user id and token amount
     * and attaches event listeners to the update and cancel buttons.
     * @param {*} userId 
     */
    initEditUser(userId) {
        this.xhr.outputController.displayEditUserModal(userId);
    
        // Attach event listeners for update and cancel buttons
        document.getElementById(updateButton).addEventListener(clickConst, () => {
            this.xhr.updateUserToken(userId, document.getElementById(editTokensInput).value);
        });
        document.getElementById(cancelEditBtn).addEventListener(clickConst, () => {
            document.getElementById(editUserModal).classList.remove(modalToggled);
        });
    
        // Show the edit user modal
        document.getElementById(editUserModal).classList.add(modalToggled);
        this.xhr.outputController.formatPadding(editScrollTop, editScrollBottom);
    }    

    /**
     * Initializes the delete user modal with the user id and email address
     * and attaches event listeners to the delete and cancel buttons.
     * @param {*} userId 
     */
    initDeleteUser(userId) {
        this.xhr.outputController.displayDeleteUserModal(userId);

        // Attach event listeners for delete and cancel buttons
        document.getElementById(confirmDeleteButton).addEventListener(clickConst, () => {
            this.xhr.delteUser(userId);
        });
        document.getElementById(cancelDeleteBtn).addEventListener(clickConst, () => {
            document.getElementById(deleteUserModal).classList.remove(modalToggled);
        })

        // Show the delete user modal
        document.getElementById(deleteUserModal).classList.add(modalToggled);
        this.xhr.outputController.formatPadding(deleteScrollTop, deleteScrollBottom);
    }
}

/**
 * NavBar class to handle the navigation bar for the user and admin roles.
 */
class NavBar {
    /**
     * Constructor to initialize the NavBar object with the session controller
     * and the navigation pages for the user and admin roles.
     */
    constructor() {
        this.session = new SessionController();
        this.userRole = this.session.getUserRole();
        this.itemNavs = [favPage, cookingPage];
        this.adminNavs = [infoPage, favPage, cookingPage];
    }

    /**
     * Initializes the logo for the navigation bar
     * @returns the logo for the navigation bar
     */
    initLogo() {
        return initButtonTemplate.replace("%APP_NAME%", messages.appName);
    }

    /**
     * Initializes the login button for the navigation bar
     * @returns the login button for the navigation bar
     */
    initLoginBtn() {
        return initLoginButtonTemplate.replace("%LOGIN_TITLE%", messages.loginTitle);
    }

    /**
     * Initializes the logout button for the navigation bar
     * @returns the logout button for the navigation bar
     */
    initLogoutBtn() {
        return logoutButtonTemplate.replace("%LOGOUT_BTN%", messages.logoutBtn);
    }

    /**
     * Initializes the menu for the navigation bar based on the user role
     * @param {*} loggedIn 
     * @returns the menu for the navigation bar
     */
    initMenu(loggedIn) {
        const menu = document.createElement(ulConst);
        menu.classList.add(navBarConst, headerFont);

        const itemNav = this.userRole === adminConst ? this.adminNavs : this.itemNavs;
        const item = this.userRole === adminConst ? adminNavItems : genNavItems;
        for (let i = 0; i < item.length; i++) {
            const menuItem = menuItemTemplate.replace("%ITEM_NAV%", itemNav[i]).replace(recipeItem, item[i]);
            menu.innerHTML+= menuItem;
        }

        if (loggedIn) {
            menu.innerHTML += (this.initLogoutBtn());
        } else {
            menu.innerHTML += (this.initLoginBtn());
        }
        
        return menu;
    }

    /**
     * Initializes the navigation bar with the logo and menu
     * @param {*} loggedIn 
     */
    initNavBar(loggedIn) {
        document.getElementById(headerConst).innerHTML += this.initLogo();
        document.getElementById(headerConst).append(this.initMenu(loggedIn));   
        if (loggedIn) {
            const buttonController = new ButtonController();
            buttonController.initLogoutBtn();   
        }
    }
}

/**
 * CustomCursor class to handle the custom cursor for the user interface.
 */
class CustomCursor {
    /**
     * Constructor to initialize the CustomCursor object with the custom cursor
     * element and the event listeners for the mouse move and hoverable items.
     */
    constructor() {
        this.insertCustomCur();
        this.cursor = document.getElementById(customCurConst);
        this.initMouseMove();
        this.initHoverable();
    }

    /**
     * Initializes the mouse move event listener to move the cursor with the mouse
     */
    initMouseMove() {
        // Move cursor with mouse
        document.addEventListener(mousemove, (event) => {
            this.cursor.style.left = `${event.clientX}px`;  // Adjust x position
            this.cursor.style.top = `${event.clientY}px`;  // Adjust y position to center cursor
        });
    }

    /**
     * Initializes the hoverable items with the custom cursor
     */
    initHoverable() {
        // Add hover effect to all elements with the "hoverable" class
        document.querySelectorAll(hoverableConst).forEach(element => {
            element.addEventListener(mouseenter, () => {
                document.body.style.cursor = noneConst;  // Hide default cursor when hovering over hoverable items
                this.cursor.style.display = blockConst;  // Show custom cursor when hovering
            });
            element.addEventListener(mouseleave, () => {
                document.body.style.cursor = autoConst;  // Restore default cursor when not hovering over hoverable items
                this.cursor.style.display = noneConst;  // Hide custom cursor when not hovering
            });
        });
    }

    /**
     * Inserts the custom cursor element into the body of the document
     */
    insertCustomCur() {
        const customCur = document.createElement(divConst);
        customCur.id = customCurConst;
        document.body.appendChild(customCur);
    }
}

/**
 * UI class to handle the user interface for the login, signup, recipe generation,
 * user list, and favorites. Initializes the navigation bar, buttons, session, and
 * custom cursor for the user interface.
 */
class UI {
    /**
     * Constructor to initialize the UI object with the navigation bar, button
     * controller, session controller, user role, and custom cursor.
     * @param {*} currLocation 
     */
    constructor(currLocation) {
        this.navBar = new NavBar();
        this.btnController = new ButtonController();
        this.session = new SessionController();
        this.userRole = this.session.getUserRole();
        this.loggedIn = this.userRole ? true : false;
        this.init(currLocation);
        this.customCur = new CustomCursor();
    }

    /**
     * Checks if the session has expired and redirects to the login page if it has
     * expired. Clears the session if it has expired.
     */
    checkSession() {
        if (this.loggedIn && this.session.isSessionExpired()) {
            this.session.clearSession();
            alert(messages.sessionExpired);
            window.location.href = loginPage; // Redirect to login page
        }
    }

    /**
     * Initializes the user interface based on the current location
     * @param {*} currLocation 
     */
    init(currLocation) {
        const currPage = currLocation.pathname;
        if (currPage.toLowerCase().includes(loginEndpoint)) {
            this.initLogin();
        } else if (currPage.toLowerCase().includes(signupEndpoint)) {
            this.initSignup();
        } else if (currPage.toLowerCase().includes(cookingEndpoint)) {
            this.initMagic();
        } else if (currPage.toLowerCase().includes(favEndpoint)) {
            this.initFavs();
        } else if (currPage.toLowerCase().includes(infoPageEndpoint)) {
            this.initInfoPage();
        } else {
            this.initIndex();
        }
        // init navbar
        this.navBar.initNavBar(this.loggedIn);
        // check if session expired
        this.checkSession(); 
    }

    /**
     * Initializes the user API info with the tokens left and total API calls
     */
    initUserApiInfo() {
        if (this.loggedIn) {
            this.btnController.xhr.getIndexApiInfo(); // fetching api info
        } else {
            document.getElementById(tokensLeftConst).innerHTML = "";
        }
    }

    /**
     * Initializes the index page based on the user role
     * @returns the index page based on the user role
     */
    initIndex() {
        this.initUserApiInfo();
        if (this.userRole === adminConst) {
            document.getElementById(titleConst).innerHTML = messages.adminIndexTitle;
            document.getElementById(descConst).innerHTML = emptyString;
            document.getElementById(goCook).innerHTML = messages.goToUserList;
            document.getElementById(goCook).href = infoPage;
            return;
        }
        document.getElementById(titleConst).innerHTML = messages.indexTitle;
        document.getElementById(descConst).innerHTML = messages.indexDesc;
        document.getElementById(goCook).innerHTML = messages.startCooking;
        document.getElementById(goCook).href = this.loggedIn ? cookingPage : loginPage;
    }

    /**
     * Initializes the login page with the login title, email placeholder,
     * password placeholder, login button, and signup direction
     */
    initLogin() {
        document.getElementById(titleConst).innerHTML = messages.loginTitle;
        document.getElementById(emailInput).placeholder = messages.emailPlaceholder;
        document.getElementById(pwInput).placeholder = messages.pwPlaceholder;
        document.getElementById(loginBtn).innerHTML = messages.loginBtn;
        document.getElementById(signupDir).innerHTML = messages.signupDir;
        this.btnController.initLoginBtn();
    }

    /**
     * Initializes the signup page with the signup title, email placeholder,
     * password placeholder, password confirmation placeholder, signup button, and
     * login direction.
     */
    initSignup() {
        document.getElementById(titleConst).innerHTML = messages.signupTitle;
        document.getElementById(emailInput).placeholder = messages.emailPlaceholder;
        document.getElementById(pwInput).placeholder = messages.pwPlaceholder;
        document.getElementById(pwConfirm).placeholder = messages.pwConfirm;
        document.getElementById(signupBtn).innerHTML = messages.signupBtn;
        document.getElementById(loginDir).innerHTML = messages.loginDir;
        this.btnController.initSignupBtn();
    }

    /**
     * Initializes the magic page with the title, ingredient placeholder, conjure button,
     * and add to favorites button.
     */
    initMagic() {
        // Redirect to login if not logged in
        if (!this.loggedIn) {
            window.location.href = loginPage;
            return;
        }
        document.getElementById(titleConst).innerHTML = messages.castTitle;
        document.getElementById(ingredientInput).placeholder = messages.ingredientPlaceholder;
        document.getElementById(conjureBtn).innerHTML = messages.castSpell;
        document.getElementById(addToFav).innerHTML = messages.addToFavBtn;
        this.btnController.initConjureBtn(this.session.getUserTokens());
    }

    /**
     * Initializes the favorites page with the title and the favorites from the API.
     */
    initFavs() {
        // Redirect to login if not logged in
        if (!this.loggedIn) {
            window.location.href = loginPage;
            return;
        }
        document.getElementById(titleConst).innerHTML = messages.favTitle;
        this.btnController.xhr.getFavorites();
    }

    /**
     * Initializes the info page with the title and the api stats from the API.
     * Redirects to index if not admin and displays error message.
     * @returns the info page for the admin role
     */
    initInfoPage() {
        // Redirect to index if not admin and display error message
        if (this.userRole !== adminConst) {
            window.location.href = indexPage;
            alert(messages.notAdmin)
            return;
        }
        this.initApiStats();
        this.initUserList();
    }

    /**
     * Initializes the info page with the title and the api stats from the API.
     */
    initApiStats() {
        document.getElementById(apiStatsTitle).innerHTML = messages.apiTitle;
        this.btnController.xhr.getApiStats();
    }

    /**
     * Initializes the info page with the title and the user list from the API.
     */
    initUserList() {
        document.getElementById(userListTitle).innerHTML = messages.userListTitle;
        this.btnController.xhr.getUserList();
        this.btnController.initUserListBtns();
    }
}

/**
 * Event listener for the DOM content load to initialize the user interface
 * based on the current location.
 */
document.addEventListener(DOMContentLoadConst, () => {    
    new UI(window.location);
});