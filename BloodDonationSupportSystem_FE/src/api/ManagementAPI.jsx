

export const ManagementAPI = {
    // chứa tất cả API ở đây để sử dụng. Đặt tạo class đặt static function cũng đc.
    getNews: async () => {
    const res = await fetch("http://localhost:3001/newsList");
    return res.json();
  }
}