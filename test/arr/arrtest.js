const books= [{
	id: 1,
	name: 'Незнайка на луне',
	author: 'Носов Н.Н.',
	year: '2013',
	isRead: false,
	page: '',
}, {
	id: 2,
	name: 'Незнайка на луне',
	author: 'Носов Н.Н.',
	year: '2013',
	isRead: false,
	page: '',
}]


function findByID (id){
	let book =  books.find( book => book.id === id)
	return book.name;
}

let mybook = findByID(2);

console.log(mybook);