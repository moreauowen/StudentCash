import faker from "@faker-js/faker";

interface Transaction {
  transactionName: string;
  transactionAmount: number;
  transactionDate: Date;
}

interface RecurringCharge {
  companyName: string,
  chargeAmount: number,
  recurringDate: string;
}

interface IncomeSource {
  source: string,
  amount: number
}

const generateNewTransaction = (): Transaction => {
  return {
    transactionName: faker.company.companyName(),
    transactionAmount: parseInt(faker.finance.amount(10, 500, 2)),
    transactionDate: faker.date.recent(15),
  };
};

const generateNewRecurringCharge = (): RecurringCharge => {
  return {
    companyName: faker.company.companyName(),
    chargeAmount: parseInt(faker.finance.amount(5, 15)),
    recurringDate: "Monthly"
  }
}

const generateNewIncomeSource = (): IncomeSource => {
  return {
    source: faker.company.companyName(),
    amount: Math.ceil(parseInt(faker.finance.amount(300, 800)) / 10) * 10
  }
}

const generateAccountTransactions = (numberOfTimes: number): Array<Transaction> => {
  let x: Array<Transaction> = [];
  for (let i = 0; i < numberOfTimes; i++) {
    x.push(generateNewTransaction());
  }
  return x;
};

const generateRecurringCharges = (numberOfTimes: number): Array<RecurringCharge> => {
  let x: Array<RecurringCharge> = [];
  for (let i = 0; i < numberOfTimes; i++) {
    x.push(generateNewRecurringCharge())
  }
  return x
}

const generateMonthlyIncome = (numberOfTimes: number): Array<IncomeSource> => {
  let x: Array<IncomeSource> = [];
  for (let i = 0; i < numberOfTimes; i++) {
    x.push(generateNewIncomeSource())
  }
  return x
}

const newFakeUserAccount = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    accounts: [
      {
        institution: "Bank of America",
        lastFour: Math.round(10000 * Math.random()),
        dateAdded: new Date().toString(),
        currentBalance: faker.finance.amount(500, 10000, 2, "$"),
        transactions: generateAccountTransactions(
          Math.round(1 + 15 * Math.random())
        ),
      },
      {
        institution: "Chase",
        lastFour: Math.round(10000 * Math.random()),
        dateAdded: new Date().toString(),
        currentBalance: faker.finance.amount(500, 5000, 2, "$"),
        transactions: generateAccountTransactions(
          parseInt(faker.finance.amount(4, 20))
        ),
      },
    ],
    recurringCharges: generateRecurringCharges(Math.floor(Math.random() * 4)),
    monthlyIncome: generateMonthlyIncome(Math.ceil(Math.random() * 2))
  };
};

export default newFakeUserAccount;

// user schema
// user: {
//   firstName: ---
//   lastname: ---
//   accounts: [...]
//   recurringCharges: [...]
//   monthlyIncome: [...]
// }

// account schema
// account:  {
//   institution: ---
//   lastFour: ---
//   dateAdded: ---
//   currentBalance: ---
//   transactions: []
// }

// transaction schema
// transaction: {
//   transactionName: ---
//   transactionAmount: ---
//   transactionDate: ---
// }

// recurring charge schema
// recurringcharge {
//   companyName: ---
//   chargeAmount: ---
//   recurringDate: ---
// }

// income source schema
// incomesource {
//   source: ---
//   amount: ---
// }
