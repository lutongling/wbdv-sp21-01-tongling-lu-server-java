// the variable to store the array of table to be rendered
var $rowTemplate;

// the variable to store the input fields
var $usernameFld;
var $passwordFld;
var $firstNameFld;
var $lastNameFld;
var $roleFld;

// the variable to store the buttons
var $createBtn;
var $updateBtn;

// the object to connect to the server
var userService = new AdminUserServiceClient();

// the local empty array to connect to the "actual users" from the remote server
var users = [];

/*
Create user.
Get input field value from the browser and then store to the remote server.
Clear the input field after creation.
 */
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

/*
Delete user.
Connect to the current browser data with remote server data using the unique _id.
Remove from both browser rendering and remote server data base.
 */
function deleteUser(event) {
    var deleteBtn = $(event.target);
    var index = deleteBtn.attr("id");
    var id = users[index]._id;

    userService.deleteUser(id)
        .then(function (status) {
            users.splice(index, 1);
            renderUsers(users);
        })
}

// the variable to store the selected user
var selectedUser = null;

/*
Select user.
Select user and let the fields be shown in the input field boxes. (connecting via _id)
 */
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

/*
Update user.
Update user fields information by retrieving data from the field input boxes,
and send it to the remote server database.
Clear the input field after updating.
 */
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

/*
Render user.
Use a for loop to render multiple columns for multiple users.
The buttons binding to delete and select are also implemented here as the last column of the row.
 */
function renderUsers(users) {
    $rowTemplate.empty();
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        $rowTemplate
            .prepend(`
            <tr>
                <td>${user.username}</td>
                <td>${`*****`}</td>
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
A helper method to clear the input field box to default settings.
 */
function clearFld() {
    $usernameFld.val(defaultStatus);
    $passwordFld.val(defaultStatus);
    $firstNameFld.val(defaultStatus);
    $lastNameFld.val(defaultStatus);
    $roleFld.val(defaultStatus);
}

/*
main function.
To wait until the whole DOM has loaded, then invoke this function.
 */
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

$(main);
