const CryptoJS = require("crypto-js");

const encrypt = password =>{
    console.log(process.env)
    let cipherText = CryptoJS.AES.encrypt(password, process.env.REACT_APP_SECRETKEY).toString();

    return cipherText
};

const decrypt = password =>{
    let decryptedText = CryptoJS.AES.decrypt(password, process.env.REACT_APP_SECRETKEY)
    let originalText = decryptedText.toString(CryptoJS.enc.Utf8);
    return originalText
}

export { encrypt, decrypt };