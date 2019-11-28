'use strict';

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
        'van-button': '../../static/plugIn//button/index'
      }
    }, _this.components = {}, _this.data = {
      userName: '',
      password: ''
    }, _this.computed = {}, _this.methods = {
      getzhanghao: function getzhanghao(e) {
        var zhanghao = e.detail.value;
        this.setData({ userName: zhanghao });
      },
      getmima: function getmima(e) {
        var mima = e.detail.value;
        this.setData({ password: mima });
      },
      login: function login() {
        _wepy2.default.switchTab({
          url: 'calendar'
        });

        //   let formData = new FormData();
        //   formData.append('AccountName', this.userName);
        //   formData.append('AccountPwd', this.password);

        //   wx.request({
        //     url: `http://localhost:5000/ERP/Auth/GetToken`,
        //     method: 'POST',
        //     body: formData,
        //     hearders:{
        //           Accept: 'application/json',
        //     },
        //     success: res => {
        //       if (res) {
        //        console.log("res",res)
        //       }
        //     },
        //     fail: err => {
        //       console.log(err);
        //     }
        //   });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'onload',
    value: function onload() {
      ///ERP/Auth/GetToken
    }
  }]);

  return Login;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZ2V0emhhbmdoYW8iLCJlIiwiemhhbmdoYW8iLCJkZXRhaWwiLCJ2YWx1ZSIsInNldERhdGEiLCJnZXRtaW1hIiwibWltYSIsImxvZ2luIiwid2VweSIsInN3aXRjaFRhYiIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsSyxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7O29MQUVDQyxNLEdBQVM7QUFDUEMsdUJBQWlCO0FBQ2Ysc0JBQWM7QUFEQztBQURWLEssUUFRVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBSVBDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxpQkFEUSx1QkFDSUMsQ0FESixFQUNPO0FBQ2IsWUFBSUMsV0FBV0QsRUFBRUUsTUFBRixDQUFTQyxLQUF4QjtBQUNBLGFBQUtDLE9BQUwsQ0FBYSxFQUFFVCxVQUFVTSxRQUFaLEVBQWI7QUFDRCxPQUpPO0FBS1JJLGFBTFEsbUJBS0FMLENBTEEsRUFLRztBQUNULFlBQUlNLE9BQU9OLEVBQUVFLE1BQUYsQ0FBU0MsS0FBcEI7QUFDQSxhQUFLQyxPQUFMLENBQWEsRUFBRVIsVUFBVVUsSUFBWixFQUFiO0FBQ0QsT0FSTztBQVNSQyxXQVRRLG1CQVNBO0FBQ05DLHVCQUFLQyxTQUFMLENBQWU7QUFDYkMsZUFBSztBQURRLFNBQWY7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFsQ08sSzs7Ozs7NkJBVkQ7QUFDUDtBQUNEOzs7O0VBUmdDRixlQUFLRyxJO2tCQUFuQnJCLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ3Zhbi1idXR0b24nOiAnLi4vLi4vc3RhdGljL3BsdWdJbi8vYnV0dG9uL2luZGV4J1xuICAgIH1cbiAgfTtcbiAgb25sb2FkKCkge1xuICAgIC8vL0VSUC9BdXRoL0dldFRva2VuXG4gIH1cbiAgY29tcG9uZW50cyA9IHt9O1xuICBkYXRhID0ge1xuICAgIHVzZXJOYW1lOiAnJyxcbiAgICBwYXNzd29yZDogJydcbiAgfTtcbiAgY29tcHV0ZWQgPSB7fTtcblxuICBtZXRob2RzID0ge1xuICAgIGdldHpoYW5naGFvKGUpIHtcbiAgICAgIGxldCB6aGFuZ2hhbyA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5zZXREYXRhKHsgdXNlck5hbWU6IHpoYW5naGFvIH0pO1xuICAgIH0sXG4gICAgZ2V0bWltYShlKSB7XG4gICAgICBsZXQgbWltYSA9IGUuZGV0YWlsLnZhbHVlO1xuICAgICAgdGhpcy5zZXREYXRhKHsgcGFzc3dvcmQ6IG1pbWEgfSk7XG4gICAgfSxcbiAgICBsb2dpbigpIHtcbiAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgdXJsOiAnY2FsZW5kYXInXG4gICAgICB9KVxuXG4gICAgICAvLyAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gICBmb3JtRGF0YS5hcHBlbmQoJ0FjY291bnROYW1lJywgdGhpcy51c2VyTmFtZSk7XG4gICAgICAvLyAgIGZvcm1EYXRhLmFwcGVuZCgnQWNjb3VudFB3ZCcsIHRoaXMucGFzc3dvcmQpO1xuXG4gICAgICAvLyAgIHd4LnJlcXVlc3Qoe1xuICAgICAgLy8gICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvQXV0aC9HZXRUb2tlbmAsXG4gICAgICAvLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAvLyAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAvLyAgICAgaGVhcmRlcnM6e1xuICAgICAgLy8gICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgIC8vICAgICAgIGlmIChyZXMpIHtcbiAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZyhcInJlc1wiLHJlcylcbiAgICAgIC8vICAgICAgIH1cbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAvLyAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgfSk7XG4gICAgfVxuICB9O1xufVxuIl19