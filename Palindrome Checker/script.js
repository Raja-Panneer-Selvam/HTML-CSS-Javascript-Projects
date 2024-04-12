function checkPalindrome() {
    var sentence = document.getElementById('sentence').value.toLowerCase().replace(/[^a-zA-Z]/g, '');


    var reversedSentence = sentence.split('').reverse().join('');
    


    if (sentence === reversedSentence) {
      document.getElementById('result').innerText = 'Yes, it is a palindrome!';
    } else {
      document.getElementById('result').innerText = 'No, it is not a palindrome.';
    }
  }
  