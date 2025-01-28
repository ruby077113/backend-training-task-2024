const members = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Evan",
  "Fiona",
  "George",
  "Hannah",
];
let purchaseRecords = [];

const addPurchaseRecord = (member, item) => {
  if (typeof member !== "string" || typeof item !== "number") {
    console.log("輸入錯誤，請輸入有效的會員名稱和課程數量");
    return;
  }
  let price = 0;

  if (item >= 1 && item <= 10) {
    price = 1500;
  }
  if (item >= 11 && item <= 20) {
    price = 1300;
  }
  if (item >= 21) {
    price = 1100;
  }

  const record = {
    name: member,
    courses: item,
    price: price,
    totalPrice: price * item,
  };
  purchaseRecords.push(record);
  console.log(
    ` 新增購買記錄成功！會員 ${record.name} 購買 ${record.courses} 堂課，總金額為 ${record.totalPrice} 元。`
  );
};

const calculateTotalPrice = () => {
  const totalPrice = purchaseRecords.reduce(
    (acc, record) => acc + record.totalPrice,
    0
  );
  console.log(` 目前總營業額為 ${totalPrice} 元`);
  return;
};

const filterNoPurchaseMember = () => {
  const noPurchaseMembers = members.filter(
    (member) => !purchaseRecords.some((record) => record.name === member)
  );
  console.log("沒有購買課程的會員有：", noPurchaseMembers.join(", "));
};

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");

calculateTotalPrice();
filterNoPurchaseMember();
