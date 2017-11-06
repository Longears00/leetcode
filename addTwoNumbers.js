function addTwoNumber(num1, num2) {
  let root = [];
  let carry = 0;
  while (num1.length != 0 || num2.length != 0  || carry == 1) {
    let value = 0;
    if (num1.length != 0)
    {
      value += num1.pop();
      console.log(value);
    }

    if (num2.length != 0)
    {
      value += num2.pop();
      console.log(value);
    }

    value += carry;
    root.push(parseInt(value % 10));
    carry = parseInt(value / 10);
  }

  return root;
}

function execute() {
  let num1 = [2, 4, 3];
  let num2 = [5, 6, 4];
  console.log(addTwoNumber(num1, num2));
}

execute();
