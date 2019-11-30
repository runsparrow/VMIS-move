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
      calendarinfo: {}
    }, _this.$repeat = {}, _this.$props = { "viewcalendar": { "xmlns:v-bind": "", "v-bind:calendarinfo.sync": "calendarinfo" } }, _this.$events = {}, _this.components = {
      viewcalendar: _viewcalendar2.default
    }, _this.methods = {
      onClickLeft: function onClickLeft() {
        this.show = false;
        this.isview = false;
      },
      viewricheng: function viewricheng(e) {
        console.log("e.target.id", e);
        this.isview = true;
        this.show = true;
        this.$broadcast("getcalendarinfo", this.nowtimelist.filter(function (p) {
          return p.id == e.target.id;
        })[0]);
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
    }
  }, {
    key: "onShow",
    value: function onShow() {
      this.getlist();
    }
  }, {
    key: "getlist",
    value: function getlist() {
      var _this2 = this;

      var token = wx.getStorageSync("token");

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
  }]);

  return tasklist;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tasklist , 'pages/tasklist'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tsaXN0LmpzIl0sIm5hbWVzIjpbInRhc2tsaXN0IiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImxpc3QiLCJub3d0aW1lbGlzdCIsImlzdmlldyIsInNob3ciLCJjYWxlbmRhcmluZm8iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ2aWV3Y2FsZW5kYXIiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCJ2aWV3cmljaGVuZyIsImUiLCJjb25zb2xlIiwibG9nIiwiJGJyb2FkY2FzdCIsImZpbHRlciIsInAiLCJpZCIsInRhcmdldCIsIm9uQ2xvc2UiLCJnZXRsaXN0IiwidG9rZW4iLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwicGFyYW0iLCJGdW5jdGlvbiIsIk5hbWUiLCJBcmdzIiwicmVxdWVzdCIsInVybCIsImFsbG93RG90cyIsImVuY29kZVZhbHVlc09ubHkiLCJtZXRob2QiLCJoZWFkZXIiLCJBdXRob3JpemF0aW9uIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJmYWlsIiwiZXJyIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxRLFdBRHBCLHdCQUFRLEVBQVIsQzs7Ozs7Ozs7Ozs7Ozs7MExBRUNDLE0sR0FBUztBQUNQQyx1QkFBaUI7QUFDZixvQkFBWSxnQ0FERztBQUVmLHFCQUFhLGlDQUZFO0FBR2Ysb0JBQVksZ0NBSEc7QUFJZiwwQkFBa0Isc0NBSkg7QUFLZix1QkFBZSxtQ0FMQTtBQU1mLHFCQUFhO0FBTkU7QUFEVixLLFFBVVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsbUJBQWEsRUFGUjtBQUdMQyxjQUFRLEtBSEg7QUFJTEMsWUFBTSxLQUpEO0FBS0xDLG9CQUFjO0FBTFQsSyxRQU9SQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDRCQUEyQixjQUE5QyxFQUFoQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUEwQ1pDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaLGFBQUtSLElBQUwsR0FBWSxLQUFaO0FBQ0EsYUFBS0QsTUFBTCxHQUFjLEtBQWQ7QUFDRCxPQUpPO0FBS1JVLGlCQUxRLHVCQUtJQyxDQUxKLEVBS087QUFDYkMsZ0JBQVFDLEdBQVIsQ0FBWSxhQUFaLEVBQTBCRixDQUExQjtBQUNBLGFBQUtYLE1BQUwsR0FBYyxJQUFkO0FBQ0EsYUFBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLYSxVQUFMLENBQ0UsaUJBREYsRUFFRSxLQUFLZixXQUFMLENBQWlCZ0IsTUFBakIsQ0FBd0I7QUFBQSxpQkFBS0MsRUFBRUMsRUFBRixJQUFRTixFQUFFTyxNQUFGLENBQVNELEVBQXRCO0FBQUEsU0FBeEIsRUFBa0QsQ0FBbEQsQ0FGRjtBQUlELE9BYk87QUFjUkUsYUFkUSxxQkFjRTtBQUNSLGFBQUtsQixJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUtELE1BQUwsR0FBYyxLQUFkO0FBQ0Q7QUFqQk8sSzs7Ozs7NkJBdkNGO0FBQ04sV0FBS29CLE9BQUw7QUFDRDs7OzZCQUNRO0FBQ1AsV0FBS0EsT0FBTDtBQUNEOzs7OEJBQ1M7QUFBQTs7QUFDUixVQUFJQyxRQUFRQyxHQUFHQyxjQUFILENBQWtCLE9BQWxCLENBQVo7O0FBRUEsVUFBTUMsUUFBUTtBQUNaQyxrQkFBVTtBQUNSQyxnQkFBTSxXQURFO0FBRVJDLGdCQUFNLENBQUMsRUFBRCxFQUFLLE1BQUwsRUFBYSxPQUFiLEVBQXNCLFVBQXRCO0FBRkU7QUFERSxPQUFkOztBQU9BTCxTQUFHTSxPQUFILENBQVc7QUFDVEMsK0RBQXFELG1CQUFVTCxLQUFWLEVBQWlCO0FBQ3BFTSxxQkFBVyxJQUR5RDtBQUVwRUMsNEJBQWtCO0FBRmtELFNBQWpCLENBRDVDO0FBS1RDLGdCQUFRLE1BTEM7QUFNVEMsZ0JBQVE7QUFDTiwwQkFBZ0IsbUNBRFY7QUFFTkMscUNBQXlCYjtBQUZuQixTQU5DO0FBVVRjLGlCQUFTLHNCQUFPO0FBQ2QsY0FBSUMsT0FBT0EsSUFBSXZDLElBQWYsRUFBcUI7QUFDbkIsbUJBQUt3QyxPQUFMLENBQWE7QUFDWHRDLDJCQUFhcUMsSUFBSXZDO0FBRE4sYUFBYjtBQUdBLG1CQUFLRSxXQUFMLEdBQW1CcUMsSUFBSXZDLElBQXZCO0FBQ0Q7QUFDRixTQWpCUTtBQWtCVHlDLGNBQU0sbUJBQU87QUFDWDFCLGtCQUFRQyxHQUFSLENBQVkwQixHQUFaO0FBQ0Q7QUFwQlEsT0FBWDtBQXNCRDs7OztFQTlEbUNDLGVBQUtDLEk7a0JBQXRCL0MsUSIsImZpbGUiOiJ0YXNrbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwid2VweS1yZWR1eFwiO1xuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInFzXCI7XG5pbXBvcnQgdmlld2NhbGVuZGFyIGZyb20gXCJAL2NvbXBvbmVudHMvdmlld2NhbGVuZGFyXCI7XG5cbkBjb25uZWN0KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFza2xpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICBcInZhbi1pY29uXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9pY29uL2luZGV4XCIsXG4gICAgICBcInZhbi1wb3B1cFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vcG9wdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGxcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwvaW5kZXhcIixcbiAgICAgIFwidmFuLWNlbGwtZ3JvdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwtZ3JvdXAvaW5kZXhcIixcbiAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL25hdi1iYXIvaW5kZXhcIixcbiAgICAgIFwidmFuLWZpZWxkXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9maWVsZC9pbmRleFwiXG4gICAgfVxuICB9O1xuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIG5vd3RpbWVsaXN0OiBbXSxcbiAgICBpc3ZpZXc6IGZhbHNlLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIGNhbGVuZGFyaW5mbzoge31cbiAgfTtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInZpZXdjYWxlbmRhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y2FsZW5kYXJpbmZvLnN5bmNcIjpcImNhbGVuZGFyaW5mb1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgdmlld2NhbGVuZGFyXG4gIH07XG4gIG9uTG9hZCgpe1xuICAgIHRoaXMuZ2V0bGlzdCgpO1xuICB9XG4gIG9uU2hvdygpIHtcbiAgICB0aGlzLmdldGxpc3QoKTtcbiAgfVxuICBnZXRsaXN0KCkge1xuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKFwidG9rZW5cIik7XG4gICBcbiAgICBjb25zdCBwYXJhbSA9IHtcbiAgICAgIEZ1bmN0aW9uOiB7XG4gICAgICAgIE5hbWU6IFwiYnlrZXl3b3JkXCIsXG4gICAgICAgIEFyZ3M6IFtcIlwiLCBcIlNpdGVcIiwgXCJWZW51ZVwiLCBcIkN1c3RvbWVyXCJdXG4gICAgICB9XG4gICAgfTtcblxuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9CUE0vdGFzay9SZWFkL1Jvd3M/JHtzdHJpbmdpZnkocGFyYW0sIHtcbiAgICAgICAgYWxsb3dEb3RzOiB0cnVlLFxuICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlXG4gICAgICB9KX1gLFxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgbm93dGltZWxpc3Q6IHJlcy5kYXRhXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5ub3d0aW1lbGlzdCA9IHJlcy5kYXRhXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgb25DbGlja0xlZnQoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXN2aWV3ID0gZmFsc2U7XG4gICAgfSxcbiAgICB2aWV3cmljaGVuZyhlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImUudGFyZ2V0LmlkXCIsZSlcbiAgICAgIHRoaXMuaXN2aWV3ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICB0aGlzLiRicm9hZGNhc3QoXG4gICAgICAgIFwiZ2V0Y2FsZW5kYXJpbmZvXCIsXG4gICAgICAgIHRoaXMubm93dGltZWxpc3QuZmlsdGVyKHAgPT4gcC5pZCA9PSBlLnRhcmdldC5pZClbMF1cbiAgICAgICk7XG4gICAgfSxcbiAgICBvbkNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzdmlldyA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==