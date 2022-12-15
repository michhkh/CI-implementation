console.log("This node test is working as intended and fresh and deleted");

const attack = (creatureName, damage, isCritical) =>
  `${creatureName} dealt ${isCritical ? damage * 2 : damage} damage!`;

console.log(attack("Kylo Ren", 1));
