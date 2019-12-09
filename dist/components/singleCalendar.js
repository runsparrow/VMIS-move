"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_wepy$component) {
  _inherits(Calendar, _wepy$component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: [],
      color: {
        type: String,
        default: "black"
      }
    }, _this.data = {
      datetimelist: [],
      weeksCh: ["一", "二", "三", "四", "五", "六", "日"],
      // 数组最后导出的日期
      currentList: [],
      // 当前日期
      nowTime: {},
      current: {
        year: "",
        month: "",
        day: "",
        formatDay: "",
        weekCh: ""
      },
      value: new Date(),
      viewTime: {
        year: "",
        month: "",
        day: "",
        formatDay: "",
        weekCh: ""
      },
      // 当前视图的day数组
      viewDays: [],
      initial: 0,
      image: {
        leftCan: "https://brcspace.oss-cn-shanghai.aliyuncs.com/left-can.png",
        rightCan: "https://brcspace.oss-cn-shanghai.aliyuncs.com/right-can.png"
      },
      // 月分初始化
      dataInitial: 0,
      // 初始化日期
      initialDate: ""
    }, _this.events = {
      getlist: function getlist(value) {
        var _this2 = this;

        //console.log('value', value);
        this.datetimelist = value;

        var _loop = function _loop(i) {
          if (_this2.datetimelist.find(function (p) {
            return (0, _moment2.default)(p.receptionDateTime).format("YYYY-MM-DD") == i.formatDay;
          })) {
            i.isday = true;
          }
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.viewDays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            _loop(i);
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
      }
    }, _this.methods = {
      // 点击上个月
      toPreMonth: function toPreMonth() {
        this.viewDays = this._getData((0, _moment2.default)(this.viewTime.formatDay).subtract(1, "days"));
        console.log("this.viewTime.formatDay", this.viewTime.formatDay);
        this.$emit("handleprevmonth", (0, _moment2.default)(this.viewTime.formatDay).format("YYYY-MM-DD"));

        this.$apply();
      },

      // 点击下个月
      toNextMonth: function toNextMonth() {
        this.viewDays = this._getData((0, _moment2.default)(this.viewTime.formatDay).endOf("month").add(1, "days"));
        console.log("this.viewTime.formatDay", this.viewTime.formatDay);

        this.$emit("handlenextmonth", (0, _moment2.default)(this.viewTime.formatDay).format("YYYY-MM-DD"));

        this.$apply();
      },

      // 改变最后导出的时间
      changeResultTime: function changeResultTime(e) {
        var item = e.currentTarget.dataset.item;
        console.log("item", item);
        this.current = item;
        this.$emit("hanleConfirm", item);
      }
    }, _this.watch = {
      value: function value(newValue, oldValue) {
        this._init(newValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: "onLoad",
    value: function onLoad(value) {
      console.log(2);
      this._init(value);
      this.nowTime = this.current;
      this.initialDate = this.current.formatDay;

      this.$apply();
    }
  }, {
    key: "onShow",
    value: function onShow() {
      console.log(1);
      this._setTime((0, _moment2.default)());
      this.$apply();
    }
  }, {
    key: "_getData",

    /**
     * _getData
     * 返回当前视图日期数组
     * @param time
     * @return [{day:31,month:3,year:2018},{day:1,month:4,year:2018},...]
     */
    value: function _getData() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)();

      this._setViewTime(time);
      // 令时间变为当月1号的
      var firstDay = time.startOf("month");
      // 计算当月1号是星期几
      var firstDayOfWeek = firstDay.format("E");
      // 计算上个月多余时间
      var last = this._calDate(firstDay.subtract(firstDayOfWeek - 1, "days"), firstDayOfWeek - 1);
      // 计算本月时间
      var current = this._calDate(firstDay, firstDay.daysInMonth());
      // 令时间变为本月末
      var endDay = time.subtract(1, "days");
      // 当月与末是星期几
      var endDayOfWeek = endDay.format("E");
      // 计算下个月多余时间
      var next = this._calDate(endDay.add(1, "days"), 7 - endDayOfWeek);
      return [].concat(_toConsumableArray(last), _toConsumableArray(current), _toConsumableArray(next));
    }
    /**
     * _setTime
     * 设定导出的时间
     * @param time moment对象
     */

  }, {
    key: "_setTime",
    value: function _setTime() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)();

      this.current = this._dealMoment(time);
    }
    /**
     * _setTime
     * 设定当前日历的时间
     * @param time moment对象
     */

  }, {
    key: "_setViewTime",
    value: function _setViewTime() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)();

      this.viewTime = this._dealMoment(time.startOf("month"));
    }
    /**
     * _calDate
     * 计算日期函数
     * @param time moment对象
     * @param length 返回数组的长度
     * @return 返回日期数组
     */

  }, {
    key: "_calDate",
    value: function _calDate(time, length) {
      var arr = [];
      for (var i = 0; i < length; i++) {
        arr.push(this._dealMoment(time));
        time.add(1, "days");
      }
      return arr;
    }
    /**
     * _dealMoment
     * 处理moment对象
     * @param time moment对象
     * @return 返回一个Object{year, month, day, formatDay}
     */

  }, {
    key: "_dealMoment",
    value: function _dealMoment(time) {
      var _time$toObject = time.toObject(),
          years = _time$toObject.years,
          months = _time$toObject.months,
          date = _time$toObject.date;

      return {
        year: years,
        month: months + 1,
        day: date,
        weekCh: "周" + this.weeksCh[time.format("E") - 1],
        formatDay: time.format("YYYY-MM-DD"),
        formatDate: time.format("MM-DD")
      };
    }
    /**
     * _init
     * 初始化
     * @param value '2018-02-02' YYYY-MM-DD
     */

  }, {
    key: "_init",
    value: function _init(value) {
      if (this.initial === 0) {
        this.viewDays = this._getData((0, _moment2.default)());
        this.viewDays.map(function (p) {
          return p.isday = false;
        });
        //console.log('this.viewDays', this.viewDays);
        this._setTime((0, _moment2.default)());
      }
      this.initial += 1;
    }
  }]);

  return Calendar;
}(_wepy2.default.component);

exports.default = Calendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZUNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwicHJvcHMiLCJsaXN0IiwiY29sb3IiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImRhdGEiLCJkYXRldGltZWxpc3QiLCJ3ZWVrc0NoIiwiY3VycmVudExpc3QiLCJub3dUaW1lIiwiY3VycmVudCIsInllYXIiLCJtb250aCIsImRheSIsImZvcm1hdERheSIsIndlZWtDaCIsInZhbHVlIiwiRGF0ZSIsInZpZXdUaW1lIiwidmlld0RheXMiLCJpbml0aWFsIiwiaW1hZ2UiLCJsZWZ0Q2FuIiwicmlnaHRDYW4iLCJkYXRhSW5pdGlhbCIsImluaXRpYWxEYXRlIiwiZXZlbnRzIiwiZ2V0bGlzdCIsImkiLCJmaW5kIiwicCIsInJlY2VwdGlvbkRhdGVUaW1lIiwiZm9ybWF0IiwiaXNkYXkiLCJtZXRob2RzIiwidG9QcmVNb250aCIsIl9nZXREYXRhIiwic3VidHJhY3QiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCIkYXBwbHkiLCJ0b05leHRNb250aCIsImVuZE9mIiwiYWRkIiwiY2hhbmdlUmVzdWx0VGltZSIsImUiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJfaW5pdCIsIl9zZXRUaW1lIiwidGltZSIsIl9zZXRWaWV3VGltZSIsImZpcnN0RGF5Iiwic3RhcnRPZiIsImZpcnN0RGF5T2ZXZWVrIiwibGFzdCIsIl9jYWxEYXRlIiwiZGF5c0luTW9udGgiLCJlbmREYXkiLCJlbmREYXlPZldlZWsiLCJuZXh0IiwiX2RlYWxNb21lbnQiLCJsZW5ndGgiLCJhcnIiLCJwdXNoIiwidG9PYmplY3QiLCJ5ZWFycyIsIm1vbnRocyIsImRhdGUiLCJmb3JtYXREYXRlIiwibWFwIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7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OUQsY0FBTTRELEtBREQ7QUFFTDNELGVBQU80RCxTQUFTLENBRlg7QUFHTDNELGFBQUs0RCxJQUhBO0FBSUwxRCxnQkFBUSxNQUFNLEtBQUtSLE9BQUwsQ0FBYWdELEtBQUt2QixNQUFMLENBQVksR0FBWixJQUFtQixDQUFoQyxDQUpUO0FBS0xsQixtQkFBV3lDLEtBQUt2QixNQUFMLENBQVksWUFBWixDQUxOO0FBTUwwQyxvQkFBWW5CLEtBQUt2QixNQUFMLENBQVksT0FBWjtBQU5QLE9BQVA7QUFRRDtBQUNEOzs7Ozs7OzswQkFLTWhCLEssRUFBTztBQUNYLFVBQUksS0FBS0ksT0FBTCxLQUFpQixDQUFyQixFQUF3QjtBQUN0QixhQUFLRCxRQUFMLEdBQWdCLEtBQUtpQixRQUFMLENBQWMsdUJBQWQsQ0FBaEI7QUFDQSxhQUFLakIsUUFBTCxDQUFjd0QsR0FBZCxDQUFrQjtBQUFBLGlCQUFNN0MsRUFBRUcsS0FBRixHQUFVLEtBQWhCO0FBQUEsU0FBbEI7QUFDQTtBQUNBLGFBQUtxQixRQUFMLENBQWMsdUJBQWQ7QUFDRDtBQUNELFdBQUtsQyxPQUFMLElBQWdCLENBQWhCO0FBQ0Q7Ozs7RUF6TW1Dd0QsZUFBS0MsUzs7a0JBQXRCL0UsUSIsImZpbGUiOiJzaW5nbGVDYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcImJsYWNrXCJcbiAgICB9XG4gIH07XG4gIGRhdGEgPSB7XG4gICAgZGF0ZXRpbWVsaXN0OiBbXSxcbiAgICB3ZWVrc0NoOiBbXCLkuIBcIiwgXCLkuoxcIiwgXCLkuIlcIiwgXCLlm5tcIiwgXCLkupRcIiwgXCLlha1cIiwgXCLml6VcIl0sXG4gICAgLy8g5pWw57uE5pyA5ZCO5a+85Ye655qE5pel5pyfXG4gICAgY3VycmVudExpc3Q6IFtdLFxuICAgIC8vIOW9k+WJjeaXpeacn1xuICAgIG5vd1RpbWU6IHt9LFxuICAgIGN1cnJlbnQ6IHtcbiAgICAgIHllYXI6IFwiXCIsXG4gICAgICBtb250aDogXCJcIixcbiAgICAgIGRheTogXCJcIixcbiAgICAgIGZvcm1hdERheTogXCJcIixcbiAgICAgIHdlZWtDaDogXCJcIlxuICAgIH0sXG4gICAgdmFsdWU6IG5ldyBEYXRlKCksXG4gICAgdmlld1RpbWU6IHtcbiAgICAgIHllYXI6IFwiXCIsXG4gICAgICBtb250aDogXCJcIixcbiAgICAgIGRheTogXCJcIixcbiAgICAgIGZvcm1hdERheTogXCJcIixcbiAgICAgIHdlZWtDaDogXCJcIlxuICAgIH0sXG4gICAgLy8g5b2T5YmN6KeG5Zu+55qEZGF55pWw57uEXG4gICAgdmlld0RheXM6IFtdLFxuICAgIGluaXRpYWw6IDAsXG4gICAgaW1hZ2U6IHtcbiAgICAgIGxlZnRDYW46IFwiaHR0cHM6Ly9icmNzcGFjZS5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2xlZnQtY2FuLnBuZ1wiLFxuICAgICAgcmlnaHRDYW46IFwiaHR0cHM6Ly9icmNzcGFjZS5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3JpZ2h0LWNhbi5wbmdcIlxuICAgIH0sXG4gICAgLy8g5pyI5YiG5Yid5aeL5YyWXG4gICAgZGF0YUluaXRpYWw6IDAsXG4gICAgLy8g5Yid5aeL5YyW5pel5pyfXG4gICAgaW5pdGlhbERhdGU6IFwiXCJcbiAgfTtcbiAgb25Mb2FkKHZhbHVlKSB7XG4gICAgIGNvbnNvbGUubG9nKDIpXG4gICAgdGhpcy5faW5pdCh2YWx1ZSk7XG4gICAgdGhpcy5ub3dUaW1lID0gdGhpcy5jdXJyZW50O1xuICAgIHRoaXMuaW5pdGlhbERhdGUgPSB0aGlzLmN1cnJlbnQuZm9ybWF0RGF5O1xuXG4gICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxuICBvblNob3coKXtcbiAgICBjb25zb2xlLmxvZygxKVxuICAgICB0aGlzLl9zZXRUaW1lKG1vbWVudCgpKTtcbiAgICAgdGhpcy4kYXBwbHkoKTtcbiAgfVxuICBldmVudHMgPSB7XG4gICAgZ2V0bGlzdCh2YWx1ZSkge1xuICAgICAgLy9jb25zb2xlLmxvZygndmFsdWUnLCB2YWx1ZSk7XG4gICAgICB0aGlzLmRhdGV0aW1lbGlzdCA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLnZpZXdEYXlzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmRhdGV0aW1lbGlzdC5maW5kKFxuICAgICAgICAgICAgcCA9PiBtb21lbnQocC5yZWNlcHRpb25EYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSA9PSBpLmZvcm1hdERheVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgaS5pc2RheSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g54K55Ye75LiK5Liq5pyIXG4gICAgdG9QcmVNb250aCgpIHtcbiAgICAgIHRoaXMudmlld0RheXMgPSB0aGlzLl9nZXREYXRhKFxuICAgICAgICBtb21lbnQodGhpcy52aWV3VGltZS5mb3JtYXREYXkpLnN1YnRyYWN0KDEsIFwiZGF5c1wiKVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy52aWV3VGltZS5mb3JtYXREYXlcIiwgdGhpcy52aWV3VGltZS5mb3JtYXREYXkpO1xuICAgICAgdGhpcy4kZW1pdChcbiAgICAgICAgXCJoYW5kbGVwcmV2bW9udGhcIixcbiAgICAgICAgbW9tZW50KHRoaXMudmlld1RpbWUuZm9ybWF0RGF5KS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXG4gICAgICApO1xuXG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgLy8g54K55Ye75LiL5Liq5pyIXG4gICAgdG9OZXh0TW9udGgoKSB7XG4gICAgICB0aGlzLnZpZXdEYXlzID0gdGhpcy5fZ2V0RGF0YShcbiAgICAgICAgbW9tZW50KHRoaXMudmlld1RpbWUuZm9ybWF0RGF5KVxuICAgICAgICAgIC5lbmRPZihcIm1vbnRoXCIpXG4gICAgICAgICAgLmFkZCgxLCBcImRheXNcIilcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMudmlld1RpbWUuZm9ybWF0RGF5XCIsIHRoaXMudmlld1RpbWUuZm9ybWF0RGF5KTtcblxuICAgICAgdGhpcy4kZW1pdChcbiAgICAgICAgXCJoYW5kbGVuZXh0bW9udGhcIixcbiAgICAgICAgbW9tZW50KHRoaXMudmlld1RpbWUuZm9ybWF0RGF5KS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXG4gICAgICApO1xuXG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgLy8g5pS55Y+Y5pyA5ZCO5a+85Ye655qE5pe26Ze0XG4gICAgY2hhbmdlUmVzdWx0VGltZShlKSB7XG4gICAgICBsZXQgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW07XG4gICAgICBjb25zb2xlLmxvZyhcIml0ZW1cIixpdGVtKVxuICAgICAgdGhpcy5jdXJyZW50ID0gaXRlbTtcbiAgICAgIHRoaXMuJGVtaXQoXCJoYW5sZUNvbmZpcm1cIiwgaXRlbSk7XG4gICAgfVxuICB9O1xuICB3YXRjaCA9IHtcbiAgICB2YWx1ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIHRoaXMuX2luaXQobmV3VmFsdWUpO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIF9nZXREYXRhXG4gICAqIOi/lOWbnuW9k+WJjeinhuWbvuaXpeacn+aVsOe7hFxuICAgKiBAcGFyYW0gdGltZVxuICAgKiBAcmV0dXJuIFt7ZGF5OjMxLG1vbnRoOjMseWVhcjoyMDE4fSx7ZGF5OjEsbW9udGg6NCx5ZWFyOjIwMTh9LC4uLl1cbiAgICovXG4gIF9nZXREYXRhKHRpbWUgPSBtb21lbnQoKSkge1xuICAgIHRoaXMuX3NldFZpZXdUaW1lKHRpbWUpO1xuICAgIC8vIOS7pOaXtumXtOWPmOS4uuW9k+aciDHlj7fnmoRcbiAgICBjb25zdCBmaXJzdERheSA9IHRpbWUuc3RhcnRPZihcIm1vbnRoXCIpO1xuICAgIC8vIOiuoeeul+W9k+aciDHlj7fmmK/mmJ/mnJ/lh6BcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IGZpcnN0RGF5LmZvcm1hdChcIkVcIik7XG4gICAgLy8g6K6h566X5LiK5Liq5pyI5aSa5L2Z5pe26Ze0XG4gICAgY29uc3QgbGFzdCA9IHRoaXMuX2NhbERhdGUoXG4gICAgICBmaXJzdERheS5zdWJ0cmFjdChmaXJzdERheU9mV2VlayAtIDEsIFwiZGF5c1wiKSxcbiAgICAgIGZpcnN0RGF5T2ZXZWVrIC0gMVxuICAgICk7XG4gICAgLy8g6K6h566X5pys5pyI5pe26Ze0XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuX2NhbERhdGUoZmlyc3REYXksIGZpcnN0RGF5LmRheXNJbk1vbnRoKCkpO1xuICAgIC8vIOS7pOaXtumXtOWPmOS4uuacrOaciOacq1xuICAgIGNvbnN0IGVuZERheSA9IHRpbWUuc3VidHJhY3QoMSwgXCJkYXlzXCIpO1xuICAgIC8vIOW9k+aciOS4juacq+aYr+aYn+acn+WHoFxuICAgIGNvbnN0IGVuZERheU9mV2VlayA9IGVuZERheS5mb3JtYXQoXCJFXCIpO1xuICAgIC8vIOiuoeeul+S4i+S4quaciOWkmuS9meaXtumXtFxuICAgIGNvbnN0IG5leHQgPSB0aGlzLl9jYWxEYXRlKGVuZERheS5hZGQoMSwgXCJkYXlzXCIpLCA3IC0gZW5kRGF5T2ZXZWVrKTtcbiAgICByZXR1cm4gWy4uLmxhc3QsIC4uLmN1cnJlbnQsIC4uLm5leHRdO1xuICB9XG4gIC8qKlxuICAgKiBfc2V0VGltZVxuICAgKiDorr7lrprlr7zlh7rnmoTml7bpl7RcbiAgICogQHBhcmFtIHRpbWUgbW9tZW505a+56LGhXG4gICAqL1xuICBfc2V0VGltZSh0aW1lID0gbW9tZW50KCkpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLl9kZWFsTW9tZW50KHRpbWUpO1xuICB9XG4gIC8qKlxuICAgKiBfc2V0VGltZVxuICAgKiDorr7lrprlvZPliY3ml6XljobnmoTml7bpl7RcbiAgICogQHBhcmFtIHRpbWUgbW9tZW505a+56LGhXG4gICAqL1xuICBfc2V0Vmlld1RpbWUodGltZSA9IG1vbWVudCgpKSB7XG4gICAgdGhpcy52aWV3VGltZSA9IHRoaXMuX2RlYWxNb21lbnQodGltZS5zdGFydE9mKFwibW9udGhcIikpO1xuICB9XG4gIC8qKlxuICAgKiBfY2FsRGF0ZVxuICAgKiDorqHnrpfml6XmnJ/lh73mlbBcbiAgICogQHBhcmFtIHRpbWUgbW9tZW505a+56LGhXG4gICAqIEBwYXJhbSBsZW5ndGgg6L+U5Zue5pWw57uE55qE6ZW/5bqmXG4gICAqIEByZXR1cm4g6L+U5Zue5pel5pyf5pWw57uEXG4gICAqL1xuICBfY2FsRGF0ZSh0aW1lLCBsZW5ndGgpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyLnB1c2godGhpcy5fZGVhbE1vbWVudCh0aW1lKSk7XG4gICAgICB0aW1lLmFkZCgxLCBcImRheXNcIik7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgLyoqXG4gICAqIF9kZWFsTW9tZW50XG4gICAqIOWkhOeQhm1vbWVudOWvueixoVxuICAgKiBAcGFyYW0gdGltZSBtb21lbnTlr7nosaFcbiAgICogQHJldHVybiDov5Tlm57kuIDkuKpPYmplY3R7eWVhciwgbW9udGgsIGRheSwgZm9ybWF0RGF5fVxuICAgKi9cbiAgX2RlYWxNb21lbnQodGltZSkge1xuICAgIGxldCB7IHllYXJzLCBtb250aHMsIGRhdGUgfSA9IHRpbWUudG9PYmplY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgeWVhcjogeWVhcnMsXG4gICAgICBtb250aDogbW9udGhzICsgMSxcbiAgICAgIGRheTogZGF0ZSxcbiAgICAgIHdlZWtDaDogXCLlkahcIiArIHRoaXMud2Vla3NDaFt0aW1lLmZvcm1hdChcIkVcIikgLSAxXSxcbiAgICAgIGZvcm1hdERheTogdGltZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLFxuICAgICAgZm9ybWF0RGF0ZTogdGltZS5mb3JtYXQoXCJNTS1ERFwiKVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIF9pbml0XG4gICAqIOWIneWni+WMllxuICAgKiBAcGFyYW0gdmFsdWUgJzIwMTgtMDItMDInIFlZWVktTU0tRERcbiAgICovXG4gIF9pbml0KHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbCA9PT0gMCkge1xuICAgICAgdGhpcy52aWV3RGF5cyA9IHRoaXMuX2dldERhdGEobW9tZW50KCkpO1xuICAgICAgdGhpcy52aWV3RGF5cy5tYXAocCA9PiAocC5pc2RheSA9IGZhbHNlKSk7XG4gICAgICAvL2NvbnNvbGUubG9nKCd0aGlzLnZpZXdEYXlzJywgdGhpcy52aWV3RGF5cyk7XG4gICAgICB0aGlzLl9zZXRUaW1lKG1vbWVudCgpKTtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsICs9IDE7XG4gIH1cbn1cbiJdfQ==