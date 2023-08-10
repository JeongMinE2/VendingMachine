// 잔액 정보
let machine_total_balance = 1000;   // 자판기 총 잔액
let input_amount = 0;               // 투입 금액
let My_wallet = 10000;              // 내 지갑

// 음료 정보
const drink = [
  {drinkName : "코카콜라", price : 700, stock : 5},
  {drinkName : "오렌지 주스", price : 1200, stock : 5},
  {drinkName : "커피", price : 500, stock : 5},
  {drinkName : "물", price : 700, stock : 5},
  {drinkName : "옥수수 수염차", price : 1200, stock : 5},
  {drinkName : "밀키스", price : 700, stock : 5},
  {drinkName : "트래비", price : 1000, stock : 5}
]

// for (const drinks of drink) {
//   document.getElementById("output_box").innerHTML = JSON.stringify(drinkName);
// }

// 자판기 초기 금액 페이지 출력
function input() {
  document.getElementById("machine_total_balance").value = 1000;  // 자판기 총 잔액
  document.getElementById("input_amount").value = 0;              // 투입 금액
  document.getElementById("My_wallet").value = 10000;             // 내 지갑
}
input();  // 함수 실행

// 100원 클릭 시
document.getElementById("100").onclick = function() {
  let output = document.getElementById("output_box");

  if (100 <= My_wallet) {
    output.insertAdjacentHTML("afterbegin", `<h2>100원이 투입되었습니다. 지갑에 남은 금액은 ${My_wallet-100}원 입니다.</h2>`);
    My_wallet -= 100;
    input_amount += 100;
  } else {
    output.insertAdjacentHTML("afterbegin", `<h2>지갑에 돈이 모자라서 100원을 투입할 수 없습니다.</h2>`);
  }
  document.querySelector("#My_wallet").value = My_wallet;
}

// 500원 클릭 시
document.getElementById("500").onclick = function() {
  let output = document.getElementById("output_box");

  if (500 <= My_wallet) {
    output.insertAdjacentHTML("afterbegin", `<h2>500원이 투입되었습니다. 지갑에 남은 금액은 ${My_wallet-500}원 입니다.</h2>`);
    My_wallet -= 500;
    input_amount += 500;
  } else {
    output.insertAdjacentHTML("afterbegin", `<h2>지갑에 돈이 모자라서 500원을 투입할 수 없습니다.</h2>`);
  }
  document.querySelector("#My_wallet").value = My_wallet;
}

// 1000원 클릭 시
document.getElementById("1000").onclick = function() {
  let output = document.getElementById("output_box");

  if (1000 <= My_wallet) {
    output.insertAdjacentHTML("afterbegin", `<h2>1000원이 투입되었습니다. 지갑에 남은 금액은 ${My_wallet-1000}원 입니다.</h2>`);
    My_wallet -= 1000;
    input_amount += 1000;
  } else {
    output.insertAdjacentHTML("afterbegin", `<h2>지갑에 돈이 모자라서 1000원을 투입할 수 없습니다.</h2>`);
  }
  document.querySelector("#My_wallet").value = My_wallet;
}
