import axios from "axios";
import { useState } from "react";

const usePost = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const post = async (url, useData) => {
    try {
      const { data: responseData } = await axios.post(url, useData);
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return {
    loading,
    error,
    data,
    post,
  };
};

export default usePost;
