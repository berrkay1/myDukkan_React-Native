import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchHook = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const { data: itemData } = await axios.get(url);
      setLoading(false);
      setError(false);
      setData(itemData);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return{
    data,loading,error
  }
};

export default fetchHook;
