"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      navigationBarTitleText: '日程管理系统',
      usingComponents: {
        "van-icon": "../../static/plugIn/icon/index",
        "van-cell": "../../static/plugIn/cell/index",
        "van-cell-group": "../../static/plugIn/cell-group/index",
        "van-field": "../../static/plugIn/field/index",
        "van-button": "../../static/plugIn/button/index",
        "van-popup": "../../static/plugIn/popup/index",
        "van-action-sheet": "../../static/plugIn/action-sheet/index",
        "van-datetime-picker": "../../static/plugIn/datetime-picker/index",
        "van-picker": "../../static/plugIn/picker/index"
      }
    }, _this.props = {}, _this.data = (_this$data = {
      calendarinfo: {},
      username: "",
      password: "",
      asshow: false,
      sitelist: [],
      venuelist: [],
      sitecolumns: [],
      venuecolumns: [],
      customercolumns: [],
      currentDate: "12:00",
      minHour: 10,
      maxHour: 20,
      showpop: false,
      showpk: false,
      showpkv: false,
      showpcs: false,
      minDate: new Date().getTime(),
      maxDate: new Date(2999, 10, 1).getTime()
    }, _defineProperty(_this$data, "currentDate", new Date().getTime()), _defineProperty(_this$data, "sitename", ""), _defineProperty(_this$data, "venuename", ""), _defineProperty(_this$data, "customername", ""), _defineProperty(_this$data, "userinfo", {}), _this$data), _this.components = {}, _this.methods = {
      save: function save() {
        var token = wx.getStorageSync("token");
        this.calendarinfo.receptionId = this.userinfo.userId;

        var param = {
          entity: _extends({}, this.calendarinfo)
        };
        console.log("param", param);

        wx.request({
          url: "http://localhost:5000/ERP/BPM/task/Create?" + (0, _qs.stringify)(param, {
            allowDots: true
          }),
          method: "POST",
          header: {
            "content-type": "application/x-www-form-urlencoded",
            Authorization: "Bearer " + token
          },
          success: function success(res) {
            if (res && res.statusCode == 200) {
              wx.showToast({
                title: "保存成功",
                icon: "success",
                duration: 2000,
                success: function success() {
                  _wepy2.default.switchTab({
                    url: "calendar"
                  });
                }
              });
            } else {
              wx.showToast({
                title: "保存失败",
                icon: "none",
                duration: 2000
              });
            }
          },
          fail: function fail(err) {
            console.log(err);
          }
        });
      },
      onChange: function onChange(e) {
        switch (e.target.id) {
          case "name":
            this.calendarinfo.name = e.detail;
            break;
          case "receptionDateTime":
            this.calendarinfo.receptionDateTime = e.detail;
            break;
          case "dockingName":
            this.calendarinfo.dockingName = e.detail;
            break;
          case "dockingMobile":
            this.calendarinfo.dockingMobile = e.detail;
            break;
        }
        console.log("this.calendarinfo", this.calendarinfo);
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
        this.calendarinfo.receptionDateTime = (0, _moment2.default)(e.detail).format("YYYY-MM-DD HH:mm:ss");
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
    key: "onChange",
    value: function onChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      var user = wx.getStorageSync("user");
      this.userinfo = user;
      this.getsitelist();
      this.getcustomerlist();
    }
  }, {
    key: "getsitelist",
    value: function getsitelist() {
      var _this2 = this;

      var token = wx.getStorageSync("token");
      wx.request({
        url: "http://localhost:5000/ERP/SRM/Site/Read/Rows",
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token
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
    key: "getvenuelist",
    value: function getvenuelist(id) {
      var _this3 = this;

      var param = {
        Function: {
          Name: "bysiteid",
          Args: [id]
        }
      };
      var token = wx.getStorageSync("token");
      wx.request({
        url: "http://localhost:5000/ERP/SRM/Venue/Read/Rows?" + (0, _qs.stringify)(param, { allowDots: true, encodeValuesOnly: true }),
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token
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
    key: "getcustomerlist",
    value: function getcustomerlist() {
      var _this4 = this;

      var token = wx.getStorageSync("token");
      wx.request({
        url: "http://localhost:5000/ERP/CRM/Customer/Read/Rows",
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3Rhc2suanMiXSwibmFtZXMiOlsibmV3dGFzayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJwcm9wcyIsImRhdGEiLCJjYWxlbmRhcmluZm8iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYXNzaG93Iiwic2l0ZWxpc3QiLCJ2ZW51ZWxpc3QiLCJzaXRlY29sdW1ucyIsInZlbnVlY29sdW1ucyIsImN1c3RvbWVyY29sdW1ucyIsImN1cnJlbnREYXRlIiwibWluSG91ciIsIm1heEhvdXIiLCJzaG93cG9wIiwic2hvd3BrIiwic2hvd3BrdiIsInNob3dwY3MiLCJtaW5EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJtYXhEYXRlIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJzYXZlIiwidG9rZW4iLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwicmVjZXB0aW9uSWQiLCJ1c2VyaW5mbyIsInVzZXJJZCIsInBhcmFtIiwiZW50aXR5IiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJ1cmwiLCJhbGxvd0RvdHMiLCJtZXRob2QiLCJoZWFkZXIiLCJBdXRob3JpemF0aW9uIiwic3VjY2VzcyIsInJlcyIsInN0YXR1c0NvZGUiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIndlcHkiLCJzd2l0Y2hUYWIiLCJmYWlsIiwiZXJyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJuYW1lIiwiZGV0YWlsIiwicmVjZXB0aW9uRGF0ZVRpbWUiLCJkb2NraW5nTmFtZSIsImRvY2tpbmdNb2JpbGUiLCJvbnNpdGVDaGFuZ2UiLCJzaXRlaW5mbyIsImluZGV4Iiwic2l0ZUlkIiwic2l0ZW5hbWUiLCJnZXR2ZW51ZWxpc3QiLCJvbnZlbnVlQ2hhbmdlIiwidmVudWVpbmZvIiwidmVudWVJZCIsInZlbnVlbmFtZSIsIm9uY3VzdG9tZXJDaGFuZ2UiLCJjdXN0b21lcmluZm8iLCJjdXN0b21lcmxpc3QiLCJjdXN0b21lcklkIiwiZGVmYXVsdE5hbWUiLCJjdXN0b21lcm5hbWUiLCJvbmNvbmZpcm1kcGsiLCJmb3JtYXQiLCJvbmFzZm9jdXMiLCJvbnZlbmZvY3VzIiwib25jc2ZvY3VzIiwib3BlbnRpbWUiLCJvbkNsb3NlIiwiZXZlbnQiLCJ1c2VyIiwiZ2V0c2l0ZWxpc3QiLCJnZXRjdXN0b21lcmxpc3QiLCJtYXAiLCJwIiwiRnVuY3Rpb24iLCJOYW1lIiwiQXJncyIsImVuY29kZVZhbHVlc09ubHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdxQkEsTyxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7O3dMQUVDQyxNLEdBQVM7QUFDTkMsOEJBQXdCLFFBRGxCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLGdDQURHO0FBRWYsb0JBQVksZ0NBRkc7QUFHZiwwQkFBa0Isc0NBSEg7QUFJZixxQkFBYSxpQ0FKRTtBQUtmLHNCQUFjLGtDQUxDO0FBTWYscUJBQWEsaUNBTkU7QUFPZiw0QkFBb0Isd0NBUEw7QUFRZiwrQkFBdUIsMkNBUlI7QUFTZixzQkFBYztBQVRDO0FBRlYsSyxRQWNUQyxLLEdBQVEsRSxRQUNSQyxJO0FBQ0VDLG9CQUFjLEU7QUFDZEMsZ0JBQVUsRTtBQUNWQyxnQkFBVSxFO0FBQ1ZDLGNBQVEsSztBQUNSQyxnQkFBVSxFO0FBQ1ZDLGlCQUFXLEU7QUFDWEMsbUJBQWEsRTtBQUNiQyxvQkFBYyxFO0FBQ2RDLHVCQUFpQixFO0FBQ2pCQyxtQkFBYSxPO0FBQ2JDLGVBQVMsRTtBQUNUQyxlQUFTLEU7QUFDVEMsZUFBUyxLO0FBQ1RDLGNBQVEsSztBQUNSQyxlQUFTLEs7QUFDVEMsZUFBUyxLO0FBQ1RDLGVBQVMsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEU7QUFDVEMsZUFBUyxJQUFJRixJQUFKLENBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUIsQ0FBbkIsRUFBc0JDLE9BQXRCO2tE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QU87QUFDZCxjQUFJQyxPQUFPQSxHQUFYLEVBQWdCO0FBQ2QsbUJBQUtuQyxTQUFMLEdBQWlCbUMsSUFBSXpDLElBQXJCO0FBQ0EsbUJBQUtRLFlBQUwsR0FBb0JpQyxJQUFJekMsSUFBSixDQUFTdUYsR0FBVCxDQUFhO0FBQUEscUJBQUtDLEVBQUVqQyxJQUFQO0FBQUEsYUFBYixDQUFwQjtBQUNEO0FBQ0YsU0FaUTtBQWFUTixjQUFNLG1CQUFPO0FBQ1hqQixrQkFBUUMsR0FBUixDQUFZaUIsR0FBWjtBQUNEO0FBZlEsT0FBWDtBQWlCRDs7O3NDQUNpQjtBQUFBOztBQUNoQixVQUFJMUIsUUFBUUMsR0FBR0MsY0FBSCxDQUFrQixPQUFsQixDQUFaO0FBQ0FELFNBQUdTLE9BQUgsQ0FBVztBQUNUQywrREFEUztBQUVURSxnQkFBUSxNQUZDO0FBR1RDLGdCQUFRO0FBQ04sMEJBQWdCLG1DQURWO0FBRU5DLHFDQUF5QmY7QUFGbkIsU0FIQztBQU9UZ0IsaUJBQVMsc0JBQU87QUFDZCxjQUFJQyxPQUFPQSxHQUFYLEVBQWdCO0FBQ2QsbUJBQUsrQixZQUFMLEdBQW9CL0IsSUFBSXpDLElBQXhCO0FBQ0EsbUJBQUtTLGVBQUwsR0FBdUJnQyxJQUFJekMsSUFBSixDQUFTdUYsR0FBVCxDQUFhO0FBQUEscUJBQUtDLEVBQUVkLFdBQVA7QUFBQSxhQUFiLENBQXZCO0FBQ0Q7QUFDRixTQVpRO0FBYVR6QixjQUFNLG1CQUFPO0FBQ1hqQixrQkFBUUMsR0FBUixDQUFZaUIsR0FBWjtBQUNEO0FBZlEsT0FBWDtBQWlCRDs7OztFQXJIa0NILGVBQUs4QyxJO2tCQUFyQmxHLE8iLCJmaWxlIjoibmV3dGFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwid2VweS1jb20tY2FsZW5kYXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwicXNcIjtcblxuQGNvbm5lY3Qoe30pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBuZXd0YXNrIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pel56iL566h55CG57O757ufJyxcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgIFwidmFuLWljb25cIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2ljb24vaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGxcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGwtZ3JvdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwtZ3JvdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLWZpZWxkXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9maWVsZC9pbmRleFwiLFxuICAgICAgXCJ2YW4tYnV0dG9uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9idXR0b24vaW5kZXhcIixcbiAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9wb3B1cC9pbmRleFwiLFxuICAgICAgXCJ2YW4tYWN0aW9uLXNoZWV0XCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9hY3Rpb24tc2hlZXQvaW5kZXhcIixcbiAgICAgIFwidmFuLWRhdGV0aW1lLXBpY2tlclwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vZGF0ZXRpbWUtcGlja2VyL2luZGV4XCIsXG4gICAgICBcInZhbi1waWNrZXJcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL3BpY2tlci9pbmRleFwiXG4gICAgfVxuICB9O1xuICBwcm9wcyA9IHt9O1xuICBkYXRhID0ge1xuICAgIGNhbGVuZGFyaW5mbzoge30sXG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgYXNzaG93OiBmYWxzZSxcbiAgICBzaXRlbGlzdDogW10sXG4gICAgdmVudWVsaXN0OiBbXSxcbiAgICBzaXRlY29sdW1uczogW10sXG4gICAgdmVudWVjb2x1bW5zOiBbXSxcbiAgICBjdXN0b21lcmNvbHVtbnM6IFtdLFxuICAgIGN1cnJlbnREYXRlOiBcIjEyOjAwXCIsXG4gICAgbWluSG91cjogMTAsXG4gICAgbWF4SG91cjogMjAsXG4gICAgc2hvd3BvcDogZmFsc2UsXG4gICAgc2hvd3BrOiBmYWxzZSxcbiAgICBzaG93cGt2OiBmYWxzZSxcbiAgICBzaG93cGNzOiBmYWxzZSxcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgyOTk5LCAxMCwgMSkuZ2V0VGltZSgpLFxuICAgIGN1cnJlbnREYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBzaXRlbmFtZTogXCJcIixcbiAgICB2ZW51ZW5hbWU6IFwiXCIsXG4gICAgY3VzdG9tZXJuYW1lOiBcIlwiLFxuICAgIHVzZXJpbmZvOiB7fVxuICB9O1xuICBvbkNoYW5nZShldmVudCkge1xuICAgIC8vIGV2ZW50LmRldGFpbCDkuLrlvZPliY3ovpPlhaXnmoTlgLxcbiAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwpO1xuICB9XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgb25Mb2FkKCkge1xuICAgIGxldCB1c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyXCIpO1xuICAgIHRoaXMudXNlcmluZm8gPSB1c2VyO1xuICAgIHRoaXMuZ2V0c2l0ZWxpc3QoKTtcbiAgICB0aGlzLmdldGN1c3RvbWVybGlzdCgpO1xuICB9XG4gIGdldHNpdGVsaXN0KCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvRVJQL1NSTS9TaXRlL1JlYWQvUm93c2AsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcbiAgICAgICAgICB0aGlzLnNpdGVsaXN0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgdGhpcy5zaXRlY29sdW1ucyA9IHJlcy5kYXRhLm1hcChwID0+IHAubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldHZlbnVlbGlzdChpZCkge1xuICAgIGNvbnN0IHBhcmFtID0ge1xuICAgICAgRnVuY3Rpb246IHtcbiAgICAgICAgTmFtZTogXCJieXNpdGVpZFwiLFxuICAgICAgICBBcmdzOiBbaWRdXG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9TUk0vVmVudWUvUmVhZC9Sb3dzPyR7c3RyaW5naWZ5KHBhcmFtLCB7IGFsbG93RG90czogdHJ1ZSAsZW5jb2RlVmFsdWVzT25seTogdHJ1ZX0pfWAsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcbiAgICAgICAgICB0aGlzLnZlbnVlbGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICAgIHRoaXMudmVudWVjb2x1bW5zID0gcmVzLmRhdGEubWFwKHAgPT4gcC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0Y3VzdG9tZXJsaXN0KCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvRVJQL0NSTS9DdXN0b21lci9SZWFkL1Jvd3NgLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzKSB7XG4gICAgICAgICAgdGhpcy5jdXN0b21lcmxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyY29sdW1ucyA9IHJlcy5kYXRhLm1hcChwID0+IHAuZGVmYXVsdE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNhdmUoKSB7XG4gICAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8ucmVjZXB0aW9uSWQgPSB0aGlzLnVzZXJpbmZvLnVzZXJJZDtcblxuICAgICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICAgIGVudGl0eToge1xuICAgICAgICAgIC4uLnRoaXMuY2FsZW5kYXJpbmZvXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhcInBhcmFtXCIsIHBhcmFtKTtcblxuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvQlBNL3Rhc2svQ3JlYXRlPyR7c3RyaW5naWZ5KHBhcmFtLCB7XG4gICAgICAgICAgYWxsb3dEb3RzOiB0cnVlXG4gICAgICAgIH0pfWAsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5L+d5a2Y5oiQ5YqfXCIsXG4gICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICAgIHVybDogXCJjYWxlbmRhclwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogXCLkv53lrZjlpLHotKVcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkNoYW5nZShlKSB7XG4gICAgICBzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG4gICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8ubmFtZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicmVjZXB0aW9uRGF0ZVRpbWVcIjpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5yZWNlcHRpb25EYXRlVGltZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZG9ja2luZ05hbWVcIjpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5kb2NraW5nTmFtZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZG9ja2luZ01vYmlsZVwiOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLmRvY2tpbmdNb2JpbGUgPSBlLmRldGFpbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5jYWxlbmRhcmluZm9cIiwgdGhpcy5jYWxlbmRhcmluZm8pO1xuICAgIH0sXG4gICAgb25zaXRlQ2hhbmdlKGUpIHtcbiAgICAgIGxldCBzaXRlaW5mbyA9IHRoaXMuc2l0ZWxpc3RbZS5kZXRhaWwuaW5kZXhdO1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8uc2l0ZUlkID0gc2l0ZWluZm8uaWQ7XG4gICAgICBsZXQgbmFtZSA9IHNpdGVpbmZvLm5hbWU7XG4gICAgICB0aGlzLnNpdGVuYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuc2hvd3BrID0gZmFsc2U7XG4gICAgICB0aGlzLmdldHZlbnVlbGlzdChzaXRlaW5mby5pZCk7XG4gICAgfSxcbiAgICBvbnZlbnVlQ2hhbmdlKGUpIHtcbiAgICAgIGxldCB2ZW51ZWluZm8gPSB0aGlzLnZlbnVlbGlzdFtlLmRldGFpbC5pbmRleF07XG4gICAgICB0aGlzLmNhbGVuZGFyaW5mby52ZW51ZUlkID0gdmVudWVpbmZvLmlkO1xuICAgICAgbGV0IG5hbWUgPSB2ZW51ZWluZm8ubmFtZTtcbiAgICAgIHRoaXMudmVudWVuYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuc2hvd3BrdiA9IGZhbHNlO1xuICAgIH0sXG4gICAgb25jdXN0b21lckNoYW5nZShlKSB7XG4gICAgICBsZXQgY3VzdG9tZXJpbmZvID0gdGhpcy5jdXN0b21lcmxpc3RbZS5kZXRhaWwuaW5kZXhdO1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8uY3VzdG9tZXJJZCA9IGN1c3RvbWVyaW5mby5pZDtcbiAgICAgIGxldCBuYW1lID0gY3VzdG9tZXJpbmZvLmRlZmF1bHROYW1lO1xuICAgICAgdGhpcy5jdXN0b21lcm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5zaG93cGNzID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbmNvbmZpcm1kcGsoZSkge1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8ucmVjZXB0aW9uRGF0ZVRpbWUgPSBtb21lbnQoZS5kZXRhaWwpLmZvcm1hdChcbiAgICAgICAgXCJZWVlZLU1NLUREIEhIOm1tOnNzXCJcbiAgICAgICk7XG4gICAgICB0aGlzLnNob3dwb3AgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9uYXNmb2N1cygpIHtcbiAgICAgIHRoaXMuc2hvd3BrID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9udmVuZm9jdXMoKSB7XG4gICAgICB0aGlzLnNob3dwa3YgPSB0cnVlO1xuICAgIH0sXG4gICAgb25jc2ZvY3VzKCkge1xuICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICB0aGlzLnNob3dwY3MgPSB0cnVlO1xuICAgIH0sXG4gICAgb3BlbnRpbWUoKSB7XG4gICAgICB0aGlzLnNob3dwb3AgPSB0cnVlO1xuICAgIH0sXG4gICAgb25DbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvd3BvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93cGsgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd3BrdiA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93cGNzID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIl19