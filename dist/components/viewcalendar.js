"use strict";

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
        "van-icon": "../../static/plugIn/icon/index",
        "van-popup": "../../static/plugIn/popup/index",
        "van-cell": "../../static/plugIn/cell/index",
        "van-cell-group": "../../static/plugIn/cell-group/index"
      }
    }, _this.props = {}, _this.data = {
      calendarinfos: {},
      receptionId: ""
    }, _this.events = {
      getcalendarinfo: function getcalendarinfo(value) {
        this.calendarinfos = value;
        this.calendarinfos.receptionDateTime = (0, _moment2.default)(value.receptionDateTime).format("YYYY-MM-DD HH:mm:ss");
      }
    }, _this.components = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(viewcalendar, [{
    key: "onLoad",
    value: function onLoad() {}
  }]);

  return viewcalendar;
}(_wepy2.default.page)) || _class);
exports.default = viewcalendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdjYWxlbmRhci5qcyJdLCJuYW1lcyI6WyJ2aWV3Y2FsZW5kYXIiLCJjb25maWciLCJ1c2luZ0NvbXBvbmVudHMiLCJwcm9wcyIsImRhdGEiLCJjYWxlbmRhcmluZm9zIiwicmVjZXB0aW9uSWQiLCJldmVudHMiLCJnZXRjYWxlbmRhcmluZm8iLCJ2YWx1ZSIsInJlY2VwdGlvbkRhdGVUaW1lIiwiZm9ybWF0IiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsWSxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7O2tNQUVDQyxNLEdBQVM7QUFDUEMsdUJBQWlCO0FBQ2Ysb0JBQVksZ0NBREc7QUFFZixxQkFBYSxpQ0FGRTtBQUdmLG9CQUFZLGdDQUhHO0FBSWYsMEJBQWtCO0FBSkg7QUFEVixLLFFBUVRDLEssR0FBUSxFLFFBQ1JDLEksR0FBTztBQUNMQyxxQkFBZSxFQURWO0FBRUxDLG1CQUFhO0FBRlIsSyxRQUlQQyxNLEdBQVM7QUFDUEMscUJBRE8sMkJBQ1NDLEtBRFQsRUFDZ0I7QUFDckIsYUFBS0osYUFBTCxHQUFxQkksS0FBckI7QUFDQSxhQUFLSixhQUFMLENBQW1CSyxpQkFBbkIsR0FBdUMsc0JBQ3JDRCxNQUFNQyxpQkFEK0IsRUFFckNDLE1BRnFDLENBRTlCLHFCQUY4QixDQUF2QztBQUdEO0FBTk0sSyxRQVFUQyxVLEdBQWEsRSxRQUdiQyxPLEdBQVUsRTs7Ozs7NkJBRkQsQ0FBRTs7OztFQXZCNkJDLGVBQUtDLEk7a0JBQTFCZixZIiwiZmlsZSI6InZpZXdjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwid2VweS1jb20tY2FsZW5kYXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwicXNcIjtcblxuQGNvbm5lY3Qoe30pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB2aWV3Y2FsZW5kYXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICBcInZhbi1pY29uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9pY29uL2luZGV4XCIsXG4gICAgICBcInZhbi1wb3B1cFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vcG9wdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGxcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGwtZ3JvdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwtZ3JvdXAvaW5kZXhcIlxuICAgIH1cbiAgfTtcbiAgcHJvcHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBjYWxlbmRhcmluZm9zOiB7fSxcbiAgICByZWNlcHRpb25JZDogXCJcIlxuICB9O1xuICBldmVudHMgPSB7XG4gICAgZ2V0Y2FsZW5kYXJpbmZvKHZhbHVlKSB7XG4gICAgICB0aGlzLmNhbGVuZGFyaW5mb3MgPSB2YWx1ZTtcbiAgICAgIHRoaXMuY2FsZW5kYXJpbmZvcy5yZWNlcHRpb25EYXRlVGltZSA9IG1vbWVudChcbiAgICAgICAgdmFsdWUucmVjZXB0aW9uRGF0ZVRpbWVcbiAgICAgICkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKTtcbiAgICB9XG4gIH07XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgb25Mb2FkKCkge31cblxuICBtZXRob2RzID0ge307XG59XG4iXX0=