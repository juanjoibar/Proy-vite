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
      const response = await fetch(`https://fakestoreapi.com/products?limit=${page}`);
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
        const response = await fetch(`https://fakestoreapi.com/products?limit=${nextPage}`);
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
    <div className='mt-20'>
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 '>
        {items.map((item) => (
          <li className='flex ' key={item.id}>
          
          <div href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
           <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.image} alt=""/>
           <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}1</h5>
        <h6 class="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">Categoria: {item.category}1</h6>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price:${item.price}</p>
        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p> */}
        <button className='rounded-full bg-slate-300'>agregar🛒</button>
        </div>
      </div>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScrollList;
