// const numbers = [1, 2, 3, 4, 5, 6];
// const [firstNum, secondNum, thirdNum, ...otherNumbers] = numbers;
// console.log(firstNum, secondNum, thirdNum, otherNumbers);
//
// const user = {
//   name: 'John Doe',
//   contact: {
//     email: 'john@example.com',
//     phone: '123-456-7890',
//   },
// };
// const {
//   name,
//   contact: { email, phone },
// } = user;
//
// console.log(email);
// const coordinates = [10, 20, 30];
// const [firstArrNum, secondArrNum] = coordinates.map(coordinates => coordinates);
// console.log(firstArrNum, secondArrNum);
// const product = {
//   name: 'Smartphone',
//   brand: 'BrandX',
//   price: 499,
//   stock: 200,
// };
// const { name, price } = product;
// console.log(name, price);
// const userProfile = {
//   username: 'johndoe123',
//   details: {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//       street: '123 Main St',
//       city: 'New York',
//       postalCode: '10001',
//     },
//   },
// };
// const {
//   details: {
//     firstName,
//     lastName,
//     address: { street, city },
//   },
// } = userProfile;
// console.log(firstName, lastName, street, city);
// const car = {
//   brand: 'Toyota',
//   model: 'Corolla',
//   year: 2021,
// };
// const { brand: carBrand, model: carModel } = car;
// console.log(carModel)
// const books = [
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
//   { title: '1984', author: 'George Orwell', year: 1949 },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
// ];
// books.forEach(book => {
//   const { title, author, year } = book;
//   console.log(`Title: ${title}, Author: ${author}, Year: ${year}`);
// });
// const productDetails = {
//   productName: 'Laptop',
//   priceDetails: {
//     price: 1000,
//     discount: 0.1,
//   },
//   stock: {
//     available: true,
//     quantity: 50,
//   },
// };
//
// const {
//   productName,
//   priceDetails: { price },
//   stock: { available, quantity },
// } = productDetails;
// console.log(productName, price, available, quantity);
// const numbers = [1, 2, 3, 4, 5];
// const [one, two, three] = numbers;
// const multiplyNum = [one, two, three].map(number => number * 2);
// console.log(multiplyNum)
const order = {
  customerName: 'Alice',
  item: {
    name: 'Pizza Margherita',
    price: 12,
  },
};
function describeOrder(order) {
  const {
    customerName,
    item: { name, price },
  } = order;
  return `Customer ${customerName} замовив ${name} за ${price}$`;
}
console.log(describeOrder(order)); // Виведе: "Customer Alice замовив Pizza Margherita за 12$"

const users = [
  { name: 'John', age: 25, city: 'New York' },
  { name: 'Emma', age: 35, city: 'London' },
  { name: 'Mike', age: 40, city: 'Paris' },
  { name: 'Sophia', age: 28, city: 'Berlin' },
];
users.map(user => user.age>30).filter(user=>
  console.log(`${user.name} from ${user.city}`)
)


// const product = { price: 50 }; // Поля "name" немає
//
// function describeProduct(product) {
//   const { product, price = 50 } = product;
//   return `Product: ${product}, Price: ${price} `;
// }

// console.log(describeProduct(product));
// Виведе: "Product: Unknown, Price: 50"
let a = 5;
let b = 10;



console.log(a, b); // Має вивести: 10, 5
