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
      navigationBarTitleText: '日程管理系统',
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
        // console.log("datetime",datetime)
        var start = (0, _moment2.default)(datetime).startOf("month").format("YYYY-MM-DD");
        var end = (0, _moment2.default)(datetime).endOf("month").format("YYYY-MM-DD");
        this.getlist(start, end);
      },
      handleprevmonth: function handleprevmonth(datetime) {
        // console.log("datetime",datetime)
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
      // this.nowtime = moment().format("YYYY-MM-DD");
      // this.getlist();
      // this.getuserlis();
    }
  }, {
    key: "onShow",
    value: function onShow() {
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
        url: "http://211.149.163.211:4000/ERP/BPM/Task/Read/Query?" + (0, _qs.stringify)(param, {
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
            var nowtime = (0, _moment2.default)().format("YYYY-MM-DD");
            var cflist = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = res.data.rows[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var i = _step2.value;

                if ((0, _moment2.default)(i.receptionDateTime).format("YYYY-MM-DD") == nowtime) {
                  cflist.push(i);
                }
              }
              // console.log("cflist", cflist);
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            _this2.setData({ nowtimelist: cflist });
            //this.nowtimelist = cflist;
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
        url: "http://211.149.163.211:4000/ERP/AVM/User/Read/Rows",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbImNhbGVuZGFyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsInByb3BzIiwiZGF0YSIsImxpc3QiLCJub3d0aW1lIiwibm93dGltZWxpc3QiLCJzaG93IiwiY2FsZW5kYXJpbmZvIiwiaXN2aWV3IiwiaXNlZGl0IiwidXNlcmxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzaW5nbGVDYWxlbmRhciIsInZpZXdjYWxlbmRhciIsIm1ldGhvZHMiLCJvbkNsaWNrTGVmdCIsImhhbmxlQ29uZmlybSIsImUiLCJmb3JtYXREYXkiLCJjZmxpc3QiLCJpIiwicmVjZXB0aW9uRGF0ZVRpbWUiLCJmb3JtYXQiLCJwdXNoIiwiaGFuZGxlbmV4dG1vbnRoIiwiZGF0ZXRpbWUiLCJzdGFydCIsInN0YXJ0T2YiLCJlbmQiLCJlbmRPZiIsImdldGxpc3QiLCJoYW5kbGVwcmV2bW9udGgiLCJuZXdyaWNoZW5nIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ2aWV3cmljaGVuZyIsInRhc2tpbmZvIiwiZmlsdGVyIiwicCIsImlkIiwidGFyZ2V0IiwiZHVpamllcmVuIiwicmVjZXB0aW9uSWQiLCJyZWFsTmFtZSIsIiRicm9hZGNhc3QiLCJvbkNsb3NlIiwiZ2V0dXNlcmxpcyIsInBhcmFtIiwiRnVuY3Rpb24iLCJBcmdzIiwiU3RhcnREYXRlIiwiRW5kRGF0ZSIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsInJlcXVlc3QiLCJhbGxvd0RvdHMiLCJlbmNvZGVWYWx1ZXNPbmx5IiwibWV0aG9kIiwiaGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsInN1Y2Nlc3MiLCJyZXMiLCJyb3dzIiwic2V0RGF0YSIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7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LENBQWtCLE9BQWxCLENBQVo7QUFDQUQsU0FBR0UsT0FBSCxDQUFXO0FBQ1RyQixpRUFEUztBQUVUd0IsZ0JBQVEsTUFGQztBQUdUQyxnQkFBUTtBQUNOLDBCQUFnQixtQ0FEVjtBQUVOQyxxQ0FBeUJSO0FBRm5CLFNBSEM7QUFPVFMsaUJBQVMsc0JBQU87QUFDZCxjQUFJQyxPQUFPQSxJQUFJaEUsSUFBZixFQUFxQjtBQUNuQixtQkFBS1EsUUFBTCxHQUFnQndELElBQUloRSxJQUFwQjtBQUNEO0FBQ0YsU0FYUTtBQVlUbUUsY0FBTSxtQkFBTztBQUNYQyxrQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0Q7QUFkUSxPQUFYO0FBZ0JEOzs7O0VBMUdtQ3BDLGVBQUtxQyxJO2tCQUF0QjVFLFEiLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIndlcHktY29tLWNhbGVuZGFyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIndlcHktcmVkdXhcIjtcbmltcG9ydCBzaW5nbGVDYWxlbmRhciBmcm9tIFwiQC9jb21wb25lbnRzL3NpbmdsZUNhbGVuZGFyXCI7XG5pbXBvcnQgdmlld2NhbGVuZGFyIGZyb20gXCJAL2NvbXBvbmVudHMvdmlld2NhbGVuZGFyXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxc1wiO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhbGVuZGFyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfml6XnqIvnrqHnkIbns7vnu58nLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgXCJ2YW4taWNvblwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vaWNvbi9pbmRleFwiLFxuICAgICAgXCJ2YW4tcG9wdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL3BvcHVwL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsLWdyb3VwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsLWdyb3VwL2luZGV4XCIsXG4gICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9uYXYtYmFyL2luZGV4XCIsXG4gICAgICBcInZhbi1maWVsZFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vZmllbGQvaW5kZXhcIlxuICAgIH1cbiAgfTtcbiAgcHJvcHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBsaXN0OiBbXSxcbiAgICBub3d0aW1lOiBudWxsLFxuICAgIG5vd3RpbWVsaXN0OiBbXSxcbiAgICBzaG93OiBmYWxzZSxcbiAgICBjYWxlbmRhcmluZm86IHt9LFxuICAgIGlzdmlldzogZmFsc2UsXG4gICAgaXNlZGl0OiBmYWxzZSxcbiAgICB1c2VybGlzdDogW11cbiAgfTtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInNpbmdsZUNhbGVuZGFyXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwiY29sb3JcIjpcIiMyNzhCRkZcIn0sXCJ2aWV3Y2FsZW5kYXJcIjp7fX07XHJcbiRldmVudHMgPSB7XCJzaW5nbGVDYWxlbmRhclwiOntcInYtb246aGFubGVDb25maXJtXCI6XCJoYW5sZUNvbmZpcm1cIixcInYtb246aGFuZGxlbmV4dG1vbnRoXCI6XCJoYW5kbGVuZXh0bW9udGhcIixcInYtb246aGFuZGxlcHJldm1vbnRoXCI6XCJoYW5kbGVwcmV2bW9udGhcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBzaW5nbGVDYWxlbmRhcixcbiAgICB2aWV3Y2FsZW5kYXJcbiAgfTtcbiAgb25Mb2FkKCkge1xuICAgIC8vIHRoaXMubm93dGltZSA9IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgLy8gdGhpcy5nZXRsaXN0KCk7XG4gICAgLy8gdGhpcy5nZXR1c2VybGlzKCk7XG4gIH1cbiAgb25TaG93KCkge1xuICAgIHRoaXMubm93dGltZSA9IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgdGhpcy5nZXRsaXN0KCk7XG4gICAgdGhpcy5nZXR1c2VybGlzKCk7XG4gIH1cbiAgZ2V0bGlzdChcbiAgICBzdGFydCA9IG1vbWVudCgpXG4gICAgICAuc3RhcnRPZihcIm1vbnRoXCIpXG4gICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICBlbmQgPSBtb21lbnQoKVxuICAgICAgLmVuZE9mKFwibW9udGhcIilcbiAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXG4gICkge1xuICAgIGNvbnN0IHBhcmFtID0ge1xuICAgICAgRnVuY3Rpb246IHtcbiAgICAgICAgQXJnczogW1wiXCIsIFwiUmVjZXB0aW9uRGF0ZVRpbWVcIiwgXCJTaXRlXCIsIFwiVmVudWVcIiwgXCJDdXN0b21lclwiXVxuICAgICAgfSxcbiAgICAgIFN0YXJ0RGF0ZTogc3RhcnQsXG4gICAgICBFbmREYXRlOiBlbmRcbiAgICB9O1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG5cbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHA6Ly8yMTEuMTQ5LjE2My4yMTE6NDAwMC9FUlAvQlBNL1Rhc2svUmVhZC9RdWVyeT8ke3N0cmluZ2lmeShwYXJhbSwge1xuICAgICAgICBhbGxvd0RvdHM6IHRydWUsXG4gICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWVcbiAgICAgIH0pfWAsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcbiAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YS5yb3dzO1xuICAgICAgICAgIGxldCBub3d0aW1lID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgICAgICBsZXQgY2ZsaXN0ID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSBvZiByZXMuZGF0YS5yb3dzKSB7XG4gICAgICAgICAgICBpZiAobW9tZW50KGkucmVjZXB0aW9uRGF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tRERcIikgPT0gbm93dGltZSkge1xuICAgICAgICAgICAgICBjZmxpc3QucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNmbGlzdFwiLCBjZmxpc3QpO1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7bm93dGltZWxpc3Q6Y2ZsaXN0fSlcbiAgICAgICAgICAvL3RoaXMubm93dGltZWxpc3QgPSBjZmxpc3Q7XG4gICAgICAgICAgdGhpcy4kYnJvYWRjYXN0KFwiZ2V0bGlzdFwiLCByZXMuZGF0YS5yb3dzKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0dXNlcmxpcygpIHtcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovLzIxMS4xNDkuMTYzLjIxMTo0MDAwL0VSUC9BVk0vVXNlci9SZWFkL1Jvd3NgLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcbiAgICAgICAgICB0aGlzLnVzZXJsaXN0ID0gcmVzLmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgb25DbGlja0xlZnQoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNlZGl0ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzdmlldyA9IGZhbHNlO1xuICAgIH0sXG4gICAgaGFubGVDb25maXJtKGUpIHtcbiAgICAgIHRoaXMubm93dGltZSA9IGUuZm9ybWF0RGF5O1xuICAgICAgbGV0IGNmbGlzdCA9IFtdO1xuICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLmxpc3QpIHtcbiAgICAgICAgaWYgKG1vbWVudChpLnJlY2VwdGlvbkRhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpID09IGUuZm9ybWF0RGF5KSB7XG4gICAgICAgICAgY2ZsaXN0LnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubm93dGltZWxpc3QgPSBjZmxpc3Q7XG4gICAgfSxcbiAgICBoYW5kbGVuZXh0bW9udGgoZGF0ZXRpbWUpIHtcbiAgICAgLy8gY29uc29sZS5sb2coXCJkYXRldGltZVwiLGRhdGV0aW1lKVxuICAgICAgbGV0IHN0YXJ0ID0gbW9tZW50KGRhdGV0aW1lKVxuICAgICAgICAuc3RhcnRPZihcIm1vbnRoXCIpXG4gICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgbGV0IGVuZCA9IG1vbWVudChkYXRldGltZSlcbiAgICAgICAgLmVuZE9mKFwibW9udGhcIilcbiAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICB0aGlzLmdldGxpc3Qoc3RhcnQsIGVuZCk7XG4gICAgfSxcbiAgICBoYW5kbGVwcmV2bW9udGgoZGF0ZXRpbWUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0ZXRpbWVcIixkYXRldGltZSlcbiAgICAgIGxldCBzdGFydCA9IG1vbWVudChkYXRldGltZSlcbiAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxuICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIGxldCBlbmQgPSBtb21lbnQoZGF0ZXRpbWUpXG4gICAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgdGhpcy5nZXRsaXN0KHN0YXJ0LCBlbmQpO1xuICAgIH0sXG4gICAgbmV3cmljaGVuZygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogXCJuZXd0YXNrXCJcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdmlld3JpY2hlbmcoZSkge1xuICAgICAgdGhpcy5pc3ZpZXcgPSB0cnVlO1xuICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICAgIGxldCB0YXNraW5mbyA9IHRoaXMubGlzdC5maWx0ZXIocCA9PiBwLmlkID09IGUudGFyZ2V0LmlkKVswXTtcbiAgICAgIHRhc2tpbmZvLmR1aWppZXJlbiA9IHRoaXMudXNlcmxpc3QuZmlsdGVyKFxuICAgICAgICBwID0+IHAuaWQgPT0gdGFza2luZm8ucmVjZXB0aW9uSWRcbiAgICAgIClbMF0ucmVhbE5hbWU7XG5cbiAgICAgIHRoaXMuJGJyb2FkY2FzdChcImdldGNhbGVuZGFyaW5mb1wiLCB0YXNraW5mbyk7XG4gICAgfSxcbiAgICBvbkNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzZWRpdCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iXX0=