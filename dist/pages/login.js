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
          url: "http://211.149.163.211:4000/ERP/Auth/WeChatVerify?code=" + code,
          method: "GET",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          success: function success(response) {
            // console.log("response", response);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJsb2dpbnN5c3RlbSIsIndlcHkiLCJsb2dpbiIsInRoZW4iLCJjb2RlIiwicmVzIiwid3giLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiT2JqZWN0Iiwia2V5cyIsInRva2VuIiwibGVuZ3RoIiwic2V0U3RvcmFnZVN5bmMiLCJ0b2tlblZhbHVlIiwidXNlciIsInN3aXRjaFRhYiIsIm5hdmlnYXRlVG8iLCJ3ZUNoYXRFbnRpdHkiLCJvcGVuSWQiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImVyciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsSyxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7O29MQUVDQyxNLEdBQVM7QUFDUEMsdUJBQWlCO0FBQ2Ysc0JBQWM7QUFEQztBQURWLEssUUF5Q1RDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTyxFLFFBQ1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVSxFOzs7Ozs2QkF4Q0Q7QUFDUCxXQUFLQyxXQUFMO0FBQ0Q7OztrQ0FDYTtBQUNaQyxxQkFBS0MsS0FBTCxHQUFhQyxJQUFiLENBQWtCLGVBQU87QUFDdkIsWUFBTUMsT0FBT0MsSUFBSUQsSUFBakI7QUFDQUUsV0FBR0MsT0FBSCxDQUFXO0FBQ1RDLDJFQUErREosSUFEdEQ7QUFFVEssa0JBQVEsS0FGQztBQUdUQyxrQkFBUTtBQUNOLDRCQUFnQjtBQURWLFdBSEM7QUFNVEMsbUJBQVMsMkJBQVk7QUFDcEI7QUFDQyxnQkFBSUMsWUFBWUEsU0FBU2YsSUFBekIsRUFBK0I7QUFDN0Isa0JBQUlBLE9BQU9lLFNBQVNmLElBQXBCO0FBQ0Esa0JBQUlnQixPQUFPQyxJQUFQLENBQVlqQixLQUFLa0IsS0FBakIsRUFBd0JDLE1BQXhCLEdBQStCLENBQW5DLEVBQXNDO0FBQ3BDO0FBQ0FWLG1CQUFHVyxjQUFILENBQWtCLE9BQWxCLEVBQTJCcEIsS0FBS2tCLEtBQUwsQ0FBV0csVUFBdEM7QUFDQ1osbUJBQUdXLGNBQUgsQ0FBa0IsTUFBbEIsRUFBMEJwQixLQUFLc0IsSUFBL0I7QUFDRGxCLCtCQUFLbUIsU0FBTCxDQUFlO0FBQ2JaLHVCQUFLO0FBRFEsaUJBQWY7QUFHRCxlQVBELE1BT087QUFDTFAsK0JBQUtvQixVQUFMLENBQWdCO0FBQ2RiLHVCQUFLLHFCQUFxQlgsS0FBS3lCLFlBQUwsQ0FBa0JDO0FBRDlCLGlCQUFoQjtBQUdEO0FBQ0Y7QUFDRixXQXZCUTtBQXdCVEMsZ0JBQU0sbUJBQU87QUFDWEMsb0JBQVFDLEdBQVIsQ0FBWUMsR0FBWjtBQUNEO0FBMUJRLFNBQVg7QUE0QkQsT0E5QkQ7QUErQkQ7Ozs7RUF6Q2dDMUIsZUFBSzJCLEk7a0JBQW5CbkMsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgXCJ2YW4tYnV0dG9uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi8vYnV0dG9uL2luZGV4XCJcbiAgICB9XG4gIH07XG4gIG9uU2hvdygpIHtcbiAgICB0aGlzLmxvZ2luc3lzdGVtKCk7XG4gIH1cbiAgbG9naW5zeXN0ZW0oKSB7XG4gICAgd2VweS5sb2dpbigpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnN0IGNvZGUgPSByZXMuY29kZTtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGBodHRwOi8vMjExLjE0OS4xNjMuMjExOjQwMDAvRVJQL0F1dGgvV2VDaGF0VmVyaWZ5P2NvZGU9JHtjb2RlfWAsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiByZXNwb25zZSA9PiB7XG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEudG9rZW4pLmxlbmd0aD4wKSB7XG4gICAgICAgICAgICAgIC8v5a2Y5LiA5LiLdG9rZW4gIOWQjue7rWFwaemDveWKoOS4inRva2Vu77yM5Y+q5YGa5LiA5LiL5oiR55qE6aG16Z2i77yM576O5YyW55WM6Z2iXG4gICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwidG9rZW5cIiwgZGF0YS50b2tlbi50b2tlblZhbHVlKTtcbiAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFwidXNlclwiLCBkYXRhLnVzZXIpO1xuICAgICAgICAgICAgICB3ZXB5LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgICAgdXJsOiBcImNhbGVuZGFyXCJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgIHVybDogXCJyZWdpc3Rlcj9vcGVuaWQ9XCIgKyBkYXRhLndlQ2hhdEVudGl0eS5vcGVuSWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgZGF0YSA9IHt9O1xuICBjb21wdXRlZCA9IHt9O1xuXG4gIG1ldGhvZHMgPSB7fTtcbn1cbiJdfQ==