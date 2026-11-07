// export {};

class User {
    public id: number;
    public name: string;
    public email: string;
    public noteBooks: NoteBook[];
    private password:string;
    protected phone:string;
    private age:number;

    constructor (
        id:number,
        name:string,
        email:string,
        password:string,
        phone:string,
        age:number
    )
    {
        if (age < 18 || age > 60) {
            throw new Error("Age must be between 18 and 60")
        }

        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
        this.phone=phone;
        this.age=age;
        this.noteBooks=[];
    }

    public displayInfo():void {
        console.log("ID :", this.id);
        console.log("name :", this.name);
        console.log("email :", this.email);
        console.log("phone :", this.phone);
        console.log("age :", this.age);
        
    }

    public addNoteBook(noteBook:NoteBook):void{
        this.noteBooks.push(noteBook);
        console.log("noteBook added successfully");
    }
}

class Admin extends User {
    constructor(
         id:number,
        name:string,
        email:string,
        password:string,
        phone:string,
        age:number
    ){
        super(id,name,email,password,phone,age)
    }
    public manageNotes():void{
        console.log("Admin manage notes");
    }
}

class Note {
     public id: number;
     public title: string;
     public content: string;
     public userId: number;
     public author: User;

     constructor(
        id: number,
        title: string,
        content: string,
        userId: number,
        author: User,
     ){
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.author = author;
     }
    
     public preview():void {
        console.log("preview:",this.content.substring(0,25));
        
     }
}

class NoteBook {
    public notes: Note[];
    constructor() {
            this.notes = [];
        }
        public addNote(note:Note):void{
            this.notes.push(note);
            console.log("added successfully ");
            
        }
        public removeNote(id:number):void{
            this.notes=this.notes.filter(note => note.id !== id);
            console.log("removed successfully");
        }
    }


class storage<Type>{
    private items:Type[]=[];
    public add(item:Type):void {
        this.items.push(item);
    }
    public remove(item:Type):void {
        this.items= this.items.filter(i => i !== item);
    }
    public getAll():Type[] {
       return this.items;
    }
}

const user1 = new User(
    1,
    "shahd",
    "shahd@gmail.com",
    "123456",
    "01060026965",
    25
);
user1.displayInfo();



const admin1 = new Admin(
    1,
    "shahd",
    "shahd@gmail.com",
    "123456",
    "01060026965",
    25
);
admin1.displayInfo();
admin1.manageNotes();


const note1 = new Note(
    1,
    "my note",
    "love this soooooooooooo",
    1,
    user1
);
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
console.log("author:",note1.author.name);



// Part B-UMLDigram

//User :
//+number id
//+string name
//+string email
//-string password
//#string phone
//-number age
//+noteBook[] noteBooks
// +displayInfo():void
// +addNoteBook(noteBook):void


//Admin :
//+manageNotes():void

//NoteBook :
//+Note[] notes
//+addNote(note):void
//+removeNote(id):void

//Note :
//+number id
//+string title
//+string content
//+number userId
//+User author
//+preview():void


//storage<Type>
//-Type[]items
//+add(item):void
//+remove(item):void
//+getAll:Type[]


//admin = inheritance = user
//user = aggregation = noteBooks
//noteBook = compostion = notes
//note = association = user

