(function() {
    const users = [
        {id: 123, username: 'tlee', firstName: 'Tim', lastName: 'Birns Lee', role: 'FACULTY'},
        {id: 234, username: 'alovelace', firstName: 'Ada', lastName: 'Lovelace', role: 'FACULTY'},
        {id: 345, username: 'cgarcia', firstName: 'Charlie', lastName: 'Garcia', role: 'FACULTY'},
        {id: 456, username: 'dcraig', firstName: 'Dan', lastName: 'Craig', role: 'FACULTY'},
        {id: 567, username: 'sbolivar', firstName: 'Simon', lastName: 'Bolivar', role: 'FACULTY'}
    ];

    var rowTemplate = jQuery('.wbdv-template');
    var tbody = jQuery('tbody');

    for(var i in users) {
        const user = users[i];
        const rowClone = rowTemplate.clone();
        rowClone.find('.wbdv-username').html(user.username);
        rowClone.find('.wbdv-first-name').html(user.firstName);
        rowClone.find('.wbdv-last-name').html(user.lastName);
        rowClone.find('.wbdv-role').html(user.role);
        tbody.append(rowClone);
    }

})();