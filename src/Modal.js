import React, { useState, useRef, useEffect, useContext } from 'react';
import AppContext from './context/appContext';

const Modal = ({ mal_id }) => {
  const node = useRef();
  const appContext = useContext(AppContext);
  const { setModalTrigger } = appContext;
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line
  }, []);
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setModalTrigger(false);
  };
  const [link, setLink] = useState('');
  const onChange = e => {
    setLink(e.target.value);
  };
  const onSubmit = () => {
    localStorage.setItem(mal_id, link);
    setLink('');
    setModalTrigger(false);
  };
  const onPressEnter = e => {
    if (e.key === 'Enter' && link !== '') {
      localStorage.setItem(mal_id, link);
      setLink('');
      setModalTrigger(false);
    }
  };

  const findLink = mal_id => {
    const link = localStorage.getItem(mal_id);
    return link;
  };

  return (
    <div className='modal' ref={node}>
      <input
        className='input-link'
        type='text'
        onChange={onChange}
        value={link}
        autoFocus='autofocus'
        onKeyUp={e => onPressEnter(e)}
      />
      <button onClick={onSubmit} className='add-link'>
        {findLink(mal_id) ? 'Update' : 'Add'}
      </button>
    </div>
  );
};

export default Modal;
