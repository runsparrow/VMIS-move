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
    key: "onLoad",
    value: function onLoad() {
      this.loginsystem();
    }
  }, {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJsb2dpbnN5c3RlbSIsIndlcHkiLCJsb2dpbiIsInRoZW4iLCJjb2RlIiwicmVzIiwid3giLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInRva2VuIiwic3dpdGNoVGFiIiwibmF2aWdhdGVUbyIsIndlQ2hhdEVudGl0eSIsIm9wZW5JZCIsImZhaWwiLCJlcnIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLEssV0FEcEIsd0JBQVEsRUFBUixDOzs7Ozs7Ozs7Ozs7OztvTEFFQ0MsTSxHQUFTO0FBQ1BDLHVCQUFpQjtBQUNmLHNCQUFjO0FBREM7QUFEVixLLFFBNENUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU8sRSxRQUNQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVUsRTs7Ozs7NkJBM0NEO0FBQ1AsV0FBS0MsV0FBTDtBQUNEOzs7NkJBQ1E7QUFDTixXQUFLQSxXQUFMO0FBQ0Y7OztrQ0FDWTtBQUNYQyxxQkFBS0MsS0FBTCxHQUFhQyxJQUFiLENBQWtCLGVBQU87QUFDdkIsWUFBTUMsT0FBT0MsSUFBSUQsSUFBakI7QUFDQUUsV0FBR0MsT0FBSCxDQUFXO0FBQ1RDLHFFQUF5REosSUFEaEQ7QUFFVEssa0JBQVEsS0FGQztBQUdUQyxrQkFBUTtBQUNOLDRCQUFnQjtBQURWLFdBSEM7QUFNVEMsbUJBQVMsMkJBQVk7QUFDbkJDLG9CQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkMsUUFBeEI7QUFDQSxnQkFBSUEsWUFBWUEsU0FBU2pCLElBQXpCLEVBQStCO0FBQzdCLGtCQUFJQSxPQUFPaUIsU0FBU2pCLElBQXBCO0FBQ0Esa0JBQUlBLEtBQUtrQixLQUFULEVBQWdCOztBQUVkOztBQUVBZCwrQkFBS2UsU0FBTCxDQUFlO0FBQ2JSLHVCQUFLO0FBRFEsaUJBQWY7QUFHRCxlQVBELE1BT087QUFDTFAsK0JBQUtnQixVQUFMLENBQWdCO0FBQ2RULHVCQUFLLHFCQUFxQlgsS0FBS3FCLFlBQUwsQ0FBa0JDO0FBRDlCLGlCQUFoQjtBQUdEO0FBQ0Y7QUFDRixXQXZCUTtBQXdCVEMsZ0JBQU0sbUJBQU87QUFDWFIsb0JBQVFDLEdBQVIsQ0FBWVEsR0FBWjtBQUNEO0FBMUJRLFNBQVg7QUE0QkQsT0E5QkQ7QUErQkQ7Ozs7RUE1Q2dDcEIsZUFBS3FCLEk7a0JBQW5CN0IsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgXCJ2YW4tYnV0dG9uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi8vYnV0dG9uL2luZGV4XCJcbiAgICB9XG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmxvZ2luc3lzdGVtKCk7XG4gIH1cbiAgb25TaG93KCkge1xuICAgICB0aGlzLmxvZ2luc3lzdGVtKCk7XG4gIH1cbiAgbG9naW5zeXN0ZW0oKXtcbiAgICB3ZXB5LmxvZ2luKCkudGhlbihyZXMgPT4ge1xuICAgICAgY29uc3QgY29kZSA9IHJlcy5jb2RlO1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvQXV0aC9XZUNoYXRWZXJpZnk/Y29kZT0ke2NvZGV9YCxcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGEudG9rZW4pIHtcblxuICAgICAgICAgICAgICAvL+WtmOS4gOS4i3Rva2VuICDlkI7nu61hcGnpg73liqDkuIp0b2tlbu+8jOWPquWBmuS4gOS4i+aIkeeahOmhtemdou+8jOe+juWMlueVjOmdolxuXG4gICAgICAgICAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiY2FsZW5kYXJcIlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiBcInJlZ2lzdGVyP29wZW5pZD1cIiArIGRhdGEud2VDaGF0RW50aXR5Lm9wZW5JZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50cyA9IHt9O1xuICBkYXRhID0ge307XG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHt9O1xufVxuIl19