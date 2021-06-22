import axios from 'axios';

export const write = async (title, content) => {
  try {
    const res = await axios({
      method: 'post',
      url: 'posts/write',
      data: { title, content },
    });
    return res.data.id;
  } catch (e) {
    if (e.response.data.length === 0) throw new Error(e);
    throw new Error(e.response.data);
  }
};

// export const login = async (email, password) => {
//   try {
//     const res = await axios({
//       method: 'post',
//       url: '/auth/login',
//       data: { email, password },
//     });
//     const { user } = res.data;
//     return user;
//   } catch (e) {
//     if (e.response.data.length === 0) throw new Error(e);
//     throw new Error(e.response.data);
//   }
// };

// export const logout = async () => {
//   try {
//     const res = await axios.get('/auth/logout');
//     console.log(res.data);
//   } catch (e) {
//     throw new Error(e);
//   }
// };

// export const register = async (email, password) => {
//   try {
//     const res = await axios({
//       method: 'post',
//       url: '/auth/register',
//       data: { email, password },
//     });
//     console.log(res.data);
//     return res.data;
//   } catch (e) {
//     if (e.response.data.length === 0) throw new Error(e);
//     throw new Error(e.response.data);
//   }
// };

// export const autoLogin = async () => {
//   try {
//     const res = await axios.get('/auth');
//     return res.data.user;
//   } catch (e) {
//     if (e.response.data.length === 0) throw new Error(e);
//     throw new Error(e.response.data);
//   }
// };
