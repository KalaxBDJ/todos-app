import React from "react";

function useLocalStorage(key, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedItem = initialValue;

        //Get from localstorage
        if (!localStorage.getItem(key)) {
          localStorage.setItem(key, JSON.stringify(parsedItem));
        } else {
          parsedItem = JSON.parse(localStorage.getItem(key));
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(key, JSON.stringify(newItem));

    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
