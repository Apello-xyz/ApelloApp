import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [hasMore, isHasMore] = useState(false);

  useEffect(() => {
      setList([]);
  },[query]);
  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios.get(`https://apello-api.xyz:4000/api/collectionsInfo/search?name=${query}&page=${page}`);
      const {hasMore, collections} = res.data;
      setList((prev) => [ ...new Set([...prev, ...collections]) ] );
      isHasMore(hasMore)
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);
  

  return { loading, error, list , hasMore };
}

export default useFetch;