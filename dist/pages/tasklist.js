'use strict';

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
        'van-icon': '../../static/plugIn/icon/index',
        'van-popup': '../../static/plugIn/popup/index',
        'van-cell': '../../static/plugIn/cell/index',
        'van-cell-group': '../../static/plugIn/cell-group/index',
        'van-nav-bar': '../../static/plugIn/nav-bar/index',
        'van-field': '../../static/plugIn/field/index'
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
        this.$broadcast('getcalendarinfo', this.nowtimelist.filter(function (p) {
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
    key: 'onLoad',
    value: function onLoad() {
      this.getlist();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.getlist();
    }
  }, {
    key: 'getlist',
    value: function getlist() {
      var _this2 = this;

      var param = {
        Function: {
          Name: 'bykeyword',
          Args: ['', 'Site', 'Venue', 'Customer']
        }
      };

      wx.request({
        url: 'http://localhost:5000/ERP/BPM/task/Read/Rows?' + (0, _qs.stringify)(param, {
          allowDots: true,
          encodeValuesOnly: true
        }),
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
          //Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6Iua9mOa0gee-pCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJFUlBBcGkuRW50aXRpZXMuQVZNLlVzZXIiLCJpcCI6IjEyNy4wLjAuMSIsIm5iZiI6MTU3Mzk3NDU1MCwiZXhwIjoxNTc0MDYwOTUwLCJpc3MiOiJvY2Vsb3QiLCJhdWQiOiJldmVyeW9uZSJ9.lwPyby8LJfPjH_XigknRGsN_tLFYt4-KEvUa6GA596o'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tsaXN0LmpzIl0sIm5hbWVzIjpbInRhc2tsaXN0IiwiY29uZmlnIiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsImxpc3QiLCJub3d0aW1lbGlzdCIsImlzdmlldyIsInNob3ciLCJjYWxlbmRhcmluZm8iLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ2aWV3Y2FsZW5kYXIiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCJ2aWV3cmljaGVuZyIsImUiLCIkYnJvYWRjYXN0IiwiZmlsdGVyIiwicCIsImlkIiwidGFyZ2V0Iiwib25DbG9zZSIsImdldGxpc3QiLCJwYXJhbSIsIkZ1bmN0aW9uIiwiTmFtZSIsIkFyZ3MiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJhbGxvd0RvdHMiLCJlbmNvZGVWYWx1ZXNPbmx5IiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsInNldERhdGEiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImVyciIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUdxQkEsUSxXQURwQix3QkFBUSxFQUFSLEM7Ozs7Ozs7Ozs7Ozs7OzBMQUVDQyxNLEdBQVM7QUFDUEMsdUJBQWlCO0FBQ2Ysb0JBQVksZ0NBREc7QUFFZixxQkFBYSxpQ0FGRTtBQUdmLG9CQUFZLGdDQUhHO0FBSWYsMEJBQWtCLHNDQUpIO0FBS2YsdUJBQWUsbUNBTEE7QUFNZixxQkFBYTtBQU5FO0FBRFYsSyxRQVVUQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLG1CQUFhLEVBRlI7QUFHTEMsY0FBUSxLQUhIO0FBSUxDLFlBQU0sS0FKRDtBQUtMQyxvQkFBYztBQUxULEssUUFPUkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsZ0JBQWUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQiw0QkFBMkIsY0FBOUMsRUFBaEIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDVkM7QUFEVSxLLFFBdUNaQyxPLEdBQVU7QUFDUkMsaUJBRFEseUJBQ007QUFDWixhQUFLUixJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUtELE1BQUwsR0FBYyxLQUFkO0FBQ0QsT0FKTztBQUtSVSxpQkFMUSx1QkFLSUMsQ0FMSixFQUtPO0FBQ2IsYUFBS1gsTUFBTCxHQUFjLElBQWQ7QUFDQSxhQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLGFBQUtXLFVBQUwsQ0FDRSxpQkFERixFQUVFLEtBQUtiLFdBQUwsQ0FBaUJjLE1BQWpCLENBQXdCO0FBQUEsaUJBQUtDLEVBQUVDLEVBQUYsSUFBUUosRUFBRUssTUFBRixDQUFTRCxFQUF0QjtBQUFBLFNBQXhCLEVBQWtELENBQWxELENBRkY7QUFJRCxPQVpPO0FBYVJFLGFBYlEscUJBYUU7QUFDUixhQUFLaEIsSUFBTCxHQUFZLEtBQVo7QUFDQSxhQUFLRCxNQUFMLEdBQWMsS0FBZDtBQUNEO0FBaEJPLEs7Ozs7OzZCQXBDRDtBQUNQLFdBQUtrQixPQUFMO0FBQ0Q7Ozs2QkFDUTtBQUNOLFdBQUtBLE9BQUw7QUFDRjs7OzhCQUNTO0FBQUE7O0FBQ1IsVUFBTUMsUUFBUTtBQUNaQyxrQkFBVTtBQUNSQyxnQkFBTSxXQURFO0FBRVJDLGdCQUFNLENBQUMsRUFBRCxFQUFLLE1BQUwsRUFBYSxPQUFiLEVBQXNCLFVBQXRCO0FBRkU7QUFERSxPQUFkOztBQU9BQyxTQUFHQyxPQUFILENBQVc7QUFDVEMsK0RBQXFELG1CQUFVTixLQUFWLEVBQWlCO0FBQ3BFTyxxQkFBVyxJQUR5RDtBQUVwRUMsNEJBQWtCO0FBRmtELFNBQWpCLENBRDVDO0FBS1RDLGdCQUFRLE1BTEM7QUFNVEMsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFDaEI7QUFGTSxTQU5DO0FBVVRDLGlCQUFTLHNCQUFPO0FBQ2QsY0FBSUMsT0FBT0EsSUFBSWxDLElBQWYsRUFBcUI7QUFDbkIsbUJBQUttQyxPQUFMLENBQWE7QUFDWGpDLDJCQUFhZ0MsSUFBSWxDO0FBRE4sYUFBYjtBQUdEO0FBQ0YsU0FoQlE7QUFpQlRvQyxjQUFNLG1CQUFPO0FBQ1hDLGtCQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDRDtBQW5CUSxPQUFYO0FBcUJEOzs7O0VBM0RtQ0MsZUFBS0MsSTtrQkFBdEI1QyxRIiwiZmlsZSI6InRhc2tsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICd3ZXB5LXJlZHV4JztcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gJ3FzJztcbmltcG9ydCB2aWV3Y2FsZW5kYXIgZnJvbSAnQC9jb21wb25lbnRzL3ZpZXdjYWxlbmRhcic7XG5cbkBjb25uZWN0KHt9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGFza2xpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAndmFuLWljb24nOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9pY29uL2luZGV4JyxcbiAgICAgICd2YW4tcG9wdXAnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9wb3B1cC9pbmRleCcsXG4gICAgICAndmFuLWNlbGwnOiAnLi4vLi4vc3RhdGljL3BsdWdJbi9jZWxsL2luZGV4JyxcbiAgICAgICd2YW4tY2VsbC1ncm91cCc6ICcuLi8uLi9zdGF0aWMvcGx1Z0luL2NlbGwtZ3JvdXAvaW5kZXgnLFxuICAgICAgJ3Zhbi1uYXYtYmFyJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vbmF2LWJhci9pbmRleCcsXG4gICAgICAndmFuLWZpZWxkJzogJy4uLy4uL3N0YXRpYy9wbHVnSW4vZmllbGQvaW5kZXgnXG4gICAgfVxuICB9O1xuICBkYXRhID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIG5vd3RpbWVsaXN0OiBbXSxcbiAgICBpc3ZpZXc6IGZhbHNlLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIGNhbGVuZGFyaW5mbzoge31cbiAgfTtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInZpZXdjYWxlbmRhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y2FsZW5kYXJpbmZvLnN5bmNcIjpcImNhbGVuZGFyaW5mb1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgdmlld2NhbGVuZGFyXG4gIH07XG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmdldGxpc3QoKTtcbiAgfVxuICBvblNob3coKSB7XG4gICAgIHRoaXMuZ2V0bGlzdCgpO1xuICB9XG4gIGdldGxpc3QoKSB7XG4gICAgY29uc3QgcGFyYW0gPSB7XG4gICAgICBGdW5jdGlvbjoge1xuICAgICAgICBOYW1lOiAnYnlrZXl3b3JkJyxcbiAgICAgICAgQXJnczogWycnLCAnU2l0ZScsICdWZW51ZScsICdDdXN0b21lciddXG4gICAgICB9XG4gICAgfTtcblxuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL0VSUC9CUE0vdGFzay9SZWFkL1Jvd3M/JHtzdHJpbmdpZnkocGFyYW0sIHtcbiAgICAgICAgYWxsb3dEb3RzOiB0cnVlLFxuICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlXG4gICAgICB9KX1gLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgIC8vQXV0aG9yaXphdGlvbjonQmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpvZEhSd09pOHZjMk5vWlcxaGN5NTRiV3h6YjJGd0xtOXlaeTkzY3k4eU1EQTFMekExTDJsa1pXNTBhWFI1TDJOc1lXbHRjeTl6YVdRaU9pSXhJaXdpYUhSMGNEb3ZMM05qYUdWdFlYTXVlRzFzYzI5aGNDNXZjbWN2ZDNNdk1qQXdOUzh3TlM5cFpHVnVkR2wwZVM5amJHRnBiWE12Ym1GdFpTSTZJbUZrYldsdUlpd2lhSFIwY0RvdkwzTmphR1Z0WVhNdWVHMXNjMjloY0M1dmNtY3ZkM012TWpBd05TOHdOUzlwWkdWdWRHbDBlUzlqYkdGcGJYTXZjM1Z5Ym1GdFpTSTZJdWE5bU9hMGdlZS1wQ0lzSW1oMGRIQTZMeTl6WTJobGJXRnpMbTFwWTNKdmMyOW1kQzVqYjIwdmQzTXZNakF3T0M4d05pOXBaR1Z1ZEdsMGVTOWpiR0ZwYlhNdmNtOXNaU0k2SW1Ga2JXbHVJaXdpYUhSMGNEb3ZMM05qYUdWdFlYTXVlRzFzYzI5aGNDNXZjbWN2ZDNNdk1qQXdOUzh3TlM5cFpHVnVkR2wwZVM5amJHRnBiWE12Ym1GdFpXbGtaVzUwYVdacFpYSWlPaUpGVWxCQmNHa3VSVzUwYVhScFpYTXVRVlpOTGxWelpYSWlMQ0pwY0NJNklqRXlOeTR3TGpBdU1TSXNJbTVpWmlJNk1UVTNNemszTkRVMU1Dd2laWGh3SWpveE5UYzBNRFl3T1RVd0xDSnBjM01pT2lKdlkyVnNiM1FpTENKaGRXUWlPaUpsZG1WeWVXOXVaU0o5Lmx3UHlieThMSmZQakhfWGlna25SR3NOX3RMRll0NC1LRXZVYTZHQTU5Nm8nXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBub3d0aW1lbGlzdDogcmVzLmRhdGFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBvbkNsaWNrTGVmdCgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9LFxuICAgIHZpZXdyaWNoZW5nKGUpIHtcbiAgICAgIHRoaXMuaXN2aWV3ID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgICB0aGlzLiRicm9hZGNhc3QoXG4gICAgICAgICdnZXRjYWxlbmRhcmluZm8nLFxuICAgICAgICB0aGlzLm5vd3RpbWVsaXN0LmZpbHRlcihwID0+IHAuaWQgPT0gZS50YXJnZXQuaWQpWzBdXG4gICAgICApO1xuICAgIH0sXG4gICAgb25DbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgdGhpcy5pc3ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH07XG59XG4iXX0=