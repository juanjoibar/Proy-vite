import React, { useState, useEffect } from 'react';

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(20);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.example.com/items?page=${page}`);
      const data = await response.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      setLoading(false);
    }
  };

  const fetchMoreItems = async () => {
    if (!loading) {
      try {
        setLoading(true);
        const nextPage = page + 20;
        const response = await fetch(`https://pokeapi.co/api/v2/ability/?limit=20&offset=${nextPage}`);
        const data = await response.json();
        setItems((prevItems) => [...prevItems, ...data]);
        setPage(nextPage);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching more items:', error);
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollList;
