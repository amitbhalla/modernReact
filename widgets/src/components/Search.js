import { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    const regex = /(<([^>]+)>)/gi;
    const cleanSnippet = result.snippet.replace(regex, '');
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            target='_blank'
            rel='noreferrer'
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'>
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          {cleanSnippet}
        </div>
      </div>
    );
  });

  const onTermChange = (val) => {
    setTerm(val);
    if (val.length < 1) {
      setResults([]);
    }
  };

  //   const renderedResults = results.map((result) => {
  //     return (
  //       <div key={result.pageid} className='item'>
  //         <div className='content'>
  //           <div className='header'>{result.title}</div>
  //           <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
  //         </div>
  //       </div>
  //     );
  //   });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor='input'>Enter Search Term:</label>
          <input
            type='text'
            className='input'
            value={term}
            onChange={(e) => onTermChange(e.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
