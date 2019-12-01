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
    value: function onLoad() {}
  }]);

  return viewcalendar;
}(_wepy2.default.page)) || _class);
exports.default = viewcalendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdjYWxlbmRhci5qcyJdLCJuYW1lcyI6WyJ2aWV3Y2FsZW5kYXIiLCJjb25maWciLCJ1c2luZ0NvbXBvbmVudHMiLCJwcm9wcyIsImRhdGEiLCJjYWxlbmRhcmluZm9zIiwicmVjZXB0aW9uSWQiLCJldmVudHMiLCJnZXRjYWxlbmRhcmluZm8iLCJ2YWx1ZSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHcUJBLFksV0FEcEIsd0JBQVEsRUFBUixDOzs7Ozs7Ozs7Ozs7OztrTUFFQ0MsTSxHQUFTO0FBQ1BDLHVCQUFpQjtBQUNmLG9CQUFZLGdDQURHO0FBRWYscUJBQWEsaUNBRkU7QUFHZixvQkFBWSxnQ0FIRztBQUlmLDBCQUFrQjtBQUpIO0FBRFYsSyxRQVFUQyxLLEdBQVEsRSxRQUVSQyxJLEdBQU87QUFDTEMscUJBQWMsRUFEVDtBQUVMQyxtQkFBYTtBQUZSLEssUUFJUEMsTSxHQUFTO0FBQ1BDLHFCQURPLDJCQUNTQyxLQURULEVBQ2dCO0FBQ3JCLGFBQUtKLGFBQUwsR0FBcUJJLEtBQXJCO0FBQ0Q7QUFITSxLLFFBS1RDLFUsR0FBYSxFLFFBSWJDLE8sR0FBVSxFOzs7Ozs2QkFIRCxDQUNSOzs7O0VBdEJ1Q0MsZUFBS0MsSTtrQkFBMUJiLFkiLCJmaWxlIjoidmlld2NhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gXCJ3ZXB5LWNvbS1jYWxlbmRhclwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJ3ZXB5LXJlZHV4XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxc1wiO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHZpZXdjYWxlbmRhciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgIFwidmFuLWljb25cIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2ljb24vaW5kZXhcIixcbiAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9wb3B1cC9pbmRleFwiLFxuICAgICAgXCJ2YW4tY2VsbFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vY2VsbC9pbmRleFwiLFxuICAgICAgXCJ2YW4tY2VsbC1ncm91cFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vY2VsbC1ncm91cC9pbmRleFwiXG4gICAgfVxuICB9O1xuICBwcm9wcyA9IHtcbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBjYWxlbmRhcmluZm9zOnt9LFxuICAgIHJlY2VwdGlvbklkOiBcIlwiXG4gIH07XG4gIGV2ZW50cyA9IHtcbiAgICBnZXRjYWxlbmRhcmluZm8odmFsdWUpIHtcbiAgICAgIHRoaXMuY2FsZW5kYXJpbmZvcyA9IHZhbHVlO1xuICAgIH1cbiAgfTtcbiAgY29tcG9uZW50cyA9IHt9O1xuICBvbkxvYWQoKSB7XG4gIH1cbiAgXG4gIG1ldGhvZHMgPSB7fTtcbn1cbiJdfQ==