class RecipeAPI {
    constructor() {
        this.xhttp = new XMLHttpRequest();
        this.outputController = new OutputController();
        this.baseUrl = "https://recipeapi.duckdns.org/generate/";
    }

    getRecipe(ingredients) {
        console.log(ingredients)
        this.xhttp.open("GET", this.baseUrl + "?items=" + ingredients, true);
        this.xhttp.send();
        this.xhttp.onreadystatechange = () => {
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (response.status === "success" && this.xhttp.status === 200) {
                    this.outputController.displayRecipe(response.title, response.ingredients, response.method)
                } else {
                    this.outputController.displayErrorPopup(messages.error);
                }
            }
        }
    }

    login(email, pw) {
        this.xhttp.withCredentials = true;
        this.xhttp.open("POST", this.baseUrl, true);
        this.xhttp.setRequestHeader("Content-Type", "application/json");
        const requestData = JSON.stringify({ email: email, password: pw });
        this.xhttp.send(requestData);   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (response.status === "success" && this.xhttp.status === 201) {
                    window.location.href = "index.html"
                } else {
                    this.outputController.displayErrorPopup(response.message);
                }
            }
        };
    }

    signup(email, pw) {
        this.xhttp.withCredentials = true;
        this.xhttp.open("POST", this.baseUrl, true);
        this.xhttp.setRequestHeader("Content-Type", "application/json");
        const requestData = JSON.stringify({ email: email, password: pw });
        this.xhttp.send(requestData);   
        this.xhttp.onreadystatechange = () => { 
            if (this.xhttp.readyState === 4) {
                const response = JSON.parse(this.xhttp.responseText);
                if (response.status === "success" && this.xhttp.status === 201) {
                    window.location.href = "index.html"
                } else {
                    this.outputController.displayErrorPopup(response.message);
                }
            }
        };
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
        return !/^[A-Za-z-,]+$/.test(value);
    }

    removeWhitespace(value) {
        return input.replace(/\s+/g, ""); // Removes all spaces
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
        // document.getElementById("errNumOfReqs").innerHTML = reqNum ? messages.numOfReqs.replace("%1", reqNum) : "";
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
        document.getElementById("outputWrap").style.display = "block";
        document.getElementById("recipeTitle").innerHTML = title;
        document.getElementById("ingredientsTitle").innerHTML = messages.ingredientsTitle;
        ingredients.array.forEach(element => {
            document.getElementById("ingredientList").innerHTML += `<li>${element}</li>`;
        });
        document.getElementById("instructionsTitle").innerHTML = messages.instructionsTitle;
        instructions.array.forEach(element => {
            document.getElementById("instructionList").innerHTML += `<li>${element}</li>`;
        });
        document.getElementById("addToFav").display = "block";
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

    initConjureBtn() {
        document.getElementById("conjureBtn").addEventListener("click", (e) => {
            e.preventDefault();
            const input = document.getElementById("ingredientInput").value;
            if (this.inputValidator.containsNumbers(input)) {
                this.xhr.outputController.displayErrorPopup(messages.recipeInputError);
                return;
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

        for (let i = 0; i < this.itemNavs.length; i++) {
            const menuItem = `<li><a href=${this.itemNavs[i]}>${navItems[i]}</a></li>`;
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
        this.init(currLocation);
    }

    // Initializes UI with corresponding page
    init(currLocation) {
        const currPage = currLocation.pathname;
        if (currPage.includes("index")) {
            this.initIndex();
        } else if (currPage.includes("login")) {
            this.initLogin();
        } else if (currPage.includes("signup")) {
            this.initSignup();
        } else if (currPage.includes("cooking")) {
            this.initMagic();
        } else if (currPage.includes("favorites")) {
            this.initFavs();
        }
        this.navBar.initNavBar(false);
    }

    // Page initializations
    initIndex() {
        document.getElementById("title").innerHTML = messages.indexTitle;
        document.getElementById("desc").innerHTML = messages.indexDesc;
        document.getElementById("goCook").innerHTML = messages.startCooking;
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
        document.getElementById("title").innerHTML = messages.castTitle;
        document.getElementById("ingredientInput").placeholder = messages.ingredientPlaceholder;
        document.getElementById("conjureBtn").innerHTML = messages.castSpell;
        this.btnController.initConjureBtn();
    }

    initFavs() {
        document.getElementById("title").innerHTML = messages.favTitle;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new UI(window.location);
});