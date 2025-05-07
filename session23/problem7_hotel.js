// Coding Challenge #7 Hotel Room Pricing System
// Write a function getRoomPrice(type, isWeekend, hasDiscount) that:
// "Standard" costs $100 on weekdays, $120 on weekends.
// "Deluxe" costs $150 on weekdays, $180 on weekends.
// "Suite" costs $200 on weekdays, $250 on weekends.
// If hasDiscount === true, apply a 10% discount.
// examples:

function getRoomPrice(type, isWeekend, hasDiscount) {
  let price = 0;

  switch (type) {
    case "Standard":
      price = isWeekend ? 120 : 100;
      break;
    case "Deluxe":
      price = isWeekend ? 180 : 150;
      break;
    case "Suite":
      price = isWeekend ? 250 : 200;
      break;
    default:
      return "Invalid room type";
  }

  if (hasDiscount) {
    price *= 0.9; // Apply 10% discount
  }

  return price;
}

// Examples:
console.log("Standard, Weekday, No Discount:", getRoomPrice("Standard", false, false)); // 100
console.log("Standard, Weekend, No Discount:", getRoomPrice("Standard", true, false));  // 120
console.log("Standard, Weekday, Discount:", getRoomPrice("Standard", false, true));   // 90
console.log("Standard, Weekend, Discount:", getRoomPrice("Standard", true, true));    // 108

console.log("Deluxe, Weekday, No Discount:", getRoomPrice("Deluxe", false, false));   // 150
console.log("Deluxe, Weekend, Discount:", getRoomPrice("Deluxe", true, true));      // 162

console.log("Suite, Weekday, Discount:", getRoomPrice("Suite", false, true));       // 180
console.log("Suite, Weekend, No Discount:", getRoomPrice("Suite", true, false));    // 250

console.log("Invalid Type:", getRoomPrice("Penthouse", false, false)); // Invalid room type