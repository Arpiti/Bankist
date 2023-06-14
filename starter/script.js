'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Arpit Rai',
  movements: [430, 1000, -700, -50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const createUsernames = (accounts) => {
  accounts.forEach( acc => {
    
    const name = acc.owner.toLowerCase().split(' ').map(name => name.slice(0,1)).join('');
    console.log(`Username for ${acc.owner} is ${name}`);
    acc.username = name;
  })

  console.log(accounts);
}

const reduceMovements = (movement) => {
  return movement.reduce((acc, curr, i, arr) => {
    return acc + curr;
  }, 0)
}
console.log(reduceMovements(account2.movements));

createUsernames(accounts);

const displayMovements = (movements) => {
  containerMovements.innerHTML = ``;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    const html = `
       <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
}

 // displayMovements(account5.movements);


  const julia = [3, 5, 2, 12, 7];
  const kate = [4, 1, 15, 8, 3];

  console.log("Sort >> ", kate.sort((a,b) => a-b));

  console.log("Find ", accounts.find((curr, index, arr) => curr.owner === 'Arpit Rai'));

const checkDogs = function (dogsJulia, dogsKate) {

    const copyDJ = dogsJulia.slice();
    console.log(copyDJ.splice(-2));
    // console.log(copyDJ.splice(-1));
    copyDJ.splice(0,1);

    console.log("After 1 >> ", copyDJ);

    copyDJ.forEach( (age, index, arr) => {
      console.log(`Dog number ${index} is `, age > 3? `and adult and is ${age} years old`: `still a puppy. 🐶`); 
    })

    dogsKate.forEach( (age, index, arr) => {
      console.log(`Dog number ${index} is `, age > 3? `and adult and is ${age} years old`: `still a puppy. 🐶`); 
    })
}  

const getResult = (dogArr) => {

  const humanAge =  dogArr.map(dogAge => {
  if(dogAge <= 2)
    return 2 * dogAge
  else
    return 16 + dogAge * 4;
  })

  const filterHuman = humanAge.filter(age => age >=18);

  console.log("FH >> ", filterHuman);

  const addHuman = filterHuman.reduce((acc, curr) => {
    return acc + curr;
  }, 0)


  console.log("Avg >> ", addHuman/(filterHuman.length));
}

getResult([...julia, ...kate]);


// checkDogs(julia, kate);