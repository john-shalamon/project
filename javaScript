// Sample book data (you would fetch this from a server in a real scenario)
const books = [
    { id: 1, title: 'Book 1', price: 10.99, image: 'book1.jpg', description: 'Description for Book 1', rate: 4.5 },
    { id: 2, title: 'Book 2', price: 14.99, image: 'book2.jpg', description: 'Description for Book 2', rate: 3.8 },
    // Add more books as needed
];

// Display the list of books on the page
const bookList = document.getElementById('book-list');
books.forEach(book => {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');

    const image = document.createElement('img');
    image.src = book.image;
    image.alt = book.title;
    bookContainer.appendChild(image);

    const details = document.createElement('div');
    details.innerHTML = `<h3>${book.title}</h3>
                        <p>${book.description}</p>
                        <p>Price: $${book.price}</p>
                        <p>Rating: ${book.rate}</p>`;
    bookContainer.appendChild(details);

    const button = document.createElement('button');
    button.innerText = 'Order';
    button.addEventListener('click', () => showOrderForm(book));
    bookContainer.appendChild(button);

    bookList.appendChild(bookContainer);
});

// Display the order form when a book is selected
function showOrderForm(book) {
    document.getElementById('order-form').style.display = 'block';
    document.getElementById('order-details-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const paymentMethod = document.getElementById('payment-method').value;

        // You would normally send this data to the server for processing
        // For simplicity, we'll just log the details to the console
        console.log(`Order placed:
            Book: ${book.title}
            Price: $${book.price}
            Name: ${name}
            Email: ${email}
            Payment Method: ${paymentMethod}`);

        // Reset the form and hide it
        document.getElementById('order-details-form').reset();
        document.getElementById('order-form').style.display = 'none';
    });
}
