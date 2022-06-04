const crypto = require("crypto");
const algorithm = "aes-256-cbc";

const CryptoEncyption = (token) => {
  const Securitykey = Buffer.from(process.env.CRYPTO_SECRET, "hex");
  const initVector = Buffer.from(process.env.INIT_VECTOR, "hex");

  const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

  let encryptedData = cipher.update(token, "utf-8", "hex");

  encryptedData += cipher.final("hex");

  return encryptedData;
};

const CryptoDecryption = (token) => {
  const Securitykey = Buffer.from(process.env.CRYPTO_SECRET, "hex");
  const initVector = Buffer.from(process.env.INIT_VECTOR, "hex");
  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  let decryptedData = decipher.update(token, "hex", "utf-8");

  return decryptedData;
};

module.exports = { CryptoEncyption, CryptoDecryption };
