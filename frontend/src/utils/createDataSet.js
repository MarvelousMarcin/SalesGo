export const getValues = (sortingType, range, orders) => {
  if (range === "This year") {
    const monthsObj = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    };
    const returnArr = [];
    orders.forEach((order) => {
      const now = new Date(Date.now());
      const currentYear = now.getFullYear();
      const month = order.date.split(" ")[0].split("-")[1];
      const year = order.date.split(" ")[0].split("-")[0];

      if (currentYear == year) {
        monthsObj[month] = monthsObj[month] + order[sortingType];
      }
    });
    for (let [key, value] of Object.entries(monthsObj)) {
      returnArr.push(value);
    }
    return returnArr;
  } else if (range === "This week") {
    let now = new Date(Date.now());
    now.setHours(0, 0, 0, 0);
    const lastMonday = now.setDate(now.getDate() - ((now.getDay() + 6) % 7));
    const nextSaturday = now.setDate(
      now.getDate() + ((7 + (7 - now.getDay())) % 7)
    );

    const monDate = new Date(lastMonday);
    const satDate = new Date(nextSaturday);

    const weekObj = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    };

    const returnArr = [];
    orders.forEach((order) => {
      const orderDate = new Date(order.date);

      if (
        orderDate.getTime() >= monDate.getTime() &&
        orderDate.getTime() <= satDate.getTime()
      ) {
        let day = orderDate.getDay();
        if (day === 0) {
          day = 7;
        }
        weekObj[day] = weekObj[day] + order[sortingType];
      }
    });
    for (let [key] of Object.keys(weekObj)) {
      returnArr.push(weekObj[key]);
    }

    return returnArr;
  } else {
    let now = new Date(Date.now());

    const start = now.setHours(0, 0, 0, 0);
    const startD = new Date(start);
    const end = now.setHours(24, 0, 0, 0);
    const endD = new Date(end);

    const dayObj = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0,
      24: 0,
    };

    const returnArr = [];
    orders.forEach((order) => {
      const orderDate = new Date(order.date);

      if (
        orderDate.getTime() >= startD.getTime() &&
        orderDate.getTime() <= endD.getTime()
      ) {
        const hour = Number(order.date.split(" ")[1].split(":")[0]);
        dayObj[hour] = dayObj[hour] + order[sortingType];
      }
    });
    for (let [key, value] of Object.entries(dayObj)) {
      returnArr.push(value);
    }

    return returnArr;
  }
};
