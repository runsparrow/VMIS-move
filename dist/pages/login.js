"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = (_dec = (0, _wepyRedux.connect)({}), _dec(_class = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      usingComponents: {
        "van-button": "../../static/plugIn//button/index"
      }
    }, _this.components = {}, _this.data = {}, _this.computed = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: "onShow",
    value: function onShow() {
      this.loginsystem();
    }
  }, {
    key: "loginsystem",
    value: function loginsystem() {
      _wepy2.default.login().then(function (res) {
        var code = res.code;
        wx.request({
          url: "http://localhost:5000/ERP/Auth/WeChatVerify?code=" + code,
          method: "GET",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          success: function success(response) {
            console.log("response", response);
            if (response && response.data) {
              var data = response.data;
              if (data.token) {
                //存一下token  后续api都加上token，只做一下我的页面，美化界面
                wx.setStorageSync("token", data.token.tokenValue);
                wx.setStorageSync("user", data.user);
                _wepy2.default.switchTab({
                  url: "calendar"
                });
              } else {
                _wepy2.default.navigateTo({
                  url: "register?openid=" + data.weChatEntity.openId
                });
              }
            }
          },
          fail: function fail(err) {
            console.log(err);
          }
        });
      });
    }
  }]);

  return Login;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJsb2dpbnN5c3RlbSIsIndlcHkiLCJsb2dpbiIsInRoZW4iLCJjb2RlIiwicmVzIiwid3giLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInRva2VuIiwic2V0U3RvcmFnZVN5bmMiLCJ0b2tlblZhbHVlIiwidXNlciIsInN3aXRjaFRhYiIsIm5hdmlnYXRlVG8iLCJ3ZUNoYXRFbnRpdHkiLCJvcGVuSWQiLCJmYWlsIiwiZXJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxLLFdBRHBCLHdCQUFRLEVBQVIsQzs7Ozs7Ozs7Ozs7Ozs7b0xBRUNDLE0sR0FBUztBQUNQQyx1QkFBaUI7QUFDZixzQkFBYztBQURDO0FBRFYsSyxRQXlDVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPLEUsUUFDUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVLEU7Ozs7OzZCQXhDRDtBQUNQLFdBQUtDLFdBQUw7QUFDRDs7O2tDQUNhO0FBQ1pDLHFCQUFLQyxLQUFMLEdBQWFDLElBQWIsQ0FBa0IsZUFBTztBQUN2QixZQUFNQyxPQUFPQyxJQUFJRCxJQUFqQjtBQUNBRSxXQUFHQyxPQUFILENBQVc7QUFDVEMscUVBQXlESixJQURoRDtBQUVUSyxrQkFBUSxLQUZDO0FBR1RDLGtCQUFRO0FBQ04sNEJBQWdCO0FBRFYsV0FIQztBQU1UQyxtQkFBUywyQkFBWTtBQUNuQkMsb0JBQVFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCQyxRQUF4QjtBQUNBLGdCQUFJQSxZQUFZQSxTQUFTakIsSUFBekIsRUFBK0I7QUFDN0Isa0JBQUlBLE9BQU9pQixTQUFTakIsSUFBcEI7QUFDQSxrQkFBSUEsS0FBS2tCLEtBQVQsRUFBZ0I7QUFDZDtBQUNBVCxtQkFBR1UsY0FBSCxDQUFrQixPQUFsQixFQUEyQm5CLEtBQUtrQixLQUFMLENBQVdFLFVBQXRDO0FBQ0NYLG1CQUFHVSxjQUFILENBQWtCLE1BQWxCLEVBQTBCbkIsS0FBS3FCLElBQS9CO0FBQ0RqQiwrQkFBS2tCLFNBQUwsQ0FBZTtBQUNiWCx1QkFBSztBQURRLGlCQUFmO0FBR0QsZUFQRCxNQU9PO0FBQ0xQLCtCQUFLbUIsVUFBTCxDQUFnQjtBQUNkWix1QkFBSyxxQkFBcUJYLEtBQUt3QixZQUFMLENBQWtCQztBQUQ5QixpQkFBaEI7QUFHRDtBQUNGO0FBQ0YsV0F2QlE7QUF3QlRDLGdCQUFNLG1CQUFPO0FBQ1hYLG9CQUFRQyxHQUFSLENBQVlXLEdBQVo7QUFDRDtBQTFCUSxTQUFYO0FBNEJELE9BOUJEO0FBK0JEOzs7O0VBekNnQ3ZCLGVBQUt3QixJO2tCQUFuQmhDLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIndlcHktcmVkdXhcIjtcblxuQGNvbm5lY3Qoe30pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgIFwidmFuLWJ1dHRvblwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vL2J1dHRvbi9pbmRleFwiXG4gICAgfVxuICB9O1xuICBvblNob3coKSB7XG4gICAgdGhpcy5sb2dpbnN5c3RlbSgpO1xuICB9XG4gIGxvZ2luc3lzdGVtKCkge1xuICAgIHdlcHkubG9naW4oKS50aGVuKHJlcyA9PiB7XG4gICAgICBjb25zdCBjb2RlID0gcmVzLmNvZGU7XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9BdXRoL1dlQ2hhdFZlcmlmeT9jb2RlPSR7Y29kZX1gLFxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogcmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2VcIiwgcmVzcG9uc2UpO1xuICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBpZiAoZGF0YS50b2tlbikge1xuICAgICAgICAgICAgICAvL+WtmOS4gOS4i3Rva2VuICDlkI7nu61hcGnpg73liqDkuIp0b2tlbu+8jOWPquWBmuS4gOS4i+aIkeeahOmhtemdou+8jOe+juWMlueVjOmdolxuICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInRva2VuXCIsIGRhdGEudG9rZW4udG9rZW5WYWx1ZSk7XG4gICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInVzZXJcIiwgZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICAgIHVybDogXCJjYWxlbmRhclwiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6IFwicmVnaXN0ZXI/b3BlbmlkPVwiICsgZGF0YS53ZUNoYXRFbnRpdHkub3BlbklkXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7fTtcbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge307XG59XG4iXX0=