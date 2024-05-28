document.addEventListener('DOMContentLoaded', () => {

    const apiURL = 'https://www.googleapis.com/books/v1/volumes?q=related:kasuo+ishiguro&maxResults=30&langRestrict=en&filter=ebooks';

    const fetchBooks = async () => {
        try {
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data.items.map(book => ({
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Author not available',
                coverUrl: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'image_url'
            }));
        } catch (error) {
            console.error('Error fetching books:', error);
            return [];
        }
    };

    const displayBooks = async () => {
        try {
            const books = await fetchBooks();
            const booksContainer = document.getElementById('books');
            books.forEach((book, index) => {
                const bookDiv = document.createElement('div');
                bookDiv.classList.add('bookcase');
                bookDiv.id = `book${index + 1}`;
                bookDiv.innerHTML = `
                    <img src="${book.coverUrl}" alt="Book Cover">
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                `;
                booksContainer.appendChild(bookDiv);
            });
        } catch (error) {
            console.error('Error displaying books:', error);
        }
    };

    const insertFooterHTML = () => {
        const footer = document.getElementById('footer');
        footer.innerHTML = `
            <div class="footer-content">
                <div class="footer-left">
                    <p>&copy; 2024 All rights reserved</p>
                </div>
                <div class="footer-right">
                    <nav>
                        <ul>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        `;
    };

    displayBooks();
    insertFooterHTML();
    AOS.init();
});

