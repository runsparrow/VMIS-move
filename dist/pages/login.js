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
              if (Object.keys(data.token).length > 0) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJsb2dpbnN5c3RlbSIsIndlcHkiLCJsb2dpbiIsInRoZW4iLCJjb2RlIiwicmVzIiwid3giLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIk9iamVjdCIsImtleXMiLCJ0b2tlbiIsImxlbmd0aCIsInNldFN0b3JhZ2VTeW5jIiwidG9rZW5WYWx1ZSIsInVzZXIiLCJzd2l0Y2hUYWIiLCJuYXZpZ2F0ZVRvIiwid2VDaGF0RW50aXR5Iiwib3BlbklkIiwiZmFpbCIsImVyciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsSyxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7O29MQUVDQyxNLEdBQVM7QUFDUEMsdUJBQWlCO0FBQ2Ysc0JBQWM7QUFEQztBQURWLEssUUF5Q1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTyxFLFFBQ1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFOzs7Ozs2QkF4Q0Q7QUFDUCxXQUFLQyxXQUFMO0FBQ0Q7OztrQ0FDYTtBQUNaQyxxQkFBS0MsS0FBTCxHQUFhQyxJQUFiLENBQWtCLGVBQU87QUFDdkIsWUFBTUMsT0FBT0MsSUFBSUQsSUFBakI7QUFDQUUsV0FBR0MsT0FBSCxDQUFXO0FBQ1RDLHFFQUF5REosSUFEaEQ7QUFFVEssa0JBQVEsS0FGQztBQUdUQyxrQkFBUTtBQUNOLDRCQUFnQjtBQURWLFdBSEM7QUFNVEMsbUJBQVMsMkJBQVk7QUFDbkJDLG9CQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkMsUUFBeEI7QUFDQSxnQkFBSUEsWUFBWUEsU0FBU2pCLElBQXpCLEVBQStCO0FBQzdCLGtCQUFJQSxPQUFPaUIsU0FBU2pCLElBQXBCO0FBQ0Esa0JBQUlrQixPQUFPQyxJQUFQLENBQVluQixLQUFLb0IsS0FBakIsRUFBd0JDLE1BQXhCLEdBQStCLENBQW5DLEVBQXNDO0FBQ3BDO0FBQ0FaLG1CQUFHYSxjQUFILENBQWtCLE9BQWxCLEVBQTJCdEIsS0FBS29CLEtBQUwsQ0FBV0csVUFBdEM7QUFDQ2QsbUJBQUdhLGNBQUgsQ0FBa0IsTUFBbEIsRUFBMEJ0QixLQUFLd0IsSUFBL0I7QUFDRHBCLCtCQUFLcUIsU0FBTCxDQUFlO0FBQ2JkLHVCQUFLO0FBRFEsaUJBQWY7QUFHRCxlQVBELE1BT087QUFDTFAsK0JBQUtzQixVQUFMLENBQWdCO0FBQ2RmLHVCQUFLLHFCQUFxQlgsS0FBSzJCLFlBQUwsQ0FBa0JDO0FBRDlCLGlCQUFoQjtBQUdEO0FBQ0Y7QUFDRixXQXZCUTtBQXdCVEMsZ0JBQU0sbUJBQU87QUFDWGQsb0JBQVFDLEdBQVIsQ0FBWWMsR0FBWjtBQUNEO0FBMUJRLFNBQVg7QUE0QkQsT0E5QkQ7QUErQkQ7Ozs7RUF6Q2dDMUIsZUFBSzJCLEk7a0JBQW5CbkMsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgXCJ2YW4tYnV0dG9uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi8vYnV0dG9uL2luZGV4XCJcbiAgICB9XG4gIH07XG4gIG9uU2hvdygpIHtcbiAgICB0aGlzLmxvZ2luc3lzdGVtKCk7XG4gIH1cbiAgbG9naW5zeXN0ZW0oKSB7XG4gICAgd2VweS5sb2dpbigpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IGNvZGUgPSByZXMuY29kZTtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvRVJQL0F1dGgvV2VDaGF0VmVyaWZ5P2NvZGU9JHtjb2RlfWAsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJyZXNwb25zZVwiLCByZXNwb25zZSk7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhkYXRhLnRva2VuKS5sZW5ndGg+MCkge1xuICAgICAgICAgICAgICAvL+WtmOS4gOS4i3Rva2VuICDlkI7nu61hcGnpg73liqDkuIp0b2tlbu+8jOWPquWBmuS4gOS4i+aIkeeahOmhtemdou+8jOe+juWMlueVjOmdolxuICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInRva2VuXCIsIGRhdGEudG9rZW4udG9rZW5WYWx1ZSk7XG4gICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhcInVzZXJcIiwgZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICAgIHVybDogXCJjYWxlbmRhclwiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6IFwicmVnaXN0ZXI/b3BlbmlkPVwiICsgZGF0YS53ZUNoYXRFbnRpdHkub3BlbklkXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7fTtcbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge307XG59XG4iXX0=