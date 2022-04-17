function greening(value) {
  const pricePerMeter = 7.61;
  const discountPrice = 0.18;

  const price = Number(value[0]) * pricePerMeter;
  const discount = price * discountPrice;

  const finalPrice = price - discount;
  console.log(`The final price is: ${finalPrice} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}
greening(["550"]);

///////////////////////////////////////////////////////////////
///////////// First Steps In Coding - Exercise ////////////////
// USD to BGN 💹
function change(input) {
  const usd = 1.79549;
  let bgn = Number(input[0]);

  let change = usd * bgn;
  console.log(change);
}
change(["22"]);

// // Vacation Books List 📃

function vacationReading(input) {
  let pages = Number(input[0]);
  let pagePerHour = Number(input[1]);
  let days = Number(input[2]);

  let totalTime = pages / pagePerHour;
  let needTime = totalTime / days;

  console.log(needTime);
}
vacationReading(["212", "20", "2"]);

// // Radians to Degrees 🎓
function radiansToDegrees(input) {
  let radians = Number(input[0]);

  let degrees = (radians * 180) / Math.PI;
  console.log(degrees);
}
radiansToDegrees(["3.1416"]);

Deposit Calculator

function depositCalculator(input) {
  let depositAmount = Number(input[0]);
  let termDeposit = Number(input[1]);
  let annualInterestRate = Number(input[2]);

  let yearInterestRate = depositAmount * (annualInterestRate / 100);
  let monthInterestRate = yearInterestRate / 12;
  let total = monthInterestRate * termDeposit + depositAmount;
  console.log(total);
}
depositCalculator(["2350", "6", "7"]);
// ...

// ...

// // suppliesForSchool 📝
function suppliesForSchool(input) {
  let penCount = Number(input[0]);
  let markerCount = Number(input[1]);
  let detergent = Number(input[2]);
  let discount = Number(input[3]);

  let money = penCount * 5.8 + markerCount * 7.2 + detergent * 1.2;
  let totalMoney = money - money * (discount / 100);

  console.log(totalMoney);
}
suppliesForSchool(["4", "2", "5", "13"]);

// // Repainting 🎨
function repaining(input) {
  let priceNylon = 1.5;
  let pricePaint = 14.5;
  let pricePaintThinner = 5;
  let bag = 0.4;

  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let paintThinner = Number(input[2]);
  let hours = Number(input[3]);

  paint = paint * 1.1;
  nylon = nylon + 2;

  let stockPrice =
    nylon * priceNylon +
    paint * pricePaint +
    paintThinner * pricePaintThinner +
    bag;
  let workerPriceForOneHour = stockPrice * 0.3;

  let total = hours * workerPriceForOneHour + stockPrice;
  console.log(total);
}
repaining(["10", "11", "4", "8"]);

// // Food Delivery 😋
// function delivery(input) {
  const chickenMenu = 10.35;
  const fishMenu = 12.4;
  const vegetarianMenu = 8.15;
  const deliveryPrice = 2.5;

  let chickenOrders = Number(input[0]);
  let fishOrders = Number(input[1]);
  let vegetarianOrders = Number(input[2]);

  let chickenPrice = chickenOrders * chickenMenu;
  let fishPrice = fishOrders * fishMenu;
  let vegetarianPrice = vegetarianOrders * vegetarianMenu;

  let price = chickenPrice + fishPrice + vegetarianPrice;

  let dessertPrice = price * (20 / 100);

  let totalPrice = price + deliveryPrice + dessertPrice;

  console.log(totalPrice);
}
delivery(["2", "4", "3"]);

// // Basketball Equipment 🏀
function equipment(input) {
  let pricePerYear = Number(input[0]);

  let bootsPrice = pricePerYear - pricePerYear * (40 / 100);
  let outfitPrice = bootsPrice - bootsPrice * (20 / 100);
  let basketballPrice = outfitPrice * 0.25;
  let accessoriesPrice = basketballPrice * 0.2;

  let totalPrice =
    bootsPrice +
    outfitPrice +
    basketballPrice +
    accessoriesPrice +
    pricePerYear;

  console.log(totalPrice);
}
equipment(["365"]);

// // FISH TANK  ♒
function fishTank(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let buzySpace = Number(input[3]) / 100;

  let tankVolume = length * width * height;
  let volumeInLitres = tankVolume / 1000;
  let needsLitres = volumeInLitres * (1 - buzySpace);

  console.log(needsLitres);
}
fishTank(["85", "75", "47", "17"]);

//////////////////////////////////

function harvest(input) {
  const vineYardSqM = Number(input[0]);
  const grapesPerSqM = Number(input[1]);
  const requiredLitersOfWine = Number(input[2]);
  const workers = Number(input[3]);
  const grapesKgRequiredForLiterWine = 2.5;

  const totalHarvest = vineYardSqM * grapesPerSqM;
  const harvestForWine = totalHarvest * 0.4;
  const litersWineFromHarvest = harvestForWine / grapesKgRequiredForLiterWine;

  if (litersWineFromHarvest < requiredLitersOfWine) {
    let wineNeeded = Math.floor(requiredLitersOfWine - litersWineFromHarvest);
    console.log(
      `It will be a tough winter! More ${wineNeeded} liters wine needed.`
    );
  } else {
    let wineLeft = Math.ceil(litersWineFromHarvest - requiredLitersOfWine);
    let winePerWorker = Math.ceil(wineLeft / workers);
    console.log(
      `Good harvest this year! Total wine: ${litersWineFromHarvest} liters.`
    );
    console.log(
      `${wineLeft} liters left -> ${winePerWorker} liters per person.`
    );
  }
}
harvest(["650", "2", "175", "3"]);
