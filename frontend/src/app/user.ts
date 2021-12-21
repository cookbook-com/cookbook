export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  age: number;
  likedRecipe: number;

  constructor(
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    age: number,
    likedRecipe: number
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.age = age;
    this.likedRecipe = likedRecipe;
  }
}
