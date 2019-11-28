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
      customercolumns: [],
      currentDate: '12:00',
      minHour: 10,
      maxHour: 20,
      showpop: false,
      showpk: false,
      showpkv: false,
      showpcs: false,
      minDate: new Date().getTime(),
      maxDate: new Date(2999, 10, 1).getTime()
    }, _defineProperty(_this$data, 'currentDate', new Date().getTime()), _defineProperty(_this$data, 'sitename', ''), _defineProperty(_this$data, 'venuename', ''), _defineProperty(_this$data, 'customername', ''), _this$data), _this.components = {}, _this.methods = {
      aaa: function aaa() {
        console.log(1), console.log('calendarinfo', this.calendarinfo);
      },
      onChange: function onChange(e) {
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
      oncustomerChange: function oncustomerChange(e) {
        var customerinfo = this.customerlist[e.detail.index];
        this.calendarinfo.customerId = customerinfo.id;
        var name = customerinfo.defaultName;
        this.customername = name;
        this.showpcs = false;
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
      oncsfocus: function oncsfocus() {
        console.log(1);
        this.showpcs = true;
      },
      opentime: function opentime() {
        this.showpop = true;
      },
      onClose: function onClose() {
        this.showpop = false;
        this.showpk = false;
        this.showpkv = false;
        this.showpcs = false;
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
      this.getcustomerlist();
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
  }, {
    key: 'getcustomerlist',
    value: function getcustomerlist() {
      var _this4 = this;

      wx.request({
        url: 'http://localhost:5000/ERP/CRM/Customer/Read/Rows',
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
          //Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6Iua9mOa0gee-pCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJFUlBBcGkuRW50aXRpZXMuQVZNLlVzZXIiLCJpcCI6IjEyNy4wLjAuMSIsIm5iZiI6MTU3Mzk3NDU1MCwiZXhwIjoxNTc0MDYwOTUwLCJpc3MiOiJvY2Vsb3QiLCJhdWQiOiJldmVyeW9uZSJ9.lwPyby8LJfPjH_XigknRGsN_tLFYt4-KEvUa6GA596o'
        },
        success: function success(res) {
          if (res && res) {
            _this4.customerlist = res.data;
            _this4.customercolumns = res.data.map(function (p) {
              return p.defaultName;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3Rhc2suanMiXSwibmFtZXMiOlsibmV3dGFzayIsImNvbmZpZyIsInVzaW5nQ29tcG9uZW50cyIsInByb3BzIiwiZGF0YSIsImNhbGVuZGFyaW5mbyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhc3Nob3ciLCJzaXRlbGlzdCIsInZlbnVlbGlzdCIsInNpdGVjb2x1bW5zIiwidmVudWVjb2x1bW5zIiwiY3VzdG9tZXJjb2x1bW5zIiwiY3VycmVudERhdGUiLCJtaW5Ib3VyIiwibWF4SG91ciIsInNob3dwb3AiLCJzaG93cGsiLCJzaG93cGt2Iiwic2hvd3BjcyIsIm1pbkRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsIm1heERhdGUiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImFhYSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpZCIsIm5hbWUiLCJkZXRhaWwiLCJyZWNlcHRpb25EYXRlVGltZSIsInJlY2VwdGlvbklkIiwiZG9ja2luZ05hbWUiLCJkb2NraW5nTW9iaWxlIiwib25zaXRlQ2hhbmdlIiwic2l0ZWluZm8iLCJpbmRleCIsInNpdGVJZCIsInNpdGVuYW1lIiwiZ2V0dmVudWVsaXN0Iiwib252ZW51ZUNoYW5nZSIsInZlbnVlaW5mbyIsInZlbnVlSWQiLCJ2ZW51ZW5hbWUiLCJvbmN1c3RvbWVyQ2hhbmdlIiwiY3VzdG9tZXJpbmZvIiwiY3VzdG9tZXJsaXN0IiwiY3VzdG9tZXJJZCIsImRlZmF1bHROYW1lIiwiY3VzdG9tZXJuYW1lIiwib25jb25maXJtZHBrIiwiZm9ybWF0Iiwib25hc2ZvY3VzIiwib252ZW5mb2N1cyIsIm9uY3Nmb2N1cyIsIm9wZW50aW1lIiwib25DbG9zZSIsImV2ZW50IiwiZ2V0c2l0ZWxpc3QiLCJnZXRjdXN0b21lcmxpc3QiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwibWFwIiwicCIsImZhaWwiLCJlcnIiLCJwYXJhbSIsIkZ1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QyxrQkFBUUMsR0FBUixDQUFZK0MsR0FBWjtBQUNEO0FBZlEsT0FBWDtBQWlCRDs7O3NDQUNpQjtBQUFBOztBQUNoQlYsU0FBR0MsT0FBSCxDQUFXO0FBQ1RDLCtEQURTO0FBRVRDLGdCQUFRLE1BRkM7QUFHVEMsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFDaEI7QUFGTSxTQUhDO0FBT1RDLGlCQUFTLHNCQUFPO0FBQ2QsY0FBSUMsT0FBT0EsR0FBWCxFQUFnQjtBQUNkLG1CQUFLcEIsWUFBTCxHQUFvQm9CLElBQUlwRSxJQUF4QjtBQUNBLG1CQUFLUyxlQUFMLEdBQXVCMkQsSUFBSXBFLElBQUosQ0FBU3FFLEdBQVQsQ0FBYTtBQUFBLHFCQUFLQyxFQUFFcEIsV0FBUDtBQUFBLGFBQWIsQ0FBdkI7QUFDRDtBQUNGLFNBWlE7QUFhVHFCLGNBQU0sbUJBQU87QUFDWC9DLGtCQUFRQyxHQUFSLENBQVkrQyxHQUFaO0FBQ0Q7QUFmUSxPQUFYO0FBaUJEOzs7O0VBOUdrQ0ssZUFBS0MsSTtrQkFBckJsRixPIiwiZmlsZSI6Im5ld3Rhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJ3dlcHktY29tLWNhbGVuZGFyJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3FzJztcblxuQGNvbm5lY3Qoe30pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBuZXd0YXNrIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ3Zhbi1pY29uJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vaWNvbi9pbmRleCcsXG4gICAgICAndmFuLWNlbGwnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4JyxcbiAgICAgICd2YW4tY2VsbC1ncm91cCc6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwtZ3JvdXAvaW5kZXgnLFxuICAgICAgJ3Zhbi1maWVsZCc6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2ZpZWxkL2luZGV4JyxcbiAgICAgICd2YW4tYnV0dG9uJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vYnV0dG9uL2luZGV4JyxcbiAgICAgICd2YW4tcG9wdXAnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9wb3B1cC9pbmRleCcsXG4gICAgICAndmFuLWFjdGlvbi1zaGVldCc6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2FjdGlvbi1zaGVldC9pbmRleCcsXG4gICAgICAndmFuLWRhdGV0aW1lLXBpY2tlcic6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2RhdGV0aW1lLXBpY2tlci9pbmRleCcsXG4gICAgICAndmFuLXBpY2tlcic6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL3BpY2tlci9pbmRleCdcbiAgICB9XG4gIH07XG4gIHByb3BzID0ge307XG4gIGRhdGEgPSB7XG4gICAgY2FsZW5kYXJpbmZvOiB7fSxcbiAgICB1c2VybmFtZTogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGFzc2hvdzogZmFsc2UsXG4gICAgc2l0ZWxpc3Q6IFtdLFxuICAgIHZlbnVlbGlzdDogW10sXG4gICAgc2l0ZWNvbHVtbnM6IFtdLFxuICAgIHZlbnVlY29sdW1uczogW10sXG4gICAgY3VzdG9tZXJjb2x1bW5zOiBbXSxcbiAgICBjdXJyZW50RGF0ZTogJzEyOjAwJyxcbiAgICBtaW5Ib3VyOiAxMCxcbiAgICBtYXhIb3VyOiAyMCxcbiAgICBzaG93cG9wOiBmYWxzZSxcbiAgICBzaG93cGs6IGZhbHNlLFxuICAgIHNob3dwa3Y6IGZhbHNlLFxuICAgIHNob3dwY3M6IGZhbHNlLFxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgIG1heERhdGU6IG5ldyBEYXRlKDI5OTksIDEwLCAxKS5nZXRUaW1lKCksXG4gICAgY3VycmVudERhdGU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgIHNpdGVuYW1lOiAnJyxcbiAgICB2ZW51ZW5hbWU6ICcnLFxuICAgIGN1c3RvbWVybmFtZTogJydcbiAgfTtcbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAvLyBldmVudC5kZXRhaWwg5Li65b2T5YmN6L6T5YWl55qE5YC8XG4gICAgY29uc29sZS5sb2coZXZlbnQuZGV0YWlsKTtcbiAgfVxuICBjb21wb25lbnRzID0ge307XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmdldHNpdGVsaXN0KCk7XG4gICAgdGhpcy5nZXRjdXN0b21lcmxpc3QoKTtcbiAgfVxuICBnZXRzaXRlbGlzdCgpIHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvU1JNL1NpdGUvUmVhZC9Sb3dzYCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAvL0F1dGhvcml6YXRpb246J0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKb2RIUndPaTh2YzJOb1pXMWhjeTU0Yld4emIyRndMbTl5Wnk5M2N5OHlNREExTHpBMUwybGtaVzUwYVhSNUwyTnNZV2x0Y3k5emFXUWlPaUl4SWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmJtRnRaU0k2SW1Ga2JXbHVJaXdpYUhSMGNEb3ZMM05qYUdWdFlYTXVlRzFzYzI5aGNDNXZjbWN2ZDNNdk1qQXdOUzh3TlM5cFpHVnVkR2wwZVM5amJHRnBiWE12YzNWeWJtRnRaU0k2SXVhOW1PYTBnZWUtcENJc0ltaDBkSEE2THk5elkyaGxiV0Z6TG0xcFkzSnZjMjltZEM1amIyMHZkM012TWpBd09DOHdOaTlwWkdWdWRHbDBlUzlqYkdGcGJYTXZjbTlzWlNJNkltRmtiV2x1SWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmJtRnRaV2xrWlc1MGFXWnBaWElpT2lKRlVsQkJjR2t1Ulc1MGFYUnBaWE11UVZaTkxsVnpaWElpTENKcGNDSTZJakV5Tnk0d0xqQXVNU0lzSW01aVppSTZNVFUzTXprM05EVTFNQ3dpWlhod0lqb3hOVGMwTURZd09UVXdMQ0pwYzNNaU9pSnZZMlZzYjNRaUxDSmhkV1FpT2lKbGRtVnllVzl1WlNKOS5sd1B5Ynk4TEpmUGpIX1hpZ2tuUkdzTl90TEZZdDQtS0V2VWE2R0E1OTZvJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzKSB7XG4gICAgICAgICAgdGhpcy5zaXRlbGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICAgIHRoaXMuc2l0ZWNvbHVtbnMgPSByZXMuZGF0YS5tYXAocCA9PiBwLm5hbWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXR2ZW51ZWxpc3QoaWQpIHtcbiAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgIEZ1bmN0aW9uOiB7XG4gICAgICAgIE5hbWU6ICdieXNpdGVpZCcsXG4gICAgICAgIEFyZ3M6IFtpZF1cbiAgICAgIH1cbiAgICB9O1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9TUk0vVmVudWUvUmVhZC9Sb3dzYCxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgICAgICAvL0F1dGhvcml6YXRpb246J0JlYXJlciBleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKb2RIUndPaTh2YzJOb1pXMWhjeTU0Yld4emIyRndMbTl5Wnk5M2N5OHlNREExTHpBMUwybGtaVzUwYVhSNUwyTnNZV2x0Y3k5emFXUWlPaUl4SWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmJtRnRaU0k2SW1Ga2JXbHVJaXdpYUhSMGNEb3ZMM05qYUdWdFlYTXVlRzFzYzI5aGNDNXZjbWN2ZDNNdk1qQXdOUzh3TlM5cFpHVnVkR2wwZVM5amJHRnBiWE12YzNWeWJtRnRaU0k2SXVhOW1PYTBnZWUtcENJc0ltaDBkSEE2THk5elkyaGxiV0Z6TG0xcFkzSnZjMjltZEM1amIyMHZkM012TWpBd09DOHdOaTlwWkdWdWRHbDBlUzlqYkdGcGJYTXZjbTlzWlNJNkltRmtiV2x1SWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmJtRnRaV2xrWlc1MGFXWnBaWElpT2lKRlVsQkJjR2t1Ulc1MGFYUnBaWE11UVZaTkxsVnpaWElpTENKcGNDSTZJakV5Tnk0d0xqQXVNU0lzSW01aVppSTZNVFUzTXprM05EVTFNQ3dpWlhod0lqb3hOVGMwTURZd09UVXdMQ0pwYzNNaU9pSnZZMlZzYjNRaUxDSmhkV1FpT2lKbGRtVnllVzl1WlNKOS5sd1B5Ynk4TEpmUGpIX1hpZ2tuUkdzTl90TEZZdDQtS0V2VWE2R0E1OTZvJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzKSB7XG4gICAgICAgICAgdGhpcy52ZW51ZWxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgICB0aGlzLnZlbnVlY29sdW1ucyA9IHJlcy5kYXRhLm1hcChwID0+IHAubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldGN1c3RvbWVybGlzdCgpIHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvQ1JNL0N1c3RvbWVyL1JlYWQvUm93c2AsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgLy9BdXRob3JpemF0aW9uOidCZWFyZXIgZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5Sm9kSFJ3T2k4dmMyTm9aVzFoY3k1NGJXeHpiMkZ3TG05eVp5OTNjeTh5TURBMUx6QTFMMmxrWlc1MGFYUjVMMk5zWVdsdGN5OXphV1FpT2lJeElpd2lhSFIwY0RvdkwzTmphR1Z0WVhNdWVHMXNjMjloY0M1dmNtY3ZkM012TWpBd05TOHdOUzlwWkdWdWRHbDBlUzlqYkdGcGJYTXZibUZ0WlNJNkltRmtiV2x1SWl3aWFIUjBjRG92TDNOamFHVnRZWE11ZUcxc2MyOWhjQzV2Y21jdmQzTXZNakF3TlM4d05TOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmMzVnlibUZ0WlNJNkl1YTltT2EwZ2VlLXBDSXNJbWgwZEhBNkx5OXpZMmhsYldGekxtMXBZM0p2YzI5bWRDNWpiMjB2ZDNNdk1qQXdPQzh3Tmk5cFpHVnVkR2wwZVM5amJHRnBiWE12Y205c1pTSTZJbUZrYldsdUlpd2lhSFIwY0RvdkwzTmphR1Z0WVhNdWVHMXNjMjloY0M1dmNtY3ZkM012TWpBd05TOHdOUzlwWkdWdWRHbDBlUzlqYkdGcGJYTXZibUZ0Wldsa1pXNTBhV1pwWlhJaU9pSkZVbEJCY0drdVJXNTBhWFJwWlhNdVFWWk5MbFZ6WlhJaUxDSnBjQ0k2SWpFeU55NHdMakF1TVNJc0ltNWlaaUk2TVRVM016azNORFUxTUN3aVpYaHdJam94TlRjME1EWXdPVFV3TENKcGMzTWlPaUp2WTJWc2IzUWlMQ0poZFdRaU9pSmxkbVZ5ZVc5dVpTSjkubHdQeWJ5OExKZlBqSF9YaWdrblJHc05fdExGWXQ0LUtFdlVhNkdBNTk2bydcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzICYmIHJlcykge1xuICAgICAgICAgIHRoaXMuY3VzdG9tZXJsaXN0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgdGhpcy5jdXN0b21lcmNvbHVtbnMgPSByZXMuZGF0YS5tYXAocCA9PiBwLmRlZmF1bHROYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhYWEoKSB7XG4gICAgICBjb25zb2xlLmxvZygxKSwgY29uc29sZS5sb2coJ2NhbGVuZGFyaW5mbycsIHRoaXMuY2FsZW5kYXJpbmZvKTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlKGUpIHtcbiAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgY2FzZSAnbmFtZSc6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8ubmFtZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWNlcHRpb25EYXRlVGltZSc6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8ucmVjZXB0aW9uRGF0ZVRpbWUgPSBlLmRldGFpbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVjZXB0aW9uSWQnOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLnJlY2VwdGlvbklkID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RvY2tpbmdOYW1lJzpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5kb2NraW5nTmFtZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkb2NraW5nTW9iaWxlJzpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5kb2NraW5nTW9iaWxlID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5jYWxlbmRhcmluZm8nLCB0aGlzLmNhbGVuZGFyaW5mbyk7XG4gICAgfSxcbiAgICBvbnNpdGVDaGFuZ2UoZSkge1xuICAgICAgbGV0IHNpdGVpbmZvID0gdGhpcy5zaXRlbGlzdFtlLmRldGFpbC5pbmRleF07XG4gICAgICB0aGlzLmNhbGVuZGFyaW5mby5zaXRlSWQgPSBzaXRlaW5mby5pZDtcbiAgICAgIGxldCBuYW1lID0gc2l0ZWluZm8ubmFtZTtcbiAgICAgIHRoaXMuc2l0ZW5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5zaG93cGsgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2V0dmVudWVsaXN0KHNpdGVpbmZvLmlkKTtcbiAgICB9LFxuICAgIG9udmVudWVDaGFuZ2UoZSkge1xuICAgICAgbGV0IHZlbnVlaW5mbyA9IHRoaXMudmVudWVsaXN0W2UuZGV0YWlsLmluZGV4XTtcbiAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLnZlbnVlSWQgPSB2ZW51ZWluZm8uaWQ7XG4gICAgICBsZXQgbmFtZSA9IHZlbnVlaW5mby5uYW1lO1xuICAgICAgdGhpcy52ZW51ZW5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5zaG93cGt2ID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbmN1c3RvbWVyQ2hhbmdlKGUpIHtcbiAgICAgIGxldCBjdXN0b21lcmluZm8gPSB0aGlzLmN1c3RvbWVybGlzdFtlLmRldGFpbC5pbmRleF07XG4gICAgICB0aGlzLmNhbGVuZGFyaW5mby5jdXN0b21lcklkID0gY3VzdG9tZXJpbmZvLmlkO1xuICAgICAgbGV0IG5hbWUgPSBjdXN0b21lcmluZm8uZGVmYXVsdE5hbWU7XG4gICAgICB0aGlzLmN1c3RvbWVybmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLnNob3dwY3MgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9uY29uZmlybWRwayhlKSB7XG4gICAgICB0aGlzLmNhbGVuZGFyaW5mby5yZWNlcHRpb25EYXRlVGltZSA9IG1vbWVudChlLmRldGFpbCkuZm9ybWF0KFxuICAgICAgICAnWVlZWS1NTS1ERCBISDptbTpzcydcbiAgICAgICk7XG4gICAgICB0aGlzLnNob3dwb3AgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9uYXNmb2N1cygpIHtcbiAgICAgIHRoaXMuc2hvd3BrID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9udmVuZm9jdXMoKSB7XG4gICAgICB0aGlzLnNob3dwa3YgPSB0cnVlO1xuICAgIH0sXG4gICAgb25jc2ZvY3VzKCkge1xuICAgICAgY29uc29sZS5sb2coMSlcbiAgICAgIHRoaXMuc2hvd3BjcyA9IHRydWU7XG4gICAgfSxcbiAgICBvcGVudGltZSgpIHtcbiAgICAgIHRoaXMuc2hvd3BvcCA9IHRydWU7XG4gICAgfSxcbiAgICBvbkNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93cG9wID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dwayA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93cGt2ID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dwY3MgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iXX0=