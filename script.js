let display = document.getElementById('display');

function appendValue(val) {
  if (display.value === "0") {
    display.value = val; // replace 0 within the 1st num
  } else {
    display.value += val;
  }
}

function clearDisplay() {
  display.value = '0';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    alert('Invalid Calculation');
  }
}
