// Calculator core functions
function append(value) {
  const input = document.getElementById("display");
  if (value === '²') {
    // Square the current value
    const num = parseFloat(input.value);
    if (!isNaN(num)) {
      input.value = Math.pow(num, 2);
    } else {
      alert("Enter a valid number first!");
    }
  } else if (value === '√') {
    // Square root of current value
    const num = parseFloat(input.value);
    if (!isNaN(num)) {
      input.value = Math.sqrt(num);
    } else {
      alert("Enter a valid number first!");
    }
  } else if (value === '^') {
    // Let user enter exponent after "^"
    input.value += "^";
  } else if (value === "()") {
    // Smarter bracket logic: alternate between ( and ) based on context
    const current = input.value;
    const open = (current.match(/\(/g) || []).length;
    const close = (current.match(/\)/g) || []).length;
    // If more opens than closes, add a closing bracket
    if (open > close) {
      input.value += ")";
    } else {
      // Otherwise add an opening bracket
      input.value += "(";
    }
  } else {
    // Default: just append (for digits, operators, etc.)
    input.value += value;
  }
}

function webShare() {
  if (navigator.share) {
    navigator.share({
      title: 'ZikkyCal Calculator',
      text: 'Check out ZikkyCal, a smart calculator!',
      url: 'https://github.com/zikky0001-droid/zikkycal.com',
    })
    .then(() => alert('Thanks for sharing!'))
    .catch((error) => alert('Sharing failed: ' + error));
  } else {
    alert('Web Share API not supported on this device/browser. Please copy the link manually!');
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
  let display = document.getElementById('display');
  let expression = display.value;
  // Automatically insert multiplication before parentheses (e.g., 9(5) -> 9*(5))
  expression = expression.replace(/(\d)\s*\(/g, '$1*(');

  // Handle custom exponentiation (e.g., 2^3)
  if (expression.includes('^')) {
    let parts = expression.split('^');
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      display.value = Math.pow(Number(parts[0]), Number(parts[1]));
      return;
    }
    // If there are multiple ^'s or complex expressions, consider a more robust parser!
  }
  try {
    let result = eval(expression);
    display.value = result;
  } catch (error) {
    alert('𝖈𝖆𝖑𝖈𝖚𝖑𝖆𝖙𝖔𝖗 𝖊𝖗𝖗𝖔𝖗');
  }
}

function validateInput(input) {
  input.value = input.value.replace(/[^0-9+\-*/.²√^()]/g, '');
}

// Like, Share, Comment button logic
let liked = false;
function toggleLike() {
  const likeBtn = document.querySelector('.action-btn.like');
  liked = !liked;
  likeBtn.textContent = liked ? '❤️ Liked' : '👍 Like';
  likeBtn.style.backgroundColor = liked ? '#ffcccc' : '#d4edda';
  alert("🆃🅷🅰🅽🅺🆂, 🆉🅸🅺🅺🆈 🅻🅾🆅🅴🆂 🆈🅾🆄 🆃🅾🅾🥰♥️")
}

let shared = false;
function toggleShare() {
  const shareBtn = document.querySelector('.action-btn.share');
  shared = !shared;
  shareBtn.textContent = shared ? '📁 Shared' : '🔗 Share';
  shareBtn.style.backgroundColor = shared ? '#ffcccc' : '#d4edda';
  // Optional: Start download message
  alert("🅵🅸🅻🅴 🅸🆂 🅳🅾🆆🅽🅻🅾🅰🅳🅸🅽🅶...");
}

let commented = false;
function toggleComment() {
  const commentBtn = document.querySelector('.action-btn.comment');
  commented = !commented;
  commentBtn.textContent = commented ? '🚀 Processing' : '💬 Comment';
  commentBtn.style.backgroundColor = commented ? '#ffcccc' : '#d4edda';
}