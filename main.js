document.addEventListener('DOMContentLoaded', () => {
    const apiBaseURL = 'https://www.googleapis.com/books/v1/volumes';
    const maxResults = 8;
    const langRestrict = 'en';
    const filter = 'ebooks';

    const fetchBooks = async (query) => {
        const apiURL = `${apiBaseURL}?q=${encodeURIComponent(query)}&maxResults=${maxResults}&langRestrict=${langRestrict}&filter=${filter}`;
        try {
            const response = await fetch(apiURL);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            return data.items.map(book => ({
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Author not available',
                coverUrl: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x192?text=No+Cover'
            }));
        } catch (error) {
            console.error('Error fetching books:', error);
            return [];
        }
    };

    const displayBooks = (books) => {
        const booksContainer = document.getElementById('books');
        booksContainer.innerHTML = ''; // Clear previous results

        books.forEach((book, index) => {
            const firstAuthor = book.author.split(',')[0].trim(); // Define firstAuthor here
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('bookcase');
            bookDiv.id = `book${index + 1}`;
            bookDiv.innerHTML = `
                <div class="book-cover">
                <img src="${book.coverUrl}" alt="Book Cover">
                </div>
                <div class="bookcase-content">
                    <h3 class="book-title">${book.title}</h3>
                    <p><strong>Author:</strong> ${firstAuthor}</p>
                    <a href="#" class="book-button">Add To Cart</a>
                </div>
            `;
            booksContainer.appendChild(bookDiv);
        });
    };

    const searchBooks = async () => {
        const query = document.getElementById('searchInput').value;
        if (query) {
            const books = await fetchBooks(query);
            displayBooks(books);
            showScrollButton();
        }
    };

    const showScrollButton = () => {
        const scrollButton = document.getElementById('scrollButton');
        scrollButton.classList.remove('hidden');
    };

    const scrollToResults = () => {
        const booksSection = document.getElementById('books');
        booksSection.scrollIntoView({ behavior: 'smooth' });
    };

    document.getElementById('searchButton').addEventListener('click', searchBooks);
    document.getElementById('scrollButton').addEventListener('click', scrollToResults);

    // Optional: Add "Enter" key support for search
    document.getElementById('searchInput').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchBooks();
        }
    });

    const insertFooterHTML = () => {
        const footer = document.getElementById('footer');
        footer.innerHTML = `
             <div class="footer-content">
                 <div class="footer-left">
                     <p>&copy; 2024 All rights reserved</p>
                 </div>
                 <div class="footer-center">
                     <a href="https://github.com/ayalamarcelo/cac-project" target="_blank">
                         <i class="fa-brands fa-github" style="color: #c7cbcf;"></i>
                         <p>Github</p>
                     </a>
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

    insertFooterHTML();
    AOS.init();

    // Sample books
    const displaySampleBooks = async () => {
        const sampleQuery = 'adventure';
        const books = await fetchBooks(sampleQuery);
        displayBooks(books);
    };

    displaySampleBooks();
});

