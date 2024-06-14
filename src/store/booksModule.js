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
            {value: 'priceCheapest', title: 'По цене (с дешёвых)'},
            {value: 'priceMostExpensive', title: 'По цене (с дорогих)'},
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
                case 'priceCheapest':
                    sortedBooks = sortedBooks.sort((a, b) => a.price - b.price);
                    break;
                case 'priceMostExpensive':
                    sortedBooks = sortedBooks.sort((a, b) => b.price - a.price);
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
                if (!uniqueAuthors.includes(book.author)) {
                    uniqueAuthors.push(book.author);
                }
            })
            state.authors = uniqueAuthors;
        },
        setGenres(state) {
            let uniqueGenres = [];
            state.books.forEach(book => {
                if (!uniqueGenres.includes(book.genre)) {
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
    actions: {
        createRandomBook({state, commit}) {
            const adjectives = [
                'Таинственная', 'Забытая', 'Опасная', 'Вечная', 'Магическая',
                'Заброшенная', 'Затерянная', 'Легендарная', 'Мистическая',
                'Древняя', 'Запрещённая', 'Проклятая', 'Скрытая', 'Исчезнувшая',
                'Обречённая', 'Таинственная', 'Бессмертная', 'Затонувшая',
                'Прекрасная', 'Забытая', 'Дикая', 'Легендарная', 'Ужасная',
                'Огненная', 'Водяная', 'Страшная', 'Могучая'
            ];
            const nouns = [
                'книга', 'тайна', 'загадка', 'приключение', 'история',
                'сага', 'легенда', 'хроника', 'эпопея', 'повесть',
                'поэма', 'трилогия', 'сага', 'новелла', 'баллада',
                'песня', 'летопись',
            ];
            const phrases = [
                'забытых времён', 'скрытых миров', 'древних царств', 'ночных кошмаров', 'потерянных душ',
                'вечных странников', 'заколдованных лесов', 'тайных обрядов', 'странных существ',
                'волшебных земель', 'магических тайн', 'невидимых границ'
            ];
            const authorLastNames = [
                'Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов',
                'Попов', 'Алексеев', 'Лебедев', 'Семёнов', 'Егоров',
                'Павлов', 'Козлов', 'Степанов', 'Николаев', 'Орлов',
                'Андреев', 'Макаров', 'Новиков', 'Морозов', 'Волков',
                'Зайцев', 'Соловьёв', 'Борисов', 'Королёв', 'Григорьев',
                'Романов', 'Васильев', 'Петухов', 'Фёдоров', 'Михайлов'
            ];
            const genres = [
                'Фантастика', 'Фэнтези', 'Детектив', 'Триллер',
                'Роман', 'Приключения', 'Исторический', 'Ужасы', 'Научная фантастика',
                'Драма', 'Комедия', 'Мистика', 'Поэзия', 'Психология',
                'Документальный', 'Философия', 'Мемуары', 'Биография'
            ];

            function getRandomElement(arr) {
                return arr[Math.floor(Math.random() * arr.length)];
            }

            function getRandomDate(start, end) {
                const startDate = new Date(start);
                const endDate = new Date(end);
                const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
                return randomDate.toISOString().split('T')[0];
            }

            commit('pushBook', {
                name: `${getRandomElement(adjectives)} ${getRandomElement(nouns)} ${getRandomElement(phrases)}`,
                author: `${String.fromCharCode(1040 + Math.floor(Math.random() * 32))}. ${String.fromCharCode(1040 + Math.floor(Math.random() * 32))}. ${getRandomElement(authorLastNames)}`,
                dateOfPublication: `${getRandomDate('1800-01-01', '2024-06-13')}`,
                genre: `${getRandomElement(genres)}`,
                price: Math.floor(Math.random() * 2000) + 500,
                cover: getRandomElement(state.covers)
            });
            commit('setAuthors');
            commit('setGenres');
        }
    },
};
