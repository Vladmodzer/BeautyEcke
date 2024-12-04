// haschMather.mjs
import bcrypt from "bcrypt";

// Проверка пароля
export default async function haschMather(pass, hasch) {
  try {
    const isMatch = await bcrypt.compare(pass, hasch);
    return isMatch;
  } catch (error) {
    return false;
  }
}
