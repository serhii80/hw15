function newUserAutorize() {
    let a = `
        <h2 id="h2"></h2>
        <div id="allData">
            <form id="form" action="" method="post">
                <div class="data">
                    <input type="text" name="name" id="name" required autocomplete="off">
                    <label for="name" class="labelName">
                        <span class="contentName">Name</span>
                    </label>
                </div>
                <div class="data">
                    <input type="email" name="email" id="email" required autocomplete="off" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$">
                    <label for="email" class="labelName">
                        <span class="contentName">Email</span>
                    </label>
                </div>
                <div class="data">
                    <input type="password" name="password" id="password" minlength="4" maxlength="16" required autocomplete="off" pattern="^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,16}$">
                    <label for="password" class="labelName">
                        <span class="contentName">Password (4-16 symbols, at least one letter and one number)</span>
                    </label>
                </div>
                <div class="data">
                    <input type="password" name="password2" id="password2" minlength="4" maxlength="16" required autocomplete="off" pattern="^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,16}$">
                    <label for="password2" class="labelName">
                        <span class="contentName" id="confirm">Confirm Password</span>
                    </label>
                </div>
            </form>
            <button onclick="saveNewUserToLocalStorage()" id="regButton">Register</button>
        </div>
    `;
    return a; 
}

function oldUserAutorize() {
    let a = `
        <h2 id="h2"></h2>
        <div id="allData">
            <form action="" method="post">
                <div class="data">
                    <input type="email" name="email" id="email" required autocomplete="off" pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$">
                    <label for="email" class="labelName">
                        <span class="contentName">Email</span>
                    </label>
                </div>
                <div class="data">
                    <input type="password" name="password" id="password" minlength="4" maxlength="16" required autocomplete="off" pattern="^(?=.*?[A-Za-z])(?=.*?[0-9]).{4,16}$">
                    <label for="password" class="labelName">
                        <span class="contentName" id="registeredUserPass">Password (4-16 symbols, at least one letter and one number)</span>
                    </label>
                </div>                
            </form>
            <button type="submit" onclick="openContentForRegUser()" id="enterButton">Enter</button>
        </div>
    `;
    return a; 
}