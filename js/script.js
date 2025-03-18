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
        const title = "avocado and tomato breakfast toast";
        const ingredient = ["2 slices whole grain bread", "1 slice avocado", "1 medium tomato, sliced", "2 slices cooked bacon", "2 eggs", "salt and pepper to taste", "olive oil spray"];
        const method = ["toast the bread slices in a toaster or under the broiler until golden brown.", "lightly spray a frying pan with olive oil spray and heat over medium heat.", "add the sliced avocado, tomato, and cooked bacon to the pan.", "season with salt and pepper, and cook for 3-4 minutes, or until the avocado is soft.", "add the eggs to the pan and scramble until fully cooked.", "remove from heat and cover the pan with a lid.", "serve immediately."];
        this.outputController.displayRecipe(title, ingredient, method)

        // actual fetch
        // this.xhttp.open("GET", this.baseUrl + "generate/?ingredients=" + ingredients, true);
        // this.xhttp.setRequestHeader("Authorization", `Bearer ${this.session.getJWTToken()}`);
        // this.xhttp.send();
        // this.xhttp.onreadystatechange = () => {
        //     if (this.xhttp.readyState === 4) {
        //         const response = JSON.parse(this.xhttp.responseText);
        //         if (this.xhttp.status === 200) {
        //             this.session.reduceToken();
        //             this.outputController.displayRecipe(response.title, response.ingredients, response.method)
        //         } else {
        //             this.outputController.displayErrorPopup(messages.error);
        //         }
        //     }
        // }
    }

    login(email, pw) {
        this.xhttp.open("POST", this.baseUrl + "login", true);
        this.xhttp.withCredentials = true;
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
        
        // For testing admin
        // this.session.setUserInfo("admin", 20, "jwt");
        // window.location.href = "index.html";
    }

    signup(email, pw) {
        this.xhttp.open("POST", this.baseUrl + "signup", true);
        this.xhttp.withCredentials = true;
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

    getUserList() {
        // Testing DataTable
        let dummy = [
            {"id": 0, "name" : "Test1", "dob": "2000-01-01"}, 
            {"id": 1, "name" : "Test2", "dob": "2000-02-02"}, 
            {"id": 2, "name" : "Test3", "dob": "2000-03-03"}, 
        ];

        this.outputController.displayUserList(dummy);
    }

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

class InputValidator {

    isEmpty(value) {
        return !value || value.trim() === "";
    }

    confirmInput(value1, value2) {
        return value1 === value2;
    }

    containsNumbers(value) {
        return !/^[A-Za-z, ]+$/.test(value);
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
        document.getElementById("addToFav").style.display = "none";
        document.getElementById("outputBg").style.display = "none";
    }

    // Displaying recipe
    displayRecipe(title, ingredients, instructions) {
        this.emptyRecipeOutput();

        document.getElementById("outputBg").style.display = "block";

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

        this.formatPadding(document.getElementById("outputBg"), document.getElementById("outputWrap"));
    }

    displayUserList(users) {
        const tableOutput = document.getElementById("userList");

        // Checks if tableData is empty
        if (users.length <= 0) {
            tableOutput.innerHTML = "";
            document.getElementById("userList").innerHTML = messages.noUsersFound;
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
        document.getElementById("userList").innerHTML = table;

        // Setting table as DataTable
        $('#userList').DataTable();
    }

    formatPadding(container, content) {
        let counter = 1;
        let maxAttempts = 10;

        while (container.clientHeight / content.clientHeight < 1.13 && counter < maxAttempts) {
            counter++;
            content.style.padding = `${100 + (10 * counter)}px 80px`;
        }
    }

    displayFavorites(favorites) {
        const favoritesContainer = document.getElementById("favorites");
    
        favoritesContainer.innerHTML = "";
    
        if (favorites.length === 0 || favorites === null) {
            favoritesContainer.innerHTML = messages.noFavsFound;
            return;
        }
    
        favorites.forEach(recipe => {
            const favoriteDivWrap = document.createElement("div");
            favoriteDivWrap.className = "favoriteBg";
    
            const favoriteDiv = document.createElement("div");
            favoriteDiv.className = "favorite";
    
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

    displayNextFav(index) {
        const offset = -index * (document.getElementById("favoritesWrap").clientWidth); // Calculate the offset
        document.getElementById("favorites").style.transform = `translateX(${offset}px)`;
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
            this.xhr.signup(email, pw);
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

    initFavNavigation(prevBtn, nextBtn, favoritesLength, displayNextFav) {
        let index = 0;
    
        nextBtn.addEventListener('click', () => {
            if (index < favoritesLength - 1) {
                index++;
            } else {
                index = 0; // Loop back to the first page
            }
            displayNextFav(index);
        });
    
        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = favoritesLength - 1; // Loop back to the last page
            }
            displayNextFav(index);
        });
    
        // Show buttons only if there are multiple favorites
        if (favoritesLength > 1) {
            nextBtn.style.display = 'block';
            prevBtn.style.display = 'block';
        }
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
        if (currPage.toLowerCase().includes("login")) {
            this.initLogin();
        } else if (currPage.toLowerCase().includes("signup")) {
            this.initSignup();
        } else if (currPage.toLowerCase().includes("cooking")) {
            this.initMagic();
        } else if (currPage.toLowerCase().includes("favorites")) {
            this.initFavs();
        } else if (currPage.toLowerCase().includes("userlist")) {
            this.initUserList();
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
        if (!this.loggedIn) {
            window.location.href = "login.html";
            return;
        }
        document.getElementById("title").innerHTML = messages.favTitle;
        this.btnController.xhr.getFavorites();
    }

    initUserList() {
        if (this.userRole !== "admin") {
            window.location.href = "index.html";
            alert(messages.notAdmin)
            return;
        }
        document.getElementById("title").innerHTML = messages.userListTitle;
        this.btnController.xhr.getUserList();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new UI(window.location);
});