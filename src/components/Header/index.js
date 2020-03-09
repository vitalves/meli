import React, {useState, useEffect} from 'react';
import Link from 'next/link';

import api from '~/services/api';

import { Container } from './styles';

export default function Header() {

  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadSearch() {
      try {
        const response = await api.get(
          encodeURI(`search?q=${search}`)
        )
        setItems(response.data.results);
      } catch (err) {
        setItems([]);
      }
    }
    loadSearch();
  }, [search]);

  return (
    <Container>
      <div className="logo">
        <Link href="/">
          <a title={process.env.site_name}>
            <img src="/img/Logo_ML.png" alt="logo" />
          </a>
        </Link>
      </div>
      <div className="search">
        <form action="/items" method="get">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Nunca deixe de buscar"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button type="submit">
            <img src="/img/ic_Search.png" alt="search"/>
          </button>
        </form>
        {items && search && (
          items.slice(0, 6).map(item => (
            <div className="searchResult" key={item.id}>
              <Link href={`/items?search=${encodeURIComponent(item.title)}`} >
                <a title={item.title} onClick={() => setSearch('')} >
                  {item.title}
                </a>
              </Link>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}
