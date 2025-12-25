/* config.js - cấu hình dễ chỉnh
   Nếu anh có iframe embed chính xác từ Google Maps (Share > Embed a map),
   paste src vào mapEmbed. Nếu không, mapEmbed để trống và script sẽ
   hiển thị một bản đồ tìm kiếm bằng mapUrl.
*/
const WEDDING_CONFIG = {
  groomName: " Xuân Dương  ",
  brideName: " Minh Anh ",

  weddingDate: "01/18/2026  11:00:00",
  location: " ",

  // link mở ngoài (mở app Google Maps trên điện thoại)
  mapUrl: "https://maps.app.goo.gl/j8JmxWbBaFbZhFyKA",

  // link embed hiển thị trực tiếp trong trang
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5216.3832239174035!2d105.63230044999999!3d21.20165725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134f99ad6795d49%3A0x624fef3019cca1c8!2zWcOqbiBO4buZaSwgTGnDqm4gTeG6oWMsIE3DqiBMaW5oLCBIw6AgTuG7mWk!5e1!3m2!1svi!2s!4v1766655898975!5m2!1svi!2s",
  heroImage: "assets/hero-cover.jpg",
  doorLeft: "assets/A.png",
  doorRight: "assets/B.png",

  music: "assets/Music.mp3",

  effectImage: "assets/effect.png",
  effectEnabled: true,

  videoUrl: "https://www.youtube.com/embed/TncUg4OQ5k",

  gallery: [
    {src:"assets/g1.jpg"},
    {src:"assets/g2.jpg"},
    {src:"assets/g3.jpg"},
    {src:"assets/g4.jpg"},
    {src:"assets/g5.jpg"},
    {src:"assets/g6.jpg"},
    {src:"assets/g7.jpg"},
    {src:"assets/g8.jpg"},
    {src:"assets/g9.jpg"},
    {src:"assets/g10.jpg"},
	{src:"assets/g11.jpg"},
    {src:"assets/g12.jpg"},
    {src:"assets/g13.jpg"},
    {src:"assets/g14.jpg"},
	{src:"assets/g15.jpg"},
    {src:"assets/g16.jpg"}
  ],

  invitation: {
    groomSide: {
      avatar: "assets/g1.jpg",
      name: "Xuân Dương",
      parents: "Bố: Nguyễn Văn Quỳnh  <br>Mẹ: Nguyễn Thị Linh",
      address: "Địa chỉ: Thôn Yên Nội, Xã Yên Lãng, Thành Phố Hà Nội	"
    },
    brideSide: {
      avatar: "assets/g2.jpg",
      name: "Minh Anh",
      parents: "Bố: Đào Thế Nghĩa <br>Mẹ: Đào Thị Nga",
      address: "Địa chỉ: SN 13, Ngõ 30 Đường Bùi Sĩ Tiêm, Phường Thái Bình, Tỉnh Hưng Yên "
    }
  },

  qr: [
    {src: "assets/QR01.jpg", title: "NGUYEN XUAN DUONG", info: "Xin trân thành cảm ơn"},
	{src: "assets/QR02.jpg", title: "DAO THI MINH ANH", info: "Xin trân thành cảm ơn"}
  ],
};
