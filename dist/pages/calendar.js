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
        console.log("datetime", datetime);
        var start = (0, _moment2.default)(datetime).startOf("month").format("YYYY-MM-DD");
        var end = (0, _moment2.default)(datetime).endOf("month").format("YYYY-MM-DD");
        this.getlist(start, end);
      },
      handleprevmonth: function handleprevmonth(datetime) {
        console.log("datetime", datetime);
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

            console.log("cflist", cflist);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbImNhbGVuZGFyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsInByb3BzIiwiZGF0YSIsImxpc3QiLCJub3d0aW1lIiwibm93dGltZWxpc3QiLCJzaG93IiwiY2FsZW5kYXJpbmZvIiwiaXN2aWV3IiwiaXNlZGl0IiwidXNlcmxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzaW5nbGVDYWxlbmRhciIsInZpZXdjYWxlbmRhciIsIm1ldGhvZHMiLCJvbkNsaWNrTGVmdCIsImhhbmxlQ29uZmlybSIsImUiLCJmb3JtYXREYXkiLCJjZmxpc3QiLCJpIiwicmVjZXB0aW9uRGF0ZVRpbWUiLCJmb3JtYXQiLCJwdXNoIiwiaGFuZGxlbmV4dG1vbnRoIiwiZGF0ZXRpbWUiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJzdGFydE9mIiwiZW5kIiwiZW5kT2YiLCJnZXRsaXN0IiwiaGFuZGxlcHJldm1vbnRoIiwibmV3cmljaGVuZyIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwidmlld3JpY2hlbmciLCJ0YXNraW5mbyIsImZpbHRlciIsInAiLCJpZCIsInRhcmdldCIsImR1aWppZXJlbiIsInJlY2VwdGlvbklkIiwicmVhbE5hbWUiLCIkYnJvYWRjYXN0Iiwib25DbG9zZSIsImdldHVzZXJsaXMiLCJwYXJhbSIsIkZ1bmN0aW9uIiwiQXJncyIsIlN0YXJ0RGF0ZSIsIkVuZERhdGUiLCJ0b2tlbiIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJyZXF1ZXN0IiwiYWxsb3dEb3RzIiwiZW5jb2RlVmFsdWVzT25seSIsIm1ldGhvZCIsImhlYWRlciIsIkF1dGhvcml6YXRpb24iLCJzdWNjZXNzIiwicmVzIiwicm93cyIsInNldERhdGEiLCJmYWlsIiwiZXJyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7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QlRFLGNBQU0sbUJBQU87QUFDWDFDLGtCQUFRQyxHQUFSLENBQVkwQyxHQUFaO0FBQ0Q7QUE1QlEsT0FBWDtBQThCRDs7O2lDQUNZO0FBQUE7O0FBQ1gsVUFBSWQsUUFBUUMsR0FBR0MsY0FBSCxDQUFrQixPQUFsQixDQUFaO0FBQ0FELFNBQUdFLE9BQUgsQ0FBVztBQUNUckIsMkRBRFM7QUFFVHdCLGdCQUFRLE1BRkM7QUFHVEMsZ0JBQVE7QUFDTiwwQkFBZ0IsbUNBRFY7QUFFTkMscUNBQXlCUjtBQUZuQixTQUhDO0FBT1RTLGlCQUFTLHNCQUFPO0FBQ2QsY0FBSUMsT0FBT0EsSUFBSWxFLElBQWYsRUFBcUI7QUFDbkIsbUJBQUtRLFFBQUwsR0FBZ0IwRCxJQUFJbEUsSUFBcEI7QUFDRDtBQUNGLFNBWFE7QUFZVHFFLGNBQU0sbUJBQU87QUFDWDFDLGtCQUFRQyxHQUFSLENBQVkwQyxHQUFaO0FBQ0Q7QUFkUSxPQUFYO0FBZ0JEOzs7O0VBMUdtQ2xDLGVBQUttQyxJO2tCQUF0QjVFLFEiLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIndlcHktY29tLWNhbGVuZGFyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIndlcHktcmVkdXhcIjtcbmltcG9ydCBzaW5nbGVDYWxlbmRhciBmcm9tIFwiQC9jb21wb25lbnRzL3NpbmdsZUNhbGVuZGFyXCI7XG5pbXBvcnQgdmlld2NhbGVuZGFyIGZyb20gXCJAL2NvbXBvbmVudHMvdmlld2NhbGVuZGFyXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxc1wiO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhbGVuZGFyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfml6XnqIvnrqHnkIbns7vnu58nLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgXCJ2YW4taWNvblwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vaWNvbi9pbmRleFwiLFxuICAgICAgXCJ2YW4tcG9wdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL3BvcHVwL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsLWdyb3VwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsLWdyb3VwL2luZGV4XCIsXG4gICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9uYXYtYmFyL2luZGV4XCIsXG4gICAgICBcInZhbi1maWVsZFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vZmllbGQvaW5kZXhcIlxuICAgIH1cbiAgfTtcbiAgcHJvcHMgPSB7fTtcbiAgZGF0YSA9IHtcbiAgICBsaXN0OiBbXSxcbiAgICBub3d0aW1lOiBudWxsLFxuICAgIG5vd3RpbWVsaXN0OiBbXSxcbiAgICBzaG93OiBmYWxzZSxcbiAgICBjYWxlbmRhcmluZm86IHt9LFxuICAgIGlzdmlldzogZmFsc2UsXG4gICAgaXNlZGl0OiBmYWxzZSxcbiAgICB1c2VybGlzdDogW11cbiAgfTtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInNpbmdsZUNhbGVuZGFyXCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwibGlzdFwiLFwiY29sb3JcIjpcIiMyNzhCRkZcIn0sXCJ2aWV3Y2FsZW5kYXJcIjp7fX07XHJcbiRldmVudHMgPSB7XCJzaW5nbGVDYWxlbmRhclwiOntcInYtb246aGFubGVDb25maXJtXCI6XCJoYW5sZUNvbmZpcm1cIixcInYtb246aGFuZGxlbmV4dG1vbnRoXCI6XCJoYW5kbGVuZXh0bW9udGhcIixcInYtb246aGFuZGxlcHJldm1vbnRoXCI6XCJoYW5kbGVwcmV2bW9udGhcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICBzaW5nbGVDYWxlbmRhcixcbiAgICB2aWV3Y2FsZW5kYXJcbiAgfTtcbiAgb25Mb2FkKCkge1xuICAgIC8vIHRoaXMubm93dGltZSA9IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgLy8gdGhpcy5nZXRsaXN0KCk7XG4gICAgLy8gdGhpcy5nZXR1c2VybGlzKCk7XG4gIH1cbiAgb25TaG93KCkge1xuICAgIHRoaXMubm93dGltZSA9IG1vbWVudCgpLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgdGhpcy5nZXRsaXN0KCk7XG4gICAgdGhpcy5nZXR1c2VybGlzKCk7XG4gIH1cbiAgZ2V0bGlzdChcbiAgICBzdGFydCA9IG1vbWVudCgpXG4gICAgICAuc3RhcnRPZihcIm1vbnRoXCIpXG4gICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICBlbmQgPSBtb21lbnQoKVxuICAgICAgLmVuZE9mKFwibW9udGhcIilcbiAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXG4gICkge1xuICAgIGNvbnN0IHBhcmFtID0ge1xuICAgICAgRnVuY3Rpb246IHtcbiAgICAgICAgQXJnczogW1wiXCIsIFwiUmVjZXB0aW9uRGF0ZVRpbWVcIiwgXCJTaXRlXCIsIFwiVmVudWVcIiwgXCJDdXN0b21lclwiXVxuICAgICAgfSxcbiAgICAgIFN0YXJ0RGF0ZTogc3RhcnQsXG4gICAgICBFbmREYXRlOiBlbmRcbiAgICB9O1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG5cbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvQlBNL1Rhc2svUmVhZC9RdWVyeT8ke3N0cmluZ2lmeShwYXJhbSwge1xuICAgICAgICBhbGxvd0RvdHM6IHRydWUsXG4gICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWVcbiAgICAgIH0pfWAsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMpIHtcbiAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YS5yb3dzO1xuICAgICAgICAgIGxldCBub3d0aW1lID0gbW9tZW50KCkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgICAgICBsZXQgY2ZsaXN0ID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSBvZiByZXMuZGF0YS5yb3dzKSB7XG4gICAgICAgICAgICBpZiAobW9tZW50KGkucmVjZXB0aW9uRGF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tRERcIikgPT0gbm93dGltZSkge1xuICAgICAgICAgICAgICBjZmxpc3QucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjZmxpc3RcIiwgY2ZsaXN0KTtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe25vd3RpbWVsaXN0OmNmbGlzdH0pXG4gICAgICAgICAgLy90aGlzLm5vd3RpbWVsaXN0ID0gY2ZsaXN0O1xuICAgICAgICAgIHRoaXMuJGJyb2FkY2FzdChcImdldGxpc3RcIiwgcmVzLmRhdGEucm93cyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGdldHVzZXJsaXMoKSB7XG4gICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKTtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvQVZNL1VzZXIvUmVhZC9Sb3dzYCxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XG4gICAgICAgICAgdGhpcy51c2VybGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG9uQ2xpY2tMZWZ0KCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzZWRpdCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9LFxuICAgIGhhbmxlQ29uZmlybShlKSB7XG4gICAgICB0aGlzLm5vd3RpbWUgPSBlLmZvcm1hdERheTtcbiAgICAgIGxldCBjZmxpc3QgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgb2YgdGhpcy5saXN0KSB7XG4gICAgICAgIGlmIChtb21lbnQoaS5yZWNlcHRpb25EYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSA9PSBlLmZvcm1hdERheSkge1xuICAgICAgICAgIGNmbGlzdC5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLm5vd3RpbWVsaXN0ID0gY2ZsaXN0O1xuICAgIH0sXG4gICAgaGFuZGxlbmV4dG1vbnRoKGRhdGV0aW1lKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRhdGV0aW1lXCIsZGF0ZXRpbWUpXG4gICAgICBsZXQgc3RhcnQgPSBtb21lbnQoZGF0ZXRpbWUpXG4gICAgICAgIC5zdGFydE9mKFwibW9udGhcIilcbiAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgICBsZXQgZW5kID0gbW9tZW50KGRhdGV0aW1lKVxuICAgICAgICAuZW5kT2YoXCJtb250aFwiKVxuICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIHRoaXMuZ2V0bGlzdChzdGFydCwgZW5kKTtcbiAgICB9LFxuICAgIGhhbmRsZXByZXZtb250aChkYXRldGltZSkge1xuICAgICAgIGNvbnNvbGUubG9nKFwiZGF0ZXRpbWVcIixkYXRldGltZSlcbiAgICAgIGxldCBzdGFydCA9IG1vbWVudChkYXRldGltZSlcbiAgICAgICAgLnN0YXJ0T2YoXCJtb250aFwiKVxuICAgICAgICAuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIGxldCBlbmQgPSBtb21lbnQoZGF0ZXRpbWUpXG4gICAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgICAgdGhpcy5nZXRsaXN0KHN0YXJ0LCBlbmQpO1xuICAgIH0sXG4gICAgbmV3cmljaGVuZygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogXCJuZXd0YXNrXCJcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgdmlld3JpY2hlbmcoZSkge1xuICAgICAgdGhpcy5pc3ZpZXcgPSB0cnVlO1xuICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICAgIGxldCB0YXNraW5mbyA9IHRoaXMubGlzdC5maWx0ZXIocCA9PiBwLmlkID09IGUudGFyZ2V0LmlkKVswXTtcbiAgICAgIHRhc2tpbmZvLmR1aWppZXJlbiA9IHRoaXMudXNlcmxpc3QuZmlsdGVyKFxuICAgICAgICBwID0+IHAuaWQgPT0gdGFza2luZm8ucmVjZXB0aW9uSWRcbiAgICAgIClbMF0ucmVhbE5hbWU7XG5cbiAgICAgIHRoaXMuJGJyb2FkY2FzdChcImdldGNhbGVuZGFyaW5mb1wiLCB0YXNraW5mbyk7XG4gICAgfSxcbiAgICBvbkNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzZWRpdCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iXX0=