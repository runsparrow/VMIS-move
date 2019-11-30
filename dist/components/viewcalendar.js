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
      }
    }, _this.components = {}, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(viewcalendar, [{
    key: "onLoad",
    value: function onLoad() {
      this.getuserlis();
    }
  }]);

  return viewcalendar;
}(_wepy2.default.page)) || _class);
exports.default = viewcalendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdjYWxlbmRhci5qcyJdLCJuYW1lcyI6WyJ2aWV3Y2FsZW5kYXIiLCJjb25maWciLCJ1c2luZ0NvbXBvbmVudHMiLCJwcm9wcyIsImRhdGEiLCJjYWxlbmRhcmluZm9zIiwicmVjZXB0aW9uSWQiLCJldmVudHMiLCJnZXRjYWxlbmRhcmluZm8iLCJ2YWx1ZSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiZ2V0dXNlcmxpcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxZLFdBRHBCLHdCQUFRLEVBQVIsQzs7Ozs7Ozs7Ozs7Ozs7a01BRUNDLE0sR0FBUztBQUNQQyx1QkFBaUI7QUFDZixvQkFBWSxnQ0FERztBQUVmLHFCQUFhLGlDQUZFO0FBR2Ysb0JBQVksZ0NBSEc7QUFJZiwwQkFBa0I7QUFKSDtBQURWLEssUUFRVEMsSyxHQUFRLEUsUUFFUkMsSSxHQUFPO0FBQ0xDLHFCQUFjLEVBRFQ7QUFFTEMsbUJBQWE7QUFGUixLLFFBSVBDLE0sR0FBUztBQUNQQyxxQkFETywyQkFDU0MsS0FEVCxFQUNnQjtBQUNyQixhQUFLSixhQUFMLEdBQXFCSSxLQUFyQjtBQUNEO0FBSE0sSyxRQUtUQyxVLEdBQWEsRSxRQUtiQyxPLEdBQVUsRTs7Ozs7NkJBSkQ7QUFDUCxXQUFLQyxVQUFMO0FBQ0Q7Ozs7RUF2QnVDQyxlQUFLQyxJO2tCQUExQmQsWSIsImZpbGUiOiJ2aWV3Y2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIndlcHktY29tLWNhbGVuZGFyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIndlcHktcmVkdXhcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInFzXCI7XG5cbkBjb25uZWN0KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgdmlld2NhbGVuZGFyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgXCJ2YW4taWNvblwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vaWNvbi9pbmRleFwiLFxuICAgICAgXCJ2YW4tcG9wdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL3BvcHVwL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsLWdyb3VwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsLWdyb3VwL2luZGV4XCJcbiAgICB9XG4gIH07XG4gIHByb3BzID0ge1xuICB9O1xuICBkYXRhID0ge1xuICAgIGNhbGVuZGFyaW5mb3M6e30sXG4gICAgcmVjZXB0aW9uSWQ6IFwiXCJcbiAgfTtcbiAgZXZlbnRzID0ge1xuICAgIGdldGNhbGVuZGFyaW5mbyh2YWx1ZSkge1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm9zID0gdmFsdWU7XG4gICAgfVxuICB9O1xuICBjb21wb25lbnRzID0ge307XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmdldHVzZXJsaXMoKVxuICB9XG4gIFxuICBtZXRob2RzID0ge307XG59XG4iXX0=