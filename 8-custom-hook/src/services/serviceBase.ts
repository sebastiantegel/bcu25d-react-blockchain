// Kommer att vara sista utposten i vår kod innan vi skickar ett anrop

import axios from "axios";

// export const get = async <T>(url: string) => {
//   const response = await fetch(url);
//   const data: T = await response.json();

//   return data;
// };

export const get = async <T>(url: string) => {
  const response = await axios.get<T>(url);
  return response.data;
};

// export const post = () => {}
// export const put = () => {}
// export const remove = () => {}
