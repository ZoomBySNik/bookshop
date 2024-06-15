import cover1 from "@/assets/bookscovers/random-book-cover-1.webp";
import cover2 from "@/assets/bookscovers/random-book-cover-2.webp";
import cover3 from "@/assets/bookscovers/random-book-cover-3.webp";
import cover4 from "@/assets/bookscovers/random-book-cover-4.webp";
import axios from "axios";

export const booksModule = {
    namespaced: true,
    state: () => ({
        covers: [cover1, cover2, cover3, cover4],
        books: [],
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
        apiKey: '3ed216af4b66442090a2dce724a9980a',
        url: 'https://crudcrud.com/api',
    }),
    getters: {
        sortedBooks(state) {
            let sortedBooks = [...state.books];
            switch (state.selectedSort) {
                case 'dateNewest':
                    sortedBooks = sortedBooks.sort((a, b) => new Date(b.dateOfPublication) - new Date(a.dateOfPublication));
                    break;
                case 'dateOldest':
                    sortedBooks = sortedBooks.sort((a, b) => new Date(a.dateOfPublication) - new Date(b.dateOfPublication));
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
            return sortedBooks;
        },
    },
    mutations: {
        setBooks(state, books) {
            state.books = books;
        },
        pushBook(state, book) {
            state.books.push(book);
        },
        setAuthors(state) {
            state.authors = [...new Set(state.books.map(book => book.author))];
        },
        setGenres(state) {
            state.genres = [...new Set(state.books.map(book => book.genre))];
        },
        setSelectedSort(state, sort) {
            state.selectedSort = sort;
        }
    },
    actions: {
        async fetchBooks({state, commit}) {
            try {
                const response = await axios.get(`${state.url}/${state.apiKey}/books`);
                commit('setBooks', response.data);
                commit('setAuthors');
                commit('setGenres');
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        },
        async createBook({state, commit}, book) {
            try {
                const response = await axios.post(`${state.url}/${state.apiKey}/books`, book);
                commit('pushBook', response.data);
                commit('setAuthors');
                commit('setGenres');
            } catch (error) {
                console.error('Error creating book:', error);
            }
        },
        async updateBook({state, commit}, book) {
            try {
                let { _id, ...bookWithoutId } = book;
                const response = await axios.put(`${state.url}/${state.apiKey}/books/${book._id}`, bookWithoutId);
                const updatedBooks = state.books.map(b => (b._id === book._id ? response.data : b));
                commit('setBooks', updatedBooks);
                commit('setAuthors');
                commit('setGenres');
            } catch (error) {
                console.error('Error updating book:', error);
            }
        },
        async deleteBook({state, commit}, book) {
            try {
                await axios.delete(`${state.url}/${state.apiKey}/books/${book._id}`);
                const updatedBooks = state.books.filter(item => item._id !== book._id);
                commit('setBooks', updatedBooks);
                commit('setAuthors');
                commit('setGenres');
            } catch (error) {
                console.error('Error deleting book:', error);
            }
        },
        createRandomBook({state, dispatch}) {
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

            let book = {
                name: `${getRandomElement(adjectives)} ${getRandomElement(nouns)} ${getRandomElement(phrases)}`,
                author: `${String.fromCharCode(1040 + Math.floor(Math.random() * 32))}. ${String.fromCharCode(1040 + Math.floor(Math.random() * 32))}. ${getRandomElement(authorLastNames)}`,
                dateOfPublication: getRandomDate('1800-01-01', '2024-06-13'),
                genre: getRandomElement(genres),
                price: Math.floor(Math.random() * 2000) + 500,
                cover: getRandomElement(state.covers)
            };
            dispatch('createBook', book);
        }
    },
};
