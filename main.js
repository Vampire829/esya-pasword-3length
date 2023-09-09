
const reverseUserPassword = (element) => {
    let a = Math.floor(Math.random() * element.length);
    return element[a];
  };
  
  function password(length) {
    const pas = 'AEIOUYBCDFGHJKLMNPQRSTVWXYZ';
    const digits = '0123456789';
    const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
    let passwordUser = '';
    if(length < 3){
        console.log("пароль должен иметь длину минимум 3 символа!")
    }
    if (length === 3) {
      let c = reverseUserPassword(pas);
      passwordUser += c;
      let d = reverseUserPassword(digits);
      passwordUser += d;
      let v = reverseUserPassword(symbols);
      passwordUser += v;
    }
  
    return passwordUser;
  }
  
  console.log(password(3));
