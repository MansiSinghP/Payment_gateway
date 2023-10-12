// Sample customer data
const customers = [
    { id: 1, name: 'Raj Mehta', email: 'customer1@example.com', balance: 1000 },
    { id: 2, name: 'Sonam Sharma', email: 'customer2@example.com', balance: 1500 },
    { id: 3, name: 'Riya Singh', email: 'customer3@example.com', balance: 2500 },
    { id: 4, name: 'Sagar Shukla', email: 'customer4@example.com', balance: 1500 },
    { id: 5, name: 'Varun Rathore', email: 'customer5@example.com', balance: 3500 },
    { id: 6, name: 'R.P. Gupta', email: 'customer6@example.com', balance: 2500 },
    { id: 7, name: 'Reena Chopra', email: 'customer7@example.com', balance: 2000 },
    { id: 8, name: 'Ravi Sen', email: 'customer8@example.com', balance: 3000 },
    // Add more customer data here...
];

// Sample transfer data
const transfers = [];

// Function to load content into the main section
function loadContent(content) {
    document.getElementById('content').innerHTML = content;
}

// Home page
document.getElementById('home-link').addEventListener('click', function () {
    loadContent('<p>Welcome to the Simple Banking System. Use the navigation above to get started.</p>');
});

// View all customers
document.getElementById('view-customers-link').addEventListener('click', function () {
    let customerList = '<h2>View All Customers</h2>';
    customerList += '<table>';
    customerList += '<tr><th>ID</th><th>Name</th><th>Email</th><th>Balance</th></tr>';
    for (const customer of customers) {
        customerList += `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.email}</td><td>${customer.balance}</td></tr>`;
    }
    customerList += '</table>';
    loadContent(customerList);
});

// Transfer money
document.getElementById('transfer-money-link').addEventListener('click', function () {
    let transferForm = '<h2>Transfer Money</h2>';
    transferForm += '<form id="transfer-form">';
    transferForm += '<label for="sender">Select Sender:</label>';
    transferForm += '<select id="sender">';
    for (const customer of customers) {
        transferForm += `<option value="${customer.id}">${customer.name}</option>`;
    }
    transferForm += '</select><br>';
    transferForm += '<label for="receiver">Select Receiver:</label>';
    transferForm += '<select id="receiver">';
    for (const customer of customers) {
        transferForm += `<option value="${customer.id}">${customer.name}</option>`;
    }
    transferForm += '</select><br>';
    transferForm += '<label for="amount">Amount:</label>';
    transferForm += '<input type="number" id="amount" required><br>';
    transferForm += '<input type="submit" value="Transfer">';
    transferForm += '</form>';

    loadContent(transferForm);

    // Handle form submission (simulated transfer)
    document.getElementById('transfer-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const senderId = parseInt(document.getElementById('sender').value);
        const receiverId = parseInt(document.getElementById('receiver').value);
        const amount = parseFloat(document.getElementById('amount').value);

        if (isNaN(amount) || amount <= 0) {
            alert('Invalid amount. Please enter a valid amount.');
            return;
        }

        // Simulate a transfer by updating balances (no real database)
        const sender = customers.find((customer) => customer.id === senderId);
        const receiver = customers.find((customer) => customer.id === receiverId);

        if (!sender || !receiver || sender.balance < amount) {
            alert('Transfer failed. Please check the selected sender, receiver, and balance.');
            return;
        }

        sender.balance -= amount;
        receiver.balance += amount;

        // Record the transfer (no real database)
        transfers.push({ senderId, receiverId, amount });

        alert('Transfer successful.');
    });
});

// Load the home page by default
loadContent('<p>Welcome to the Banking System. Use the navigation above to get started.</p>');
