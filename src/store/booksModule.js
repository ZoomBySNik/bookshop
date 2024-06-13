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
        sorting: [
            {value: 'dateNewest', title: 'По дате (с новых)'},
            {value: 'dateOldest', title: 'По дате (со старых)'},
            {value: 'author', title: 'По автору'},
            {value: 'genre', title: 'По жанру'}
        ],
        selectedSort: 'dateNewest',
        authors: [],
        genres: [],
    }),
    getters: {
        sortedBooks(state) {
            let sortedBooks = [...state.books];
            switch (state.selectedSort) {
                case 'dateNewest':
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
                    break;
                case 'dateOldest':
                    sortedBooks = sortedBooks.sort((a, b) => {
                        let dateA = new Date(a.dateOfPublication);
                        let dateB = new Date(b.dateOfPublication);
                        if (dateA > dateB) {
                            return 1
                        } else if (dateA < dateB) {
                            return -1
                        } else {
                            return 0
                        }
                    });
                    break;
                case 'author':
                    sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
                    break;
                case 'genre':
                    sortedBooks.sort((a, b) => a.genre.localeCompare(b.genre));
                    break;
                default:
                    break;
            }
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
        setAuthors(state) {
            let uniqueAuthors = [];
            state.books.forEach(book => {
                if (!uniqueAuthors.includes(book.author)){
                    uniqueAuthors.push(book.author);
                }
            })
            state.authors = uniqueAuthors;
        },
        setGenres(state) {
            let uniqueGenres = [];
            state.books.forEach(book => {
                if (!uniqueGenres.includes(book.genre)){
                    uniqueGenres.push(book.genre);
                }
            })
            state.genres = uniqueGenres;
        },
        setRandomCovers(state) {
            state.books.forEach(book => {
                    book.cover = state.covers[Math.floor(Math.random() * state.covers.length)];
                }
            );
            state.books = [...state.books];
        },
        setSelectedSort(state, sort) {
            state.selectedSort = sort;
        }
    },
    actions: {},
};
