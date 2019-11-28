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

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _qs = require('./../npm/qs/lib/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var newtask = (_dec = (0, _wepyRedux.connect)({}), _dec(_class = function (_wepy$page) {
  _inherits(newtask, _wepy$page);

  function newtask() {
    var _ref, _this$data;

    var _temp, _this, _ret;

    _classCallCheck(this, newtask);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = newtask.__proto__ || Object.getPrototypeOf(newtask)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
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
    }, _this.props = {}, _this.data = (_this$data = {
      calendarinfo: {},
      username: '',
      password: '',
      asshow: false,
      sitelist: [],
      venuelist: [],
      sitecolumns: [],
      venuecolumns: [],
      currentDate: '12:00',
      minHour: 10,
      maxHour: 20,
      showpop: false,
      showpk: false,
      showpkv: false,
      minDate: new Date().getTime(),
      maxDate: new Date(2999, 10, 1).getTime()
    }, _defineProperty(_this$data, 'currentDate', new Date().getTime()), _defineProperty(_this$data, 'sitename', ''), _defineProperty(_this$data, 'venuename', ''), _this$data), _this.components = {}, _this.methods = {
      aaa: function aaa() {
        console.log(1), console.log('calendarinfo', this.calendarinfo);
      },
      onChange: function onChange(e) {
        console.log('e.target.id', e.target.id);
        switch (e.target.id) {
          case 'name':
            this.calendarinfo.name = e.detail;
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
        console.log('this.calendarinfo', this.calendarinfo);
      },
      onsiteChange: function onsiteChange(e) {
        var siteinfo = this.sitelist[e.detail.index];
        this.calendarinfo.siteId = siteinfo.id;
        var name = siteinfo.name;
        this.sitename = name;
        this.showpk = false;
        this.getvenuelist(siteinfo.id);
      },
      onvenueChange: function onvenueChange(e) {
        var venueinfo = this.venuelist[e.detail.index];
        this.calendarinfo.venueId = venueinfo.id;
        var name = venueinfo.name;
        this.venuename = name;
        this.showpkv = false;
      },
      onconfirmdpk: function onconfirmdpk(e) {
        this.calendarinfo.receptionDateTime = (0, _moment2.default)(e.detail).format('YYYY-MM-DD HH:mm:ss');
        this.showpop = false;
      },
      onasfocus: function onasfocus() {
        this.showpk = true;
      },
      onvenfocus: function onvenfocus() {
        this.showpkv = true;
      },
      opentime: function opentime() {
        this.showpop = true;
      },
      onClose: function onClose() {
        this.showpop = false;
        this.showpk = false;
        this.showpkv = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(newtask, [{
    key: 'onChange',
    value: function onChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.getsitelist();
    }
  }, {
    key: 'getsitelist',
    value: function getsitelist() {
      var _this2 = this;

      wx.request({
        url: 'http://localhost:5000/ERP/SRM/Site/Read/Rows',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
          //Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6Iua9mOa0gee-pCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJFUlBBcGkuRW50aXRpZXMuQVZNLlVzZXIiLCJpcCI6IjEyNy4wLjAuMSIsIm5iZiI6MTU3Mzk3NDU1MCwiZXhwIjoxNTc0MDYwOTUwLCJpc3MiOiJvY2Vsb3QiLCJhdWQiOiJldmVyeW9uZSJ9.lwPyby8LJfPjH_XigknRGsN_tLFYt4-KEvUa6GA596o'
        },
        success: function success(res) {
          if (res && res) {
            _this2.sitelist = res.data;
            _this2.sitecolumns = res.data.map(function (p) {
              return p.name;
            });
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: 'getvenuelist',
    value: function getvenuelist(id) {
      var _this3 = this;

      var param = {
        Function: {
          Name: 'bysiteid',
          Args: [id]
        }
      };
      wx.request({
        url: 'http://localhost:5000/ERP/SRM/Venue/Read/Rows',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
          //Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6Iua9mOa0gee-pCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJFUlBBcGkuRW50aXRpZXMuQVZNLlVzZXIiLCJpcCI6IjEyNy4wLjAuMSIsIm5iZiI6MTU3Mzk3NDU1MCwiZXhwIjoxNTc0MDYwOTUwLCJpc3MiOiJvY2Vsb3QiLCJhdWQiOiJldmVyeW9uZSJ9.lwPyby8LJfPjH_XigknRGsN_tLFYt4-KEvUa6GA596o'
        },
        success: function success(res) {
          if (res && res) {
            _this3.venuelist = res.data;
            _this3.venuecolumns = res.data.map(function (p) {
              return p.name;
            });
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    }
  }]);

  return newtask;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(newtask , 'pages/newtask'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3Rhc2suanMiXSwibmFtZXMiOlsibmV3dGFzayIsImNvbmZpZyIsInVzaW5nQ29tcG9uZW50cyIsInByb3BzIiwiZGF0YSIsImNhbGVuZGFyaW5mbyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhc3Nob3ciLCJzaXRlbGlzdCIsInZlbnVlbGlzdCIsInNpdGVjb2x1bW5zIiwidmVudWVjb2x1bW5zIiwiY3VycmVudERhdGUiLCJtaW5Ib3VyIiwibWF4SG91ciIsInNob3dwb3AiLCJzaG93cGsiLCJzaG93cGt2IiwibWluRGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwibWF4RGF0ZSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwiYWFhIiwiY29uc29sZSIsImxvZyIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImlkIiwibmFtZSIsImRldGFpbCIsInJlY2VwdGlvbkRhdGVUaW1lIiwicmVjZXB0aW9uSWQiLCJjdXN0b21lcklkIiwiZG9ja2luZ05hbWUiLCJkb2NraW5nTW9iaWxlIiwib25zaXRlQ2hhbmdlIiwic2l0ZWluZm8iLCJpbmRleCIsInNpdGVJZCIsInNpdGVuYW1lIiwiZ2V0dmVudWVsaXN0Iiwib252ZW51ZUNoYW5nZSIsInZlbnVlaW5mbyIsInZlbnVlSWQiLCJ2ZW51ZW5hbWUiLCJvbmNvbmZpcm1kcGsiLCJmb3JtYXQiLCJvbmFzZm9jdXMiLCJvbnZlbmZvY3VzIiwib3BlbnRpbWUiLCJvbkNsb3NlIiwiZXZlbnQiLCJnZXRzaXRlbGlzdCIsInd4IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJtYXAiLCJwIiwiZmFpbCIsImVyciIsInBhcmFtIiwiRnVuY3Rpb24iLCJOYW1lIiwiQXJncyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLE8sV0FEcEIsd0JBQVEsRUFBUixDOzs7Ozs7Ozs7Ozs7Ozt3TEFFQ0MsTSxHQUFTO0FBQ1BDLHVCQUFpQjtBQUNmLG9CQUFZLGdDQURHO0FBRWYsb0JBQVksZ0NBRkc7QUFHZiwwQkFBa0Isc0NBSEg7QUFJZixxQkFBYSxpQ0FKRTtBQUtmLHNCQUFjLGtDQUxDO0FBTWYscUJBQWEsaUNBTkU7QUFPZiw0QkFBb0Isd0NBUEw7QUFRZiwrQkFBdUIsMkNBUlI7QUFTZixzQkFBYztBQVRDO0FBRFYsSyxRQWFUQyxLLEdBQVEsRSxRQUNSQyxJO0FBQ0VDLG9CQUFjLEU7QUFDZEMsZ0JBQVUsRTtBQUNWQyxnQkFBVSxFO0FBQ1ZDLGNBQVEsSztBQUNSQyxnQkFBVSxFO0FBQ1ZDLGlCQUFXLEU7QUFDWEMsbUJBQWEsRTtBQUNiQyxvQkFBYyxFO0FBQ2RDLG1CQUFhLE87QUFDYkMsZUFBUyxFO0FBQ1RDLGVBQVMsRTtBQUNUQyxlQUFTLEs7QUFDVEMsY0FBUSxLO0FBQ1JDLGVBQVMsSztBQUNUQyxlQUFTLElBQUlDLElBQUosR0FBV0MsT0FBWCxFO0FBQ1RDLGVBQVMsSUFBSUYsSUFBSixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CLENBQW5CLEVBQXNCQyxPQUF0QjtrREFDSSxJQUFJRCxJQUFKLEdBQVdDLE9BQVgsRSwyQ0FDSCxFLDRDQUNDLEUsc0JBTWJFLFUsR0FBYSxFLFFBZ0RiQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKQyxnQkFBUUMsR0FBUixDQUFZLENBQVosR0FBZ0JELFFBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCLEtBQUt0QixZQUFqQyxDQUFoQjtBQUNELE9BSE87QUFJUnVCLGNBSlEsb0JBSUNDLENBSkQsRUFJSTtBQUNWSCxnQkFBUUMsR0FBUixDQUFZLGFBQVosRUFBMkJFLEVBQUVDLE1BQUYsQ0FBU0MsRUFBcEM7QUFDQSxnQkFBUUYsRUFBRUMsTUFBRixDQUFTQyxFQUFqQjtBQUNFLGVBQUssTUFBTDtBQUNFLGlCQUFLMUIsWUFBTCxDQUFrQjJCLElBQWxCLEdBQXlCSCxFQUFFSSxNQUEzQjtBQUNBO0FBQ0YsZUFBSyxtQkFBTDtBQUNFLGlCQUFLNUIsWUFBTCxDQUFrQjZCLGlCQUFsQixHQUFzQ0wsRUFBRUksTUFBeEM7QUFDQTtBQUNGLGVBQUssYUFBTDtBQUNFLGlCQUFLNUIsWUFBTCxDQUFrQjhCLFdBQWxCLEdBQWdDTixFQUFFSSxNQUFsQztBQUNBO0FBQ0YsZUFBSyxZQUFMO0FBQ0UsaUJBQUs1QixZQUFMLENBQWtCK0IsVUFBbEIsR0FBK0JQLEVBQUVJLE1BQWpDO0FBQ0E7QUFDRixlQUFLLGFBQUw7QUFDRSxpQkFBSzVCLFlBQUwsQ0FBa0JnQyxXQUFsQixHQUFnQ1IsRUFBRUksTUFBbEM7QUFDQTtBQUNGLGVBQUssZUFBTDtBQUNFLGlCQUFLNUIsWUFBTCxDQUFrQmlDLGFBQWxCLEdBQWtDVCxFQUFFSSxNQUFwQztBQUNBO0FBbEJKO0FBb0JBUCxnQkFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDLEtBQUt0QixZQUF0QztBQUNELE9BM0JPO0FBNEJSa0Msa0JBNUJRLHdCQTRCS1YsQ0E1QkwsRUE0QlE7QUFDZCxZQUFJVyxXQUFXLEtBQUsvQixRQUFMLENBQWNvQixFQUFFSSxNQUFGLENBQVNRLEtBQXZCLENBQWY7QUFDQSxhQUFLcEMsWUFBTCxDQUFrQnFDLE1BQWxCLEdBQTJCRixTQUFTVCxFQUFwQztBQUNBLFlBQUlDLE9BQU9RLFNBQVNSLElBQXBCO0FBQ0EsYUFBS1csUUFBTCxHQUFnQlgsSUFBaEI7QUFDQSxhQUFLZixNQUFMLEdBQWMsS0FBZDtBQUNBLGFBQUsyQixZQUFMLENBQWtCSixTQUFTVCxFQUEzQjtBQUNELE9BbkNPO0FBb0NSYyxtQkFwQ1EseUJBb0NNaEIsQ0FwQ04sRUFvQ1M7QUFDZixZQUFJaUIsWUFBWSxLQUFLcEMsU0FBTCxDQUFlbUIsRUFBRUksTUFBRixDQUFTUSxLQUF4QixDQUFoQjtBQUNBLGFBQUtwQyxZQUFMLENBQWtCMEMsT0FBbEIsR0FBNEJELFVBQVVmLEVBQXRDO0FBQ0EsWUFBSUMsT0FBT2MsVUFBVWQsSUFBckI7QUFDQSxhQUFLZ0IsU0FBTCxHQUFpQmhCLElBQWpCO0FBQ0EsYUFBS2QsT0FBTCxHQUFlLEtBQWY7QUFDRCxPQTFDTztBQTJDUitCLGtCQTNDUSx3QkEyQ0twQixDQTNDTCxFQTJDUTtBQUNkLGFBQUt4QixZQUFMLENBQWtCNkIsaUJBQWxCLEdBQXNDLHNCQUFPTCxFQUFFSSxNQUFULEVBQWlCaUIsTUFBakIsQ0FDcEMscUJBRG9DLENBQXRDO0FBR0EsYUFBS2xDLE9BQUwsR0FBZSxLQUFmO0FBQ0QsT0FoRE87QUFpRFJtQyxlQWpEUSx1QkFpREk7QUFDVixhQUFLbEMsTUFBTCxHQUFjLElBQWQ7QUFDRCxPQW5ETztBQW9EUm1DLGdCQXBEUSx3QkFvREs7QUFDWCxhQUFLbEMsT0FBTCxHQUFlLElBQWY7QUFDRCxPQXRETztBQXVEUm1DLGNBdkRRLHNCQXVERztBQUNULGFBQUtyQyxPQUFMLEdBQWUsSUFBZjtBQUNELE9BekRPO0FBMERSc0MsYUExRFEscUJBMERFO0FBQ1IsYUFBS3RDLE9BQUwsR0FBZSxLQUFmO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLEtBQWQ7QUFDQSxhQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNEO0FBOURPLEs7Ozs7OzZCQXBERHFDLEssRUFBTztBQUNkO0FBQ0E3QixjQUFRQyxHQUFSLENBQVk0QixNQUFNdEIsTUFBbEI7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBS3VCLFdBQUw7QUFDRDs7O2tDQUNhO0FBQUE7O0FBQ1pDLFNBQUdDLE9BQUgsQ0FBVztBQUNUQywyREFEUztBQUVUQyxnQkFBUSxNQUZDO0FBR1RDLGdCQUFRO0FBQ04sMEJBQWdCO0FBQ2hCO0FBRk0sU0FIQztBQU9UQyxpQkFBUyxzQkFBTztBQUNkLGNBQUlDLE9BQU9BLEdBQVgsRUFBZ0I7QUFDZCxtQkFBS3RELFFBQUwsR0FBZ0JzRCxJQUFJM0QsSUFBcEI7QUFDQSxtQkFBS08sV0FBTCxHQUFtQm9ELElBQUkzRCxJQUFKLENBQVM0RCxHQUFULENBQWE7QUFBQSxxQkFBS0MsRUFBRWpDLElBQVA7QUFBQSxhQUFiLENBQW5CO0FBQ0Q7QUFDRixTQVpRO0FBYVRrQyxjQUFNLG1CQUFPO0FBQ1h4QyxrQkFBUUMsR0FBUixDQUFZd0MsR0FBWjtBQUNEO0FBZlEsT0FBWDtBQWlCRDs7O2lDQUNZcEMsRSxFQUFJO0FBQUE7O0FBQ2YsVUFBTXFDLFFBQVE7QUFDWkMsa0JBQVU7QUFDUkMsZ0JBQU0sVUFERTtBQUVSQyxnQkFBTSxDQUFDeEMsRUFBRDtBQUZFO0FBREUsT0FBZDtBQU1BMEIsU0FBR0MsT0FBSCxDQUFXO0FBQ1RDLDREQURTO0FBRVRDLGdCQUFRLE1BRkM7QUFHVEMsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFDaEI7QUFGTSxTQUhDO0FBT1RDLGlCQUFTLHNCQUFPO0FBQ2QsY0FBSUMsT0FBT0EsR0FBWCxFQUFnQjtBQUNkLG1CQUFLckQsU0FBTCxHQUFpQnFELElBQUkzRCxJQUFyQjtBQUNBLG1CQUFLUSxZQUFMLEdBQW9CbUQsSUFBSTNELElBQUosQ0FBUzRELEdBQVQsQ0FBYTtBQUFBLHFCQUFLQyxFQUFFakMsSUFBUDtBQUFBLGFBQWIsQ0FBcEI7QUFDRDtBQUNGLFNBWlE7QUFhVGtDLGNBQU0sbUJBQU87QUFDWHhDLGtCQUFRQyxHQUFSLENBQVl3QyxHQUFaO0FBQ0Q7QUFmUSxPQUFYO0FBaUJEOzs7O0VBdkZrQ0ssZUFBS0MsSTtrQkFBckJ6RSxPIiwiZmlsZSI6Im5ld3Rhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3dlcHktY29tLWNhbGVuZGFyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3FzJztcblxuQGNvbm5lY3Qoe30pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBuZXd0YXNrIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ3Zhbi1pY29uJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vaWNvbi9pbmRleCcsXG4gICAgICAndmFuLWNlbGwnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4JyxcbiAgICAgICd2YW4tY2VsbC1ncm91cCc6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwtZ3JvdXAvaW5kZXgnLFxuICAgICAgJ3Zhbi1maWVsZCc6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2ZpZWxkL2luZGV4JyxcbiAgICAgICd2YW4tYnV0dG9uJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vYnV0dG9uL2luZGV4JyxcbiAgICAgICd2YW4tcG9wdXAnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9wb3B1cC9pbmRleCcsXG4gICAgICAndmFuLWFjdGlvbi1zaGVldCc6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2FjdGlvbi1zaGVldC9pbmRleCcsXG4gICAgICAndmFuLWRhdGV0aW1lLXBpY2tlcic6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2RhdGV0aW1lLXBpY2tlci9pbmRleCcsXG4gICAgICAndmFuLXBpY2tlcic6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL3BpY2tlci9pbmRleCdcbiAgICB9XG4gIH07XG4gIHByb3BzID0ge307XG4gIGRhdGEgPSB7XG4gICAgY2FsZW5kYXJpbmZvOiB7fSxcbiAgICB1c2VybmFtZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGFzc2hvdzogZmFsc2UsXG4gICAgc2l0ZWxpc3Q6IFtdLFxuICAgIHZlbnVlbGlzdDogW10sXG4gICAgc2l0ZWNvbHVtbnM6IFtdLFxuICAgIHZlbnVlY29sdW1uczogW10sXG4gICAgY3VycmVudERhdGU6ICcxMjowMCcsXG4gICAgbWluSG91cjogMTAsXG4gICAgbWF4SG91cjogMjAsXG4gICAgc2hvd3BvcDogZmFsc2UsXG4gICAgc2hvd3BrOiBmYWxzZSxcbiAgICBzaG93cGt2OiBmYWxzZSxcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgyOTk5LCAxMCwgMSkuZ2V0VGltZSgpLFxuICAgIGN1cnJlbnREYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBzaXRlbmFtZTogJycsXG4gICAgdmVudWVuYW1lOiAnJ1xuICB9O1xuICBvbkNoYW5nZShldmVudCkge1xuICAgIC8vIGV2ZW50LmRldGFpbCDkuLrlvZPliY3ovpPlhaXnmoTlgLxcbiAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwpO1xuICB9XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuZ2V0c2l0ZWxpc3QoKTtcbiAgfVxuICBnZXRzaXRlbGlzdCgpIHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvU1JNL1NpdGUvUmVhZC9Sb3dzYCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAvL0F1dGhvcml6YXRpb246J0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKb2RIUndPaTh2YzJOb1pXMWhjeTU0Yld4emIyRndMbTl5Wnk5M2N5OHlNREExTHpBMUwybGtaVzUwYVhSNUwyTnNZV2x0Y3k5emFXUWlPaUl4SWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmJtRnRaU0k2SW1Ga2JXbHVJaXdpYUhSMGNEb3ZMM05qYUdWdFlYTXVlRzFzYzI5aGNDNXZjbWN2ZDNNdk1qQXdOUzh3TlM5cFpHVnVkR2wwZVM5amJHRnBiWE12YzNWeWJtRnRaU0k2SXVhOW1PYTBnZWUtcENJc0ltaDBkSEE2THk5elkyaGxiV0Z6TG0xcFkzSnZjMjltZEM1amIyMHZkM012TWpBd09DOHdOaTlwWkdWdWRHbDBlUzlqYkdGcGJYTXZjbTlzWlNJNkltRmtiV2x1SWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmJtRnRaV2xrWlc1MGFXWnBaWElpT2lKRlVsQkJjR2t1Ulc1MGFYUnBaWE11UVZaTkxsVnpaWElpTENKcGNDSTZJakV5Tnk0d0xqQXVNU0lzSW01aVppSTZNVFUzTXprM05EVTFNQ3dpWlhod0lqb3hOVGMwTURZd09UVXdMQ0pwYzNNaU9pSnZZMlZzYjNRaUxDSmhkV1FpT2lKbGRtVnllVzl1WlNKOS5sd1B5Ynk4TEpmUGpIX1hpZ2tuUkdzTl90TEZZdDQtS0V2VWE2R0E1OTZvJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzKSB7XG4gICAgICAgICAgdGhpcy5zaXRlbGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICAgIHRoaXMuc2l0ZWNvbHVtbnMgPSByZXMuZGF0YS5tYXAocCA9PiBwLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXR2ZW51ZWxpc3QoaWQpIHtcbiAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgIEZ1bmN0aW9uOiB7XG4gICAgICAgIE5hbWU6ICdieXNpdGVpZCcsXG4gICAgICAgIEFyZ3M6IFtpZF1cbiAgICAgIH1cbiAgICB9O1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9TUk0vVmVudWUvUmVhZC9Sb3dzYCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAvL0F1dGhvcml6YXRpb246J0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKb2RIUndPaTh2YzJOb1pXMWhjeTU0Yld4emIyRndMbTl5Wnk5M2N5OHlNREExTHpBMUwybGtaVzUwYVhSNUwyTnNZV2x0Y3k5emFXUWlPaUl4SWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmJtRnRaU0k2SW1Ga2JXbHVJaXdpYUhSMGNEb3ZMM05qYUdWdFlYTXVlRzFzYzI5aGNDNXZjbWN2ZDNNdk1qQXdOUzh3TlM5cFpHVnVkR2wwZVM5amJHRnBiWE12YzNWeWJtRnRaU0k2SXVhOW1PYTBnZWUtcENJc0ltaDBkSEE2THk5elkyaGxiV0Z6TG0xcFkzSnZjMjltZEM1amIyMHZkM012TWpBd09DOHdOaTlwWkdWdWRHbDBlUzlqYkdGcGJYTXZjbTlzWlNJNkltRmtiV2x1SWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmJtRnRaV2xrWlc1MGFXWnBaWElpT2lKRlVsQkJjR2t1Ulc1MGFYUnBaWE11UVZaTkxsVnpaWElpTENKcGNDSTZJakV5Tnk0d0xqQXVNU0lzSW01aVppSTZNVFUzTXprM05EVTFNQ3dpWlhod0lqb3hOVGMwTURZd09UVXdMQ0pwYzNNaU9pSnZZMlZzYjNRaUxDSmhkV1FpT2lKbGRtVnllVzl1WlNKOS5sd1B5Ynk4TEpmUGpIX1hpZ2tuUkdzTl90TEZZdDQtS0V2VWE2R0E1OTZvJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzKSB7XG4gICAgICAgICAgdGhpcy52ZW51ZWxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgICB0aGlzLnZlbnVlY29sdW1ucyA9IHJlcy5kYXRhLm1hcChwID0+IHAubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYWFhKCkge1xuICAgICAgY29uc29sZS5sb2coMSksIGNvbnNvbGUubG9nKCdjYWxlbmRhcmluZm8nLCB0aGlzLmNhbGVuZGFyaW5mbyk7XG4gICAgfSxcbiAgICBvbkNoYW5nZShlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZS50YXJnZXQuaWQnLCBlLnRhcmdldC5pZCk7XG4gICAgICBzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLm5hbWUgPSBlLmRldGFpbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVjZXB0aW9uRGF0ZVRpbWUnOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLnJlY2VwdGlvbkRhdGVUaW1lID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlY2VwdGlvbklkJzpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5yZWNlcHRpb25JZCA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjdXN0b21lcklkJzpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5jdXN0b21lcklkID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RvY2tpbmdOYW1lJzpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5kb2NraW5nTmFtZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkb2NraW5nTW9iaWxlJzpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5kb2NraW5nTW9iaWxlID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5jYWxlbmRhcmluZm8nLCB0aGlzLmNhbGVuZGFyaW5mbyk7XG4gICAgfSxcbiAgICBvbnNpdGVDaGFuZ2UoZSkge1xuICAgICAgbGV0IHNpdGVpbmZvID0gdGhpcy5zaXRlbGlzdFtlLmRldGFpbC5pbmRleF07XG4gICAgICB0aGlzLmNhbGVuZGFyaW5mby5zaXRlSWQgPSBzaXRlaW5mby5pZDtcbiAgICAgIGxldCBuYW1lID0gc2l0ZWluZm8ubmFtZTtcbiAgICAgIHRoaXMuc2l0ZW5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5zaG93cGsgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2V0dmVudWVsaXN0KHNpdGVpbmZvLmlkKTtcbiAgICB9LFxuICAgIG9udmVudWVDaGFuZ2UoZSkge1xuICAgICAgbGV0IHZlbnVlaW5mbyA9IHRoaXMudmVudWVsaXN0W2UuZGV0YWlsLmluZGV4XTtcbiAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLnZlbnVlSWQgPSB2ZW51ZWluZm8uaWQ7XG4gICAgICBsZXQgbmFtZSA9IHZlbnVlaW5mby5uYW1lO1xuICAgICAgdGhpcy52ZW51ZW5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5zaG93cGt2ID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbmNvbmZpcm1kcGsoZSkge1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8ucmVjZXB0aW9uRGF0ZVRpbWUgPSBtb21lbnQoZS5kZXRhaWwpLmZvcm1hdChcbiAgICAgICAgJ1lZWVktTU0tREQgSEg6bW06c3MnXG4gICAgICApO1xuICAgICAgdGhpcy5zaG93cG9wID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbmFzZm9jdXMoKSB7XG4gICAgICB0aGlzLnNob3dwayA9IHRydWU7XG4gICAgfSxcbiAgICBvbnZlbmZvY3VzKCkge1xuICAgICAgdGhpcy5zaG93cGt2ID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9wZW50aW1lKCkge1xuICAgICAgdGhpcy5zaG93cG9wID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICB0aGlzLnNob3dwb3AgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd3BrID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dwa3YgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iXX0=