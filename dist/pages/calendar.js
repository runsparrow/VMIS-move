'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComCalendar = require('./../npm/wepy-com-calendar/wepy-com-calendar.js');

var _wepyComCalendar2 = _interopRequireDefault(_wepyComCalendar);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _singleCalendar = require('./../components/singleCalendar.js');

var _singleCalendar2 = _interopRequireDefault(_singleCalendar);

var _viewcalendar = require('./../components/viewcalendar.js');

var _viewcalendar2 = _interopRequireDefault(_viewcalendar);

var _editcalendar = require('./../components/editcalendar.js');

var _editcalendar2 = _interopRequireDefault(_editcalendar);

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _qs = require('./../npm/qs/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var calendar = (_dec = (0, _wepyRedux.connect)({}), _dec(_class = function (_wepy$page) {
  _inherits(calendar, _wepy$page);

  function calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = calendar.__proto__ || Object.getPrototypeOf(calendar)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      usingComponents: {
        'van-icon': '../../static/plugIn/icon/index',
        'van-popup': '../../static/plugIn/popup/index',
        'van-cell': '../../static/plugIn/cell/index',
        'van-cell-group': '../../static/plugIn/cell-group/index',
        'van-nav-bar': '../../static/plugIn/nav-bar/index',
        'van-field': '../../static/plugIn/field/index'
      }
    }, _this.props = {}, _this.data = {
      list: [],
      nowtime: null,
      nowtimelist: [],
      show: false,
      calendarinfo: {},
      isview: false,
      isedit: false
    }, _this.$repeat = {}, _this.$props = { "singleCalendar": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:list.sync": "list", "color": "#278BFF" }, "viewcalendar": { "v-bind:calendarinfo.sync": "calendarinfo" }, "editcalendar": {} }, _this.$events = { "singleCalendar": { "v-on:hanleConfirm": "hanleConfirm", "v-on:handlenextmonth": "handlenextmonth", "v-on:handleprevmonth": "handleprevmonth" } }, _this.components = {
      singleCalendar: _singleCalendar2.default,
      viewcalendar: _viewcalendar2.default,
      editcalendar: _editcalendar2.default
    }, _this.methods = {
      onClickLeft: function onClickLeft() {
        this.show = false;
        this.isedit = false;
        this.isview = false;
      },
      hanleConfirm: function hanleConfirm(e) {
        this.nowtime = e.formatDay;
        var cflist = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            if ((0, _moment2.default)(i.receptionDateTime).format('YYYY-MM-DD') == e.formatDay) {
              cflist.push(i);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.nowtimelist = cflist;
      },
      handlenextmonth: function handlenextmonth(datetime) {
        var start = (0, _moment2.default)(datetime).startOf('month').format('YYYY-MM-DD');
        var end = (0, _moment2.default)(datetime).endOf('month').format('YYYY-MM-DD');
        this.getlist(start, end);
      },
      handleprevmonth: function handleprevmonth(datetime) {
        var start = (0, _moment2.default)(datetime).startOf('month').format('YYYY-MM-DD');
        var end = (0, _moment2.default)(datetime).endOf('month').format('YYYY-MM-DD');
        this.getlist(start, end);
      },
      newricheng: function newricheng() {
        _wepy2.default.navigateTo({
          url: "newtask"
        });
      },
      viewricheng: function viewricheng(e) {
        this.isview = true;
        this.calendarinfo = this.list.map(function (p) {
          return p.id == e.target.id;
        });
        this.show = true;
        this.$broadcast('getcalendarinfo', this.list.filter(function (p) {
          return p.id == e.target.id;
        })[0]);
      },
      onClose: function onClose() {
        this.show = false;
        this.isedit = false;
        this.isview = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(calendar, [{
    key: 'onLoad',
    value: function onLoad() {
      this.nowtime = (0, _moment2.default)().format('YYYY-MM-DD');
      this.getlist();
    }
  }, {
    key: 'getlist',
    value: function getlist() {
      var _this2 = this;

      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().startOf('month').format('YYYY-MM-DD');
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _moment2.default)().endOf('month').format('YYYY-MM-DD');

      var param = {
        Function: {
          Args: ['', 'ReceptionDateTime', 'Site', 'Venue', 'Customer']
        },
        StartDate: start,
        EndDate: end
      };

      wx.request({
        url: 'http://localhost:5000/ERP/BPM/Task/Read/Query?' + (0, _qs.stringify)(param, {
          allowDots: true,
          encodeValuesOnly: true
        }),
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
          //Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6Iua9mOa0gee-pCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJFUlBBcGkuRW50aXRpZXMuQVZNLlVzZXIiLCJpcCI6IjEyNy4wLjAuMSIsIm5iZiI6MTU3Mzk3NDU1MCwiZXhwIjoxNTc0MDYwOTUwLCJpc3MiOiJvY2Vsb3QiLCJhdWQiOiJldmVyeW9uZSJ9.lwPyby8LJfPjH_XigknRGsN_tLFYt4-KEvUa6GA596o'
        },
        success: function success(res) {
          if (res && res) {
            console.log(res.data.rows);
            _this2.list = res.data.rows;
            _this2.$broadcast('getlist', res.data.rows);
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    }
  }]);

  return calendar;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(calendar , 'pages/calendar'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbImNhbGVuZGFyIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwicHJvcHMiLCJkYXRhIiwibGlzdCIsIm5vd3RpbWUiLCJub3d0aW1lbGlzdCIsInNob3ciLCJjYWxlbmRhcmluZm8iLCJpc3ZpZXciLCJpc2VkaXQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzaW5nbGVDYWxlbmRhciIsInZpZXdjYWxlbmRhciIsImVkaXRjYWxlbmRhciIsIm1ldGhvZHMiLCJvbkNsaWNrTGVmdCIsImhhbmxlQ29uZmlybSIsImUiLCJmb3JtYXREYXkiLCJjZmxpc3QiLCJpIiwicmVjZXB0aW9uRGF0ZVRpbWUiLCJmb3JtYXQiLCJwdXNoIiwiaGFuZGxlbmV4dG1vbnRoIiwiZGF0ZXRpbWUiLCJzdGFydCIsInN0YXJ0T2YiLCJlbmQiLCJlbmRPZiIsImdldGxpc3QiLCJoYW5kbGVwcmV2bW9udGgiLCJuZXdyaWNoZW5nIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ2aWV3cmljaGVuZyIsIm1hcCIsInAiLCJpZCIsInRhcmdldCIsIiRicm9hZGNhc3QiLCJmaWx0ZXIiLCJvbkNsb3NlIiwicGFyYW0iLCJGdW5jdGlvbiIsIkFyZ3MiLCJTdGFydERhdGUiLCJFbmREYXRlIiwid3giLCJyZXF1ZXN0IiwiYWxsb3dEb3RzIiwiZW5jb2RlVmFsdWVzT25seSIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicm93cyIsImZhaWwiLCJlcnIiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxRLFdBRHBCLHdCQUFRLEVBQVIsQzs7Ozs7Ozs7Ozs7Ozs7MExBRUNDLE0sR0FBUztBQUNQQyx1QkFBaUI7QUFDZixvQkFBWSxnQ0FERztBQUVmLHFCQUFhLGlDQUZFO0FBR2Ysb0JBQVksZ0NBSEc7QUFJZiwwQkFBa0Isc0NBSkg7QUFLZix1QkFBZSxtQ0FMQTtBQU1mLHFCQUFhO0FBTkU7QUFEVixLLFFBVVRDLEssR0FBUSxFLFFBQ1JDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsZUFBUyxJQUZKO0FBR0xDLG1CQUFhLEVBSFI7QUFJTEMsWUFBTSxLQUpEO0FBS0xDLG9CQUFjLEVBTFQ7QUFNTEMsY0FBUSxLQU5IO0FBT0xDLGNBQVE7QUFQSCxLLFFBU1JDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGtCQUFpQixFQUFDLGNBQWEsRUFBZCxFQUFpQixnQkFBZSxFQUFoQyxFQUFtQyxvQkFBbUIsTUFBdEQsRUFBNkQsU0FBUSxTQUFyRSxFQUFsQixFQUFrRyxnQkFBZSxFQUFDLDRCQUEyQixjQUE1QixFQUFqSCxFQUE2SixnQkFBZSxFQUE1SyxFLFFBQ1RDLE8sR0FBVSxFQUFDLGtCQUFpQixFQUFDLHFCQUFvQixjQUFyQixFQUFvQyx3QkFBdUIsaUJBQTNELEVBQTZFLHdCQUF1QixpQkFBcEcsRUFBbEIsRSxRQUNUQyxVLEdBQWE7QUFDVkMsOENBRFU7QUFFVkMsMENBRlU7QUFHVkM7QUFIVSxLLFFBK0NaQyxPLEdBQVU7QUFDUkMsaUJBRFEseUJBQ007QUFDWixhQUFLWixJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUtHLE1BQUwsR0FBYyxLQUFkO0FBQ0EsYUFBS0QsTUFBTCxHQUFjLEtBQWQ7QUFDRCxPQUxPO0FBTVJXLGtCQU5RLHdCQU1LQyxDQU5MLEVBTVE7QUFDZCxhQUFLaEIsT0FBTCxHQUFlZ0IsRUFBRUMsU0FBakI7QUFDQSxZQUFJQyxTQUFTLEVBQWI7QUFGYztBQUFBO0FBQUE7O0FBQUE7QUFHZCwrQkFBYyxLQUFLbkIsSUFBbkIsOEhBQXlCO0FBQUEsZ0JBQWhCb0IsQ0FBZ0I7O0FBQ3ZCLGdCQUFJLHNCQUFPQSxFQUFFQyxpQkFBVCxFQUE0QkMsTUFBNUIsQ0FBbUMsWUFBbkMsS0FBb0RMLEVBQUVDLFNBQTFELEVBQXFFO0FBQ25FQyxxQkFBT0ksSUFBUCxDQUFZSCxDQUFaO0FBQ0Q7QUFDRjtBQVBhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBUWQsYUFBS2xCLFdBQUwsR0FBbUJpQixNQUFuQjtBQUNELE9BZk87QUFnQlJLLHFCQWhCUSwyQkFnQlFDLFFBaEJSLEVBZ0JrQjtBQUN4QixZQUFJQyxRQUFRLHNCQUFPRCxRQUFQLEVBQ1RFLE9BRFMsQ0FDRCxPQURDLEVBRVRMLE1BRlMsQ0FFRixZQUZFLENBQVo7QUFHQSxZQUFJTSxNQUFNLHNCQUFPSCxRQUFQLEVBQ1BJLEtBRE8sQ0FDRCxPQURDLEVBRVBQLE1BRk8sQ0FFQSxZQUZBLENBQVY7QUFHQSxhQUFLUSxPQUFMLENBQWFKLEtBQWIsRUFBb0JFLEdBQXBCO0FBQ0QsT0F4Qk87QUF5QlJHLHFCQXpCUSwyQkF5QlFOLFFBekJSLEVBeUJrQjtBQUN4QixZQUFJQyxRQUFRLHNCQUFPRCxRQUFQLEVBQ1RFLE9BRFMsQ0FDRCxPQURDLEVBRVRMLE1BRlMsQ0FFRixZQUZFLENBQVo7QUFHQSxZQUFJTSxNQUFNLHNCQUFPSCxRQUFQLEVBQ1BJLEtBRE8sQ0FDRCxPQURDLEVBRVBQLE1BRk8sQ0FFQSxZQUZBLENBQVY7QUFHQSxhQUFLUSxPQUFMLENBQWFKLEtBQWIsRUFBb0JFLEdBQXBCO0FBQ0QsT0FqQ087QUFrQ1JJLGdCQWxDUSx3QkFrQ0s7QUFDWEMsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSTtBQURVLFNBQWhCO0FBR0QsT0F0Q087QUF1Q1JDLGlCQXZDUSx1QkF1Q0luQixDQXZDSixFQXVDTztBQUNiLGFBQUtaLE1BQUwsR0FBYyxJQUFkO0FBQ0EsYUFBS0QsWUFBTCxHQUFvQixLQUFLSixJQUFMLENBQVVxQyxHQUFWLENBQWM7QUFBQSxpQkFBS0MsRUFBRUMsRUFBRixJQUFRdEIsRUFBRXVCLE1BQUYsQ0FBU0QsRUFBdEI7QUFBQSxTQUFkLENBQXBCO0FBQ0EsYUFBS3BDLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBS3NDLFVBQUwsQ0FDRSxpQkFERixFQUVFLEtBQUt6QyxJQUFMLENBQVUwQyxNQUFWLENBQWlCO0FBQUEsaUJBQUtKLEVBQUVDLEVBQUYsSUFBUXRCLEVBQUV1QixNQUFGLENBQVNELEVBQXRCO0FBQUEsU0FBakIsRUFBMkMsQ0FBM0MsQ0FGRjtBQUlELE9BL0NPO0FBZ0RSSSxhQWhEUSxxQkFnREU7QUFDUixhQUFLeEMsSUFBTCxHQUFZLEtBQVo7QUFDQSxhQUFLRyxNQUFMLEdBQWMsS0FBZDtBQUNBLGFBQUtELE1BQUwsR0FBYyxLQUFkO0FBQ0Q7QUFwRE8sSzs7Ozs7NkJBMUNEO0FBQ1AsV0FBS0osT0FBTCxHQUFlLHdCQUFTcUIsTUFBVCxDQUFnQixZQUFoQixDQUFmO0FBQ0EsV0FBS1EsT0FBTDtBQUNEOzs7OEJBUUM7QUFBQTs7QUFBQSxVQU5BSixLQU1BLHVFQU5RLHdCQUNMQyxPQURLLENBQ0csT0FESCxFQUVMTCxNQUZLLENBRUUsWUFGRixDQU1SO0FBQUEsVUFIQU0sR0FHQSx1RUFITSx3QkFDSEMsS0FERyxDQUNHLE9BREgsRUFFSFAsTUFGRyxDQUVJLFlBRkosQ0FHTjs7QUFDQSxVQUFNc0IsUUFBUTtBQUNaQyxrQkFBVTtBQUNSQyxnQkFBTSxDQUFDLEVBQUQsRUFBSyxtQkFBTCxFQUEwQixNQUExQixFQUFrQyxPQUFsQyxFQUEyQyxVQUEzQztBQURFLFNBREU7QUFJWkMsbUJBQVdyQixLQUpDO0FBS1pzQixpQkFBU3BCO0FBTEcsT0FBZDs7QUFRQXFCLFNBQUdDLE9BQUgsQ0FBVztBQUNUZixnRUFBc0QsbUJBQVVTLEtBQVYsRUFBaUI7QUFDckVPLHFCQUFXLElBRDBEO0FBRXJFQyw0QkFBa0I7QUFGbUQsU0FBakIsQ0FEN0M7QUFLVEMsZ0JBQVEsTUFMQztBQU1UQyxnQkFBUTtBQUNOLDBCQUFnQjtBQUNoQjtBQUZNLFNBTkM7QUFVVEMsaUJBQVMsc0JBQU87QUFDZCxjQUFJQyxPQUFPQSxHQUFYLEVBQWdCO0FBQ2RDLG9CQUFRQyxHQUFSLENBQVlGLElBQUl6RCxJQUFKLENBQVM0RCxJQUFyQjtBQUNBLG1CQUFLM0QsSUFBTCxHQUFZd0QsSUFBSXpELElBQUosQ0FBUzRELElBQXJCO0FBQ0EsbUJBQUtsQixVQUFMLENBQWdCLFNBQWhCLEVBQTJCZSxJQUFJekQsSUFBSixDQUFTNEQsSUFBcEM7QUFDRDtBQUNGLFNBaEJRO0FBaUJUQyxjQUFNLG1CQUFPO0FBQ1hILGtCQUFRQyxHQUFSLENBQVlHLEdBQVo7QUFDRDtBQW5CUSxPQUFYO0FBcUJEOzs7O0VBdEVtQzVCLGVBQUs2QixJO2tCQUF0Qm5FLFEiLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3dlcHktY29tLWNhbGVuZGFyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4JztcbmltcG9ydCBzaW5nbGVDYWxlbmRhciBmcm9tICdAL2NvbXBvbmVudHMvc2luZ2xlQ2FsZW5kYXInO1xuaW1wb3J0IHZpZXdjYWxlbmRhciBmcm9tICdAL2NvbXBvbmVudHMvdmlld2NhbGVuZGFyJztcbmltcG9ydCBlZGl0Y2FsZW5kYXIgZnJvbSAnQC9jb21wb25lbnRzL2VkaXRjYWxlbmRhcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxcyc7XG5cbkBjb25uZWN0KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FsZW5kYXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAndmFuLWljb24nOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9pY29uL2luZGV4JyxcbiAgICAgICd2YW4tcG9wdXAnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9wb3B1cC9pbmRleCcsXG4gICAgICAndmFuLWNlbGwnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4JyxcbiAgICAgICd2YW4tY2VsbC1ncm91cCc6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwtZ3JvdXAvaW5kZXgnLFxuICAgICAgJ3Zhbi1uYXYtYmFyJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vbmF2LWJhci9pbmRleCcsXG4gICAgICAndmFuLWZpZWxkJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vZmllbGQvaW5kZXgnXG4gICAgfVxuICB9O1xuICBwcm9wcyA9IHt9O1xuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIG5vd3RpbWU6IG51bGwsXG4gICAgbm93dGltZWxpc3Q6IFtdLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIGNhbGVuZGFyaW5mbzoge30sXG4gICAgaXN2aWV3OiBmYWxzZSxcbiAgICBpc2VkaXQ6IGZhbHNlXG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzaW5nbGVDYWxlbmRhclwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIixcImNvbG9yXCI6XCIjMjc4QkZGXCJ9LFwidmlld2NhbGVuZGFyXCI6e1widi1iaW5kOmNhbGVuZGFyaW5mby5zeW5jXCI6XCJjYWxlbmRhcmluZm9cIn0sXCJlZGl0Y2FsZW5kYXJcIjp7fX07XHJcbiRldmVudHMgPSB7XCJzaW5nbGVDYWxlbmRhclwiOntcInYtb246aGFubGVDb25maXJtXCI6XCJoYW5sZUNvbmZpcm1cIixcInYtb246aGFuZGxlbmV4dG1vbnRoXCI6XCJoYW5kbGVuZXh0bW9udGhcIixcInYtb246aGFuZGxlcHJldm1vbnRoXCI6XCJoYW5kbGVwcmV2bW9udGhcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBzaW5nbGVDYWxlbmRhcixcbiAgICB2aWV3Y2FsZW5kYXIsXG4gICAgZWRpdGNhbGVuZGFyXG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vd3RpbWUgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICB0aGlzLmdldGxpc3QoKTtcbiAgfVxuICBnZXRsaXN0KFxuICAgIHN0YXJ0ID0gbW9tZW50KClcbiAgICAgIC5zdGFydE9mKCdtb250aCcpXG4gICAgICAuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgZW5kID0gbW9tZW50KClcbiAgICAgIC5lbmRPZignbW9udGgnKVxuICAgICAgLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICkge1xuICAgIGNvbnN0IHBhcmFtID0ge1xuICAgICAgRnVuY3Rpb246IHtcbiAgICAgICAgQXJnczogWycnLCAnUmVjZXB0aW9uRGF0ZVRpbWUnLCAnU2l0ZScsICdWZW51ZScsICdDdXN0b21lciddXG4gICAgICB9LFxuICAgICAgU3RhcnREYXRlOiBzdGFydCxcbiAgICAgIEVuZERhdGU6IGVuZFxuICAgIH07XG5cbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvQlBNL1Rhc2svUmVhZC9RdWVyeT8ke3N0cmluZ2lmeShwYXJhbSwge1xuICAgICAgICBhbGxvd0RvdHM6IHRydWUsXG4gICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWVcbiAgICAgIH0pfWAsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgLy9BdXRob3JpemF0aW9uOidCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5Sm9kSFJ3T2k4dmMyTm9aVzFoY3k1NGJXeHpiMkZ3TG05eVp5OTNjeTh5TURBMUx6QTFMMmxrWlc1MGFYUjVMMk5zWVdsdGN5OXphV1FpT2lJeElpd2lhSFIwY0RvdkwzTmphR1Z0WVhNdWVHMXNjMjloY0M1dmNtY3ZkM012TWpBd05TOHdOUzlwWkdWdWRHbDBlUzlqYkdGcGJYTXZibUZ0WlNJNkltRmtiV2x1SWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmMzVnlibUZ0WlNJNkl1YTltT2EwZ2VlLXBDSXNJbWgwZEhBNkx5OXpZMmhsYldGekxtMXBZM0p2YzI5bWRDNWpiMjB2ZDNNdk1qQXdPQzh3Tmk5cFpHVnVkR2wwZVM5amJHRnBiWE12Y205c1pTSTZJbUZrYldsdUlpd2lhSFIwY0RvdkwzTmphR1Z0WVhNdWVHMXNjMjloY0M1dmNtY3ZkM012TWpBd05TOHdOUzlwWkdWdWRHbDBlUzlqYkdGcGJYTXZibUZ0Wldsa1pXNTBhV1pwWlhJaU9pSkZVbEJCY0drdVJXNTBhWFJwWlhNdVFWWk5MbFZ6WlhJaUxDSnBjQ0k2SWpFeU55NHdMakF1TVNJc0ltNWlaaUk2TVRVM016azNORFUxTUN3aVpYaHdJam94TlRjME1EWXdPVFV3TENKcGMzTWlPaUp2WTJWc2IzUWlMQ0poZFdRaU9pSmxkbVZ5ZVc5dVpTSjkubHdQeWJ5OExKZlBqSF9YaWdrblJHc05fdExGWXQ0LUtFdlVhNkdBNTk2bydcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzICYmIHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnJvd3MpO1xuICAgICAgICAgIHRoaXMubGlzdCA9IHJlcy5kYXRhLnJvd3M7XG4gICAgICAgICAgdGhpcy4kYnJvYWRjYXN0KCdnZXRsaXN0JywgcmVzLmRhdGEucm93cyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgb25DbGlja0xlZnQoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNlZGl0ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzdmlldyA9IGZhbHNlO1xuICAgIH0sXG4gICAgaGFubGVDb25maXJtKGUpIHtcbiAgICAgIHRoaXMubm93dGltZSA9IGUuZm9ybWF0RGF5O1xuICAgICAgbGV0IGNmbGlzdCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLmxpc3QpIHtcbiAgICAgICAgaWYgKG1vbWVudChpLnJlY2VwdGlvbkRhdGVUaW1lKS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PSBlLmZvcm1hdERheSkge1xuICAgICAgICAgIGNmbGlzdC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm5vd3RpbWVsaXN0ID0gY2ZsaXN0O1xuICAgIH0sXG4gICAgaGFuZGxlbmV4dG1vbnRoKGRhdGV0aW1lKSB7XG4gICAgICBsZXQgc3RhcnQgPSBtb21lbnQoZGF0ZXRpbWUpXG4gICAgICAgIC5zdGFydE9mKCdtb250aCcpXG4gICAgICAgIC5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgIGxldCBlbmQgPSBtb21lbnQoZGF0ZXRpbWUpXG4gICAgICAgIC5lbmRPZignbW9udGgnKVxuICAgICAgICAuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICB0aGlzLmdldGxpc3Qoc3RhcnQsIGVuZCk7XG4gICAgfSxcbiAgICBoYW5kbGVwcmV2bW9udGgoZGF0ZXRpbWUpIHtcbiAgICAgIGxldCBzdGFydCA9IG1vbWVudChkYXRldGltZSlcbiAgICAgICAgLnN0YXJ0T2YoJ21vbnRoJylcbiAgICAgICAgLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgbGV0IGVuZCA9IG1vbWVudChkYXRldGltZSlcbiAgICAgICAgLmVuZE9mKCdtb250aCcpXG4gICAgICAgIC5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgIHRoaXMuZ2V0bGlzdChzdGFydCwgZW5kKTtcbiAgICB9LFxuICAgIG5ld3JpY2hlbmcoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6XCJuZXd0YXNrXCJcbiAgICAgIH0pXG4gICAgfSxcbiAgICB2aWV3cmljaGVuZyhlKSB7XG4gICAgICB0aGlzLmlzdmlldyA9IHRydWU7XG4gICAgICB0aGlzLmNhbGVuZGFyaW5mbyA9IHRoaXMubGlzdC5tYXAocCA9PiBwLmlkID09IGUudGFyZ2V0LmlkKTtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICB0aGlzLiRicm9hZGNhc3QoXG4gICAgICAgICdnZXRjYWxlbmRhcmluZm8nLFxuICAgICAgICB0aGlzLmxpc3QuZmlsdGVyKHAgPT4gcC5pZCA9PSBlLnRhcmdldC5pZClbMF1cbiAgICAgICk7XG4gICAgfSxcbiAgICBvbkNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzZWRpdCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iXX0=