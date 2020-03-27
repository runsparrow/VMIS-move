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
      // this.getlist();
      // this.getuserlis();
    }
  }, {
    key: "onShow",
    value: function onShow() {
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
        url: "http://211.149.163.211:4000/ERP/BPM/task/Read/Rows?" + (0, _qs.stringify)(param, {
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

  return tasklist;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tasklist , 'pages/tasklist'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tsaXN0LmpzIl0sIm5hbWVzIjpbInRhc2tsaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJsaXN0Iiwibm93dGltZWxpc3QiLCJpc3ZpZXciLCJzaG93IiwidXNlcmxpc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ2aWV3Y2FsZW5kYXIiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCJ2aWV3cmljaGVuZyIsImUiLCJ0YXNraW5mbyIsImZpbHRlciIsInAiLCJpZCIsInRhcmdldCIsImR1aWppZXJlbiIsInJlY2VwdGlvbklkIiwicmVhbE5hbWUiLCIkYnJvYWRjYXN0Iiwib25DbG9zZSIsImdldGxpc3QiLCJnZXR1c2VybGlzIiwidG9rZW4iLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwidXNlciIsInBhcmFtIiwiRnVuY3Rpb24iLCJOYW1lIiwiQXJncyIsInJlcXVlc3QiLCJ1cmwiLCJhbGxvd0RvdHMiLCJlbmNvZGVWYWx1ZXNPbmx5IiwibWV0aG9kIiwiaGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLFEsV0FEcEIsd0JBQVEsRUFBUixDOzs7Ozs7Ozs7Ozs7OzswTEFFQ0MsTSxHQUFTO0FBQ05DLDhCQUF3QixRQURsQjtBQUVQQyx1QkFBaUI7QUFDZixvQkFBWSxnQ0FERztBQUVmLHFCQUFhLGlDQUZFO0FBR2Ysb0JBQVksZ0NBSEc7QUFJZiwwQkFBa0Isc0NBSkg7QUFLZix1QkFBZSxtQ0FMQTtBQU1mLHFCQUFhO0FBTkU7QUFGVixLLFFBV1RDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsbUJB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dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInFzXCI7XG5pbXBvcnQgdmlld2NhbGVuZGFyIGZyb20gXCJAL2NvbXBvbmVudHMvdmlld2NhbGVuZGFyXCI7XG5cbkBjb25uZWN0KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFza2xpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfml6XnqIvnrqHnkIbns7vnu58nLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgXCJ2YW4taWNvblwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vaWNvbi9pbmRleFwiLFxuICAgICAgXCJ2YW4tcG9wdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL3BvcHVwL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsLWdyb3VwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsLWdyb3VwL2luZGV4XCIsXG4gICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9uYXYtYmFyL2luZGV4XCIsXG4gICAgICBcInZhbi1maWVsZFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vZmllbGQvaW5kZXhcIlxuICAgIH1cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBsaXN0OiBbXSxcbiAgICBub3d0aW1lbGlzdDogW10sXG4gICAgaXN2aWV3OiBmYWxzZSxcbiAgICBzaG93OiBmYWxzZSxcbiAgICB1c2VybGlzdDogW11cbiAgfTtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInZpZXdjYWxlbmRhclwiOnt9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICB2aWV3Y2FsZW5kYXJcbiAgfTtcbiAgb25Mb2FkKCkge1xuICAgIC8vIHRoaXMuZ2V0bGlzdCgpO1xuICAgIC8vIHRoaXMuZ2V0dXNlcmxpcygpO1xuICB9XG4gIG9uU2hvdygpe1xuICAgICAgdGhpcy5nZXRsaXN0KCk7XG4gICAgdGhpcy5nZXR1c2VybGlzKCk7XG4gIH1cbiAgZ2V0bGlzdCgpIHtcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgIGxldCB1c2VyID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ1c2VyXCIpO1xuXG4gICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICBGdW5jdGlvbjoge1xuICAgICAgICBOYW1lOiBcImJ5a2V5d29yZFwiLFxuICAgICAgICBBcmdzOiBbXCJcIiwgXCJTaXRlXCIsIFwiVmVudWVcIiwgXCJDdXN0b21lclwiXVxuICAgICAgfVxuICAgIH07XG5cbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHA6Ly8yMTEuMTQ5LjE2My4yMTE6NDAwMC9FUlAvQlBNL3Rhc2svUmVhZC9Sb3dzPyR7c3RyaW5naWZ5KHBhcmFtLCB7XG4gICAgICAgIGFsbG93RG90czogdHJ1ZSxcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZVxuICAgICAgfSl9YCxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG5vd3RpbWVsaXN0OiByZXMuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMubm93dGltZWxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZ2V0dXNlcmxpcygpIHtcbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYyhcInRva2VuXCIpO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovLzIxMS4xNDkuMTYzLjIxMTo0MDAwL0VSUC9BVk0vVXNlci9SZWFkL1Jvd3NgLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcbiAgICAgICAgICB0aGlzLnVzZXJsaXN0ID0gcmVzLmRhdGE7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgb25DbGlja0xlZnQoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXN2aWV3ID0gZmFsc2U7XG4gICAgfSxcbiAgICB2aWV3cmljaGVuZyhlKSB7XG4gICAgICB0aGlzLmlzdmlldyA9IHRydWU7XG4gICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgICAgbGV0IHRhc2tpbmZvID0gdGhpcy5ub3d0aW1lbGlzdC5maWx0ZXIocCA9PiBwLmlkID09IGUudGFyZ2V0LmlkKVswXTtcbiAgICAgIHRhc2tpbmZvLmR1aWppZXJlbiA9IHRoaXMudXNlcmxpc3QuZmlsdGVyKHA9PnAuaWQ9PXRhc2tpbmZvLnJlY2VwdGlvbklkKVswXS5yZWFsTmFtZVxuICBcbiAgICAgIHRoaXMuJGJyb2FkY2FzdChcbiAgICAgICAgXCJnZXRjYWxlbmRhcmluZm9cIixcbiAgICAgICB0YXNraW5mb1xuICAgICAgKTtcbiAgICB9LFxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXN2aWV3ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIl19