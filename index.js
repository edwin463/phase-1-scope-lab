// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newFavorite) {
    bestCustomer = newFavorite;
}

const leastFavoriteCustomer = 'some customer';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'another customer'; // This should throw an error
}
