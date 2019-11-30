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
      isedit: false
    }, _this.$repeat = {}, _this.$props = { "singleCalendar": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:list.sync": "list", "color": "#278BFF" }, "viewcalendar": { "v-bind:calendarinfo.sync": "calendarinfo" } }, _this.$events = { "singleCalendar": { "v-on:hanleConfirm": "hanleConfirm", "v-on:handlenextmonth": "handlenextmonth", "v-on:handleprevmonth": "handleprevmonth" } }, _this.components = {
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
        this.calendarinfo = this.list.map(function (p) {
          return p.id == e.target.id;
        });
        this.show = true;
        this.$broadcast("getcalendarinfo", this.list.filter(function (p) {
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
    key: "onLoad",
    value: function onLoad() {
      this.nowtime = (0, _moment2.default)().format("YYYY-MM-DD");
      this.getlist();
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
  }]);

  return calendar;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(calendar , 'pages/calendar'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbImNhbGVuZGFyIiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwicHJvcHMiLCJkYXRhIiwibGlzdCIsIm5vd3RpbWUiLCJub3d0aW1lbGlzdCIsInNob3ciLCJjYWxlbmRhcmluZm8iLCJpc3ZpZXciLCJpc2VkaXQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzaW5nbGVDYWxlbmRhciIsInZpZXdjYWxlbmRhciIsIm1ldGhvZHMiLCJvbkNsaWNrTGVmdCIsImhhbmxlQ29uZmlybSIsImUiLCJmb3JtYXREYXkiLCJjZmxpc3QiLCJpIiwicmVjZXB0aW9uRGF0ZVRpbWUiLCJmb3JtYXQiLCJwdXNoIiwiaGFuZGxlbmV4dG1vbnRoIiwiZGF0ZXRpbWUiLCJzdGFydCIsInN0YXJ0T2YiLCJlbmQiLCJlbmRPZiIsImdldGxpc3QiLCJoYW5kbGVwcmV2bW9udGgiLCJuZXdyaWNoZW5nIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ2aWV3cmljaGVuZyIsIm1hcCIsInAiLCJpZCIsInRhcmdldCIsIiRicm9hZGNhc3QiLCJmaWx0ZXIiLCJvbkNsb3NlIiwicGFyYW0iLCJGdW5jdGlvbiIsIkFyZ3MiLCJTdGFydERhdGUiLCJFbmREYXRlIiwidG9rZW4iLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwicmVxdWVzdCIsImFsbG93RG90cyIsImVuY29kZVZhbHVlc09ubHkiLCJtZXRob2QiLCJoZWFkZXIiLCJBdXRob3JpemF0aW9uIiwic3VjY2VzcyIsInJlcyIsInJvd3MiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImVyciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR3FCQSxRLFdBRHBCLHdCQUFRLEVBQVIsQzs7Ozs7Ozs7Ozs7Ozs7MExBRUNDLE0sR0FBUztB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QUFVVFMsaUJBQVMsc0JBQU87QUFDZCxjQUFJQyxPQUFPQSxHQUFYLEVBQWdCO0FBQ2QsbUJBQUsxRCxJQUFMLEdBQVkwRCxJQUFJM0QsSUFBSixDQUFTNEQsSUFBckI7QUFDQSxtQkFBS25CLFVBQUwsQ0FBZ0IsU0FBaEIsRUFBMkJrQixJQUFJM0QsSUFBSixDQUFTNEQsSUFBcEM7QUFDRDtBQUNGLFNBZlE7QUFnQlRDLGNBQU0sbUJBQU87QUFDWEMsa0JBQVFDLEdBQVIsQ0FBWUMsR0FBWjtBQUNEO0FBbEJRLE9BQVg7QUFvQkQ7Ozs7RUFyRW1DL0IsZUFBS2dDLEk7a0JBQXRCckUsUSIsImZpbGUiOiJjYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBDYWxlbmRhciBmcm9tIFwid2VweS1jb20tY2FsZW5kYXJcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuaW1wb3J0IHNpbmdsZUNhbGVuZGFyIGZyb20gXCJAL2NvbXBvbmVudHMvc2luZ2xlQ2FsZW5kYXJcIjtcbmltcG9ydCB2aWV3Y2FsZW5kYXIgZnJvbSBcIkAvY29tcG9uZW50cy92aWV3Y2FsZW5kYXJcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInFzXCI7XG5cbkBjb25uZWN0KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2FsZW5kYXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICBcInZhbi1pY29uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9pY29uL2luZGV4XCIsXG4gICAgICBcInZhbi1wb3B1cFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vcG9wdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGxcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGwtZ3JvdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwtZ3JvdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL25hdi1iYXIvaW5kZXhcIixcbiAgICAgIFwidmFuLWZpZWxkXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9maWVsZC9pbmRleFwiXG4gICAgfVxuICB9O1xuICBwcm9wcyA9IHt9O1xuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIG5vd3RpbWU6IG51bGwsXG4gICAgbm93dGltZWxpc3Q6IFtdLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIGNhbGVuZGFyaW5mbzoge30sXG4gICAgaXN2aWV3OiBmYWxzZSxcbiAgICBpc2VkaXQ6IGZhbHNlXG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzaW5nbGVDYWxlbmRhclwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpsaXN0LnN5bmNcIjpcImxpc3RcIixcImNvbG9yXCI6XCIjMjc4QkZGXCJ9LFwidmlld2NhbGVuZGFyXCI6e1widi1iaW5kOmNhbGVuZGFyaW5mby5zeW5jXCI6XCJjYWxlbmRhcmluZm9cIn19O1xyXG4kZXZlbnRzID0ge1wic2luZ2xlQ2FsZW5kYXJcIjp7XCJ2LW9uOmhhbmxlQ29uZmlybVwiOlwiaGFubGVDb25maXJtXCIsXCJ2LW9uOmhhbmRsZW5leHRtb250aFwiOlwiaGFuZGxlbmV4dG1vbnRoXCIsXCJ2LW9uOmhhbmRsZXByZXZtb250aFwiOlwiaGFuZGxlcHJldm1vbnRoXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgc2luZ2xlQ2FsZW5kYXIsXG4gICAgdmlld2NhbGVuZGFyXG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLm5vd3RpbWUgPSBtb21lbnQoKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIHRoaXMuZ2V0bGlzdCgpO1xuICB9XG4gIGdldGxpc3QoXG4gICAgc3RhcnQgPSBtb21lbnQoKVxuICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxuICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIiksXG4gICAgZW5kID0gbW9tZW50KClcbiAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKVxuICApIHtcbiAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgIEZ1bmN0aW9uOiB7XG4gICAgICAgIEFyZ3M6IFtcIlwiLCBcIlJlY2VwdGlvbkRhdGVUaW1lXCIsIFwiU2l0ZVwiLCBcIlZlbnVlXCIsIFwiQ3VzdG9tZXJcIl1cbiAgICAgIH0sXG4gICAgICBTdGFydERhdGU6IHN0YXJ0LFxuICAgICAgRW5kRGF0ZTogZW5kXG4gICAgfTtcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuXG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvRVJQL0JQTS9UYXNrL1JlYWQvUXVlcnk/JHtzdHJpbmdpZnkocGFyYW0sIHtcbiAgICAgICAgYWxsb3dEb3RzOiB0cnVlLFxuICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlXG4gICAgICB9KX1gLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzKSB7XG4gICAgICAgICAgdGhpcy5saXN0ID0gcmVzLmRhdGEucm93cztcbiAgICAgICAgICB0aGlzLiRicm9hZGNhc3QoXCJnZXRsaXN0XCIsIHJlcy5kYXRhLnJvd3MpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG9uQ2xpY2tMZWZ0KCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzZWRpdCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9LFxuICAgIGhhbmxlQ29uZmlybShlKSB7XG4gICAgICB0aGlzLm5vd3RpbWUgPSBlLmZvcm1hdERheTtcbiAgICAgIGxldCBjZmxpc3QgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgb2YgdGhpcy5saXN0KSB7XG4gICAgICAgIGlmIChtb21lbnQoaS5yZWNlcHRpb25EYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSA9PSBlLmZvcm1hdERheSkge1xuICAgICAgICAgIGNmbGlzdC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm5vd3RpbWVsaXN0ID0gY2ZsaXN0O1xuICAgIH0sXG4gICAgaGFuZGxlbmV4dG1vbnRoKGRhdGV0aW1lKSB7XG4gICAgICBsZXQgc3RhcnQgPSBtb21lbnQoZGF0ZXRpbWUpXG4gICAgICAgIC5zdGFydE9mKFwibW9udGhcIilcbiAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICBsZXQgZW5kID0gbW9tZW50KGRhdGV0aW1lKVxuICAgICAgICAuZW5kT2YoXCJtb250aFwiKVxuICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIHRoaXMuZ2V0bGlzdChzdGFydCwgZW5kKTtcbiAgICB9LFxuICAgIGhhbmRsZXByZXZtb250aChkYXRldGltZSkge1xuICAgICAgbGV0IHN0YXJ0ID0gbW9tZW50KGRhdGV0aW1lKVxuICAgICAgICAuc3RhcnRPZihcIm1vbnRoXCIpXG4gICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgbGV0IGVuZCA9IG1vbWVudChkYXRldGltZSlcbiAgICAgICAgLmVuZE9mKFwibW9udGhcIilcbiAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICB0aGlzLmdldGxpc3Qoc3RhcnQsIGVuZCk7XG4gICAgfSxcbiAgICBuZXdyaWNoZW5nKCkge1xuXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IFwibmV3dGFza1wiXG4gICAgICB9KTtcbiAgICB9LFxuICAgIHZpZXdyaWNoZW5nKGUpIHtcbiAgICAgIHRoaXMuaXN2aWV3ID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2FsZW5kYXJpbmZvID0gdGhpcy5saXN0Lm1hcChwID0+IHAuaWQgPT0gZS50YXJnZXQuaWQpO1xuICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICAgIHRoaXMuJGJyb2FkY2FzdChcbiAgICAgICAgXCJnZXRjYWxlbmRhcmluZm9cIixcbiAgICAgICAgdGhpcy5saXN0LmZpbHRlcihwID0+IHAuaWQgPT0gZS50YXJnZXQuaWQpWzBdXG4gICAgICApO1xuICAgIH0sXG4gICAgb25DbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc2VkaXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXN2aWV3ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIl19