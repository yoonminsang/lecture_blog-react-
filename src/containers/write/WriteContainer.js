import { writePost } from 'modules/write';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Write from '../../components/wirte/Write';

const WriteContainer = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector(({ auth }) => ({
    user: auth.user.user,
    loading: auth.user.loading,
  }));
  const [input, setInput] = useState({
    title: '',
    content: '',
  });
  const titleRef = useRef(null);
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { title, content } = input;
    if (title === '') {
      titleRef.current.focus();
    } else {
      dispatch(writePost(title, content));
    }
  };
  return (
    <Write
      user={user}
      loading={loading}
      input={input}
      onChange={onChange}
      titleRef={titleRef}
      onSubmit={onSubmit}
    />
  );
};

export default WriteContainer;
