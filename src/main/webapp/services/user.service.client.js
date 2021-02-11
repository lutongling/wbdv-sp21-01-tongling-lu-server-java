/**
 * Old fashion way to create a "class" in JavaScript.
 * This class represents the web service to interact with the server database.
 * @constructor
 */
function AdminUserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;

    // the remote server url
    this.url = 'https://wbdv-generic-server.herokuapp.com/api/001054187/users';
    var self = this;

    // POST request
    function createUser(user) {
        return fetch(self.url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        }).then(response => response.json())
    }

    // GET request
    function findAllUsers() {
        return fetch(self.url)
            .then(function(response){
                return response.json()
            })
    }

    // PUT request
    function updateUser(userId, user) {
        return fetch(`${self.url}/${userId}`,{
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(user)
        }).then(response => response.json())
    }

    // DELETE request
    function deleteUser(userId) {
        return fetch(`${self.url}/${userId}`,
                     {method: 'DELETE'})
    }
}
