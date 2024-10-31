//
//                _ooOoo_                                     NAM MÔ A DI ĐÀ PHẬT !
//               o8888888o
//               88" . "88                              Thí chủ con tên là Chử Văn Viên
//               (| -_- |)                            dương lịch ngày 8 tháng 10 năm 1999
//                O\ = /O
//            ____/`---'\____                  Con lạy chín phương trời, con lạy mười phương đất
//            .' \\| |// `.                       Chư Phật mười phương, mười phương chư Phật
//           / \\||| : |||// \                    Con ơn nhờ Trời đất chổ che, Thánh Thần cứu độ
//         / _||||| -:- |||||- \             Xin nhất tâm kính lễ Hoàng thiên Hậu thổ, Tiên Phật Thánh Thần
//           | | \\\ - /// | |                           Giúp đỡ con code sạch ít bug
//         | \_| ''\---/'' | | |                    Biểu diễn ko lỗi, sếp quý tăng lương
//         \ .-\__ `-` ___/-. /                       Sức khoẻ dồi dào, tiền vào như nước
//       ___`. .' /--.--\ `. . __
//    ."" '< `.___\_<|>_/___.' >'"".         NAM MÔ VIÊN THÔNG GIÁO CHỦ ĐẠI TỪ ĐẠI BI TẦM THANH CỨU KHỔ CỨU NẠN
//   | | : `- \`.;`\ _ /`;.`/ - ` : | |              QUẢNG ĐẠI LINH CẢM QUÁN THẾ ÂM BỒ TÁT
//     \ \ `-. \_ __\ /__ _/ .-` / /
//======`-.____`-.___\_____/___.-`____.-'======
//                `=---='
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//

import { api } from './common'

export const getMaBaoMat = api + '/ln-quetnhanh-api/user/autoCreateUser?password=quetnhanh'
export const postDangKy = api + '/ln-quetnhanh-api/user'
export const apiDangNhap = api + '/ln-quetnhanh-api/auth/signin'
export const apiOTP = api + '/ln-quetnhanh-api/user/sendOtpFogotPassword'
export const apiForgetPass = api + '/ln-quetnhanh-api/user/verifyChangePassword'
export const apiUpdateProfile = api + '/ln-quetnhanh-api/user'
export const apiSearchUser = api + '/ln-quetnhanh-api/user/'

export const apiGetImgIcon = api + '/ln-quetnhanh-api/images?type=1'
export const apiThemLienKet = api + '/ln-quetnhanh-api/icons'
export const apiUpdateBieuTuongMXH = api + '/ln-quetnhanh-api/icons'
export const apiXoaBieuTuongMXG = api + '/ln-quetnhanh-api/icons/'

//image
export const apiGetListImage = api + '/ln-quetnhanh-api/image'
export const apiThayAvatar = api + '/ln-quetnhanh-api/images/tailenanhdaidien'

//bieutuong
export const apiBieuTuong = api + '/ln-quetnhanh-api/icons/'
//user_link
export const apiUserLink = api + '/ln-quetnhanh-api/links'

//danh thiep
export const apiDanhThiep = api + '/ln-quetnhanh-api/businesscards'

//
export const apiDownloadContact = api + '/ln-quetnhanh-api/vcard/'
