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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tsaXN0LmpzIl0sIm5hbWVzIjpbInRhc2tsaXN0IiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImxpc3QiLCJub3d0aW1lbGlzdCIsImlzdmlldyIsInNob3ciLCJ1c2VybGlzdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInZpZXdjYWxlbmRhciIsIm1ldGhvZHMiLCJvbkNsaWNrTGVmdCIsInZpZXdyaWNoZW5nIiwiZSIsInRhc2tpbmZvIiwiZmlsdGVyIiwicCIsImlkIiwidGFyZ2V0IiwiZHVpamllcmVuIiwicmVjZXB0aW9uSWQiLCJyZWFsTmFtZSIsIiRicm9hZGNhc3QiLCJvbkNsb3NlIiwiZ2V0bGlzdCIsImdldHVzZXJsaXMiLCJ0b2tlbiIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJ1c2VyIiwicGFyYW0iLCJGdW5jdGlvbiIsIk5hbWUiLCJBcmdzIiwicmVxdWVzdCIsInVybCIsImFsbG93RG90cyIsImVuY29kZVZhbHVlc09ubHkiLCJtZXRob2QiLCJoZWFkZXIiLCJBdXRob3JpemF0aW9uIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImVyciIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdxQkEsUSxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzBMQUVDQyxNLEdBQVM7QUFDUEMsdUJBQWlCO0FBQ2Ysb0JBQVksZ0NBREc7QUFFZixxQkFBYSxpQ0FGRTtBQUdmLG9CQUFZLGdDQUhHO0FBSWYsMEJBQWtCLHNDQUpIO0FBS2YsdUJBQWUsbUNBTEE7QUFNZixxQkFBYTtBQU5FO0FBRFYsSyxRQVVUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLG1CQUFhLEVBRlI7QUFHTEMsY0FBUSxLQUhIO0FBSUxDLFlBQU0sS0FKRDtBQUtMQyxnQkFBVTtBQUxMLEssUUFPUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBaEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLLFFBNERaQyxPLEdBQVU7QUFDUkMsaUJBRFEseUJBQ007QUFDWixhQUFLUixJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUtELE1BQUwsR0FBYyxLQUFkO0FBQ0QsT0FKTztBQUtSVSxpQkFMUSx1QkFLSUMsQ0FMSixFQUtPO0FBQ2IsYUFBS1gsTUFBTCxHQUFjLElBQWQ7QUFDQSxhQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLFlBQUlXLFdBQVcsS0FBS2IsV0FBTCxDQUFpQmMsTUFBakIsQ0FBd0I7QUFBQSxpQkFBS0MsRUFBRUMsRUFBRixJQUFRSixFQUFFSyxNQUFGLENBQVNELEVBQXRCO0FBQUEsU0FBeEIsRUFBa0QsQ0FBbEQsQ0FBZjtBQUNBSCxpQkFBU0ssU0FBVCxHQUFxQixLQUFLZixRQUFMLENBQWNXLE1BQWQsQ0FBcUI7QUFBQSxpQkFBR0MsRUFBRUMsRUFBRixJQUFNSCxTQUFTTSxXQUFsQjtBQUFBLFNBQXJCLEVBQW9ELENBQXBELEVBQXVEQyxRQUE1RTs7QUFFQSxhQUFLQyxVQUFMLENBQ0UsaUJBREYsRUFFQ1IsUUFGRDtBQUlELE9BZk87QUFnQlJTLGFBaEJRLHFCQWdCRTtBQUNSLGFBQUtwQixJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUtELE1BQUwsR0FBYyxLQUFkO0FBQ0Q7QUFuQk8sSzs7Ozs7NkJBekREO0FBQ1AsV0FBS3NCLE9BQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0Q7Ozs4QkFDUztBQUFBOztBQUNSLFVBQUlDLFFBQVFDLEdBQUdDLGNBQUgsQ0FBa0IsT0FBbEIsQ0FBWjtBQUNBLFVBQUlDLE9BQU9GLEdBQUdDLGNBQUgsQ0FBa0IsTUFBbEIsQ0FBWDs7QUFFQSxVQUFNRSxRQUFRO0FBQ1pDLGtCQUFVO0FBQ1JDLGdCQUFNLFdBREU7QUFFUkMsZ0JBQU0sQ0FBQyxFQUFELEVBQUssTUFBTCxFQUFhLE9BQWIsRUFBc0IsVUFBdEI7QUFGRTtBQURFLE9BQWQ7O0FBT0FOLFNBQUdPLE9BQUgsQ0FBVztBQUNUQywrREFBcUQsbUJBQVVMLEtBQVYsRUFBaUI7QUFDcEVNLHFCQUFXLElBRHlEO0FBRXBFQyw0QkFBa0I7QUFGa0QsU0FBakIsQ0FENUM7QUFLVEMsZ0JBQVEsTUFMQztBQU1UQyxnQkFBUTtBQUNOLDBCQUFnQixtQ0FEVjtBQUVOQyxxQ0FBeUJkO0FBRm5CLFNBTkM7QUFVVGUsaUJBQVMsc0JBQU87QUFDZCxjQUFJQyxPQUFPQSxJQUFJM0MsSUFBZixFQUFxQjtBQUNuQixtQkFBSzRDLE9BQUwsQ0FBYTtBQUNYMUMsMkJBQWF5QyxJQUFJM0M7QUFETixhQUFiO0FBR0EsbUJBQUtFLFdBQUwsR0FBbUJ5QyxJQUFJM0MsSUFBdkI7QUFDRDtBQUNGLFNBakJRO0FBa0JUNkMsY0FBTSxtQkFBTztBQUNYQyxrQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0Q7QUFwQlEsT0FBWDtBQXNCRDs7O2lDQUNZO0FBQUE7O0FBQ1gsVUFBSXJCLFFBQVFDLEdBQUdDLGNBQUgsQ0FBa0IsT0FBbEIsQ0FBWjtBQUNBRCxTQUFHTyxPQUFILENBQVc7QUFDVEMsMkRBRFM7QUFFVEcsZ0JBQVEsTUFGQztBQUdUQyxnQkFBUTtBQUNOLDBCQUFnQixtQ0FEVjtBQUVOQyxxQ0FBeUJkO0FBRm5CLFNBSEM7QUFPVGUsaUJBQVMsc0JBQU87QUFDZCxjQUFJQyxPQUFPQSxJQUFJM0MsSUFBZixFQUFxQjtBQUNuQixtQkFBS0ssUUFBTCxHQUFnQnNDLElBQUkzQyxJQUFwQjtBQUNEO0FBQ0YsU0FYUTtBQVlUNkMsY0FBTSxtQkFBTztBQUNYQyxrQkFBUUMsR0FBUixDQUFZQyxHQUFaO0FBQ0Q7QUFkUSxPQUFYO0FBZ0JEOzs7O0VBaEZtQ0MsZUFBS0MsSTtrQkFBdEJyRCxRIiwiZmlsZSI6InRhc2tsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJ3ZXB5LXJlZHV4XCI7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwicXNcIjtcbmltcG9ydCB2aWV3Y2FsZW5kYXIgZnJvbSBcIkAvY29tcG9uZW50cy92aWV3Y2FsZW5kYXJcIjtcblxuQGNvbm5lY3Qoe30pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0YXNrbGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgIFwidmFuLWljb25cIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2ljb24vaW5kZXhcIixcbiAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9wb3B1cC9pbmRleFwiLFxuICAgICAgXCJ2YW4tY2VsbFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vY2VsbC9pbmRleFwiLFxuICAgICAgXCJ2YW4tY2VsbC1ncm91cFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vY2VsbC1ncm91cC9pbmRleFwiLFxuICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vbmF2LWJhci9pbmRleFwiLFxuICAgICAgXCJ2YW4tZmllbGRcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2ZpZWxkL2luZGV4XCJcbiAgICB9XG4gIH07XG4gIGRhdGEgPSB7XG4gICAgbGlzdDogW10sXG4gICAgbm93dGltZWxpc3Q6IFtdLFxuICAgIGlzdmlldzogZmFsc2UsXG4gICAgc2hvdzogZmFsc2UsXG4gICAgdXNlcmxpc3Q6IFtdXG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2aWV3Y2FsZW5kYXJcIjp7fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgdmlld2NhbGVuZGFyXG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmdldGxpc3QoKTtcbiAgICB0aGlzLmdldHVzZXJsaXMoKTtcbiAgfVxuICBnZXRsaXN0KCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICAgbGV0IHVzZXIgPSB3eC5nZXRTdG9yYWdlU3luYyhcInVzZXJcIik7XG5cbiAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgIEZ1bmN0aW9uOiB7XG4gICAgICAgIE5hbWU6IFwiYnlrZXl3b3JkXCIsXG4gICAgICAgIEFyZ3M6IFtcIlwiLCBcIlNpdGVcIiwgXCJWZW51ZVwiLCBcIkN1c3RvbWVyXCJdXG4gICAgICB9XG4gICAgfTtcblxuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9CUE0vdGFzay9SZWFkL1Jvd3M/JHtzdHJpbmdpZnkocGFyYW0sIHtcbiAgICAgICAgYWxsb3dEb3RzOiB0cnVlLFxuICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlXG4gICAgICB9KX1gLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgbm93dGltZWxpc3Q6IHJlcy5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5ub3d0aW1lbGlzdCA9IHJlcy5kYXRhO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBnZXR1c2VybGlzKCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjUwMDAvRVJQL0FWTS9Vc2VyL1JlYWQvUm93c2AsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xuICAgICAgICAgIHRoaXMudXNlcmxpc3QgPSByZXMuZGF0YTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBvbkNsaWNrTGVmdCgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9LFxuICAgIHZpZXdyaWNoZW5nKGUpIHtcbiAgICAgIHRoaXMuaXN2aWV3ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICBsZXQgdGFza2luZm8gPSB0aGlzLm5vd3RpbWVsaXN0LmZpbHRlcihwID0+IHAuaWQgPT0gZS50YXJnZXQuaWQpWzBdO1xuICAgICAgdGFza2luZm8uZHVpamllcmVuID0gdGhpcy51c2VybGlzdC5maWx0ZXIocD0+cC5pZD09dGFza2luZm8ucmVjZXB0aW9uSWQpWzBdLnJlYWxOYW1lXG4gIFxuICAgICAgdGhpcy4kYnJvYWRjYXN0KFxuICAgICAgICBcImdldGNhbGVuZGFyaW5mb1wiLFxuICAgICAgIHRhc2tpbmZvXG4gICAgICApO1xuICAgIH0sXG4gICAgb25DbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iXX0=