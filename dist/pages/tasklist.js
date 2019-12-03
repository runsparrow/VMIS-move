"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _qs = require('./../npm/qs/lib/index.js');

var _viewcalendar = require('./../components/viewcalendar.js');

var _viewcalendar2 = _interopRequireDefault(_viewcalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tasklist = (_dec = (0, _wepyRedux.connect)({}), _dec(_class = function (_wepy$page) {
  _inherits(tasklist, _wepy$page);

  function tasklist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, tasklist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = tasklist.__proto__ || Object.getPrototypeOf(tasklist)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '日程管理系统',
      usingComponents: {
        "van-icon": "../../static/plugIn/icon/index",
        "van-popup": "../../static/plugIn/popup/index",
        "van-cell": "../../static/plugIn/cell/index",
        "van-cell-group": "../../static/plugIn/cell-group/index",
        "van-nav-bar": "../../static/plugIn/nav-bar/index",
        "van-field": "../../static/plugIn/field/index"
      }
    }, _this.data = {
      list: [],
      nowtimelist: [],
      isview: false,
      show: false,
      userlist: []
    }, _this.$repeat = {}, _this.$props = { "viewcalendar": {} }, _this.$events = {}, _this.components = {
      viewcalendar: _viewcalendar2.default
    }, _this.methods = {
      onClickLeft: function onClickLeft() {
        this.show = false;
        this.isview = false;
      },
      viewricheng: function viewricheng(e) {
        this.isview = true;
        this.show = true;
        var taskinfo = this.nowtimelist.filter(function (p) {
          return p.id == e.target.id;
        })[0];
        taskinfo.duijieren = this.userlist.filter(function (p) {
          return p.id == taskinfo.receptionId;
        })[0].realName;

        this.$broadcast("getcalendarinfo", taskinfo);
      },
      onClose: function onClose() {
        this.show = false;
        this.isview = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(tasklist, [{
    key: "onLoad",
    value: function onLoad() {
      this.getlist();
      this.getuserlis();
    }
  }, {
    key: "getlist",
    value: function getlist() {
      var _this2 = this;

      var token = wx.getStorageSync("token");
      var user = wx.getStorageSync("user");

      var param = {
        Function: {
          Name: "bykeyword",
          Args: ["", "Site", "Venue", "Customer"]
        }
      };

      wx.request({
        url: "http://localhost:5000/ERP/BPM/task/Read/Rows?" + (0, _qs.stringify)(param, {
          allowDots: true,
          encodeValuesOnly: true
        }),
        method: "POST",
        header: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token
        },
        success: function success(res) {
          if (res && res.data) {
            _this2.setData({
              nowtimelist: res.data
            });
            _this2.nowtimelist = res.data;
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

  return tasklist;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tasklist , 'pages/tasklist'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tsaXN0LmpzIl0sIm5hbWVzIjpbInRhc2tsaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJsaXN0Iiwibm93dGltZWxpc3QiLCJpc3ZpZXciLCJzaG93IiwidXNlcmxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ2aWV3Y2FsZW5kYXIiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCJ2aWV3cmljaGVuZyIsImUiLCJ0YXNraW5mbyIsImZpbHRlciIsInAiLCJpZCIsInRhcmdldCIsImR1aWppZXJlbiIsInJlY2VwdGlvbklkIiwicmVhbE5hbWUiLCIkYnJvYWRjYXN0Iiwib25DbG9zZSIsImdldGxpc3QiLCJnZXR1c2VybGlzIiwidG9rZW4iLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwidXNlciIsInBhcmFtIiwiRnVuY3Rpb24iLCJOYW1lIiwiQXJncyIsInJlcXVlc3QiLCJ1cmwiLCJhbGxvd0RvdHMiLCJlbmNvZGVWYWx1ZXNPbmx5IiwibWV0aG9kIiwiaGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLFEsV0FEcEIsd0JBQVEsRUFBUixDOzs7Ozs7Ozs7Ozs7OzswTEFFQ0MsTSxHQUFTO0FBQ05DLDhCQUF3QixRQURsQjtBQUVQQyx1QkFBaUI7QUFDZixvQkFBWSxnQ0FERztBQUVmLHFCQUFhLGlDQUZFO0FBR2Ysb0JBQVksZ0NBSEc7QUFJZiwwQkFBa0Isc0NBSkg7QUFLZix1QkFBZSxtQ0FMQTtBQU1mLHFCQUFhO0FBTkU7QUFGVixLLFFBV1RDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsbUJB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WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIndlcHktcmVkdXhcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxc1wiO1xuaW1wb3J0IHZpZXdjYWxlbmRhciBmcm9tIFwiQC9jb21wb25lbnRzL3ZpZXdjYWxlbmRhclwiO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhc2tsaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pel56iL566h55CG57O757ufJyxcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgIFwidmFuLWljb25cIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2ljb24vaW5kZXhcIixcbiAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9wb3B1cC9pbmRleFwiLFxuICAgICAgXCJ2YW4tY2VsbFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vY2VsbC9pbmRleFwiLFxuICAgICAgXCJ2YW4tY2VsbC1ncm91cFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vY2VsbC1ncm91cC9pbmRleFwiLFxuICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vbmF2LWJhci9pbmRleFwiLFxuICAgICAgXCJ2YW4tZmllbGRcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2ZpZWxkL2luZGV4XCJcbiAgICB9XG4gIH07XG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW10sXG4gICAgbm93dGltZWxpc3Q6IFtdLFxuICAgIGlzdmlldzogZmFsc2UsXG4gICAgc2hvdzogZmFsc2UsXG4gICAgdXNlcmxpc3Q6IFtdXG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2aWV3Y2FsZW5kYXJcIjp7fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgdmlld2NhbGVuZGFyXG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmdldGxpc3QoKTtcbiAgICB0aGlzLmdldHVzZXJsaXMoKTtcbiAgfVxuICBnZXRsaXN0KCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICAgbGV0IHVzZXIgPSB3eC5nZXRTdG9yYWdlU3luYyhcInVzZXJcIik7XG5cbiAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgIEZ1bmN0aW9uOiB7XG4gICAgICAgIE5hbWU6IFwiYnlrZXl3b3JkXCIsXG4gICAgICAgIEFyZ3M6IFtcIlwiLCBcIlNpdGVcIiwgXCJWZW51ZVwiLCBcIkN1c3RvbWVyXCJdXG4gICAgICB9XG4gICAgfTtcblxuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9CUE0vdGFzay9SZWFkL1Jvd3M/JHtzdHJpbmdpZnkocGFyYW0sIHtcbiAgICAgICAgYWxsb3dEb3RzOiB0cnVlLFxuICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlXG4gICAgICB9KX1gLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgbm93dGltZWxpc3Q6IHJlcy5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5ub3d0aW1lbGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXR1c2VybGlzKCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvRVJQL0FWTS9Vc2VyL1JlYWQvUm93c2AsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xuICAgICAgICAgIHRoaXMudXNlcmxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBvbkNsaWNrTGVmdCgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9LFxuICAgIHZpZXdyaWNoZW5nKGUpIHtcbiAgICAgIHRoaXMuaXN2aWV3ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICBsZXQgdGFza2luZm8gPSB0aGlzLm5vd3RpbWVsaXN0LmZpbHRlcihwID0+IHAuaWQgPT0gZS50YXJnZXQuaWQpWzBdO1xuICAgICAgdGFza2luZm8uZHVpamllcmVuID0gdGhpcy51c2VybGlzdC5maWx0ZXIocD0+cC5pZD09dGFza2luZm8ucmVjZXB0aW9uSWQpWzBdLnJlYWxOYW1lXG4gIFxuICAgICAgdGhpcy4kYnJvYWRjYXN0KFxuICAgICAgICBcImdldGNhbGVuZGFyaW5mb1wiLFxuICAgICAgIHRhc2tpbmZvXG4gICAgICApO1xuICAgIH0sXG4gICAgb25DbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iXX0=