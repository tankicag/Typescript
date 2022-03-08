// @ts-check

// let hello:string = "world";

// Function in typescript
// const getFullName = (name: string, surname: string): string => {
//   return name + " " + surname;
// };

// console.log(getFullName("Monster", "Lessons"));

// Objects in Typescript
// interface UserInterface {
//   name: string;
//   age?: number;
//   getMessage(): string;
// }
// const user: UserInterface = {
//   name: "Monster",
//   age: 30,
//   getMessage() {
//     return "Hello" + name;
//   },
// };

// const user2: UserInterface = {
//   name: "Jack",
//   getMessage() {
//     return "Hello" + name;
//   },
// };

// console.log(user.name);
// type ID = string;
// type PopularTag = string;
// type MaybePopularTag = PopularTag | null;

// interface UserInterface {
//   name: string;
//   surname: string;
// }
// const PopularTags: PopularTag[] = ["dragon", "coffee"];
// const dragonTag: MaybePopularTag = "dragon";

// let username: string = "alex";
// let pageNumber: string | number = "1";

// let errorMessage: string | null = null;

// let user: UserInterface | null = null;

// const doSomething = (): void => {
//   console.log("doSomething");
// };

// let foo: any = "foo";
// console.log(foo.bar());

// const doSomething = (): never => {
//   throw "never";
// };

// let vAny: any = 10;
// let vUnknown: unknown = 10;

// // let s1: string = vAny;
// // let s2: string = vUnknown;

// // let s1: string = vAny;
// let s2: string = vUnknown as string;
// let pageNumber: string = "1";
// let numberPageNumber: number = pageNumber as unknown as number;

// let page: any = "1";
// let pageNumber = page as string;

// const someElement = document.querySelector(".foo") as HTMLInputElement;

// someElement.addEventListener("blur", (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log("event", target.value);
// });

// interface UserInterface {
//   getFullname(): string;
// }
// class User implements UserInterface {
//   protected firstName: string;
//   private lastName: string;
//   readonly unchangableName: string;
//   static readonly maxAge;

//   constructor(firstName: string, lastName: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.unchangableName = firstName;
//   }

//   //   changableUnchangableName(): void {
//   //     this.unchangableName = "foo";
//   //   }
//   getFullname(): string {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Admin extends User {
//   private editor: string;

//   setEditor(editor: string): void {
//     this.editor = editor;
//   }

//   getEditor(): string {
//     return this.editor;
//   }
// }

// const user = new User("Monster", "lessons");
// console.log(user.getFullname);
// console.log(User.maxAge);

// const admin = new Admin("foo", "Bar");
// console.log(admin.setEditor);

// const addId = <T>(obj: T) => {
//   const id = Math.random().toString(16);
//   return {
//     ...obj,
//     id,
//   };
// };

// interface UserInterface<T, V> {
//   name: string;
//   data: T;
//   meta: V;
// }

// const user: UserInterface<{ meta: string }, string> = {
//   name: "Jack",
//   data: {
//     meta: "foo",
//   },
//   meta: "bar",
// };

// const user2: UserInterface<string[], string> = {
//   name: "Jack",
//   data: ["foo", "bar", "baz"],
//   meta: "bar",
// };

// const result = addId<UserInterface>(user);
// console.log("result", result);

const statuses = {
  notStarted: 0,
  inProgress: 1,
  done: 2,
};

console.log(statuses.inProgress);

enum Status {
  NotStarted = "notStarted",
  InProgress = "inProgress",
  Done = "done",
}

interface Task {
  id: string;
  status: Status;
}

let notStrartedStatus: Status = Status.NotStarted;

notStrartedStatus = Status.Done;

console.log(Status.InProgress);
