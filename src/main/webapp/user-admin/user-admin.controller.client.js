var $rowTemplate;
var $usernameFld;
var $passwordFld;
var $firstNameFld;
var $lastNameFld;
var $roleFld;
var $createBtn;

var users = [];

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
                    <button class="fa-2x fa fa-pencil wbdv-edit"></button>
                </td>
            </tr>`)
    }

    $(".wbdv-remove").click(deleteUser)
}


function createUser(user) {
    users.push(user);
    renderUsers(users);
}

function deleteUser(event) {
    var button = $(event.target);
    var id = button.attr("id");
    users.splice(id, 1);
    renderUsers(users);
}

function main() {
    $rowTemplate = $(".wbdv-tbody");
    $usernameFld = $("#usernameFld");
    $passwordFld = $("#passwordFld");
    $firstNameFld = $("#firstNameFld");
    $lastNameFld = $("#lastNameFld");
    $roleFld = $("#roleFld");
    $createBtn = $(".wbdv-create");

    $createBtn.click(function() {
        createUser({
            username: $usernameFld.val(),
            password: $passwordFld.val(),
            firstName: $firstNameFld.val(),
            lastName: $lastNameFld.val(),
            role: $roleFld.val()
        });

        // clear the input field box after creating
        $usernameFld.val("");
        $passwordFld.val("");
        $firstNameFld.val("");
        $lastNameFld.val("");
        $roleFld.val("");
    });

}

// wait the whole DOM has loaded, then invoke this function
jQuery(main);
