import cover1 from "@/assets/bookscovers/random-book-cover-1.webp";
import cover2 from "@/assets/bookscovers/random-book-cover-2.webp";
import cover3 from "@/assets/bookscovers/random-book-cover-3.webp";
import cover4 from "@/assets/bookscovers/random-book-cover-4.webp";

export const booksModule = {
    namespaced: true, // Переносим namespaced сюда
    state: () => ({
        covers: [cover1, cover2, cover3, cover4],
        books: [
            {
                uuid: 1,
                name: 'Евгений Онегин',
                author: 'А. С. Пушкин',
                dateOfPublication: '1888-06-13',
                genre: 'Роман',
                price: 1000,
                cover: undefined
            },
            {
                uuid: 2,
                name: 'Война и Мир',
                author: 'Л. Н. Толстой',
                dateOfPublication: '1888-06-09',
                genre: 'Роман',
                price: 1000,
                cover: undefined
            },
            {
                uuid: 3,
                name: 'Кирпич и Орёл',
                author: 'ZoomBySNik',
                dateOfPublication: '2024-06-15',
                genre: 'Писанина',
                price: 1000,
                cover: undefined
            },
        ],
        authors: [],
        genres: [],
    }),
    getters: {
        sortedBooks(state) {
            let sortedBooks = [...state.books];
            sortedBooks = sortedBooks.sort((a, b) => {
                let dateA = new Date(a.dateOfPublication);
                let dateB = new Date(b.dateOfPublication);
                if (dateA < dateB) {
                    return 1
                } else if (dateA > dateB) {
                    return -1
                } else {
                    return 0
                }
            });
            return sortedBooks
        },
    },
    mutations: {
        pushBook(state, book) {
            state.books = [...state.books, book];
        },
        setBooks(state, books) {
            state.books = books;
        },
        setRandomCovers(state) {
            state.books.forEach(book => {
                    book.cover = state.covers[Math.floor(Math.random() * state.covers.length)];
                }
            );
            state.books = [...state.books];
        },
    },
    beforeMount() {

    },
    actions: {},
};
