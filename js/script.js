class SessionController {
    constructor() {
        this.session = JSON.parse(sessionStorage.getItem("userInfo")) || {};
    }

    setUserInfo(role, tokens, jwt) {
        this.session = { role, tokens, jwt };
        sessionStorage.setItem("userInfo", JSON.stringify(this.session));
    }

    reduceToken() {
        if (this.session.tokens > 0) { // Prevent negative tokens
            this.session.tokens--;
            sessionStorage.setItem("userInfo", JSON.stringify(this.session)); // Save the update
        }
    }

    getUserRole() {
        return this.session.role || null;
    }

    getUserTokens() {
        return this.session.tokens || null;
    }

    getJWTToken() {
        return this.session.jwt || null;
    }

    clearSession() {
        sessionStorage.removeItem("userInfo");
    }
}

class RecipeAPI {
    constructor() {
        this.xhttp = new XMLHttpRequest();
        this.outputController = new OutputController();
        this.session = new SessionController();
        this.baseUrl = "https://meal-mancer-api-q3zh9.ondigitalocean.app/";
    }

    getRecipe(ingredients) {
        // testing with dummy data
        // const title = "avocado and tomato breakfast toast";
        // const ingredient = ["2 slices whole grain bread", "1 slice avocado", "1 medium tomato, sliced", "2 slices cooked bacon", "2 eggs", "salt and pepper to taste", "olive oil spray"];
        // const method = ["toast the bread slices in a toaster or under the broiler until golden brown.", "lightly spray a frying pan with olive oil spray and heat over medium heat.", "add the sliced avocado, tomato, and cooked bacon to the pan.", "season with salt and pepper, and cook for 3-4 minutes, or until the avocado is soft.", "add the eggs to the pan and scramble until fully cooked.", "remove from heat and cover the pan with a lid.", "serve immediately."];
        // this.outputController.displayRecipe(title, ingredient, method)

        // actual fetch
        this.xhttp.open("GET", this.baseUrl + "generate/?ingredients=" + ingredients, true);
        this.xhttp.setRequestHeader("Authorization", `Bearer ${this.session.getJWTToken()}`);
        this.xhttp.send();
        this.xhttp.onreadystatechange = () => {
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (response.status === "success" && this.xhttp.status === 200) {
                    this.session.reduceToken();
                    this.outputController.displayRecipe(response.title, response.ingredients, response.method)
                } else {
                    this.outputController.displayErrorPopup(messages.error);
                }
            }
        }
    }

    // login(email, pw) {
    //     this.xhttp.withCredentials = true;
    //     this.xhttp.open("POST", this.baseUrl + "login", true);
    //     this.xhttp.setRequestHeader("Content-Type", "application/json");
    //     const requestData = JSON.stringify({ email: email, password: pw });
    //     this.xhttp.send(requestData);   
    //     this.xhttp.onreadystatechange = () => { 
    //         if (this.xhttp.readyState === 4) {
    //             const response = JSON.parse(this.xhttp.responseText);
    //             if (this.xhttp.status === 200) {
    //                 window.location.href = "index.html"

    //             } else {
    //                 this.outputController.displayErrorPopup(response.message);
    //             }
    //         }
    //     };
    // }

    login(email, pw) {
        this.xhttp.withCredentials = true;
        this.xhttp.open("POST", this.baseUrl + "login", true);
        this.xhttp.setRequestHeader("Content-Type", "application/json");
        const requestData = JSON.stringify({ email: email, password: pw });
        this.xhttp.send(requestData);   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (this.xhttp.status === 200) {
                    // Store user info in session storage
                    this.session.setUserInfo(response.role, response.tokens, response.jwt);
                    window.location.href = "index.html";
                } else {
                    this.outputController.displayErrorPopup(response.message);
                }
            }
        }
    }

    signup(email, pw) {
        this.xhttp.withCredentials = true;
        this.xhttp.open("POST", this.baseUrl + "signup", true);
        this.xhttp.setRequestHeader("Content-Type", "application/json");
        const requestData = JSON.stringify({ email: email, password: pw });
        this.xhttp.send(requestData);   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (this.xhttp.status === 200) {
                    this.session.setUserInfo(response.role, response.tokens, response.jwt);
                    window.location.href = "index.html"
                } else {
                    this.outputController.displayErrorPopup(response.message);
                }
            }
        }
    }
}

class InputValidator {

    isEmpty(value) {
        return !value || value.trim() === "";
    }

    confirmInput(value1, value2) {
        return value1 === value2;
    }

    containsNumbers(value) {
        return !/^[A-Za-z-, ]+$/.test(value);
    }

    removeWhitespace(value) {
        return value.replace(/\s+/g, ""); // Removes all spaces
    }

}

class OutputController {

    // Error popup
    hideErrorPopup() {
        document.getElementById("errorPopupWrap").style.opacity = "0";
        document.getElementById("errorPopupWrap").style.visibility = "hidden";
    }

    displayErrorPopup(errorMsg) {
        document.getElementById("closeErrorPopupBtn").innerHTML = messages.ok;
        document.getElementById("errorMsg").textContent = messages.errorTitle;
        document.getElementById("errorDesc").innerHTML = errorMsg
        document.getElementById("errorPopupWrap").style.opacity = "1";
        document.getElementById("errorPopupWrap").style.visibility = "visible";
        document.getElementById("closeErrorPopupBtn").addEventListener("click", () => {
            this.hideErrorPopup();
        })
    }

    emptyRecipeOutput() {
        document.getElementById("recipeTitle").innerHTML = "";
        document.getElementById("ingredientsTitle").innerHTMLinnerHTML = "";
        document.getElementById("ingredientList").innerHTML = "";
        document.getElementById("instructionsTitle").innerHTML = "";
        document.getElementById("instructionList").innerHTML = "";
        document.getElementById("addToFav").display = "none";
    }

    // Displaying recipe
    displayRecipe(title, ingredients, instructions) {
        this.emptyRecipeOutput();

        // document.getElementById("outputWrap").style.display = "block";
        document.getElementById("recipeTitle").innerHTML = title;

        document.getElementById("ingredientsTitle").innerHTML = messages.ingredientsTitle;
        ingredients.forEach(element => {
            document.getElementById("ingredientList").innerHTML += `<li>${element}</li>`;
        });

        document.getElementById("instructionsTitle").innerHTML = messages.instructionsTitle;
        instructions.forEach(element => {
            document.getElementById("instructionList").innerHTML += `<li>${element}</li>`;
        });

        document.getElementById("addToFav").style.display = "block";
    }
}

class ButtonController {
    constructor() {
        this.xhr = new RecipeAPI();
        this.inputValidator = new InputValidator();
    }

    initLoginBtn() {
        document.getElementById("loginBtn").addEventListener("click", (e) => {
            e.preventDefault();
            const email = document.getElementById("emailInput").value;
            const pw = document.getElementById("pwInput").value;
            this.xhr.login(email, pw);
        });
    }

    initSignupBtn() {
        document.getElementById("signupBtn").addEventListener("click", (e) => {
            e.preventDefault();
            const email = document.getElementById("emailInput").value;
            const pw = document.getElementById("pwInput").value;
            const pwConfirm = document.getElementById("pwConfirm").value;
            if (!this.inputValidator.confirmInput(pw, pwConfirm)) {
                this.xhr.outputController.displayErrorPopup(messages.pwMatchError);
                return;
            }
            this.xhr.login(email, pw);
        });
    }

    initConjureBtn(tokensLeft) {
        document.getElementById("conjureBtn").addEventListener("click", (e) => {
            e.preventDefault();
            const input = document.getElementById("ingredientInput").value;
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

    initFavBtn() {
        document.getElementById("addToFav").addEventListener("click", (e) => {
            e.preventDefault();
            // Add to fav list
        });
    }
}

class NavBar {
    constructor() {
        this.session = new SessionController();
        this.userRole = this.session.getUserRole();
        this.itemNavs = ["favorites.html", "cookingConjuration.html"];
        this.adminNavs = ["userList.html", "favorites.html", "cookingConjuration.html"];
    }

    initLogo() {
        return `<div class="logo titleFont">
                    <a href="index.html">
                        <div class="headerLogo">
                            <img src="public/images/logo.png" alt="Logo">
                        </div>
                        ${messages.appName}
                    </a>
                </div>`;
    }

    initLoginBtn() {
        return `<li class="login">
                    <a href="login.html">${messages.loginTitle}</a>
                </li>`;
    }

    initLogoutBtn() {
        return `<li class="logout">
                    <a href="#">${messages.logoutBtn}</a>
                </li>`;
    }

    initMenu(loggedIn) {
        const menu = document.createElement("ul");
        menu.classList.add("navBar", "headerFont");

        const itemNav = this.userRole === "admin" ? this.adminNavs : this.itemNavs;
        const item = this.userRole === "admin" ? adminNavItems : genNavItems;
        for (let i = 0; i < item.length; i++) {
            const menuItem = `<li><a href=${itemNav[i]}>${item[i]}</a></li>`;
            menu.innerHTML+= menuItem;
        }

        if (loggedIn) {
            menu.innerHTML += (this.initLogoutBtn());
        } else {
            menu.innerHTML += (this.initLoginBtn());
        }
        
        return menu;
    }

    initNavBar(loggedIn) {
        const logoWrap = `<div class="logo titleFont">
                            <a href="index.html">
                                <div class="headerLogo">
                                    <img src="public/images/logo.png" alt="Logo">
                                </div>
                                ${messages.appName}
                            </a>
                        </div>`;

        document.getElementById("header").innerHTML += logoWrap;
        document.getElementById("header").append(this.initMenu(loggedIn));      
    }
}

class UI {
    constructor(currLocation) {
        this.navBar = new NavBar();
        this.btnController = new ButtonController();
        this.session = new SessionController();
        this.userRole = this.session.getUserRole();
        this.loggedIn = this.userRole ? true : false;
        this.init(currLocation);
    }

    // Initializes UI with corresponding page
    init(currLocation) {
        const currPage = currLocation.pathname;
        if (currPage.includes("login")) {
            this.initLogin();
        } else if (currPage.includes("signup")) {
            this.initSignup();
        } else if (currPage.includes("cooking")) {
            this.initMagic();
        } else if (currPage.includes("favorites")) {
            this.initFavs();
        } else {
            this.initIndex();
        }
        this.navBar.initNavBar(this.loggedIn);
    }

    // Page initializations
    initIndex() {
        if (this.userRole === "admin") {
            document.getElementById("title").innerHTML = messages.adminIndexTitle;
            document.getElementById("desc").innerHTML = "";
            document.getElementById("goCook").innerHTML = messages.goToUserList;
            document.getElementById("goCook").href = "userList.html";
            return;
        }
        document.getElementById("title").innerHTML = messages.indexTitle;
        document.getElementById("desc").innerHTML = messages.indexDesc;
        document.getElementById("goCook").innerHTML = messages.startCooking;
        document.getElementById("goCook").href = this.loggedIn ? "cookingConjuration.html" : "login.html";
    }

    initLogin() {
        document.getElementById("title").innerHTML = messages.loginTitle;
        document.getElementById("emailInput").placeholder = messages.emailPlaceholder;
        document.getElementById("pwInput").placeholder = messages.pwPlaceholder;
        document.getElementById("loginBtn").innerHTML = messages.loginBtn;
        document.getElementById("signupDir").innerHTML = messages.signupDir;
        this.btnController.initLoginBtn();
    }

    initSignup() {
        document.getElementById("title").innerHTML = messages.signupTitle;
        document.getElementById("emailInput").placeholder = messages.emailPlaceholder;
        document.getElementById("pwInput").placeholder = messages.pwPlaceholder;
        document.getElementById("pwConfirm").placeholder = messages.pwConfirm;
        document.getElementById("signupBtn").innerHTML = messages.signupBtn;
        document.getElementById("loginDir").innerHTML = messages.loginDir;
        this.btnController.initSignupBtn();
    }

    initMagic() {
        if (!this.loggedIn) {
            window.location.href = "login.html";
            return;
        }
        document.getElementById("title").innerHTML = messages.castTitle;
        document.getElementById("ingredientInput").placeholder = messages.ingredientPlaceholder;
        document.getElementById("conjureBtn").innerHTML = messages.castSpell;
        document.getElementById("addToFav").innerHTML = messages.addToFavBtn;
        this.btnController.initConjureBtn(this.session.getUserTokens);
        this.btnController.initFavBtn();
    }

    initFavs() {
        document.getElementById("title").innerHTML = messages.favTitle;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new UI(window.location);
});