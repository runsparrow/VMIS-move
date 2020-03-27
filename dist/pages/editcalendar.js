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
    }, _this.props = {}, _this.data = {
      calendarinfo: {},
      username: "",
      password: "",
      asshow: false,
      columns: [],
      currentDate: "12:00",
      minHour: 10,
      maxHour: 20,
      showpop: false,
      showpk: false,
      userinfo: {}
    }, _this.components = {}, _this.methods = {
      aaa: function aaa() {
        console.log(1), console.log("calendarinfo", this.calendarinfo);
      },
      onChange: function onChange(e) {
        switch (e.target.id) {
          case "name":
            this.calendarinfo.name = e.detail;
            break;
          case "siteId":
            this.calendarinfo.siteId = e.detail;
            break;
          case "venueId":
            this.calendarinfo.venueId = e.detail;
            break;
          case "receptionDateTime":
            this.calendarinfo.receptionDateTime = e.detail;
            break;
          case "receptionId":
            this.calendarinfo.receptionId = e.detail;
            break;
          case "customerId":
            this.calendarinfo.customerId = e.detail;
            break;
          case "dockingName":
            this.calendarinfo.dockingName = e.detail;
            break;
          case "dockingMobile":
            this.calendarinfo.dockingMobile = e.detail;
            break;
        }
      },
      onasfocus: function onasfocus() {
        this.showpk = true;
        console.log(" this.showpk", this.showpk);
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
    key: "onChange",
    value: function onChange(event) {
      // event.detail 为当前输入的值
      console.log(event.detail);
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      this.getsitelist();
      this.currentDate = new Date().getTime();
    }
  }, {
    key: "getsitelist",
    value: function getsitelist() {
      var user = wx.getStorageSync("user");
      this.userinfo = user;
      console.log(" this.userinfo", this.userinfo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRjYWxlbmRhci5qcyJdLCJuYW1lcyI6WyJlZGl0Y2FsZW5kYXIiLCJjb25maWciLCJ1c2luZ0NvbXBvbmVudHMiLCJwcm9wcyIsImRhdGEiLCJjYWxlbmRhcmluZm8iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYXNzaG93IiwiY29sdW1ucyIsImN1cnJlbnREYXRlIiwibWluSG91ciIsIm1heEhvdXIiLCJzaG93cG9wIiwic2hvd3BrIiwidXNlcmluZm8iLCJjb21wb25lbnRzIiwibWV0aG9kcyIsImFhYSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpZCIsIm5hbWUiLCJkZXRhaWwiLCJzaXRlSWQiLCJ2ZW51ZUlkIiwicmVjZXB0aW9uRGF0ZVRpbWUiLCJyZWNlcHRpb25JZCIsImN1c3RvbWVySWQiLCJkb2NraW5nTmFtZSIsImRvY2tpbmdNb2JpbGUiLCJvbmFzZm9jdXMiLCJvcGVudGltZSIsIm9uQ2xvc2UiLCJvbklucHV0IiwiZXZlbnQiLCJzZXREYXRhIiwiZ2V0c2l0ZWxpc3QiLCJEYXRlIiwiZ2V0VGltZSIsInVzZXIiLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwidG9rZW4iLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsInN1Y2Nlc3MiLCJyZXMiLCJyb3dzIiwiZmFpbCIsImVyciIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxZLFdBRHBCLHdCQUFRLEVBQVIsQzs7Ozs7Ozs7Ozs7Ozs7a01BRUNDLE0sR0FBUztBQUNQQyx1QkFBaUI7QUFDZixvQkFBWSxnQ0FERztBQUVmLG9CQUFZLGdDQUZHO0FBR2YsMEJBQWtCLHNDQUhIO0FBSWYscUJBQWEsaUNBSkU7QUFLZixzQkFBYyxrQ0FMQztBQU1mLHFCQUFhLGlDQU5FO0FBT2YsNEJBQW9CLHdDQVBM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cUNBQXlCTDtBQUZuQixTQUhDO0FBT1RNLGlCQUFTLHNCQUFPO0FBQ2QsY0FBSUMsT0FBT0EsR0FBWCxFQUFnQjtBQUNkbEMsb0JBQVFDLEdBQVIsQ0FBWWlDLElBQUlqRCxJQUFKLENBQVNrRCxJQUFyQjtBQUNBO0FBQ0Q7QUFDRixTQVpRO0FBYVRDLGNBQU0sbUJBQU87QUFDWHBDLGtCQUFRQyxHQUFSLENBQVlvQyxHQUFaO0FBQ0Q7QUFmUSxPQUFYO0FBaUJEOzs7O0VBM0R1Q0MsZUFBS0MsSTtrQkFBMUIxRCxZIiwiZmlsZSI6ImVkaXRjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwid2VweS1jb20tY2FsZW5kYXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwicXNcIjtcblxuQGNvbm5lY3Qoe30pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBlZGl0Y2FsZW5kYXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICBcInZhbi1pY29uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9pY29uL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsLWdyb3VwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsLWdyb3VwL2luZGV4XCIsXG4gICAgICBcInZhbi1maWVsZFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vZmllbGQvaW5kZXhcIixcbiAgICAgIFwidmFuLWJ1dHRvblwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vYnV0dG9uL2luZGV4XCIsXG4gICAgICBcInZhbi1wb3B1cFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vcG9wdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLWFjdGlvbi1zaGVldFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vYWN0aW9uLXNoZWV0L2luZGV4XCIsXG4gICAgICBcInZhbi1kYXRldGltZS1waWNrZXJcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2RhdGV0aW1lLXBpY2tlci9pbmRleFwiLFxuICAgICAgXCJ2YW4tcGlja2VyXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9waWNrZXIvaW5kZXhcIlxuICAgIH1cbiAgfTtcbiAgcHJvcHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBjYWxlbmRhcmluZm86IHt9LFxuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIGFzc2hvdzogZmFsc2UsXG4gICAgY29sdW1uczogW10sXG4gICAgY3VycmVudERhdGU6IFwiMTI6MDBcIixcbiAgICBtaW5Ib3VyOiAxMCxcbiAgICBtYXhIb3VyOiAyMCxcbiAgICBzaG93cG9wOiBmYWxzZSxcbiAgICBzaG93cGs6IGZhbHNlLFxuICAgIHVzZXJpbmZvOiB7fVxuICB9O1xuICBvbkNoYW5nZShldmVudCkge1xuICAgIC8vIGV2ZW50LmRldGFpbCDkuLrlvZPliY3ovpPlhaXnmoTlgLxcbiAgICBjb25zb2xlLmxvZyhldmVudC5kZXRhaWwpO1xuICB9XG4gIGNvbXBvbmVudHMgPSB7fTtcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuZ2V0c2l0ZWxpc3QoKTtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIH1cbiAgZ2V0c2l0ZWxpc3QoKSB7XG4gICAgbGV0IHVzZXIgPSB3eC5nZXRTdG9yYWdlU3luYyhcInVzZXJcIik7XG4gICAgdGhpcy51c2VyaW5mbyA9IHVzZXI7XG4gICAgY29uc29sZS5sb2coXCIgdGhpcy51c2VyaW5mb1wiLCB0aGlzLnVzZXJpbmZvKTtcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9TUk0vU2l0ZS9SZWFkL1Jvd3NgLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEucm93cyk7XG4gICAgICAgICAgLy90aGlzLmNvbHVtbnMgPSByZXMuZGF0YS5yb3dzLm1hcChwID0+IHAubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYWFhKCkge1xuICAgICAgY29uc29sZS5sb2coMSksIGNvbnNvbGUubG9nKFwiY2FsZW5kYXJpbmZvXCIsIHRoaXMuY2FsZW5kYXJpbmZvKTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlKGUpIHtcbiAgICAgIHN3aXRjaCAoZS50YXJnZXQuaWQpIHtcbiAgICAgICAgY2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5uYW1lID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzaXRlSWRcIjpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5zaXRlSWQgPSBlLmRldGFpbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInZlbnVlSWRcIjpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby52ZW51ZUlkID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyZWNlcHRpb25EYXRlVGltZVwiOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLnJlY2VwdGlvbkRhdGVUaW1lID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyZWNlcHRpb25JZFwiOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLnJlY2VwdGlvbklkID0gZS5kZXRhaWw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjdXN0b21lcklkXCI6XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcmluZm8uY3VzdG9tZXJJZCA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZG9ja2luZ05hbWVcIjpcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyaW5mby5kb2NraW5nTmFtZSA9IGUuZGV0YWlsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZG9ja2luZ01vYmlsZVwiOlxuICAgICAgICAgIHRoaXMuY2FsZW5kYXJpbmZvLmRvY2tpbmdNb2JpbGUgPSBlLmRldGFpbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uYXNmb2N1cygpIHtcbiAgICAgIHRoaXMuc2hvd3BrID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKFwiIHRoaXMuc2hvd3BrXCIsIHRoaXMuc2hvd3BrKTtcbiAgICB9LFxuICAgIG9wZW50aW1lKCkge1xuICAgICAgdGhpcy5zaG93cG9wID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICB0aGlzLnNob3dwb3AgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2hvd3BrID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbklucHV0KGV2ZW50KSB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBjdXJyZW50RGF0ZTogZXZlbnQuZGV0YWlsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG4iXX0=