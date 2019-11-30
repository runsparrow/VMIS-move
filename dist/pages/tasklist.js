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
      console.log(1);
    }
  }, {
    key: "onShow",
    value: function onShow() {
      this.getlist();
      console.log(2);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tsaXN0LmpzIl0sIm5hbWVzIjpbInRhc2tsaXN0IiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImxpc3QiLCJub3d0aW1lbGlzdCIsImlzdmlldyIsInNob3ciLCJjYWxlbmRhcmluZm8iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ2aWV3Y2FsZW5kYXIiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCJ2aWV3cmljaGVuZyIsImUiLCIkYnJvYWRjYXN0IiwiZmlsdGVyIiwicCIsImlkIiwidGFyZ2V0Iiwib25DbG9zZSIsImdldGxpc3QiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwicGFyYW0iLCJGdW5jdGlvbiIsIk5hbWUiLCJBcmdzIiwicmVxdWVzdCIsInVybCIsImFsbG93RG90cyIsImVuY29kZVZhbHVlc09ubHkiLCJtZXRob2QiLCJoZWFkZXIiLCJBdXRob3JpemF0aW9uIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJmYWlsIiwiZXJyIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQSxRLFdBRHBCLHdCQUFRLEVBQVIsQzs7Ozs7Ozs7Ozs7Ozs7MExBRUNDLE0sR0FBUztBQUNQQyx1QkFBaUI7QUFDZixvQkFBWSxnQ0FERztBQUVmLHFCQUFhLGlDQUZFO0FBR2Ysb0JBQVksZ0NBSEc7QUFJZiwwQkFBa0Isc0NBSkg7QUFLZix1QkFBZSxtQ0FMQTtBQU1mLHFCQUFhO0FBTkU7QUFEVixLLFFBVVRDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsbUJBQWEsRUFGUjtBQUdMQyxjQUFRLEtBSEg7QUFJTEMsWUFBTSxLQUpEO0FBS0xDLG9CQUFjO0FBTFQsSyxRQU9SQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxnQkFBZSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLDRCQUEyQixjQUE5QyxFQUFoQixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWQztBQURVLEssUUE0Q1pDLE8sR0FBVTtBQUNSQyxpQkFEUSx5QkFDTTtBQUNaLGFBQUtSLElBQUwsR0FBWSxLQUFaO0FBQ0EsYUFBS0QsTUFBTCxHQUFjLEtBQWQ7QUFDRCxPQUpPO0FBS1JVLGlCQUxRLHVCQUtJQyxDQUxKLEVBS087QUFDYixhQUFLWCxNQUFMLEdBQWMsSUFBZDtBQUNBLGFBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBS1csVUFBTCxDQUNFLGlCQURGLEVBRUUsS0FBS2IsV0FBTCxDQUFpQmMsTUFBakIsQ0FBd0I7QUFBQSxpQkFBS0MsRUFBRUMsRUFBRixJQUFRSixFQUFFSyxNQUFGLENBQVNELEVBQXRCO0FBQUEsU0FBeEIsRUFBa0QsQ0FBbEQsQ0FGRjtBQUlELE9BWk87QUFhUkUsYUFiUSxxQkFhRTtBQUNSLGFBQUtoQixJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUtELE1BQUwsR0FBYyxLQUFkO0FBQ0Q7QUFoQk8sSzs7Ozs7NkJBekNGO0FBQ04sV0FBS2tCLE9BQUw7QUFDQUMsY0FBUUMsR0FBUixDQUFZLENBQVo7QUFDRDs7OzZCQUNRO0FBQ1AsV0FBS0YsT0FBTDtBQUNBQyxjQUFRQyxHQUFSLENBQVksQ0FBWjtBQUNEOzs7OEJBQ1M7QUFBQTs7QUFDUixVQUFJQyxRQUFRQyxHQUFHQyxjQUFILENBQWtCLE9BQWxCLENBQVo7O0FBR0EsVUFBTUMsUUFBUTtBQUNaQyxrQkFBVTtBQUNSQyxnQkFBTSxXQURFO0FBRVJDLGdCQUFNLENBQUMsRUFBRCxFQUFLLE1BQUwsRUFBYSxPQUFiLEVBQXNCLFVBQXRCO0FBRkU7QUFERSxPQUFkOztBQU9BTCxTQUFHTSxPQUFILENBQVc7QUFDVEMsK0RBQXFELG1CQUFVTCxLQUFWLEVBQWlCO0FBQ3BFTSxxQkFBVyxJQUR5RDtBQUVwRUMsNEJBQWtCO0FBRmtELFNBQWpCLENBRDVDO0FBS1RDLGdCQUFRLE1BTEM7QUFNVEMsZ0JBQVE7QUFDTiwwQkFBZ0IsbUNBRFY7QUFFTkMscUNBQXlCYjtBQUZuQixTQU5DO0FBVVRjLGlCQUFTLHNCQUFPO0FBQ2QsY0FBSUMsT0FBT0EsSUFBSXZDLElBQWYsRUFBcUI7QUFDbkIsbUJBQUt3QyxPQUFMLENBQWE7QUFDWHRDLDJCQUFhcUMsSUFBSXZDO0FBRE4sYUFBYjtBQUdEO0FBQ0YsU0FoQlE7QUFpQlR5QyxjQUFNLG1CQUFPO0FBQ1huQixrQkFBUUMsR0FBUixDQUFZbUIsR0FBWjtBQUNEO0FBbkJRLE9BQVg7QUFxQkQ7Ozs7RUFoRW1DQyxlQUFLQyxJO2tCQUF0Qi9DLFEiLCJmaWxlIjoidGFza2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcIndlcHktcmVkdXhcIjtcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxc1wiO1xuaW1wb3J0IHZpZXdjYWxlbmRhciBmcm9tIFwiQC9jb21wb25lbnRzL3ZpZXdjYWxlbmRhclwiO1xuXG5AY29ubmVjdCh7fSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRhc2tsaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgXCJ2YW4taWNvblwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vaWNvbi9pbmRleFwiLFxuICAgICAgXCJ2YW4tcG9wdXBcIjogXCIuLi8uLi9zdGF0aWMvcGx1Z0luL3BvcHVwL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4XCIsXG4gICAgICBcInZhbi1jZWxsLWdyb3VwXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsLWdyb3VwL2luZGV4XCIsXG4gICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vLi4vc3RhdGljL3BsdWdJbi9uYXYtYmFyL2luZGV4XCIsXG4gICAgICBcInZhbi1maWVsZFwiOiBcIi4uLy4uL3N0YXRpYy9wbHVnSW4vZmllbGQvaW5kZXhcIlxuICAgIH1cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBsaXN0OiBbXSxcbiAgICBub3d0aW1lbGlzdDogW10sXG4gICAgaXN2aWV3OiBmYWxzZSxcbiAgICBzaG93OiBmYWxzZSxcbiAgICBjYWxlbmRhcmluZm86IHt9XG4gIH07XG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ2aWV3Y2FsZW5kYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmNhbGVuZGFyaW5mby5zeW5jXCI6XCJjYWxlbmRhcmluZm9cIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHZpZXdjYWxlbmRhclxuICB9O1xuICBvbkxvYWQoKXtcbiAgICB0aGlzLmdldGxpc3QoKTtcbiAgICBjb25zb2xlLmxvZygxKVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICB0aGlzLmdldGxpc3QoKTtcbiAgICBjb25zb2xlLmxvZygyKVxuICB9XG4gIGdldGxpc3QoKSB7XG4gICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJ0b2tlblwiKTtcblxuICAgXG4gICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICBGdW5jdGlvbjoge1xuICAgICAgICBOYW1lOiBcImJ5a2V5d29yZFwiLFxuICAgICAgICBBcmdzOiBbXCJcIiwgXCJTaXRlXCIsIFwiVmVudWVcIiwgXCJDdXN0b21lclwiXVxuICAgICAgfVxuICAgIH07XG5cbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9FUlAvQlBNL3Rhc2svUmVhZC9Sb3dzPyR7c3RyaW5naWZ5KHBhcmFtLCB7XG4gICAgICAgIGFsbG93RG90czogdHJ1ZSxcbiAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZVxuICAgICAgfSl9YCxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIG5vd3RpbWVsaXN0OiByZXMuZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG9uQ2xpY2tMZWZ0KCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICB0aGlzLmlzdmlldyA9IGZhbHNlO1xuICAgIH0sXG4gICAgdmlld3JpY2hlbmcoZSkge1xuICAgICAgdGhpcy5pc3ZpZXcgPSB0cnVlO1xuICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICAgIHRoaXMuJGJyb2FkY2FzdChcbiAgICAgICAgXCJnZXRjYWxlbmRhcmluZm9cIixcbiAgICAgICAgdGhpcy5ub3d0aW1lbGlzdC5maWx0ZXIocCA9PiBwLmlkID09IGUudGFyZ2V0LmlkKVswXVxuICAgICAgKTtcbiAgICB9LFxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXN2aWV3ID0gZmFsc2U7XG4gICAgfVxuICB9O1xufVxuIl19