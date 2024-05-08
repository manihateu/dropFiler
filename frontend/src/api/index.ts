import axios from "axios";

export interface FormData {
    address_street: string;
    address_house_number: string;
    address_korpus: string;
    address_atag: string;
    address_kvartira: string;
    phone: string;
    email: string;
    name: string;
    files: FileList;
    comment: string;
}

type NestedObject = {
    [key: string]: any;
};
  function transformEmptyFields(obj: NestedObject) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          transformEmptyFields(value); 
        } else if (value === '' || value === null || value === undefined || (Array.isArray(value) && value.length === 0)) {
          obj[key] = '-';
        }
      }
    }
  }


export const createOrder = async (data: FormData) => {
    transformEmptyFields(data)
    return await axios.post('https://www.learncup.ru/order/add', data)
}