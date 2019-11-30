"use strict";

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
        "van-icon": "../../static/plugIn/icon/index",
        "van-popup": "../../static/plugIn/popup/index",
        "van-cell": "../../static/plugIn/cell/index",
        "van-cell-group": "../../static/plugIn/cell-group/index",
        "van-nav-bar": "../../static/plugIn/nav-bar/index",
        "van-field": "../../static/plugIn/field/index"
      }
    }, _this.props = {}, _this.data = {
      list: [],
      nowtime: null,
      nowtimelist: [],
      show: false,
      calendarinfo: {},
      isview: false,
      isedit: false,
      userlist: []
    }, _this.$repeat = {}, _this.$props = { "singleCalendar": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:list.sync": "list", "color": "#278BFF" }, "viewcalendar": {} }, _this.$events = { "singleCalendar": { "v-on:hanleConfirm": "hanleConfirm", "v-on:handlenextmonth": "handlenextmonth", "v-on:handleprevmonth": "handleprevmonth" } }, _this.components = {
      singleCalendar: _singleCalendar2.default,
      viewcalendar: _viewcalendar2.default
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

            if ((0, _moment2.default)(i.receptionDateTime).format("YYYY-MM-DD") == e.formatDay) {
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
        var start = (0, _moment2.default)(datetime).startOf("month").format("YYYY-MM-DD");
        var end = (0, _moment2.default)(datetime).endOf("month").format("YYYY-MM-DD");
        this.getlist(start, end);
      },
      handleprevmonth: function handleprevmonth(datetime) {
        var start = (0, _moment2.default)(datetime).startOf("month").format("YYYY-MM-DD");
        var end = (0, _moment2.default)(datetime).endOf("month").format("YYYY-MM-DD");
        this.getlist(start, end);
      },
      newricheng: function newricheng() {
        _wepy2.default.navigateTo({
          url: "newtask"
        });
      },
      viewricheng: function viewricheng(e) {
        this.isview = true;
        this.show = true;
        var taskinfo = this.list.filter(function (p) {
          return p.id == e.target.id;
        })[0];
        taskinfo.duijieren = this.userlist.filter(function (p) {
          return p.id == taskinfo.receptionId;
        })[0].realName;

        this.$broadcast("getcalendarinfo", taskinfo);
      },
      onClose: function onClose() {
        this.show = false;
        this.isedit = false;
        this.isview = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(calendar, [{
    key: "onLoad",
    value: function onLoad() {
      this.nowtime = (0, _moment2.default)().format("YYYY-MM-DD");
      this.getlist();
      this.getuserlis();
    }
  }, {
    key: "getlist",
    value: function getlist() {
      var _this2 = this;

      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)().startOf("month").format("YYYY-MM-DD");
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _moment2.default)().endOf("month").format("YYYY-MM-DD");

      var param = {
        Function: {
          Args: ["", "ReceptionDateTime", "Site", "Venue", "Customer"]
        },
        StartDate: start,
        EndDate: end
      };
      var token = wx.getStorageSync("token");

      wx.request({
        url: "http://localhost:5000/ERP/BPM/Task/Read/Query?" + (0, _qs.stringify)(param, {
          allowDots: true,
          encodeValuesOnly: true
        }),
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token
        },
        success: function success(res) {
          if (res && res) {
            _this2.list = res.data.rows;
            _this2.$broadcast("getlist", res.data.rows);
          }
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: "getuserlis",
    value: function getuserlis() {
      var _this3 = this;

      var token = wx.getStorageSync("token");
      wx.request({
        url: "http://localhost:5000/ERP/AVM/User/Read/Rows",
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token
        },
        success: function success(res) {
          if (res && res.data) {
            _this3.userlist = res.data;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbImNhbGVuZGFyIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwicHJvcHMiLCJkYXRhIiwibGlzdCIsIm5vd3RpbWUiLCJub3d0aW1lbGlzdCIsInNob3ciLCJjYWxlbmRhcmluZm8iLCJpc3ZpZXciLCJpc2VkaXQiLCJ1c2VybGlzdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInNpbmdsZUNhbGVuZGFyIiwidmlld2NhbGVuZGFyIiwibWV0aG9kcyIsIm9uQ2xpY2tMZWZ0IiwiaGFubGVDb25maXJtIiwiZSIsImZvcm1hdERheSIsImNmbGlzdCIsImkiLCJyZWNlcHRpb25EYXRlVGltZSIsImZvcm1hdCIsInB1c2giLCJoYW5kbGVuZXh0bW9udGgiLCJkYXRldGltZSIsInN0YXJ0Iiwic3RhcnRPZiIsImVuZCIsImVuZE9mIiwiZ2V0bGlzdCIsImhhbmRsZXByZXZtb250aCIsIm5ld3JpY2hlbmciLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsInZpZXdyaWNoZW5nIiwidGFza2luZm8iLCJmaWx0ZXIiLCJwIiwiaWQiLCJ0YXJnZXQiLCJkdWlqaWVyZW4iLCJyZWNlcHRpb25JZCIsInJlYWxOYW1lIiwiJGJyb2FkY2FzdCIsIm9uQ2xvc2UiLCJnZXR1c2VybGlzIiwicGFyYW0iLCJGdW5jdGlvbiIsIkFyZ3MiLCJTdGFydERhdGUiLCJFbmREYXRlIiwidG9rZW4iLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwicmVxdWVzdCIsImFsbG93RG90cyIsImVuY29kZVZhbHVlc09ubHkiLCJtZXRob2QiLCJoZWFkZXIiLCJBdXRob3JpemF0aW9uIiwic3VjY2VzcyIsInJlcyIsInJvd3MiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImVyciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNB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LHFCQUFXLElBRDBEO0FBRXJFQyw0QkFBa0I7QUFGbUQsU0FBakIsQ0FEN0M7QUFLVEMsZ0JBQVEsTUFMQztBQU1UQyxnQkFBUTtBQUNOLDBCQUFnQixtQ0FEVjtBQUVOQyxxQ0FBeUJSO0FBRm5CLFNBTkM7QUFVVFMsaUJBQVMsc0JBQU87QUFDZCxjQUFJQyxPQUFPQSxHQUFYLEVBQWdCO0FBQ2QsbUJBQUsvRCxJQUFMLEdBQVkrRCxJQUFJaEUsSUFBSixDQUFTaUUsSUFBckI7QUFDQSxtQkFBS25CLFVBQUwsQ0FBZ0IsU0FBaEIsRUFBMkJrQixJQUFJaEUsSUFBSixDQUFTaUUsSUFBcEM7QUFDRDtBQUNGLFNBZlE7QUFnQlRDLGNBQU0sbUJBQU87QUFDWEMsa0JBQVFDLEdBQVIsQ0FBWUMsR0FBWjtBQUNEO0FBbEJRLE9BQVg7QUFvQkQ7OztpQ0FDWTtBQUFBOztBQUNYLFVBQUlmLFFBQVFDLEdBQUdDLGNBQUgsQ0FBa0IsT0FBbEIsQ0FBWjtBQUNBRCxTQUFHRSxPQUFILENBQVc7QUFDVHJCLDJEQURTO0FBRVR3QixnQkFBUSxNQUZDO0FBR1RDLGdCQUFRO0FBQ04sMEJBQWdCLG1DQURWO0FBRU5DLHFDQUF5QlI7QUFGbkIsU0FIQztBQU9UUyxpQkFBUyxzQkFBTztBQUNkLGNBQUlDLE9BQU9BLElBQUloRSxJQUFmLEVBQXFCO0FBQ25CLG1CQUFLUSxRQUFMLEdBQWdCd0QsSUFBSWhFLElBQXBCO0FBQ0Q7QUFDRixTQVhRO0FBWVRrRSxjQUFNLG1CQUFPO0FBQ1hDLGtCQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDRDtBQWRRLE9BQVg7QUFnQkQ7Ozs7RUExRm1DbkMsZUFBS29DLEk7a0JBQXRCMUUsUSIsImZpbGUiOiJjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwid2VweS1jb20tY2FsZW5kYXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuaW1wb3J0IHNpbmdsZUNhbGVuZGFyIGZyb20gXCJAL2NvbXBvbmVudHMvc2luZ2xlQ2FsZW5kYXJcIjtcbmltcG9ydCB2aWV3Y2FsZW5kYXIgZnJvbSBcIkAvY29tcG9uZW50cy92aWV3Y2FsZW5kYXJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInFzXCI7XG5cbkBjb25uZWN0KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FsZW5kYXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICBcInZhbi1pY29uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9pY29uL2luZGV4XCIsXG4gICAgICBcInZhbi1wb3B1cFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vcG9wdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGxcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGwtZ3JvdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwtZ3JvdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL25hdi1iYXIvaW5kZXhcIixcbiAgICAgIFwidmFuLWZpZWxkXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9maWVsZC9pbmRleFwiXG4gICAgfVxuICB9O1xuICBwcm9wcyA9IHt9O1xuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIG5vd3RpbWU6IG51bGwsXG4gICAgbm93dGltZWxpc3Q6IFtdLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIGNhbGVuZGFyaW5mbzoge30sXG4gICAgaXN2aWV3OiBmYWxzZSxcbiAgICBpc2VkaXQ6IGZhbHNlLFxuICAgIHVzZXJsaXN0OiBbXVxuICB9O1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wic2luZ2xlQ2FsZW5kYXJcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCIsXCJjb2xvclwiOlwiIzI3OEJGRlwifSxcInZpZXdjYWxlbmRhclwiOnt9fTtcclxuJGV2ZW50cyA9IHtcInNpbmdsZUNhbGVuZGFyXCI6e1widi1vbjpoYW5sZUNvbmZpcm1cIjpcImhhbmxlQ29uZmlybVwiLFwidi1vbjpoYW5kbGVuZXh0bW9udGhcIjpcImhhbmRsZW5leHRtb250aFwiLFwidi1vbjpoYW5kbGVwcmV2bW9udGhcIjpcImhhbmRsZXByZXZtb250aFwifX07XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHNpbmdsZUNhbGVuZGFyLFxuICAgIHZpZXdjYWxlbmRhclxuICB9O1xuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5ub3d0aW1lID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICB0aGlzLmdldGxpc3QoKTtcbiAgICB0aGlzLmdldHVzZXJsaXMoKTtcbiAgfVxuICBnZXRsaXN0KFxuICAgIHN0YXJ0ID0gbW9tZW50KClcbiAgICAgIC5zdGFydE9mKFwibW9udGhcIilcbiAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgIGVuZCA9IG1vbWVudCgpXG4gICAgICAuZW5kT2YoXCJtb250aFwiKVxuICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIilcbiAgKSB7XG4gICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICBGdW5jdGlvbjoge1xuICAgICAgICBBcmdzOiBbXCJcIiwgXCJSZWNlcHRpb25EYXRlVGltZVwiLCBcIlNpdGVcIiwgXCJWZW51ZVwiLCBcIkN1c3RvbWVyXCJdXG4gICAgICB9LFxuICAgICAgU3RhcnREYXRlOiBzdGFydCxcbiAgICAgIEVuZERhdGU6IGVuZFxuICAgIH07XG4gICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKTtcblxuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9CUE0vVGFzay9SZWFkL1F1ZXJ5PyR7c3RyaW5naWZ5KHBhcmFtLCB7XG4gICAgICAgIGFsbG93RG90czogdHJ1ZSxcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZVxuICAgICAgfSl9YCxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzICYmIHJlcykge1xuICAgICAgICAgIHRoaXMubGlzdCA9IHJlcy5kYXRhLnJvd3M7XG4gICAgICAgICAgdGhpcy4kYnJvYWRjYXN0KFwiZ2V0bGlzdFwiLCByZXMuZGF0YS5yb3dzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0dXNlcmxpcygpIHtcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9BVk0vVXNlci9SZWFkL1Jvd3NgLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcbiAgICAgICAgICB0aGlzLnVzZXJsaXN0ID0gcmVzLmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgb25DbGlja0xlZnQoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNlZGl0ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzdmlldyA9IGZhbHNlO1xuICAgIH0sXG4gICAgaGFubGVDb25maXJtKGUpIHtcbiAgICAgIHRoaXMubm93dGltZSA9IGUuZm9ybWF0RGF5O1xuICAgICAgbGV0IGNmbGlzdCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLmxpc3QpIHtcbiAgICAgICAgaWYgKG1vbWVudChpLnJlY2VwdGlvbkRhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpID09IGUuZm9ybWF0RGF5KSB7XG4gICAgICAgICAgY2ZsaXN0LnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubm93dGltZWxpc3QgPSBjZmxpc3Q7XG4gICAgfSxcbiAgICBoYW5kbGVuZXh0bW9udGgoZGF0ZXRpbWUpIHtcbiAgICAgIGxldCBzdGFydCA9IG1vbWVudChkYXRldGltZSlcbiAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxuICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIGxldCBlbmQgPSBtb21lbnQoZGF0ZXRpbWUpXG4gICAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgdGhpcy5nZXRsaXN0KHN0YXJ0LCBlbmQpO1xuICAgIH0sXG4gICAgaGFuZGxlcHJldm1vbnRoKGRhdGV0aW1lKSB7XG4gICAgICBsZXQgc3RhcnQgPSBtb21lbnQoZGF0ZXRpbWUpXG4gICAgICAgIC5zdGFydE9mKFwibW9udGhcIilcbiAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICBsZXQgZW5kID0gbW9tZW50KGRhdGV0aW1lKVxuICAgICAgICAuZW5kT2YoXCJtb250aFwiKVxuICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIHRoaXMuZ2V0bGlzdChzdGFydCwgZW5kKTtcbiAgICB9LFxuICAgIG5ld3JpY2hlbmcoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IFwibmV3dGFza1wiXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHZpZXdyaWNoZW5nKGUpIHtcbiAgICAgIHRoaXMuaXN2aWV3ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICBsZXQgdGFza2luZm8gPSB0aGlzLmxpc3QuZmlsdGVyKHAgPT4gcC5pZCA9PSBlLnRhcmdldC5pZClbMF07XG4gICAgICB0YXNraW5mby5kdWlqaWVyZW4gPSB0aGlzLnVzZXJsaXN0LmZpbHRlcihwPT5wLmlkPT10YXNraW5mby5yZWNlcHRpb25JZClbMF0ucmVhbE5hbWVcbiAgXG4gICAgICB0aGlzLiRicm9hZGNhc3QoXG4gICAgICAgIFwiZ2V0Y2FsZW5kYXJpbmZvXCIsXG4gICAgICAgdGFza2luZm9cbiAgICAgICk7XG4gICAgfSxcbiAgICBvbkNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzZWRpdCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iXX0=