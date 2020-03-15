import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const key = "phone_book";
const usePhoneBookStore = () => {
  const { getItem, setItem } = useLocalStorage({ fallbackValue: [] });
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItem(key, items => {
      setEntries(items);
      return setLoading(false);
    });
  }, [getItem]);

  const addEntry = entry => {
    const refreshEntries = latestEntries => {
      setEntries(latestEntries);
      return latestEntries;
    };

    const addItem = currentEntries =>
      setItem({ name: key, value: currentEntries.concat(entry) }).then(
        refreshEntries
      );

    getItem(key).then(addItem);
  };

  return { addEntry, entries, loading };
};

export default usePhoneBookStore;
