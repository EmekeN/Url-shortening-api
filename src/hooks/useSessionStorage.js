import { useState, useEffect } from "react";

/**
 * Custom hook to manage retrieving and updating session storage
 * @param {String} key - Key of session storage value to manipulate
 * @param {any} defaultValue Default value if nothing in Storage
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
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(sessionStorageVal) : value;

      //prevent submitting duplicate values?
      setSessionStorageVal(valueToStore);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(sessionStorageVal));
  }, [sessionStorageVal, sessionStorageVal]);

  return [sessionStorageVal, setValue];
};
