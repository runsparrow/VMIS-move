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
    }, _this.props = {}, _this.data = {
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
      aaa: function aaa() {
        console.log(1), console.log('calendarinfo', this.calendarinfo);
      },
      onChange: function onChange(e) {
        switch (e.target.id) {
          case 'name':
            this.calendarinfo.name = e.detail;
            break;
          case 'siteId':
            this.calendarinfo.siteId = e.detail;
            break;
          case 'venueId':
            this.calendarinfo.venueId = e.detail;
            break;
          case 'receptionDateTime':
            this.calendarinfo.receptionDateTime = e.detail;
            break;
          case 'receptionId':
            this.calendarinfo.receptionId = e.detail;
            break;
          case 'customerId':
            this.calendarinfo.customerId = e.detail;
            break;
          case 'dockingName':
            this.calendarinfo.dockingName = e.detail;
            break;
          case 'dockingMobile':
            this.calendarinfo.dockingMobile = e.detail;
            break;
        }
      },
      onasfocus: function onasfocus() {
        this.showpk = true;
        console.log(' this.showpk', this.showpk);
      },
      opentime: function opentime() {
        this.showpop = true;
      },
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
  }, {
    key: 'getsitelist',
    value: function getsitelist() {
      wx.request({
        url: 'http://localhost:5000/ERP/SRM/Site/Read/Rows',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
          //Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6Iua9mOa0gee-pCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJFUlBBcGkuRW50aXRpZXMuQVZNLlVzZXIiLCJpcCI6IjEyNy4wLjAuMSIsIm5iZiI6MTU3Mzk3NDU1MCwiZXhwIjoxNTc0MDYwOTUwLCJpc3MiOiJvY2Vsb3QiLCJhdWQiOiJldmVyeW9uZSJ9.lwPyby8LJfPjH_XigknRGsN_tLFYt4-KEvUa6GA596o'
        },
        success: function success(res) {
          if (res && res) {
            console.log(res.data.rows);
            //this.columns = res.data.rows.map(p => p.name);
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    }
  }]);

  return editcalendar;
}(_wepy2.default.page)) || _class);
exports.default = editcalendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRjYWxlbmRhci5qcyJdLCJuYW1lcyI6WyJlZGl0Y2FsZW5kYXIiLCJjb25maWciLCJ1c2luZ0NvbXBvbmVudHMiLCJwcm9wcyIsImRhdGEiLCJjYWxlbmRhcmluZm8iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYXNzaG93IiwiY29sdW1ucyIsImN1cnJlbnREYXRlIiwibWluSG91ciIsIm1heEhvdXIiLCJzaG93cG9wIiwic2hvd3BrIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJhYWEiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJuYW1lIiwiZGV0YWlsIiwic2l0ZUlkIiwidmVudWVJZCIsInJlY2VwdGlvbkRhdGVUaW1lIiwicmVjZXB0aW9uSWQiLCJjdXN0b21lcklkIiwiZG9ja2luZ05hbWUiLCJkb2NraW5nTW9iaWxlIiwib25hc2ZvY3VzIiwib3BlbnRpbWUiLCJvbkNsb3NlIiwib25JbnB1dCIsImV2ZW50Iiwic2V0RGF0YSIsImdldHNpdGVsaXN0IiwiRGF0ZSIsImdldFRpbWUiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwicm93cyIsImZhaWwiLCJlcnIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUdxQkEsWSxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7O2tNQUVDQyxNLEdBQVM7QUFDUEMsdUJBQWlCO0FBQ2Ysb0JBQVksZ0NBREc7QUFFZixvQkFBWSxnQ0FGRztBQUdmLDBCQUFrQixzQ0FISDtBQUlmLHFCQUFhLGlDQUpFO0FBS2Ysc0JBQWMsa0NBTEM7QUFNZixxQkFBYSxpQ0FORTtBQU9mLDRCQUFvQix3Q0FQTDtBQVFmLCtCQUF1QiwyQ0FSUjtBQVNmLHNCQUFjO0FBVEM7QUFEVixLLFFBYVRDLEssR0FBUSxFLFFB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InNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnd2VweS1jb20tY2FsZW5kYXInO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3dlcHktcmVkdXgnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXMnO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGVkaXRjYWxlbmRhciBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICd2YW4taWNvbic6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2ljb24vaW5kZXgnLFxuICAgICAgJ3Zhbi1jZWxsJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vY2VsbC9pbmRleCcsXG4gICAgICAndmFuLWNlbGwtZ3JvdXAnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsLWdyb3VwL2luZGV4JyxcbiAgICAgICd2YW4tZmllbGQnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9maWVsZC9pbmRleCcsXG4gICAgICAndmFuLWJ1dHRvbic6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2J1dHRvbi9pbmRleCcsXG4gICAgICAndmFuLXBvcHVwJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vcG9wdXAvaW5kZXgnLFxuICAgICAgJ3Zhbi1hY3Rpb24tc2hlZXQnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9hY3Rpb24tc2hlZXQvaW5kZXgnLFxuICAgICAgJ3Zhbi1kYXRldGltZS1waWNrZXInOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9kYXRldGltZS1waWNrZXIvaW5kZXgnLFxuICAgICAgJ3Zhbi1waWNrZXInOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9waWNrZXIvaW5kZXgnXG4gICAgfVxuICB9O1xuICBwcm9wcyA9IHt9O1xuICBkYXRhID0ge1xuICAgIGNhbGVuZGFyaW5mbzoge30sXG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBhc3Nob3c6IGZhbHNlLFxuICAgIGNvbHVtbnM6IFtdLFxuICAgIGN1cnJlbnREYXRlOiAnMTI6MDAnLFxuICAgIG1pbkhvdXI6IDEwLFxuICAgIG1heEhvdXI6IDIwLFxuICAgIHNob3dwb3A6IGZhbHNlLFxuICAgIHNob3dwazogZmFsc2VcbiAgfTtcbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAvLyBldmVudC5kZXRhaWwg5Li65b2T5YmN6L6T5YWl55qE5YC8XG4gICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsKTtcbiAgfVxuICBjb21wb25lbnRzID0ge307XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmdldHNpdGVsaXN0KCk7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG4gIGdldHNpdGVsaXN0KCkge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9TUk0vU2l0ZS9SZWFkL1Jvd3NgLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgIC8vQXV0aG9yaXphdGlvbjonQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpvZEhSd09pOHZjMk5vWlcxaGN5NTRiV3h6YjJGd0xtOXlaeTkzY3k4eU1EQTFMekExTDJsa1pXNTBhWFI1TDJOc1lXbHRjeTl6YVdRaU9pSXhJaXdpYUhSMGNEb3ZMM05qYUdWdFlYTXVlRzFzYzI5aGNDNXZjbWN2ZDNNdk1qQXdOUzh3TlM5cFpHVnVkR2wwZVM5amJHRnBiWE12Ym1GdFpTSTZJbUZrYldsdUlpd2lhSFIwY0RvdkwzTmphR1Z0WVhNdWVHMXNjMjloY0M1dmNtY3ZkM012TWpBd05TOHdOUzlwWkdWdWRHbDBlUzlqYkdGcGJYTXZjM1Z5Ym1GdFpTSTZJdWE5bU9hMGdlZS1wQ0lzSW1oMGRIQTZMeTl6WTJobGJXRnpMbTFwWTNKdmMyOW1kQzVqYjIwdmQzTXZNakF3T0M4d05pOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmNtOXNaU0k2SW1Ga2JXbHVJaXdpYUhSMGNEb3ZMM05qYUdWdFlYTXVlRzFzYzI5aGNDNXZjbWN2ZDNNdk1qQXdOUzh3TlM5cFpHVnVkR2wwZVM5amJHRnBiWE12Ym1GdFpXbGtaVzUwYVdacFpYSWlPaUpGVWxCQmNHa3VSVzUwYVhScFpYTXVRVlpOTGxWelpYSWlMQ0pwY0NJNklqRXlOeTR3TGpBdU1TSXNJbTVpWmlJNk1UVTNNemszTkRVMU1Dd2laWGh3SWpveE5UYzBNRFl3T1RVd0xDSnBjM01pT2lKdlkyVnNiM1FpTENKaGRXUWlPaUpsZG1WeWVXOXVaU0o5Lmx3UHlieThMSmZQakhfWGlna25SR3NOX3RMRll0NC1LRXZVYTZHQTU5Nm8nXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5yb3dzKTtcbiAgICAgICAgICAvL3RoaXMuY29sdW1ucyA9IHJlcy5kYXRhLnJvd3MubWFwKHAgPT4gcC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhYWEoKSB7XG4gICAgICBjb25zb2xlLmxvZygxKSwgY29uc29sZS5sb2coJ2NhbGVuZGFyaW5mbycsIHRoaXMuY2FsZW5kYXJpbmZvKTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlKGUpIHtcbiAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8ubmFtZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzaXRlSWQnOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLnNpdGVJZCA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd2ZW51ZUlkJzpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby52ZW51ZUlkID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlY2VwdGlvbkRhdGVUaW1lJzpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5yZWNlcHRpb25EYXRlVGltZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWNlcHRpb25JZCc6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8ucmVjZXB0aW9uSWQgPSBlLmRldGFpbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY3VzdG9tZXJJZCc6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8uY3VzdG9tZXJJZCA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkb2NraW5nTmFtZSc6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8uZG9ja2luZ05hbWUgPSBlLmRldGFpbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZG9ja2luZ01vYmlsZSc6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8uZG9ja2luZ01vYmlsZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25hc2ZvY3VzKCkge1xuICAgICAgdGhpcy5zaG93cGsgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coJyB0aGlzLnNob3dwaycsIHRoaXMuc2hvd3BrKTtcbiAgICB9LFxuICAgIG9wZW50aW1lKCkge1xuICAgICAgdGhpcy5zaG93cG9wID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICB0aGlzLnNob3dwb3AgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd3BrID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbklucHV0KGV2ZW50KSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjdXJyZW50RGF0ZTogZXZlbnQuZGV0YWlsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iXX0=