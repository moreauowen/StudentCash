const generateTwoWeekSummary = (transactions) => {
    const dateFormat = {month: "numeric", day:"numeric"}
    const sortedTransactions = transactions.sort((a, b) => b.transactionDate - a.transactionDate)

    let dateBalanceArray = {}
    let currentBalance = 1000;

    let p1 = 0, p2 = 0, currentDate = new Date();

    while (p1 < 14 || p2 < sortedTransactions.length) {
      if (sortedTransactions[p2]?.transactionDate.toLocaleDateString('en-us', dateFormat) === currentDate.toLocaleDateString('en-us', dateFormat)) {
        currentBalance += sortedTransactions[p2].transactionAmount;
        p2++;
      } else {
        const date = currentDate.toLocaleDateString('en-us', {month: "numeric", day:"numeric"})
        dateBalanceArray[date] = currentBalance
        currentDate.setDate(currentDate.getDate() - 1)
        p1++;
      }
    }
    return dateBalanceArray
  }

  export default generateTwoWeekSummary;