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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3Rhc2suanMiXSwibmFtZXMiOlsibmV3dGFzayIsImNvbmZpZyIsInVzaW5nQ29tcG9uZW50cyIsInByb3BzIiwiZGF0YSIsImNhbGVuZGFyaW5mbyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhc3Nob3ciLCJzaXRlbGlzdCIsInZlbnVlbGlzdCIsInNpdGVjb2x1bW5zIiwidmVudWVjb2x1bW5zIiwiY3VzdG9tZXJjb2x1bW5zIiwiY3VycmVudERhdGUiLCJtaW5Ib3VyIiwibWF4SG91ciIsInNob3dwb3AiLCJzaG93cGsiLCJzaG93cGt2Iiwic2hvd3BjcyIsIm1pbkRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsIm1heERhdGUiLCJjb21wb25lbnRzIiwibWV0aG9kcyIsInNhdmUiLCJ0b2tlbiIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJyZWNlcHRpb25JZCIsInVzZXJpbmZvIiwidXNlcklkIiwicGFyYW0iLCJlbnRpdHkiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsInVybCIsImFsbG93RG90cyIsIm1ldGhvZCIsImhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJzdWNjZXNzIiwicmVzIiwic3RhdHVzQ29kZSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwid2VweSIsInN3aXRjaFRhYiIsImZhaWwiLCJlcnIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpZCIsIm5hbWUiLCJkZXRhaWwiLCJyZWNlcHRpb25EYXRlVGltZSIsImRvY2tpbmdOYW1lIiwiZG9ja2luZ01vYmlsZSIsIm9uc2l0ZUNoYW5nZSIsInNpdGVpbmZvIiwiaW5kZXgiLCJzaXRlSWQiLCJzaXRlbmFtZSIsImdldHZlbnVlbGlzdCIsIm9udmVudWVDaGFuZ2UiLCJ2ZW51ZWluZm8iLCJ2ZW51ZUlkIiwidmVudWVuYW1lIiwib25jdXN0b21lckNoYW5nZSIsImN1c3RvbWVyaW5mbyIsImN1c3RvbWVybGlzdCIsImN1c3RvbWVySWQiLCJkZWZhdWx0TmFtZSIsImN1c3RvbWVybmFtZSIsIm9uY29uZmlybWRwayIsImZvcm1hdCIsIm9uYXNmb2N1cyIsIm9udmVuZm9jdXMiLCJvbmNzZm9jdXMiLCJvcGVudGltZSIsIm9uQ2xvc2UiLCJldmVudCIsInVzZXIiLCJnZXRzaXRlbGlzdCIsImdldGN1c3RvbWVybGlzdCIsIm1hcCIsInAiLCJGdW5jdGlvbiIsIk5hbWUiLCJBcmdzIiwiZW5jb2RlVmFsdWVzT25seSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxPLFdBRHBCLHdCQUFRLEVBQVIsQzs7Ozs7Ozs7Ozs7Ozs7d0xBRUNDLE0sR0FBUztBQUNQQyx1QkFBaUI7QUFDZixvQkFBWSxnQ0FERztBQUVmLG9CQUFZLGdDQUZHO0FBR2YsMEJBQWtCLHNDQUhIO0FBSWYscUJBQWEsaUNBSkU7QUFLZixzQkFBYyxrQ0FMQztBQU1mLHFCQUFhLGlDQU5FO0FBT2YsNEJBQW9CLHdDQVBMO0FBUWYsK0JBQXVCLDJDQVJSO0FBU2Ysc0JBQWM7QUFUQztBQURWLEssUUFhVEMsSyxHQUFRLEUsUUFDUkMsSTtBQUNFQyxvQkFBYyxFO0FBQ2RDLGdCQUFVLEU7QUFDVkMsZ0JBQVUsRTtBQUNWQyxjQUFRLEs7QUFDUkMsZ0JBQVUsRTtBQUNWQyxpQkFBVyxFO0FBQ1hDLG1CQUFhLEU7QUFDYkMsb0JBQWMsRTtBQUNkQyx1QkFBaUIsRTtBQUNqQkMsbUJBQWEsTztBQUNiQyxlQUFTLEU7QUFDVEMsZUFBUyxFO0FBQ1RDLGVBQVMsSztBQUNUQyxjQUFRLEs7QUFDUkMsZUFBUyxLO0FBQ1RDLGVBQVMsSztBQUNUQyxlQUFTLElBQUlDLElBQUosR0FBV0MsT0FBWCxFO0FBQ1RDLGVBQVMsSUFBSUYsSUFBSixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CLENBQW5CLEVBQXNCQyxPQUF0QjtrREFDSSxJQUFJRCxJQUFKLEdBQVdDLE9BQVgsRSwyQ0FDSCxFLDRDQUNDLEUs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U0FBTCxHQUFpQm1DLElBQUl6QyxJQUFyQjtBQUNBLG1CQUFLUSxZQUFMLEdBQW9CaUMsSUFBSXpDLElBQUosQ0FBU3VGLEdBQVQsQ0FBYTtBQUFBLHFCQUFLQyxFQUFFakMsSUFBUDtBQUFBLGFBQWIsQ0FBcEI7QUFDRDtBQUNGLFNBWlE7QUFhVE4sY0FBTSxtQkFBTztBQUNYakIsa0JBQVFDLEdBQVIsQ0FBWWlCLEdBQVo7QUFDRDtBQWZRLE9BQVg7QUFpQkQ7OztzQ0FDaUI7QUFBQTs7QUFDaEIsVUFBSTFCLFFBQVFDLEdBQUdDLGNBQUgsQ0FBa0IsT0FBbEIsQ0FBWjtBQUNBRCxTQUFHUyxPQUFILENBQVc7QUFDVEMsK0RBRFM7QUFFVEUsZ0JBQVEsTUFGQztBQUdUQyxnQkFBUTtBQUNOLDBCQUFnQixtQ0FEVjtBQUVOQyxxQ0FBeUJmO0FBRm5CLFNBSEM7QUFPVGdCLGlCQUFTLHNCQUFPO0FBQ2QsY0FBSUMsT0FBT0EsR0FBWCxFQUFnQjtBQUNkLG1CQUFLK0IsWUFBTCxHQUFvQi9CLElBQUl6QyxJQUF4QjtBQUNBLG1CQUFLUyxlQUFMLEdBQXVCZ0MsSUFBSXpDLElBQUosQ0FBU3VGLEdBQVQsQ0FBYTtBQUFBLHFCQUFLQyxFQUFFZCxXQUFQO0FBQUEsYUFBYixDQUF2QjtBQUNEO0FBQ0YsU0FaUTtBQWFUekIsY0FBTSxtQkFBTztBQUNYakIsa0JBQVFDLEdBQVIsQ0FBWWlCLEdBQVo7QUFDRDtBQWZRLE9BQVg7QUFpQkQ7Ozs7RUFwSGtDSCxlQUFLOEMsSTtrQkFBckJqRyxPIiwiZmlsZSI6Im5ld3Rhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIndlcHktY29tLWNhbGVuZGFyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIndlcHktcmVkdXhcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInFzXCI7XG5cbkBjb25uZWN0KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbmV3dGFzayBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgIFwidmFuLWljb25cIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2ljb24vaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGxcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGwtZ3JvdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwtZ3JvdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLWZpZWxkXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9maWVsZC9pbmRleFwiLFxuICAgICAgXCJ2YW4tYnV0dG9uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9idXR0b24vaW5kZXhcIixcbiAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9wb3B1cC9pbmRleFwiLFxuICAgICAgXCJ2YW4tYWN0aW9uLXNoZWV0XCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9hY3Rpb24tc2hlZXQvaW5kZXhcIixcbiAgICAgIFwidmFuLWRhdGV0aW1lLXBpY2tlclwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vZGF0ZXRpbWUtcGlja2VyL2luZGV4XCIsXG4gICAgICBcInZhbi1waWNrZXJcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL3BpY2tlci9pbmRleFwiXG4gICAgfVxuICB9O1xuICBwcm9wcyA9IHt9O1xuICBkYXRhID0ge1xuICAgIGNhbGVuZGFyaW5mbzoge30sXG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgYXNzaG93OiBmYWxzZSxcbiAgICBzaXRlbGlzdDogW10sXG4gICAgdmVudWVsaXN0OiBbXSxcbiAgICBzaXRlY29sdW1uczogW10sXG4gICAgdmVudWVjb2x1bW5zOiBbXSxcbiAgICBjdXN0b21lcmNvbHVtbnM6IFtdLFxuICAgIGN1cnJlbnREYXRlOiBcIjEyOjAwXCIsXG4gICAgbWluSG91cjogMTAsXG4gICAgbWF4SG91cjogMjAsXG4gICAgc2hvd3BvcDogZmFsc2UsXG4gICAgc2hvd3BrOiBmYWxzZSxcbiAgICBzaG93cGt2OiBmYWxzZSxcbiAgICBzaG93cGNzOiBmYWxzZSxcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgyOTk5LCAxMCwgMSkuZ2V0VGltZSgpLFxuICAgIGN1cnJlbnREYXRlOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBzaXRlbmFtZTogXCJcIixcbiAgICB2ZW51ZW5hbWU6IFwiXCIsXG4gICAgY3VzdG9tZXJuYW1lOiBcIlwiLFxuICAgIHVzZXJpbmZvOiB7fVxuICB9O1xuICBvbkNoYW5nZShldmVudCkge1xuICAgIC8vIGV2ZW50LmRldGFpbCDkuLrlvZPliY3ovpPlhaXnmoTlgLxcbiAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwpO1xuICB9XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgb25Mb2FkKCkge1xuICAgIGxldCB1c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyXCIpO1xuICAgIHRoaXMudXNlcmluZm8gPSB1c2VyO1xuICAgIHRoaXMuZ2V0c2l0ZWxpc3QoKTtcbiAgICB0aGlzLmdldGN1c3RvbWVybGlzdCgpO1xuICB9XG4gIGdldHNpdGVsaXN0KCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvRVJQL1NSTS9TaXRlL1JlYWQvUm93c2AsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcbiAgICAgICAgICB0aGlzLnNpdGVsaXN0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgdGhpcy5zaXRlY29sdW1ucyA9IHJlcy5kYXRhLm1hcChwID0+IHAubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldHZlbnVlbGlzdChpZCkge1xuICAgIGNvbnN0IHBhcmFtID0ge1xuICAgICAgRnVuY3Rpb246IHtcbiAgICAgICAgTmFtZTogXCJieXNpdGVpZFwiLFxuICAgICAgICBBcmdzOiBbaWRdXG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9TUk0vVmVudWUvUmVhZC9Sb3dzPyR7c3RyaW5naWZ5KHBhcmFtLCB7IGFsbG93RG90czogdHJ1ZSAsZW5jb2RlVmFsdWVzT25seTogdHJ1ZX0pfWAsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcbiAgICAgICAgICB0aGlzLnZlbnVlbGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICAgIHRoaXMudmVudWVjb2x1bW5zID0gcmVzLmRhdGEubWFwKHAgPT4gcC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0Y3VzdG9tZXJsaXN0KCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvRVJQL0NSTS9DdXN0b21lci9SZWFkL1Jvd3NgLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzKSB7XG4gICAgICAgICAgdGhpcy5jdXN0b21lcmxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyY29sdW1ucyA9IHJlcy5kYXRhLm1hcChwID0+IHAuZGVmYXVsdE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNhdmUoKSB7XG4gICAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8ucmVjZXB0aW9uSWQgPSB0aGlzLnVzZXJpbmZvLnVzZXJJZDtcblxuICAgICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICAgIGVudGl0eToge1xuICAgICAgICAgIC4uLnRoaXMuY2FsZW5kYXJpbmZvXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhcInBhcmFtXCIsIHBhcmFtKTtcblxuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvQlBNL3Rhc2svQ3JlYXRlPyR7c3RyaW5naWZ5KHBhcmFtLCB7XG4gICAgICAgICAgYWxsb3dEb3RzOiB0cnVlXG4gICAgICAgIH0pfWAsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBpZiAocmVzICYmIHJlcy5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5L+d5a2Y5oiQ5YqfXCIsXG4gICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdlcHkuc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICAgIHVybDogXCJjYWxlbmRhclwiXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogXCLkv53lrZjlpLHotKVcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBvbkNoYW5nZShlKSB7XG4gICAgICBzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG4gICAgICAgIGNhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8ubmFtZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicmVjZXB0aW9uRGF0ZVRpbWVcIjpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5yZWNlcHRpb25EYXRlVGltZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZG9ja2luZ05hbWVcIjpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5kb2NraW5nTmFtZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZG9ja2luZ01vYmlsZVwiOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLmRvY2tpbmdNb2JpbGUgPSBlLmRldGFpbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5jYWxlbmRhcmluZm9cIiwgdGhpcy5jYWxlbmRhcmluZm8pO1xuICAgIH0sXG4gICAgb25zaXRlQ2hhbmdlKGUpIHtcbiAgICAgIGxldCBzaXRlaW5mbyA9IHRoaXMuc2l0ZWxpc3RbZS5kZXRhaWwuaW5kZXhdO1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8uc2l0ZUlkID0gc2l0ZWluZm8uaWQ7XG4gICAgICBsZXQgbmFtZSA9IHNpdGVpbmZvLm5hbWU7XG4gICAgICB0aGlzLnNpdGVuYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuc2hvd3BrID0gZmFsc2U7XG4gICAgICB0aGlzLmdldHZlbnVlbGlzdChzaXRlaW5mby5pZCk7XG4gICAgfSxcbiAgICBvbnZlbnVlQ2hhbmdlKGUpIHtcbiAgICAgIGxldCB2ZW51ZWluZm8gPSB0aGlzLnZlbnVlbGlzdFtlLmRldGFpbC5pbmRleF07XG4gICAgICB0aGlzLmNhbGVuZGFyaW5mby52ZW51ZUlkID0gdmVudWVpbmZvLmlkO1xuICAgICAgbGV0IG5hbWUgPSB2ZW51ZWluZm8ubmFtZTtcbiAgICAgIHRoaXMudmVudWVuYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuc2hvd3BrdiA9IGZhbHNlO1xuICAgIH0sXG4gICAgb25jdXN0b21lckNoYW5nZShlKSB7XG4gICAgICBsZXQgY3VzdG9tZXJpbmZvID0gdGhpcy5jdXN0b21lcmxpc3RbZS5kZXRhaWwuaW5kZXhdO1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8uY3VzdG9tZXJJZCA9IGN1c3RvbWVyaW5mby5pZDtcbiAgICAgIGxldCBuYW1lID0gY3VzdG9tZXJpbmZvLmRlZmF1bHROYW1lO1xuICAgICAgdGhpcy5jdXN0b21lcm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5zaG93cGNzID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbmNvbmZpcm1kcGsoZSkge1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8ucmVjZXB0aW9uRGF0ZVRpbWUgPSBtb21lbnQoZS5kZXRhaWwpLmZvcm1hdChcbiAgICAgICAgXCJZWVlZLU1NLUREIEhIOm1tOnNzXCJcbiAgICAgICk7XG4gICAgICB0aGlzLnNob3dwb3AgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9uYXNmb2N1cygpIHtcbiAgICAgIHRoaXMuc2hvd3BrID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9udmVuZm9jdXMoKSB7XG4gICAgICB0aGlzLnNob3dwa3YgPSB0cnVlO1xuICAgIH0sXG4gICAgb25jc2ZvY3VzKCkge1xuICAgICAgY29uc29sZS5sb2coMSk7XG4gICAgICB0aGlzLnNob3dwY3MgPSB0cnVlO1xuICAgIH0sXG4gICAgb3BlbnRpbWUoKSB7XG4gICAgICB0aGlzLnNob3dwb3AgPSB0cnVlO1xuICAgIH0sXG4gICAgb25DbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvd3BvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93cGsgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd3BrdiA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93cGNzID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIl19