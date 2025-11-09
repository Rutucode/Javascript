// Switch statement example

/**
 * Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
 */

// For example: "You selected Salad. That will be $4"

function selectItem(item) {
  let price = 0;

  switch (item) {
    case "Coffee":
      price = 2;
      break;
    case "sandwitches":
      price = 5;
      break;
    case "salad":
      price = 4;
      break;
    case "lemon cake":
      price = 3;
      break;
    default:
      return "Item not found";
  }
  return `You selected ${item}. That will be $${price}`;
}

console.log(selectItem("salad"));
