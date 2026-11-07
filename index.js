class User {
    id;
    name;
    email;
    noteBooks;
    password;
    phone;
    age;
    constructor(id, name, email, password, phone, age) {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age;
        this.noteBooks = [];
    }
    displayInfo() {
        console.log("ID :", this.id);
        console.log("name :", this.name);
        console.log("email :", this.email);
        console.log("phone :", this.phone);
        console.log("age :", this.age);
    }
    addNoteBook(noteBook) {
        this.noteBooks.push(noteBook);
        console.log("noteBook added successfully");
    }
}
class Admin extends User {
    constructor(id, name, email, password, phone, age) {
        super(id, name, email, password, phone, age);
    }
    manageNotes() {
        console.log("Admin manage notes");
    }
}
class Note {
    id;
    title;
    content;
    userId;
    author;
    constructor(id, title, content, userId, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.author = author;
    }
    preview() {
        console.log("preview:", this.content.substring(0, 25));
    }
}
class NoteBook {
    notes;
    constructor() {
        this.notes = [];
    }
    addNote(note) {
        this.notes.push(note);
        console.log("added successfully ");
    }
    removeNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        console.log("removed successfully");
    }
}
const user1 = new User(1, "shahd", "shahd@gmail.com", "123456", "01060026965", 25);
user1.displayInfo();
const admin1 = new Admin(1, "shahd", "shahd@gmail.com", "123456", "01060026965", 25);
admin1.displayInfo();
admin1.manageNotes();
const note1 = new Note(1, "my note", "love this soooooooooooo", 1, user1);
note1.preview();
const notebook1 = new NoteBook();
notebook1.addNote(note1);
console.log(notebook1.notes);
notebook1.removeNote(1);
console.log(notebook1.notes);
const notebook2 = new NoteBook();
user1.addNoteBook(notebook1);
user1.addNoteBook(notebook2);
console.log(user1.noteBooks);
console.log("author:", note1.author.name);
export {};
