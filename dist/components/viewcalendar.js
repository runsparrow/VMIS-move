'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComCalendar = require('./../npm/wepy-com-calendar/wepy-com-calendar.js');

var _wepyComCalendar2 = _interopRequireDefault(_wepyComCalendar);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _qs = require('./../npm/qs/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var viewcalendar = (_dec = (0, _wepyRedux.connect)({}), _dec(_class = function (_wepy$page) {
  _inherits(viewcalendar, _wepy$page);

  function viewcalendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, viewcalendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = viewcalendar.__proto__ || Object.getPrototypeOf(viewcalendar)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      usingComponents: {
        'van-icon': '../../static/plugIn/icon/index',
        'van-popup': '../../static/plugIn/popup/index',
        'van-cell': '../../static/plugIn/cell/index',
        'van-cell-group': '../../static/plugIn/cell-group/index'

      }
    }, _this.props = {
      calendarinfo: {}
    }, _this.data = {
      calendarinfos: {}
    }, _this.events = {
      getcalendarinfo: function getcalendarinfo(value) {
        console.log("1", value);
        this.calendarinfos = value;
      }
    }, _this.components = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(viewcalendar, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return viewcalendar;
}(_wepy2.default.page)) || _class);
exports.default = viewcalendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdjYWxlbmRhci5qcyJdLCJuYW1lcyI6WyJ2aWV3Y2FsZW5kYXIiLCJjb25maWciLCJ1c2luZ0NvbXBvbmVudHMiLCJwcm9wcyIsImNhbGVuZGFyaW5mbyIsImRhdGEiLCJjYWxlbmRhcmluZm9zIiwiZXZlbnRzIiwiZ2V0Y2FsZW5kYXJpbmZvIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsWSxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7O2tNQUVDQyxNLEdBQVM7QUFDUEMsdUJBQWlCO0FBQ2Ysb0JBQVksZ0NBREc7QUFFZixxQkFBYSxpQ0FGRTtBQUdmLG9CQUFZLGdDQUhHO0FBSWYsMEJBQWtCOztBQUpIO0FBRFYsSyxRQVNUQyxLLEdBQVE7QUFDTkMsb0JBQWE7QUFEUCxLLFFBR1JDLEksR0FBTztBQUNMQyxxQkFBYztBQURULEssUUFHTkMsTSxHQUFTO0FBQ1JDLHFCQURRLDJCQUNRQyxLQURSLEVBQ2U7QUFDckJDLGdCQUFRQyxHQUFSLENBQVksR0FBWixFQUFnQkYsS0FBaEI7QUFDQSxhQUFLSCxhQUFMLEdBQXFCRyxLQUFyQjtBQUNEO0FBSk8sSyxRQU1WRyxVLEdBQWEsRSxRQU1iQyxPLEdBQVUsRTs7Ozs7NkJBSEQsQ0FFUjs7OztFQTNCdUNDLGVBQUtDLEk7a0JBQTFCZixZIiwiZmlsZSI6InZpZXdjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnd2VweS1jb20tY2FsZW5kYXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXMnO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHZpZXdjYWxlbmRhciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICd2YW4taWNvbic6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2ljb24vaW5kZXgnLFxuICAgICAgJ3Zhbi1wb3B1cCc6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL3BvcHVwL2luZGV4JyxcbiAgICAgICd2YW4tY2VsbCc6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwvaW5kZXgnLFxuICAgICAgJ3Zhbi1jZWxsLWdyb3VwJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vY2VsbC1ncm91cC9pbmRleCcsXG4gICAgIFxuICAgIH1cbiAgfTtcbiAgcHJvcHMgPSB7XG4gICAgY2FsZW5kYXJpbmZvOnt9XG4gIH07XG4gIGRhdGEgPSB7XG4gICAgY2FsZW5kYXJpbmZvczp7fVxuICB9O1xuICAgZXZlbnRzID0ge1xuICAgIGdldGNhbGVuZGFyaW5mbyh2YWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coXCIxXCIsdmFsdWUpXG4gICAgICB0aGlzLmNhbGVuZGFyaW5mb3MgPSB2YWx1ZVxuICAgIH1cbiAgICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gICBcbiAgfTtcbiAgb25Mb2FkKCkge1xuICAgXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgfTtcbn1cbiJdfQ==