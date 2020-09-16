import { useState, useEffect } from "react";

/**
 * @param {String} key - Key of session storage value to manipulate
 * @param {any} defaultValue 
 */
export const useSessionStorage = (key, defaultValue) => {

  const [sessionStorageVal, setSessionStorageVal] = useState(() => {
      try {
        const item = window.sessionStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (err) {
        console.error(err);
        return defaultValue;
      }
    }
  );

  const setValue = (value) => {
    try {
      const valueToStore = (value instanceof Function) ? value(sessionStorageVal) : value;
      //prevent submitting duplicate url?
      setSessionStorageVal(valueToStore);
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [sessionStorageVal, setValue];
};
