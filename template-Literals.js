function classWork(floor) {
  let reply =
    floor > 0 && floor <= 4
      ? "WEB3BRIDGE"
      : floor >= 5 && floor <= 8
      ? "NIGERIA"
      : floor >= 9 && floor <= 12
      ? "SMARTCONTRACT"
      : "BLOCKCHAIN";
  return reply;
}

console.log(classWork(9));
