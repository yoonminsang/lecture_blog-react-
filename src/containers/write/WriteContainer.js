import { writePost } from 'modules/write';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Write from '../../components/wirte/Write';

const WriteContainer = () => {
  const dispatch = useDispatch();
  const { user, userLoading } = useSelector(({ auth }) => ({
    user: auth.user.user,
    userLoading: auth.user.loading,
  }));
  const { writeLoading } = useSelector(({ write }) => ({
    writeLoading: write.write.loading,
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
      userLoading={userLoading}
      writeLoading={writeLoading}
      input={input}
      onChange={onChange}
      titleRef={titleRef}
      onSubmit={onSubmit}
    />
  );
};

export default WriteContainer;
