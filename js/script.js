class NavBar {
    constructor() {
        this.itmes = ["Menu 1", "Menu 2"];
        this.itemNavs = ["#", "#"];
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

        for (let i = 0; i < this.itmes.length; i++) {
            const menuItem = `<li><a href=${this.itemNavs[i]}>${this.itmes[i]}</a></li>`;
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
        }
    }

    // Page initializations
    initIndex() {
        document.getElementById("title").innerHTML = messages.indexTitle;
        document.getElementById("desc").innerHTML = messages.indexDesc;
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
}

document.addEventListener("DOMContentLoaded", () => {
    new UI(window.location);
});