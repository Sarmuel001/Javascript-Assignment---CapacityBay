const Booklist = {title:'The title of the book',
  author: 'The author of the book', yearPublished:78, Available:true/false}

let library=[];
//Pushing new books into the library array
library.push({title:"The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished:1925, Availability:true});
library.push({title:"To Kill a Mockingbird", author:"Harper Lee", yearPublished:1960, Availability:true});
library.push({title:"1984", author:"George Orwell", yearPublished:1949, Availability: true});
library.push({title:"Pride and Prejudice", author: "Jane Austen", yearPublished:1813, Availability: true});

console.log(library);
//using splice method to cut a book from index 3
console.log(library.splice(3,1));
//Using include method to check if a book is available
let libInclude = library.some(book => book.title === 'The Great Gatsby');
console.log(libInclude);
//Returning the Available of first book to false
console.log(library.includes(''));
//Borrowing or Removing the first book using shift method
library.shift('');
console.log(library)
//Adding new book using Unshift method
let newBook = {title:'The Catcher in the Rye', author: "J.D. Salinger", yearPublished:1951, Availability:true};
library.unshift(newBook);
console.log(library);
//The join aspect, even thou i could not get the correct output
console.log(library.join(','))

//Here is the new arrivals code
let newArrivals = library.splice(1,2);
console.log(newArrivals)



// let libSplice= library.splice(library.splice(3,1, ''));
// console.log(library);
// let libInclude = libSplice.some(book => book.title === 'The Great Gatsby');
// let libShift = libSplice.shift('');
// let libTest = libSplice.includes('');
// let libUnshift = {title:'The Catcher in the Rye', author: "J.D. Salinger", yearPublished:1951, Availability:true};
// library.unshift(libUnshift);
// console.log(library);
// const libJoin= library.join(' , ');

// const newArrivals = library.slice(11);



// // console.log(library);
// console.log(libSplice);
// console.log(`The output of include: ${libInclude}`);
// // console.log(libShift);
// console.log(libTest);
// console.log(libJoin);
// console.log(`Here is the new Arrival: ${newArrivals}`)


// console.log(library.length);