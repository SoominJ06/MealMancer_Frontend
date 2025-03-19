/** String Constants */
// Session Storage
const userInfo = "userInfo";
const adminConst = "admin";

// Navitems
const backendUrl = "https://meal-mancer-api-q3zh9.ondigitalocean.app/";
const indexPage = "index.html";
const loginPage = "login.html";
const signupPage = "signup.html";
const cookingPage = "cookingConjuration.html";
const favPage = "favorites.html";
const userListPage = "userList.html";
const DOMContentLoadConst = "DOMContentLoaded";
const methodPost = "POST";
const methodGet = "GET";
const methodPut = "PUT";
const methodDelete = "DELETE";
const contentType = "Content-Type";
const appJson = "application/json";
const loginEndpoint = "login";
const logoutEndpoint = "logout";
const signupEndpoint = "signup";
const favEndpoint = "favorites";
const userListEndpoint = "userlist";
const cookingEndpoint = "cooking";

// ContentIDs
const errorPopup = "errorPopupWrap";
const closeErrorPopup = "closeErrorPopupBtn";
const errorMsg = "errorMsg";
const errorDesc = "errorDesc";
const recipeTitle = "recipeTitle";
const ingredientsTitle = "ingredientsTitle";
const ingredientList = "ingredientList";
const instructionsTitle = "instructionsTitle";
const instructionList = "instructionList";
const addToFav = "addToFav";
const outputBg = "outputBg";
const userList = "userList";
const outputWrap = "outputWrap";
const favoritesWrap = "favoritesWrap";
const favoriteBg = "favoriteBg";
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

// Styling
const zero = "0";
const one = "1";
const hiddenConst = "hidden";
const visibleConst = "visible";
const noneConst = "none";
const blockConst = "block";
const headerFont = "headerFont";
const autoConst = "auto";
const divConst = "div";
const ulConst = "ul";

// Event Listeners
const mouseleave = "mouseleave";
const mouseenter = "mouseenter";
const mousemove = "mousemove";
const clickConst = "click";

/**
 * SessionController class to manage the user session by 
 * storing and retrieving user tokens, role, and JWT token.
 */
class SessionController {
    /**
     * Constructor to initialize the session object
     */
    constructor() {
        this.session = JSON.parse(sessionStorage.getItem(userInfo)) || {};
    }

    /**
     * Sets the users role, tokens, and the time the session expires in the session storage
     * @param {*} role
     * @param {*} tokens 
     * @param {*} expiresAt  
     */
    setUserInfo(role, tokens, expiresAt) {
        this.session = { role, tokens, expiresAt };
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
     * Getter for the expiration time from the session storage
     * @returns the expiration time from the session storage
     */
    getExpireTime() {
        return this.session.expiresAt || null;
    }

    /**
     * Clears the session storage of the user information
     */
    clearSession() {
        sessionStorage.removeItem(userInfo);
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
     * Retrieves a recipe based on the user input from the API
     * @param string ingredients 
     */
    getRecipe(ingredients) {
        // testing with dummy data
        // const title = "avocado and tomato breakfast toast";
        // const ingredient = ["2 slices whole grain bread", "1 slice avocado", "1 medium tomato, sliced", "2 slices cooked bacon", "2 eggs", "salt and pepper to taste", "olive oil spray"];
        // const method = ["toast the bread slices in a toaster or under the broiler until golden brown.", "lightly spray a frying pan with olive oil spray and heat over medium heat.", "add the sliced avocado, tomato, and cooked bacon to the pan.", "season with salt and pepper, and cook for 3-4 minutes, or until the avocado is soft.", "add the eggs to the pan and scramble until fully cooked.", "remove from heat and cover the pan with a lid.", "serve immediately."];
        // this.outputController.displayRecipe(title, ingredient, method)

        // actual fetch
        this.xhttp.open(methodGet, this.baseUrl + "generate/?ingredients=" + ingredients, true);
        this.xhttp.withCredentials = true; // for Cookies
        this.xhttp.setRequestHeader("Authorization", `Bearer ${this.session.getJWTToken()}`);
        this.xhttp.send();
        this.xhttp.onreadystatechange = () => {
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (this.xhttp.status === 200) {
                    this.session.reduceToken();
                    this.outputController.displayRecipe(response.title, response.ingredients, response.directions)
                } else {
                    this.outputController.displayErrorPopup(messages.error);
                }
            }
        }
    }

    /**
     * Logs in the user based on the email and password, and stores the user
     * info in the session storage.
     * @param string email 
     * @param string pw 
     */
    login(email, pw) {
        this.xhttp.open(methodPost, this.baseUrl + loginEndpoint, true);
        this.xhttp.withCredentials = true;
        this.xhttp.setRequestHeader(contentType, appJson);
        const requestData = JSON.stringify({ email: email, password: pw });
        this.xhttp.send(requestData);   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (this.xhttp.status === 200) {
                    // Store user info in session storage
                    this.session.setUserInfo(response.role, response.tokens, response.expiresAt );
                    window.location.href = indexPage;
                } else {
                    this.outputController.displayErrorPopup(response.message);
                }
            }
        }
        
        // For testing admin
        // this.session.setUserInfo("admin", 20, "jwt");
        // window.location.href = "index.html";
    }

    /**
     * Signs up the user based on the email and password, and stores the user
     * info in the session storage.
     * @param string email 
     * @param string pw 
     */
    signup(email, pw) {
        this.xhttp.open(methodPost, this.baseUrl + signupEndpoint, true);
        this.xhttp.withCredentials = true;
        this.xhttp.setRequestHeader(contentType, appJson);
        const requestData = JSON.stringify({ email: email, password: pw });
        this.xhttp.send(requestData);   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (this.xhttp.status === 200) {
                    this.session.setUserInfo(response.role, response.tokens, response.jwt);
                    window.location.href = indexPage
                } else {
                    this.outputController.displayErrorPopup(response.message);
                }
            }
        }
    }

    /**
     * Logs in the user based on the email and password, and stores the user
     * info in the session storage.
     * @param string email 
     * @param string pw 
     */
    logout() {
        this.xhttp.open(methodPost, this.baseUrl + logoutEndpoint, true);
        this.xhttp.withCredentials = true;
        // this.xhttp.setRequestHeader(contentType, appJson);
        // const requestData = JSON.stringify({ email: email, password: pw });
        // this.xhttp.send(requestData);   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (this.xhttp.status === 200) {
                    // Clear session
                    this.session.clearSession();
                    window.location.href = indexPage;
                } else {
                    this.outputController.displayErrorPopup(response.message);
                }
            }
        }
    }

    /**
     * Retrieves the list of users from the API and displays it in the table
     * for admins to view.
     */
    getUserList() {
        // Testing DataTable
        let dummy = [
            {"id": 0, "name" : "Test1", "dob": "2000-01-01"}, 
            {"id": 1, "name" : "Test2", "dob": "2000-02-02"}, 
            {"id": 2, "name" : "Test3", "dob": "2000-03-03"}, 
        ];

        this.outputController.displayUserList(dummy);
    }

    /**
     * Retrieves the list of favorite recipes from the API and displays it
     * for the user to view.
     */
    getFavorites() {
        // Testing dummy data
        const ingredient1 = ["2 slices whole grain bread", "1 slice avocado", "1 medium tomato, sliced", "2 slices cooked bacon", "2 eggs", "salt and pepper to taste", "olive oil spray"];
        const ingredient2 = ["2 slices whole grain bread", "1 slice avocado", "1 medium tomato, sliced"];
        const method1 = ["toast the bread slices in a toaster or under the broiler until golden brown.", "lightly spray a frying pan with olive oil spray and heat over medium heat.", "add the sliced avocado, tomato, and cooked bacon to the pan.", "season with salt and pepper, and cook for 3-4 minutes, or until the avocado is soft.", "add the eggs to the pan and scramble until fully cooked.", "remove from heat and cover the pan with a lid.", "serve immediately."];
        const method2 = ["toast the bread slices in a toaster or under the broiler until golden brown.", "toast the bread slices in a toaster or under the broiler until golden brown.", "toast the bread slices in a toaster or under the broiler until golden brown.", "toast the bread slices in a toaster or under the broiler until golden brown.", "toast the bread slices in a toaster or under the broiler until golden brown.", "toast the bread slices in a toaster or under the broiler until golden brown."]
        const method3 = ["toast the bread slices in a toaster or under the broiler until golden brown.", "lightly spray a frying pan with olive oil spray and heat over medium heat.", "add the sliced avocado, tomato, and cooked bacon to the pan.", "season with salt and pepper, and cook for 3-4 minutes, or until the avocado is soft.", "add the eggs to the pan and scramble until fully cooked.", "remove from heat and cover the pan with a lid.", "serve immediately.", "toast the bread slices in a toaster or under the broiler until golden brown.", "lightly spray a frying pan with olive oil spray and heat over medium heat.", "add the sliced avocado, tomato, and cooked bacon to the pan.", "season with salt and pepper, and cook for 3-4 minutes, or until the avocado is soft.", "add the eggs to the pan and scramble until fully cooked.", "remove from heat and cover the pan with a lid."];
        const dummy = [
            {"title": "Recipe 1", "ingredients": ingredient1, "methods": method1},
            {"title": "Recipe 2", "ingredients": ingredient2, "methods": method2},
            {"title": "Recipe 3", "ingredients": ingredient1, "methods": method3}
        ];
        this.outputController.displayFavorites(dummy)
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
        return !value || value.trim() === "";
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

    /**
     * Removes all whitespace from the value
     * @param {*} value 
     * @returns the value without any whitespace
     */
    removeWhitespace(value) {
        return value.replace(/\s+/g, ""); // Removes all spaces
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
     * Hides the error popup
     */
    hideErrorPopup() {
        document.getElementById(errorPopup).style.opacity = zero;
        document.getElementById(errorPopup).style.visibility = hiddenConst;
    }

    /**
     * Displays the error popup with the error message
     * @param {*} errorMsg 
     */
    displayErrorPopup(errorMsg) {
        document.getElementById(closeErrorPopup).innerHTML = messages.ok;
        document.getElementById(errorMsg).textContent = messages.errorTitle;
        document.getElementById(errorDesc).innerHTML = errorMsg
        document.getElementById(errorPopup).style.opacity = one;
        document.getElementById(errorPopup).style.visibility = visibleConst;
        document.getElementById(closeErrorPopup).addEventListener(clickConst, () => {
            this.hideErrorPopup();
        })
    }

    /**
     * Empties the recipe output
     */
    emptyRecipeOutput() {
        document.getElementById(recipeTitle).innerHTML = "";
        document.getElementById(ingredientsTitle).innerHTMLinnerHTML = "";
        document.getElementById(ingredientList).innerHTML = "";
        document.getElementById(instructionsTitle).innerHTML = "";
        document.getElementById(instructionList).innerHTML = "";
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
            document.getElementById(ingredientList).innerHTML += `<li>${element}</li>`;
        });

        document.getElementById(instructionsTitle).innerHTML = messages.instructionsTitle;
        instructions.forEach(element => {
            document.getElementById(instructionList).innerHTML += `<li>${element}</li>`;
        });

        document.getElementById(addToFav).style.display = blockConst;

        this.formatPadding(document.getElementById(outputBg), document.getElementById(outputWrap));
    }

    /**
     * Displays the user list in a table format for admin to view
     * @param {*} users 
     * @returns the user list in a table format
     */
    displayUserList(users) {
        const tableOutput = document.getElementById(userList);

        // Checks if tableData is empty
        if (users.length <= 0) {
            tableOutput.innerHTML = "";
            document.getElementById(userList).innerHTML = messages.noUsersFound;
            return;
        }
        
        // Extract the column names dynamically from the first object
        const columnNames = Object.keys(users[0]);
    
        let table = `<table><thead><tr>`;
        
        // Dynamically create table headers
        columnNames.forEach(column => {
            table += `<th>${column}</th>`;
        });

        table += `</tr></thead><tbody>`;

        // Dynamically create table rows
        users.forEach(row => {
            table += `<tr>`;
            columnNames.forEach(column => {
                table += `<td>${row[column] !== undefined ? row[column] : ""}</td>`;
            });
            table += `</tr>`;
        });
    
        table += `</tbody></table>`;

        tableOutput.innerHTML = "";
        document.getElementById(userList).innerHTML = table;

        // Setting table as DataTable
        $('#userList').DataTable();
    }

    /**
     * Formats the padding of the output based on the content and container
     * @param {*} container 
     * @param {*} content 
     */
    formatPadding(container, content) {
        let counter = 1;
        let maxAttempts = 10;

        while (container.clientHeight / content.clientHeight < 1.13 && counter < maxAttempts) {
            counter++;
            content.style.padding = `${100 + (10 * counter)}px 80px`;
        }
    }

    /**
     * Displays the favorites in a div format by iterating through the favorites
     * and displaying the title, ingredients, and instructions.
     * @param {*} favorites 
     * @returns the favorites in a div format
     */
    displayFavorites(favorites) {
        const favoritesContainer = document.getElementById(favEndpoint);
    
        favoritesContainer.innerHTML = "";
    
        if (favorites.length === 0 || favorites === null) {
            favoritesContainer.innerHTML = messages.noFavsFound;
            return;
        }
    
        favorites.forEach(recipe => {
            const favoriteDivWrap = document.createElement(divConst);
            favoriteDivWrap.className = favoriteBg;
    
            const favoriteDiv = document.createElement(divConst);
            favoriteDiv.className = favorite;
    
            let content = `<div class="title titleFont" id="recipeTitle">${recipe.title}</div>
                            <div class="ingredients divide">
                                <div class="desc headerFont" id="ingredientsTitle">${messages.ingredientsTitle}</div>
                                <ul id="ingredientList">`;
    
            recipe.ingredients.forEach(ingredient => {
                content += `<li>${ingredient}</li>`;
            });
    
            content += `</ul>
                        </div>
                        <div class="instructions divide">
                            <div class="desc headerFont" id="instructionsTitle">${messages.instructionsTitle}</div>
                            <ul id="instructionList">`;
    
            recipe.methods.forEach(method => {
                content += `<li>${method}</li>`;
            });
    
            content += `</ul>
                        </div>`;
    
            favoriteDiv.innerHTML = content;
            favoriteDivWrap.appendChild(favoriteDiv);
            favoritesContainer.appendChild(favoriteDivWrap);
            
            this.formatPadding(favoriteDivWrap, favoriteDiv);
        });
    
        favoritesContainer.style.width = `${favorites.length * 100}%`;
    
        // Use ButtonController to initialize navigation
        const buttonController = new ButtonController();
        buttonController.initFavNavigation(document.querySelector('.prev'), document.querySelector('.next'), favorites.length, this.displayNextFav);
    }

    /**
     * Displays the next favorite recipe based on the index
     * @param {*} index 
     */
    displayNextFav(index) {
        const offset = -index * (document.getElementById(favoritesWrap).clientWidth); // Calculate the offset
        document.getElementById(favEndpoint).style.transform = `translateX(${offset}px)`;
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
            const pwConfirm = document.getElementById(pwConfirm).value;
            if (!this.inputValidator.confirmInput(pw, pwConfirm)) {
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
            this.xhr.getRecipe(this.inputValidator.removeWhitespace(input));
        });
    }

    /**
     * Initializes the favorite button event listener.
     */
    initFavBtn() {
        document.getElementById(addToFav).addEventListener(clickConst, (e) => {
            e.preventDefault();
            // Add to fav list
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
    
        nextBtn.addEventListener(clickConst, () => {
            if (index < favoritesLength - 1) {
                index++;
            } else {
                index = 0; // Loop back to the first page
            }
            displayNextFav(index);
        });
    
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
        this.adminNavs = [userListPage, favPage, cookingPage];
    }

    /**
     * Initializes the logo for the navigation bar
     * @returns the logo for the navigation bar
     */
    initLogo() {
        return `<div class="logo titleFont hoverable">
                    <a href="index.html">
                        <div class="headerLogo">
                            <img src="public/images/logo.png" alt="Logo">
                        </div>
                        ${messages.appName}
                    </a>
                </div>`;
    }

    /**
     * Initializes the login button for the navigation bar
     * @returns the login button for the navigation bar
     */
    initLoginBtn() {
        return `<li class="login hoverable">
                    <a href="login.html">${messages.loginTitle}</a>
                </li>`;
    }

    /**
     * Initializes the logout button for the navigation bar
     * @returns the logout button for the navigation bar
     */
    initLogoutBtn() {
        return `<li class="logout hoverable">
                    <button id="logoutBtn">${messages.logoutBtn}</button>
                </li>`;
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
            const menuItem = `<li class="hoverable"><a href=${itemNav[i]}>${item[i]}</a></li>`;
            menu.innerHTML+= menuItem;
        }

        if (loggedIn) {
            menu.innerHTML += (this.initLogoutBtn());
            const buttonController = new ButtonController();
            buttonController.initLoginBtn();
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
            this.cursor.style.left = `${event.clientX - 10}px`;  // Adjust x position
            this.cursor.style.top = `${event.clientY - 20}px`;  // Adjust y position to center cursor
        });
    }

    /**
     * Initializes the hoverable items with the custom cursor
     */
    initHoverable() {
        // Add hover effect to all elements with the "hoverable" class
        document.querySelectorAll(".hoverable").forEach(element => {
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
        } else if (currPage.toLowerCase().includes(userListEndpoint)) {
            this.initUserList();
        } else {
            this.initIndex();
        }
        this.navBar.initNavBar(this.loggedIn);
    }

    /**
     * Initializes the index page based on the user role
     * @returns the index page based on the user role
     */
    initIndex() {
        if (this.userRole === adminConst) {
            document.getElementById(titleConst).innerHTML = messages.adminIndexTitle;
            document.getElementById(descConst).innerHTML = "";
            document.getElementById(goCook).innerHTML = messages.goToUserList;
            document.getElementById(goCook).href = userListPage;
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
        this.btnController.initConjureBtn(this.session.getUserTokens);
        this.btnController.initFavBtn();
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
     * Initializes the user list page with the title and the user list from the API.
     */
    initUserList() {
        // Redirect to index if not admin and display error message
        if (this.userRole !== adminConst) {
            window.location.href = indexPage;
            alert(messages.notAdmin)
            return;
        }
        document.getElementById(titleConst).innerHTML = messages.userListTitle;
        this.btnController.xhr.getUserList();
    }
}

/**
 * Event listener for the DOM content load to initialize the user interface
 * based on the current location.
 */
document.addEventListener(DOMContentLoadConst, () => {    
    new UI(window.location);
});