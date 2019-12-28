import React, { useContext, useEffect, useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import AppContext from './context/appContext';
import Spinner from './Spinner';
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const Home = () => {
  const getToday = () => {
    var d = new Date(Date.now());
    var dayName = days[d.getDay()];
    return dayName;
  };

  const today = getToday();

  let satClass = 'sat';
  let sunClass = 'sun';
  let monClass = 'mon';
  let tueClass = 'tue';
  let wedClass = 'wed';
  let thuClass = 'thu';
  let friClass = 'fri';
  const [sat, setSat] = useState(false);
  const [sun, setSun] = useState(false);
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(false);
  const onSat = () => {
    setSat(true);
    setSun(false);
    setMon(false);
    setTue(false);
    setWed(false);
    setThu(false);
    setFri(false);
  };
  const onSun = () => {
    setSat(false);
    setSun(true);
    setMon(false);
    setTue(false);
    setWed(false);
    setThu(false);
    setFri(false);
  };
  const onMon = () => {
    setSat(false);
    setSun(false);
    setMon(true);
    setTue(false);
    setWed(false);
    setThu(false);
    setFri(false);
  };
  const onTue = () => {
    setSat(false);
    setSun(false);
    setMon(false);
    setTue(true);
    setWed(false);
    setThu(false);
    setFri(false);
  };
  const onWed = () => {
    setSat(false);
    setSun(false);
    setMon(false);
    setTue(false);
    setWed(true);
    setThu(false);
    setFri(false);
  };
  const onThu = () => {
    setSat(false);
    setSun(false);
    setMon(false);
    setTue(false);
    setWed(false);
    setThu(true);
    setFri(false);
  };
  const onFri = () => {
    setSat(false);
    setSun(false);
    setMon(false);
    setTue(false);
    setWed(false);
    setThu(false);
    setFri(true);
  };

  if (sat) {
    satClass = 'sat selected';
    window.scrollTo(0, 0);
  }
  if (sun) {
    sunClass = 'sun selected';
    window.scrollTo(0, 0);
  }
  if (mon) {
    monClass = 'mon selected';
    window.scrollTo(0, 0);
  }
  if (tue) {
    tueClass = 'tue selected';
    window.scrollTo(0, 0);
  }
  if (wed) {
    wedClass = 'wed selected';
    window.scrollTo(0, 0);
  }
  if (thu) {
    thuClass = 'thu selected';
    window.scrollTo(0, 0);
  }
  if (fri) {
    friClass = 'fri selected';
    window.scrollTo(0, 0);
  }

  const appContext = useContext(AppContext);
  const {
    getSaturday,
    getSunday,
    getMonday,
    getTuesday,
    getWednesday,
    getThursday,
    getFriday,
    saturday,
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    modalTrigger,
    setModalTrigger,
    loading,
  } = appContext;
  useEffect(() => {
    if (!loading) {
      getSaturday();
      getSunday();
      getMonday();
      getTuesday();
      getWednesday();
      getThursday();
      getFriday();

      if (today === 'Saturday') {
        setSat(true);
      }
      if (today === 'Sunday') {
        setSun(true);
      }
      if (today === 'Monday') {
        setMon(true);
      }
      if (today === 'Tuesday') {
        setTue(true);
      }
      if (today === 'Wednesday') {
        setWed(true);
      }
      if (today === 'Thursday') {
        setThu(true);
      }
      if (today === 'Friday') {
        setFri(true);
      }
    }

    // eslint-disable-next-line
  }, []);

  const findLink = mal_id => {
    const link = localStorage.getItem(mal_id);
    return link;
  };

  const [id, setId] = useState('');

  const onButtonClick = mal_id => {
    setModalTrigger(true);
    setId(mal_id);
  };

  const onRemoveButton = mal_id => {
    localStorage.removeItem(mal_id);
    setModalTrigger(false);
  };

  let classDayTab = 'day-tab';
  if (modalTrigger) {
    classDayTab = 'day-tab-hide';
  }

  if (loading) return <Spinner />;

  return (
    <div className='container home'>
      {modalTrigger && <Modal mal_id={id} />}
      {modalTrigger && <Backdrop />}
      <div className='anime-container'>
        {sat &&
          saturday.map(anime => (
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
        {sun &&
          sunday.map(anime => (
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
        {mon &&
          monday.map(anime => (
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
        {tue &&
          tuesday.map(anime => (
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
        {wed &&
          wednesday.map(anime => (
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
        {thu &&
          thursday.map(anime => (
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
        {fri &&
          friday.map(anime => (
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
        <div onClick={onSat} className={satClass}>
          {today === 'Saturday' ? 'Today' : 'Saturday'}
        </div>

        <div onClick={onSun} className={sunClass}>
          {today === 'Sunday' ? 'Today' : 'Sunday'}
        </div>

        <div onClick={onMon} className={monClass}>
          {today === 'Monday' ? 'Today' : 'Monday'}
        </div>

        <div onClick={onTue} className={tueClass}>
          {today === 'Tuesday' ? 'Today' : 'Tuesday'}
        </div>

        <div onClick={onWed} className={wedClass}>
          {today === 'Wednesday' ? 'Today' : 'Wednesday'}
        </div>

        <div onClick={onThu} className={thuClass}>
          {today === 'Thursday' ? 'Today' : 'Thursday'}
        </div>

        <div onClick={onFri} className={friClass}>
          {today === 'Friday' ? 'Today' : 'Friday'}
        </div>
      </div>
    </div>
  );
};

export default Home;
