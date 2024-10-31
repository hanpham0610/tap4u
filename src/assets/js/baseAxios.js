import axios from 'axios';

// Tạo một instance Axios mới với các cài đặt mặc định
const axiosInstance = axios.create({
  // Các cài đặt khác nếu có
});

// Thiết lập interceptor để thêm access_token vào các headers
axiosInstance.interceptors.request.use(config => {
  // Lấy access_token từ localStorage hoặc từ bất kỳ nơi nào bạn lưu trữ nó
  const access_token = localStorage.getItem('access_token');

  // Nếu có access_token, thêm nó vào headers của request
  if (access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`;
  }

  return config;
}, error => {
  return Promise.reject(error);
});

// Sử dụng instance Axios mới trong toàn bộ ứng dụng của bạn
export default axiosInstance;