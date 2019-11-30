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

var mine = (_dec = (0, _wepyRedux.connect)({}), _dec(_class = function (_wepy$page) {
  _inherits(mine, _wepy$page);

  function mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mine.__proto__ || Object.getPrototypeOf(mine)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      userinfo: {}
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mine, [{
    key: "onLoad",
    value: function onLoad() {
      this.userinfo = wx.getStorageSync("user");
    }
  }]);

  return mine;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(mine , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsibWluZSIsInByb3BzIiwiZGF0YSIsInVzZXJpbmZvIiwibWV0aG9kcyIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxJLFdBRHBCLHdCQUFRLEVBQVIsQzs7Ozs7Ozs7Ozs7Ozs7a0xBRUNDLEssR0FBUSxFLFFBQ1JDLEksR0FBTztBQUNMQyxnQkFBVTtBQURMLEssUUFNUEMsTyxHQUFVLEU7Ozs7OzZCQUhEO0FBQ1AsV0FBS0QsUUFBTCxHQUFnQkUsR0FBR0MsY0FBSCxDQUFrQixNQUFsQixDQUFoQjtBQUNEOzs7O0VBUCtCQyxlQUFLQyxJO2tCQUFsQlIsSSIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJ3ZXB5LXJlZHV4XCI7XG5cbkBjb25uZWN0KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWluZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIHByb3BzID0ge307XG4gIGRhdGEgPSB7XG4gICAgdXNlcmluZm86IHt9XG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnVzZXJpbmZvID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyXCIpO1xuICB9XG4gIG1ldGhvZHMgPSB7fTtcbn1cbiJdfQ==