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
        // console.log("param", param);

        wx.request({
          url: "http://211.149.163.211:4000/ERP/BPM/task/Create?" + (0, _qs.stringify)(param, {
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
        //   console.log("this.calendarinfo", this.calendarinfo);
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
        //   console.log(1);
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
      //  console.log(event.detail);
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
        url: "http://211.149.163.211:4000/ERP/SRM/Site/Read/Rows",
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
        url: "http://211.149.163.211:4000/ERP/SRM/Venue/Read/Rows?" + (0, _qs.stringify)(param, { allowDots: true, encodeValuesOnly: true }),
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
        url: "http://211.149.163.211:4000/ERP/CRM/Customer/Read/Rows",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3Rhc2suanMiXSwibmFtZXMiOlsibmV3dGFzayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJwcm9wcyIsImRhdGEiLCJjYWxlbmRhcmluZm8iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYXNzaG93Iiwic2l0ZWxpc3QiLCJ2ZW51ZWxpc3QiLCJzaXRlY29sdW1ucyIsInZlbnVlY29sdW1ucyIsImN1c3RvbWVyY29sdW1ucyIsImN1cnJlbnREYXRlIiwibWluSG91ciIsIm1heEhvdXIiLCJzaG93cG9wIiwic2hvd3BrIiwic2hvd3BrdiIsInNob3dwY3MiLCJtaW5EYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJtYXhEYXRlIiwiY29tcG9uZW50cyIsIm1ldGhvZHMiLCJzYXZlIiwidG9rZW4iLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwicmVjZXB0aW9uSWQiLCJ1c2VyaW5mbyIsInVzZXJJZCIsInBhcmFtIiwiZW50aXR5IiwicmVxdWVzdCIsInVybCIsImFsbG93RG90cyIsIm1ldGhvZCIsImhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJzdWNjZXNzIiwicmVzIiwic3RhdHVzQ29kZSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwid2VweSIsInN3aXRjaFRhYiIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJuYW1lIiwiZGV0YWlsIiwicmVjZXB0aW9uRGF0ZVRpbWUiLCJkb2NraW5nTmFtZSIsImRvY2tpbmdNb2JpbGUiLCJvbnNpdGVDaGFuZ2UiLCJzaXRlaW5mbyIsImluZGV4Iiwic2l0ZUlkIiwic2l0ZW5hbWUiLCJnZXR2ZW51ZWxpc3QiLCJvbnZlbnVlQ2hhbmdlIiwidmVudWVpbmZvIiwidmVudWVJZCIsInZlbnVlbmFtZSIsIm9uY3VzdG9tZXJDaGFuZ2UiLCJjdXN0b21lcmluZm8iLCJjdXN0b21lcmxpc3QiLCJjdXN0b21lcklkIiwiZGVmYXVsdE5hbWUiLCJjdXN0b21lcm5hbWUiLCJvbmNvbmZpcm1kcGsiLCJmb3JtYXQiLCJvbmFzZm9jdXMiLCJvbnZlbmZvY3VzIiwib25jc2ZvY3VzIiwib3BlbnRpbWUiLCJvbkNsb3NlIiwiZXZlbnQiLCJ1c2VyIiwiZ2V0c2l0ZWxpc3QiLCJnZXRjdXN0b21lcmxpc3QiLCJtYXAiLCJwIiwiRnVuY3Rpb24iLCJOYW1lIiwiQXJncyIsImVuY29kZVZhbHVlc09ubHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdxQkEsTyxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7O3dMQUVDQyxNLEdBQVM7QUFDTkMsOEJBQXdCLFFBRGxCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLGdDQURHO0FBRWYsb0JBQVksZ0NBRkc7QUFHZiwwQkFBa0Isc0NBSEg7QUFJZixxQkFBYSxpQ0FKRTtBQUtmLHNCQUFjLGtDQUxDO0FBTWYscUJBQWEsaUNBTkU7QUFPZiw0QkFBb0Isd0NBUEw7QUFRZiwrQkFBdUIsMkNBUlI7QUFTZixzQkFBYztBQVRDO0FBRlYsSyxRQWNUQyxLLEdBQVEsRSxRQUNSQyxJO0FBQ0VDLG9CQUFjLEU7QUFDZEMsZ0JBQVUsRTtBQUNWQyxnQkFBVSxFO0FBQ1ZDLGNBQVEsSztBQUNSQyxnQkFBVSxFO0FBQ1ZDLGlCQUFXLEU7QUFDWEMsbUJBQWEsRTtBQUNiQyxvQkFBYyxFO0FBQ2RDLHVCQUFpQixFO0FBQ2pCQyxtQkFBYSxPO0FBQ2JDLGVBQVMsRTtBQUNUQyxlQUFTLEU7QUFDVEMsZUFBUyxLO0FBQ1RDLGNBQVEsSztBQUNSQyxlQUFTLEs7QUFDVEMsZUFBUyxLO0FBQ1RDLGVBQVMsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEU7QUFDVEMsZUFBUyxJQUFJRixJQUFKLENBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUIsQ0FBbkIsRUFBc0JDLE9BQXRCO2tE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O0FBQUEsYUFBYixDQUFwQjtBQUNEO0FBQ0YsU0FaUTtBQWFUUixjQUFNLG1CQUFPO0FBQ1hDLGtCQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDRDtBQWZRLE9BQVg7QUFpQkQ7OztzQ0FDaUI7QUFBQTs7QUFDaEIsVUFBSTFCLFFBQVFDLEdBQUdDLGNBQUgsQ0FBa0IsT0FBbEIsQ0FBWjtBQUNBRCxTQUFHTyxPQUFILENBQVc7QUFDVEMscUVBRFM7QUFFVEUsZ0JBQVEsTUFGQztBQUdUQyxnQkFBUTtBQUNOLDBCQUFnQixtQ0FEVjtBQUVOQyxxQ0FBeUJiO0FBRm5CLFNBSEM7QUFPVGMsaUJBQVMsc0JBQU87QUFDZCxjQUFJQyxPQUFPQSxHQUFYLEVBQWdCO0FBQ2QsbUJBQUtpQyxZQUFMLEdBQW9CakMsSUFBSXZDLElBQXhCO0FBQ0EsbUJBQUtTLGVBQUwsR0FBdUI4QixJQUFJdkMsSUFBSixDQUFTdUYsR0FBVCxDQUFhO0FBQUEscUJBQUtDLEVBQUVkLFdBQVA7QUFBQSxhQUFiLENBQXZCO0FBQ0Q7QUFDRixTQVpRO0FBYVQzQixjQUFNLG1CQUFPO0FBQ1hDLGtCQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDRDtBQWZRLE9BQVg7QUFpQkQ7Ozs7RUFySGtDTCxlQUFLZ0QsSTtrQkFBckJsRyxPIiwiZmlsZSI6Im5ld3Rhc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIndlcHktY29tLWNhbGVuZGFyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIndlcHktcmVkdXhcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInFzXCI7XG5cbkBjb25uZWN0KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbmV3dGFzayBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aXpeeoi+euoeeQhuezu+e7nycsXG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICBcInZhbi1pY29uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9pY29uL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsLWdyb3VwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsLWdyb3VwL2luZGV4XCIsXG4gICAgICBcInZhbi1maWVsZFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vZmllbGQvaW5kZXhcIixcbiAgICAgIFwidmFuLWJ1dHRvblwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vYnV0dG9uL2luZGV4XCIsXG4gICAgICBcInZhbi1wb3B1cFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vcG9wdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLWFjdGlvbi1zaGVldFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vYWN0aW9uLXNoZWV0L2luZGV4XCIsXG4gICAgICBcInZhbi1kYXRldGltZS1waWNrZXJcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2RhdGV0aW1lLXBpY2tlci9pbmRleFwiLFxuICAgICAgXCJ2YW4tcGlja2VyXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9waWNrZXIvaW5kZXhcIlxuICAgIH1cbiAgfTtcbiAgcHJvcHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBjYWxlbmRhcmluZm86IHt9LFxuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGFzc2hvdzogZmFsc2UsXG4gICAgc2l0ZWxpc3Q6IFtdLFxuICAgIHZlbnVlbGlzdDogW10sXG4gICAgc2l0ZWNvbHVtbnM6IFtdLFxuICAgIHZlbnVlY29sdW1uczogW10sXG4gICAgY3VzdG9tZXJjb2x1bW5zOiBbXSxcbiAgICBjdXJyZW50RGF0ZTogXCIxMjowMFwiLFxuICAgIG1pbkhvdXI6IDEwLFxuICAgIG1heEhvdXI6IDIwLFxuICAgIHNob3dwb3A6IGZhbHNlLFxuICAgIHNob3dwazogZmFsc2UsXG4gICAgc2hvd3BrdjogZmFsc2UsXG4gICAgc2hvd3BjczogZmFsc2UsXG4gICAgbWluRGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoMjk5OSwgMTAsIDEpLmdldFRpbWUoKSxcbiAgICBjdXJyZW50RGF0ZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgc2l0ZW5hbWU6IFwiXCIsXG4gICAgdmVudWVuYW1lOiBcIlwiLFxuICAgIGN1c3RvbWVybmFtZTogXCJcIixcbiAgICB1c2VyaW5mbzoge31cbiAgfTtcbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAvLyBldmVudC5kZXRhaWwg5Li65b2T5YmN6L6T5YWl55qE5YC8XG4gIC8vICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwpO1xuICB9XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgb25Mb2FkKCkge1xuICAgIGxldCB1c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyXCIpO1xuICAgIHRoaXMudXNlcmluZm8gPSB1c2VyO1xuICAgIHRoaXMuZ2V0c2l0ZWxpc3QoKTtcbiAgICB0aGlzLmdldGN1c3RvbWVybGlzdCgpO1xuICB9XG4gIGdldHNpdGVsaXN0KCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwOi8vMjExLjE0OS4xNjMuMjExOjQwMDAvRVJQL1NSTS9TaXRlL1JlYWQvUm93c2AsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcbiAgICAgICAgICB0aGlzLnNpdGVsaXN0ID0gcmVzLmRhdGE7XG4gICAgICAgICAgdGhpcy5zaXRlY29sdW1ucyA9IHJlcy5kYXRhLm1hcChwID0+IHAubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldHZlbnVlbGlzdChpZCkge1xuICAgIGNvbnN0IHBhcmFtID0ge1xuICAgICAgRnVuY3Rpb246IHtcbiAgICAgICAgTmFtZTogXCJieXNpdGVpZFwiLFxuICAgICAgICBBcmdzOiBbaWRdXG4gICAgICB9XG4gICAgfTtcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovLzIxMS4xNDkuMTYzLjIxMTo0MDAwL0VSUC9TUk0vVmVudWUvUmVhZC9Sb3dzPyR7c3RyaW5naWZ5KHBhcmFtLCB7IGFsbG93RG90czogdHJ1ZSAsZW5jb2RlVmFsdWVzT25seTogdHJ1ZX0pfWAsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcbiAgICAgICAgICB0aGlzLnZlbnVlbGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICAgIHRoaXMudmVudWVjb2x1bW5zID0gcmVzLmRhdGEubWFwKHAgPT4gcC5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0Y3VzdG9tZXJsaXN0KCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwOi8vMjExLjE0OS4xNjMuMjExOjQwMDAvRVJQL0NSTS9DdXN0b21lci9SZWFkL1Jvd3NgLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzKSB7XG4gICAgICAgICAgdGhpcy5jdXN0b21lcmxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgICB0aGlzLmN1c3RvbWVyY29sdW1ucyA9IHJlcy5kYXRhLm1hcChwID0+IHAuZGVmYXVsdE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNhdmUoKSB7XG4gICAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8ucmVjZXB0aW9uSWQgPSB0aGlzLnVzZXJpbmZvLnVzZXJJZDtcblxuICAgICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICAgIGVudGl0eToge1xuICAgICAgICAgIC4uLnRoaXMuY2FsZW5kYXJpbmZvXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgIC8vIGNvbnNvbGUubG9nKFwicGFyYW1cIiwgcGFyYW0pO1xuXG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBgaHR0cDovLzIxMS4xNDkuMTYzLjIxMTo0MDAwL0VSUC9CUE0vdGFzay9DcmVhdGU/JHtzdHJpbmdpZnkocGFyYW0sIHtcbiAgICAgICAgICBhbGxvd0RvdHM6IHRydWVcbiAgICAgICAgfSl9YCxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogXCLkv53lrZjmiJDlip9cIixcbiAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2VweS5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICAgICAgdXJsOiBcImNhbGVuZGFyXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIuS/neWtmOWksei0pVwiLFxuICAgICAgICAgICAgICBpY29uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlKGUpIHtcbiAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5uYW1lID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyZWNlcHRpb25EYXRlVGltZVwiOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLnJlY2VwdGlvbkRhdGVUaW1lID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkb2NraW5nTmFtZVwiOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLmRvY2tpbmdOYW1lID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkb2NraW5nTW9iaWxlXCI6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8uZG9ja2luZ01vYmlsZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgLy8gICBjb25zb2xlLmxvZyhcInRoaXMuY2FsZW5kYXJpbmZvXCIsIHRoaXMuY2FsZW5kYXJpbmZvKTtcbiAgICB9LFxuICAgIG9uc2l0ZUNoYW5nZShlKSB7XG4gICAgICBsZXQgc2l0ZWluZm8gPSB0aGlzLnNpdGVsaXN0W2UuZGV0YWlsLmluZGV4XTtcbiAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLnNpdGVJZCA9IHNpdGVpbmZvLmlkO1xuICAgICAgbGV0IG5hbWUgPSBzaXRlaW5mby5uYW1lO1xuICAgICAgdGhpcy5zaXRlbmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLnNob3dwayA9IGZhbHNlO1xuICAgICAgdGhpcy5nZXR2ZW51ZWxpc3Qoc2l0ZWluZm8uaWQpO1xuICAgIH0sXG4gICAgb252ZW51ZUNoYW5nZShlKSB7XG4gICAgICBsZXQgdmVudWVpbmZvID0gdGhpcy52ZW51ZWxpc3RbZS5kZXRhaWwuaW5kZXhdO1xuICAgICAgdGhpcy5jYWxlbmRhcmluZm8udmVudWVJZCA9IHZlbnVlaW5mby5pZDtcbiAgICAgIGxldCBuYW1lID0gdmVudWVpbmZvLm5hbWU7XG4gICAgICB0aGlzLnZlbnVlbmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLnNob3dwa3YgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9uY3VzdG9tZXJDaGFuZ2UoZSkge1xuICAgICAgbGV0IGN1c3RvbWVyaW5mbyA9IHRoaXMuY3VzdG9tZXJsaXN0W2UuZGV0YWlsLmluZGV4XTtcbiAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLmN1c3RvbWVySWQgPSBjdXN0b21lcmluZm8uaWQ7XG4gICAgICBsZXQgbmFtZSA9IGN1c3RvbWVyaW5mby5kZWZhdWx0TmFtZTtcbiAgICAgIHRoaXMuY3VzdG9tZXJuYW1lID0gbmFtZTtcbiAgICAgIHRoaXMuc2hvd3BjcyA9IGZhbHNlO1xuICAgIH0sXG4gICAgb25jb25maXJtZHBrKGUpIHtcbiAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLnJlY2VwdGlvbkRhdGVUaW1lID0gbW9tZW50KGUuZGV0YWlsKS5mb3JtYXQoXG4gICAgICAgIFwiWVlZWS1NTS1ERCBISDptbTpzc1wiXG4gICAgICApO1xuICAgICAgdGhpcy5zaG93cG9wID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbmFzZm9jdXMoKSB7XG4gICAgICB0aGlzLnNob3dwayA9IHRydWU7XG4gICAgfSxcbiAgICBvbnZlbmZvY3VzKCkge1xuICAgICAgdGhpcy5zaG93cGt2ID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9uY3Nmb2N1cygpIHtcbiAgIC8vICAgY29uc29sZS5sb2coMSk7XG4gICAgICB0aGlzLnNob3dwY3MgPSB0cnVlO1xuICAgIH0sXG4gICAgb3BlbnRpbWUoKSB7XG4gICAgICB0aGlzLnNob3dwb3AgPSB0cnVlO1xuICAgIH0sXG4gICAgb25DbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvd3BvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93cGsgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd3BrdiA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93cGNzID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIl19