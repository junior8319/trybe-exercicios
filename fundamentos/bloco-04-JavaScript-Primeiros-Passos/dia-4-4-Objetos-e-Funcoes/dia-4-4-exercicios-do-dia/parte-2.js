function isPalindrome(word) {
    let compare = '';
    console.log(word.length);
  for (let i = (word.length)-1; i >= 0; i -= 1) {
    console.log(word[i]);
    compare+=word[i];
  }

  if (word === compare) {
    console.log(word + ' é um palíndromo.');
  } else {
    console.log(word + ' não é um palíndromo.');
  }

}
isPalindrome('ovo');
isPalindrome('raio');
isPalindrome('arara');