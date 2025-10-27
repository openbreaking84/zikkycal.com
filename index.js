function append(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    alert('Invalid expression');
  }
}

function validateInput(input) {
  input.value = input.value.replace(/[^0-9+\-*/.]/g, '');
}

let liked = false;
function toggleLike() {
  const likeBtn = document.querySelector('.action-btn.like');
  liked = !liked;
  likeBtn.textContent = liked ? '❤️ Liked' : '👍 Like';
  likeBtn.style.backgroundColor = liked ? '#ffcccc' : '#d4edda';
}

let shared = false;
function toggleShare() {
  const shareBtn = document.querySelector('.action-btn.share');
  shared = !shared;
  shareBtn.textContent = shared ? '📁 Shared' : '🔗 Share';
  shareBtn.style.backgroundColor = shared ? '#ffcccc' : '#d4edda';
}

let commented = false;
function toggleComment() {
  const commentBtn = document.querySelector('.action-btn.comment');
  commented = !commented;
  commentBtn.textContent = commented ? '🚀 Processing' : '💬 Comment';
  commentBtn.style.backgroundColor = commented ? '#ffcccc' : '#d4edda';
}

function toggleShare() {
  alert("Your download is starting...");
}