var $rowTemplate;
var $usernameFld;
var $passwordFld;
var $firstNameFld;
var $lastNameFld;
var $roleFld;

var $createBtn;
var $updateBtn;

var userService = new AdminUserServiceClient();

var users = [];

function createUser() {
    var newUser = {
        username: $usernameFld.val(),
        password: $passwordFld.val(),
        firstName: $firstNameFld.val(),
        lastName: $lastNameFld.val(),
        role: $roleFld.val()
    };

    userService.createUser(newUser)
        .then(function (actualUser) {
            users.push(actualUser);
            renderUsers(users);
        });

    clearFld();
}

function deleteUser(event) {
    var button = $(event.target);
    var index = button.attr("id");
    var id = users[index]._id;

    userService.deleteUser(id)
        .then(function (status) {
            users.splice(index, 1);
            renderUsers(users);
        })
}

var selectedUser = null;

function selectUser(event) {
    var selectBtn = $(event.target);
    var id = selectBtn.attr("id");

    selectedUser = users.find(user => user._id === id);

    $usernameFld.val(selectedUser.username);
    $passwordFld.val(selectedUser.password);
    $firstNameFld.val(selectedUser.firstName);
    $lastNameFld.val(selectedUser.lastName);
    $roleFld.val(selectedUser.role);
}

function updateUser() {
    selectedUser.username = $usernameFld.val();
    selectedUser.password = $passwordFld.val();
    selectedUser.firstName = $firstNameFld.val();
    selectedUser.lastName = $lastNameFld.val();
    selectedUser.role = $roleFld.val();

    userService.updateUser(selectedUser._id, selectedUser)
        .then(function (status) {
            var index = users.findIndex(user => user._id === selectedUser._id);
            users[index] = selectedUser;
            renderUsers(users);
        });

    clearFld();
}

function renderUsers(users) {
    $rowTemplate.empty();
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        $rowTemplate
            .prepend(`
            <tr>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.role}</td>
                <td>
                    <button id="${i}" class="fa-2x fa fa-times wbdv-remove"></button>
                    <button id="${user._id}" class="fa-2x fa fa-pencil wbdv-edit"></button>
                </td>
            </tr>`)
    }

    $(".wbdv-remove").click(deleteUser);
    $(".wbdv-edit").click(selectUser);
}

/*
A helper method to clear the input field box to default settings
 */
function clearFld() {
    $usernameFld.val(defaultStatus);
    $passwordFld.val(defaultStatus);
    $firstNameFld.val(defaultStatus);
    $lastNameFld.val(defaultStatus);
    $roleFld.val(defaultStatus);
}

function main() {
    $rowTemplate = $(".wbdv-tbody");

    $usernameFld = $("#usernameFld");
    $passwordFld = $("#passwordFld");
    $firstNameFld = $("#firstNameFld");
    $lastNameFld = $("#lastNameFld");
    $roleFld = $("#roleFld");

    $createBtn = $(".wbdv-create");
    $createBtn.click(createUser);

    $updateBtn = $(".wbdv-update");
    $updateBtn.click(updateUser);

    userService.findAllUsers()
        .then(function (actualUserFromServer) {
            users = actualUserFromServer;
            renderUsers(users);
        });
}

// wait the whole DOM has loaded, then invoke this function
$(main);
