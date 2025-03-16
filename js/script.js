class NavBar {
    constructor() {
        this.itemNavs = ["#", "cookingConjuration.html"];
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
        }
    }

    // Page initializations
    initIndex() {
        document.getElementById("title").innerHTML = messages.indexTitle;
        document.getElementById("desc").innerHTML = messages.indexDesc;
        document.getElementById("goCook").innerHTML = messages.startCooking;
        this.navBar.initNavBar(false);
    }

    initLogin() {
        document.getElementById("title").innerHTML = messages.loginTitle;
        document.getElementById("emailInput").placeholder = messages.emailPlaceholder;
        document.getElementById("pwInput").placeholder = messages.pwPlaceholder;
        document.getElementById("loginBtn").innerHTML = messages.loginBtn;
        document.getElementById("signupDir").innerHTML = messages.signupDir;
        this.navBar.initNavBar(false);
    }

    initSignup() {
        document.getElementById("title").innerHTML = messages.signupTitle;
        document.getElementById("emailInput").placeholder = messages.emailPlaceholder;
        document.getElementById("pwInput").placeholder = messages.pwPlaceholder;
        document.getElementById("pwConfirm").placeholder = messages.pwConfirm;
        document.getElementById("signupBtn").innerHTML = messages.signupBtn;
        document.getElementById("loginDir").innerHTML = messages.loginDir;
        this.navBar.initNavBar(false);
    }

    initMagic() {
        document.getElementById("title").innerHTML = messages.castTitle;
        document.getElementById("ingredientInput").placeholder = messages.ingredientPlaceholder;
        document.getElementById("conjureBtn").innerHTML = messages.castSpell;
        this.navBar.initNavBar(false);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new UI(window.location);
});