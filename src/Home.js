import React, { useContext, useEffect, useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import AppContext from './context/appContext';
import Spinner from './Spinner';

import './App.css';

const Home = () => {
  /* Configs & Global */
  const appContext = useContext(AppContext);
  const {
    getAnimes,
    animes,
    modalTrigger,
    setModalTrigger,
    loading,
  } = appContext;
  const days = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];

  const [id, setId] = useState('');

  let classDayTab = 'day-tab';

  if (modalTrigger) {
    classDayTab = 'day-tab-hide';
  }

  const getToday = () => {
    var d = new Date(Date.now());
    var dayName = days[d.getDay() + 1];

    return dayName;
  };

  const today = getToday();

  useEffect(() => {
    getAnimes(today.toLowerCase());
    onSelectDay(today);
    localStorage.getItem('selected_day');

    // eslint-disable-next-line
  }, []);

  /* Method + Action Section */
  const onSelectDay = selected_day => {
    localStorage.setItem('selected_day', selected_day);
    const all_days = document.querySelectorAll('.day');
    all_days.forEach(day => {
      if (day === selected_day) {
        localStorage.setItem('selected_day', day);
      }
    });
  };

  const onDayClick = day => {
    getAnimes(day.toLowerCase());
    onSelectDay(day);
  };

  const findLink = mal_id => {
    const link = localStorage.getItem(mal_id);
    return link;
  };

  const onButtonClick = mal_id => {
    setModalTrigger(true);
    setId(mal_id);
  };

  const onRemoveButton = mal_id => {
    localStorage.removeItem(mal_id);
    setModalTrigger(false);
  };

  /* Return Component Section */
  if (loading) return <Spinner />;

  return (
    <>
      <h2
        style={{ marginTop: '20px', fontWeight: '400' }}
        className='container'
      >
        {localStorage.getItem('selected_day') === today
          ? 'Today'
          : localStorage.getItem('selected_day')}
      </h2>
      <div className='container home'>
        {modalTrigger && <Modal mal_id={id} />}
        {modalTrigger && <Backdrop />}

        <div className='anime-container'>
          {animes &&
            animes.map(anime => (
              <div key={anime.mal_id}>
                <div className='hover-container'>
                  <img className='anime-poster' src={anime.image_url} alt='' />
                  <div className='overlay'>
                    <a
                      className='my-anime-list-link'
                      href={anime.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      My Anime List
                    </a>
                    <button
                      className='add-watch-link'
                      onClick={() => onButtonClick(anime.mal_id)}
                    >
                      {findLink(anime.mal_id) ? 'Update Link' : 'Add Link'}
                    </button>
                    {findLink(anime.mal_id) && (
                      <button
                        className='remove-watch-link'
                        onClick={() => onRemoveButton(anime.mal_id)}
                      >
                        Remove Link
                      </button>
                    )}
                  </div>
                </div>

                {findLink(anime.mal_id) && (
                  <a
                    className='watch-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={findLink(anime.mal_id)}
                    alt=''
                  >
                    Watch
                  </a>
                )}

                <p className='anime-title'>{anime.title}</p>
              </div>
            ))}
        </div>

        <div className={classDayTab}>
          {days.map((day, index) => (
            <div className='day' key={index} onClick={() => onDayClick(day)}>
              {day === today ? 'Today' : day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
