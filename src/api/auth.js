import axios from 'axios';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'post',
      url: '/auth/login',
      data: { email, password },
    });
    const { user } = res.data;
    return user;
  } catch (e) {
    const error =
      e.response.status === 409 ? '아이디 또는 비밀번호가 틀립니다' : e;
    throw new Error(error);
  }
};

export const logout = async () => {
  try {
    await axios.get('/auth/logout');
  } catch (error) {
    throw new Error(error);
  }
};

export const register = async (email, password) => {
  try {
    await axios({
      method: 'post',
      url: '/auth/register',
      data: { email, password },
    });
  } catch (e) {
    const error = e.response.status === 409 ? '아이디가 존재합니다' : e;
    throw new Error(error);
  }
};
