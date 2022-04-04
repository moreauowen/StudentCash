import faker from "@faker-js/faker";

/*
   Acc schema ideal
    {
      name: "xxx",
      accounts: {
        "acc_name": {
          dateAdded: datestring,
          currentBalance: number,
          transactions: [{
            transactionName: "yyy",
            transactionAmount: number,
            transactionDate: datestring,
          },
          {
            transactionName: "zzz",
            transactionAmount: number,
            transactionDate: datestring,
          },
          {
            transactionName: "xyxy",
            transactionAmount: number,
            transactionDate: datestring,
          }
          ]
        }
      }
    }
    */

interface Transaction {
  transactionName: string;
  transactionAmount: number;
  transactionDate: Date;
}

const generateNewTransaction = (): Transaction => {
  return {
    transactionName: faker.company.companyName(),
    transactionAmount: parseInt(faker.finance.amount(10, 500, 2)),
    transactionDate: faker.date.recent(15),
  };
};

const generateAccountTransactions = (numberOfTimes: number): Array<Transaction> => {
  const x: Array<Transaction> = [];
  for (let i = 0; i < numberOfTimes; i++) {
    x.push(generateNewTransaction());
  }
  return x;
};

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
  };
};

export default newFakeUserAccount;
