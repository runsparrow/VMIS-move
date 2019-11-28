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

var register = (_dec = (0, _wepyRedux.connect)({}), _dec(_class = function (_wepy$page) {
  _inherits(register, _wepy$page);

  function register() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, register);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = register.__proto__ || Object.getPrototypeOf(register)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      usingComponents: {
        "van-button": "../../static/plugIn//button/index"
      }
    }, _this.components = {}, _this.data = {
      userName: "",
      password: "",
      openid: ""
    }, _this.computed = {}, _this.methods = {
      getzhanghao: function getzhanghao(e) {
        var zhanghao = e.detail.value;
        this.userName = zhanghao;
      },
      getmima: function getmima(e) {
        var mima = e.detail.value;
        this.password = mima;
      },
      login: function login() {
        wx.request({
          url: "http://localhost:5000/ERP/Auth/WeChatBind?accountName=" + this.userName + "&accountPwd=" + this.password + "&weChatOpenId=" + this.openid,
          method: "GET",
          hearders: {
            Accept: "application/json"
          },
          success: function success(res) {
            if (res && res.data) {
              _wepy2.default.redirectTo({
                url: "login"
              });
            }
          },
          fail: function fail(err) {
            console.log(err);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(register, [{
    key: "onLoad",
    value: function onLoad(options) {
      var openid = options.openid;
      this.openid = openid;
    }
  }]);

  return register;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(register , 'pages/register'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwib3BlbmlkIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0emhhbmdoYW8iLCJlIiwiemhhbmdoYW8iLCJkZXRhaWwiLCJ2YWx1ZSIsImdldG1pbWEiLCJtaW1hIiwibG9naW4iLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFyZGVycyIsIkFjY2VwdCIsInN1Y2Nlc3MiLCJyZXMiLCJ3ZXB5IiwicmVkaXJlY3RUbyIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwib3B0aW9ucyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsUSxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzBMQUVDQyxNLEdBQVM7QUFDUEMsdUJBQWlCO0FBQ2Ysc0JBQWM7QUFEQztBQURWLEssUUFTVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxjQUFRO0FBSEgsSyxRQUtQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLENBREosRUFDTztBQUNiLFlBQUlDLFdBQVdELEVBQUVFLE1BQUYsQ0FBU0MsS0FBeEI7QUFDQSxhQUFLVCxRQUFMLEdBQWdCTyxRQUFoQjtBQUNELE9BSk87QUFLUkcsYUFMUSxtQkFLQUosQ0FMQSxFQUtHO0FBQ1QsWUFBSUssT0FBT0wsRUFBRUUsTUFBRixDQUFTQyxLQUFwQjtBQUNBLGFBQUtSLFFBQUwsR0FBZ0JVLElBQWhCO0FBQ0QsT0FSTztBQVNSQyxXQVRRLG1CQVNBO0FBQ05DLFdBQUdDLE9BQUgsQ0FBVztBQUNUQywwRUFDRSxLQUFLZixRQURQLG9CQUVlLEtBQUtDLFFBRnBCLHNCQUU2QyxLQUFLQyxNQUh6QztBQUlUYyxrQkFBUSxLQUpDO0FBS1RDLG9CQUFVO0FBQ1JDLG9CQUFRO0FBREEsV0FMRDtBQVFUQyxtQkFBUyxzQkFBTztBQUNkLGdCQUFJQyxPQUFPQSxJQUFJckIsSUFBZixFQUFxQjtBQUNqQnNCLDZCQUFLQyxVQUFMLENBQWdCO0FBQ2RQLHFCQUFLO0FBRFMsZUFBaEI7QUFHSDtBQUNGLFdBZFE7QUFlVFEsZ0JBQU0sbUJBQU87QUFDWEMsb0JBQVFDLEdBQVIsQ0FBWUMsR0FBWjtBQUNEO0FBakJRLFNBQVg7QUFtQkQ7QUE3Qk8sSzs7Ozs7MkJBWkhDLE8sRUFBUztBQUNkLFVBQUl6QixTQUFTeUIsUUFBUXpCLE1BQXJCO0FBQ0EsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7RUFUbUNtQixlQUFLTyxJO2tCQUF0QmpDLFEiLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIndlcHktcmVkdXhcIjtcblxuQGNvbm5lY3Qoe30pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZWdpc3RlciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgIFwidmFuLWJ1dHRvblwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vL2J1dHRvbi9pbmRleFwiXG4gICAgfVxuICB9O1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIHZhciBvcGVuaWQgPSBvcHRpb25zLm9wZW5pZDtcbiAgICB0aGlzLm9wZW5pZCA9IG9wZW5pZDtcbiAgfVxuICBjb21wb25lbnRzID0ge307XG4gIGRhdGEgPSB7XG4gICAgdXNlck5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgb3BlbmlkOiBcIlwiXG4gIH07XG4gIGNvbXB1dGVkID0ge307XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBnZXR6aGFuZ2hhbyhlKSB7XG4gICAgICBsZXQgemhhbmdoYW8gPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMudXNlck5hbWUgPSB6aGFuZ2hhbztcbiAgICB9LFxuICAgIGdldG1pbWEoZSkge1xuICAgICAgbGV0IG1pbWEgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgIHRoaXMucGFzc3dvcmQgPSBtaW1hO1xuICAgIH0sXG4gICAgbG9naW4oKSB7XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9BdXRoL1dlQ2hhdEJpbmQ/YWNjb3VudE5hbWU9JHtcbiAgICAgICAgICB0aGlzLnVzZXJOYW1lXG4gICAgICAgIH0mYWNjb3VudFB3ZD0ke3RoaXMucGFzc3dvcmR9JndlQ2hhdE9wZW5JZD0ke3RoaXMub3BlbmlkfWAsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhcmRlcnM6IHtcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xuICAgICAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgIHVybDogXCJsb2dpblwiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iXX0=