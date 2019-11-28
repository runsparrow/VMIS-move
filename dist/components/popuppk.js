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

var editcalendar = (_dec = (0, _wepyRedux.connect)({}), _dec(_class = function (_wepy$page) {
  _inherits(editcalendar, _wepy$page);

  function editcalendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, editcalendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = editcalendar.__proto__ || Object.getPrototypeOf(editcalendar)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      usingComponents: {
        'van-icon': '../../static/plugIn/icon/index',
        'van-cell': '../../static/plugIn/cell/index',
        'van-cell-group': '../../static/plugIn/cell-group/index',
        'van-field': '../../static/plugIn/field/index',
        'van-button': '../../static/plugIn/button/index',
        'van-popup': '../../static/plugIn/popup/index',
        'van-action-sheet': '../../static/plugIn/action-sheet/index',
        'van-datetime-picker': '../../static/plugIn/datetime-picker/index',
        'van-picker': '../../static/plugIn/picker/index'
      }
    }, _this.props = { showpop: showpop }, _this.data = {
      calendarinfo: {},
      username: '',
      password: '',
      asshow: false,
      columns: [],
      currentDate: '12:00',
      minHour: 10,
      maxHour: 20,
      showpop: false,
      showpk: false
    }, _this.components = {}, _this.methods = {
      onClose: function onClose() {
        this.showpop = false;
        this.showpk = false;
      },
      onInput: function onInput(event) {
        this.setData({
          currentDate: event.detail
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(editcalendar, [{
    key: 'onChange',
    value: function onChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getsitelist();
      this.currentDate = new Date().getTime();
    }
  }]);

  return editcalendar;
}(_wepy2.default.page)) || _class);
exports.default = editcalendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwcGsuanMiXSwibmFtZXMiOlsiZWRpdGNhbGVuZGFyIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwicHJvcHMiLCJzaG93cG9wIiwiZGF0YSIsImNhbGVuZGFyaW5mbyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhc3Nob3ciLCJjb2x1bW5zIiwiY3VycmVudERhdGUiLCJtaW5Ib3VyIiwibWF4SG91ciIsInNob3dwayIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwib25DbG9zZSIsIm9uSW5wdXQiLCJldmVudCIsInNldERhdGEiLCJkZXRhaWwiLCJjb25zb2xlIiwibG9nIiwiZ2V0c2l0ZWxpc3QiLCJEYXRlIiwiZ2V0VGltZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxZLFdBRHBCLHdCQUFRLEVBQVIsQzs7Ozs7Ozs7Ozs7Ozs7a01BRUNDLE0sR0FBUztBQUNQQyx1QkFBaUI7QUFDZixvQkFBWSxnQ0FERztBQUVmLG9CQUFZLGdDQUZHO0FBR2YsMEJBQWtCLHNDQUhIO0FBSWYscUJBQWEsaUNBSkU7QUFLZixzQkFBYyxrQ0FMQztBQU1mLHFCQUFhLGlDQU5FO0FBT2YsNEJBQW9CLHdDQVBMO0FBUWYsK0JBQXVCLDJDQVJSO0FBU2Ysc0JBQWM7QUFUQztBQURWLEssUUFhVEMsSyxHQUFRLEVBQUNDLGdCQUFELEUsUUFDUkMsSSxHQUFPO0FBQ0xDLG9CQUFjLEVBRFQ7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxnQkFBVSxFQUhMO0FBSUxDLGNBQVEsS0FKSDtBQUtMQyxlQUFTLEVBTEo7QUFNTEMsbUJBQWEsT0FOUjtBQU9MQyxlQUFTLEVBUEo7QUFRTEMsZUFBUyxFQVJKO0FBU0xULGVBQVMsS0FUSjtBQVVMVSxjQUFRO0FBVkgsSyxRQWdCUEMsVSxHQUFhLEUsUUFLYkMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUixhQUFLYixPQUFMLEdBQWUsS0FBZjtBQUNBLGFBQUtVLE1BQUwsR0FBYyxLQUFkO0FBQ0QsT0FKTztBQUtSSSxhQUxRLG1CQUtBQyxLQUxBLEVBS087QUFDYixhQUFLQyxPQUFMLENBQWE7QUFDWFQsdUJBQWFRLE1BQU1FO0FBRFIsU0FBYjtBQUdEO0FBVE8sSzs7Ozs7NkJBVERGLEssRUFBTztBQUNkO0FBQ0FHLGNBQVFDLEdBQVIsQ0FBWUosTUFBTUUsTUFBbEI7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS0csV0FBTDtBQUNBLFdBQUtiLFdBQUwsR0FBbUIsSUFBSWMsSUFBSixHQUFXQyxPQUFYLEVBQW5CO0FBQ0Q7Ozs7RUFuQ3VDQyxlQUFLQyxJO2tCQUExQjVCLFkiLCJmaWxlIjoicG9wdXBway5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnd2VweS1jb20tY2FsZW5kYXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXMnO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVkaXRjYWxlbmRhciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICd2YW4taWNvbic6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2ljb24vaW5kZXgnLFxuICAgICAgJ3Zhbi1jZWxsJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vY2VsbC9pbmRleCcsXG4gICAgICAndmFuLWNlbGwtZ3JvdXAnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsLWdyb3VwL2luZGV4JyxcbiAgICAgICd2YW4tZmllbGQnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9maWVsZC9pbmRleCcsXG4gICAgICAndmFuLWJ1dHRvbic6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2J1dHRvbi9pbmRleCcsXG4gICAgICAndmFuLXBvcHVwJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vcG9wdXAvaW5kZXgnLFxuICAgICAgJ3Zhbi1hY3Rpb24tc2hlZXQnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9hY3Rpb24tc2hlZXQvaW5kZXgnLFxuICAgICAgJ3Zhbi1kYXRldGltZS1waWNrZXInOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9kYXRldGltZS1waWNrZXIvaW5kZXgnLFxuICAgICAgJ3Zhbi1waWNrZXInOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9waWNrZXIvaW5kZXgnXG4gICAgfVxuICB9O1xuICBwcm9wcyA9IHtzaG93cG9wfTtcbiAgZGF0YSA9IHtcbiAgICBjYWxlbmRhcmluZm86IHt9LFxuICAgIHVzZXJuYW1lOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgYXNzaG93OiBmYWxzZSxcbiAgICBjb2x1bW5zOiBbXSxcbiAgICBjdXJyZW50RGF0ZTogJzEyOjAwJyxcbiAgICBtaW5Ib3VyOiAxMCxcbiAgICBtYXhIb3VyOiAyMCxcbiAgICBzaG93cG9wOiBmYWxzZSxcbiAgICBzaG93cGs6IGZhbHNlXG4gIH07XG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgLy8gZXZlbnQuZGV0YWlsIOS4uuW9k+WJjei+k+WFpeeahOWAvFxuICAgIGNvbnNvbGUubG9nKGV2ZW50LmRldGFpbCk7XG4gIH1cbiAgY29tcG9uZW50cyA9IHt9O1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5nZXRzaXRlbGlzdCgpO1xuICAgIHRoaXMuY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG9uQ2xvc2UoKSB7XG4gICAgICB0aGlzLnNob3dwb3AgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd3BrID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbklucHV0KGV2ZW50KSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjdXJyZW50RGF0ZTogZXZlbnQuZGV0YWlsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iXX0=