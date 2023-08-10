// 잔액 정보
let machine_total_balance = 1000;   // 자판기 총 잔액
let input_amount = 0;               // 투입 금액
let My_wallet = 10000;              // 내 지갑
let output = document.getElementById("output_box");

// 음료 정보
const drinks = [
  {drinkName : "코카콜라", price : 700, stock : 5},
  {drinkName : "오렌지 주스", price : 1200, stock : 5},
  {drinkName : "커피", price : 500, stock : 5},
  {drinkName : "물", price : 700, stock : 5},
  {drinkName : "옥수수 수염차", price : 1200, stock : 5},
  {drinkName : "밀키스", price : 700, stock : 5},
  {drinkName : "트래비", price : 1000, stock : 5}
]

function createdrinkButton() {
  let beverage = document.getElementById('beverage');
  
  for (let drink of drinks) {
    let button = document.createElement('button');
    button.textContent = `${drink.drinkName}(${drink.price}원, 재고 수 ${drink.stock})`;
    
    // 음료 버튼 클릭 시
    button.addEventListener('click', () => {
      // 재고 수가 0보다 클 경우
      if (drink.stock > 0) {
        // 음료를 구입할 수 있는 경우
        if (input_amount >= drink.price) {
          drink.stock--;
          button.textContent = `${drink.drinkName}(${drink.price}원, 재고 수 ${drink.stock})`;
          output.insertAdjacentHTML("afterbegin", `<h1>${drink.drinkName}를 구매하였습니다.</h1>`);
          // 투입 금액 계산
          input_amount -= drink.price;
          document.getElementById("input_amount").value = input_amount;
        } 
        // 금액이 부족한 경우
        else {
          output.insertAdjacentHTML("afterbegin", `<h1>금액이 부족해 음료를 구입할 수 없습니다.</h1>`);
        }
      }
      // 재고 수가 부족한 경우
      else {
        output.insertAdjacentHTML("afterbegin", `<h1>${drink.drinkName} 재고가 없어 구입할 수 없습니다.</h1>`);
        drink.stock = 0;
      }
    });
    // beverage 노드에 버튼 추가
    beverage.appendChild(button);

    // 구입 가능한 음료 배경 색상 변경
    if (input_amount >= drink.price) {
      // button.style.backgroundColor = 'buydrink';
      button.style.backgroundColor = 'yellow';
      // button.classList = "buydrink";
    }
    // button.style.backgroundColor = 'yellow';
  }
}
createdrinkButton();


// 자판기 초기 금액 페이지 출력
function input() {
  document.getElementById("machine_total_balance").value = 1000;  // 자판기 총 잔액
  document.getElementById("input_amount").value = 0;              // 투입 금액
  document.getElementById("My_wallet").value = 10000;             // 내 지갑
}
input();  // 함수 실행

// 100원 클릭 시
document.getElementById("100").onclick = function() {
  if (100 <= My_wallet) {
    output.insertAdjacentHTML("afterbegin", `<h1>100원이 투입되었습니다. 지갑에 남은 금액은 ${My_wallet-100}원 입니다.</h1>`);
    My_wallet -= 100;
    input_amount += 100;
  } else {
    output.insertAdjacentHTML("afterbegin", `<h1>지갑에 돈이 모자라서 100원을 투입할 수 없습니다.</h1>`);
  }
  document.getElementById("My_wallet").value = My_wallet;
  document.getElementById("input_amount").value = input_amount;
}

// 500원 클릭 시
document.getElementById("500").onclick = function() {
  if (500 <= My_wallet) {
    output.insertAdjacentHTML("afterbegin", `<h1>500원이 투입되었습니다. 지갑에 남은 금액은 ${My_wallet-500}원 입니다.</h1>`);
    My_wallet -= 500;
    input_amount += 500;
  } else {
    output.insertAdjacentHTML("afterbegin", `<h1>지갑에 돈이 모자라서 500원을 투입할 수 없습니다.</h1>`);
  }
  document.querySelector("#My_wallet").value = My_wallet;
  document.getElementById("input_amount").value = input_amount;
}

// 1000원 클릭 시
document.getElementById("1000").onclick = function() {
  if (1000 <= My_wallet) {
    output.insertAdjacentHTML("afterbegin", `<h1>1000원이 투입되었습니다. 지갑에 남은 금액은 ${My_wallet-1000}원 입니다.</h1>`);
    My_wallet -= 1000;
    input_amount += 1000;
  } else {
    output.insertAdjacentHTML("afterbegin", `<h1>지갑에 돈이 모자라서 1000원을 투입할 수 없습니다.</h1>`);
  }
  document.querySelector("#My_wallet").value = My_wallet;
  document.getElementById("input_amount").value = input_amount;
}
