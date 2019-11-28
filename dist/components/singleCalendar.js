'use strict';

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
        default: 'black'
      }
    }, _this.data = {
      datetimelist: [],
      weeksCh: ['一', '二', '三', '四', '五', '六', '日'],
      // 数组最后导出的日期
      currentList: [],
      // 当前日期
      nowTime: {},
      current: {
        year: '',
        month: '',
        day: '',
        formatDay: '',
        weekCh: ''
      },
      value: new Date(),
      viewTime: {
        year: '',
        month: '',
        day: '',
        formatDay: '',
        weekCh: ''
      },
      // 当前视图的day数组
      viewDays: [],
      initial: 0,
      image: {
        leftCan: 'https://brcspace.oss-cn-shanghai.aliyuncs.com/left-can.png',
        rightCan: 'https://brcspace.oss-cn-shanghai.aliyuncs.com/right-can.png'
      },
      // 月分初始化
      dataInitial: 0,
      // 初始化日期
      initialDate: ''
    }, _this.events = {
      getlist: function getlist(value) {
        var _this2 = this;

        console.log('value', value);
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
        this.viewDays = this._getData((0, _moment2.default)(this.viewTime.formatDay).subtract(1, 'days'));
        if (this.nowTime.month > 1) {
          this.nowTime.month--;
          //console.log('this.nowTime.month', this.nowTime.month);
          this.$emit('handleprevmonth', new Date(this.nowTime.year + '-' + this.nowTime.month + '-1'));
        } else {
          this.nowTime.month = 12;
          //console.log('this.nowTime.month', this.nowTime.month);
          this.$emit('handleprevmonth', new Date(this.nowTime.year + '-' + this.nowTime.month + '-1'));
        }
        this.$apply();
      },

      // 点击下个月
      toNextMonth: function toNextMonth() {
        this.viewDays = this._getData((0, _moment2.default)(this.viewTime.formatDay).endOf('month').add(1, 'days'));
        if (this.nowTime.month < 12) {
          this.nowTime.month++;
          //console.log('this.nowTime.month', this.nowTime.month);
          this.$emit('handlenextmonth', new Date(this.nowTime.year + '-' + this.nowTime.month + '-1'));
        } else {
          this.nowTime.month = 1;
          //console.log('this.nowTime.month', this.nowTime.month);
          this.$emit('handlenextmonth', new Date(this.nowTime.year + '-' + this.nowTime.month + '-1'));
        }

        this.$apply();
      },

      // 改变最后导出的时间
      changeResultTime: function changeResultTime(e) {
        var item = e.currentTarget.dataset.item;
        this.current = item;
        this.$emit('hanleConfirm', item);
      }
    }, _this.watch = {
      value: function value(newValue, oldValue) {
        this._init(newValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'onLoad',
    value: function onLoad(value) {
      console.log('list2222', this.list);
      this._init(value);
      this.nowTime = this.current;
      this.initialDate = this.current.formatDay;

      this.$apply();
    }
  }, {
    key: '_getData',

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
      var firstDay = time.startOf('month');
      // 计算当月1号是星期几
      var firstDayOfWeek = firstDay.format('E');
      // 计算上个月多余时间
      var last = this._calDate(firstDay.subtract(firstDayOfWeek - 1, 'days'), firstDayOfWeek - 1);
      // 计算本月时间
      var current = this._calDate(firstDay, firstDay.daysInMonth());
      // 令时间变为本月末
      var endDay = time.subtract(1, 'days');
      // 当月与末是星期几
      var endDayOfWeek = endDay.format('E');
      // 计算下个月多余时间
      var next = this._calDate(endDay.add(1, 'days'), 7 - endDayOfWeek);
      return [].concat(_toConsumableArray(last), _toConsumableArray(current), _toConsumableArray(next));
    }
    /**
     * _setTime
     * 设定导出的时间
     * @param time moment对象
     */

  }, {
    key: '_setTime',
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
    key: '_setViewTime',
    value: function _setViewTime() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _moment2.default)();

      this.viewTime = this._dealMoment(time.startOf('month'));
    }
    /**
     * _calDate
     * 计算日期函数
     * @param time moment对象
     * @param length 返回数组的长度
     * @return 返回日期数组
     */

  }, {
    key: '_calDate',
    value: function _calDate(time, length) {
      var arr = [];
      for (var i = 0; i < length; i++) {
        arr.push(this._dealMoment(time));
        time.add(1, 'days');
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
    key: '_dealMoment',
    value: function _dealMoment(time) {
      var _time$toObject = time.toObject(),
          years = _time$toObject.years,
          months = _time$toObject.months,
          date = _time$toObject.date;

      return {
        year: years,
        month: months + 1,
        day: date,
        weekCh: '周' + this.weeksCh[time.format('E') - 1],
        formatDay: time.format('YYYY-MM-DD'),
        formatDate: time.format('MM-DD')
      };
    }
    /**
     * _init
     * 初始化
     * @param value '2018-02-02' YYYY-MM-DD
     */

  }, {
    key: '_init',
    value: function _init(value) {
      if (this.initial === 0) {
        this.viewDays = this._getData((0, _moment2.default)(value));
        this.viewDays.map(function (p) {
          return p.isday = false;
        });
        console.log('this.viewDays', this.viewDays);
        this._setTime((0, _moment2.default)(value));
      }
      this.initial += 1;
    }
  }]);

  return Calendar;
}(_wepy2.default.component);

exports.default = Calendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZUNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwicHJvcHMiLCJsaXN0IiwiY29sb3IiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImRhdGEiLCJkYXRldGltZWxpc3QiLCJ3ZWVrc0NoIiwiY3VycmVudExpc3QiLCJub3dUaW1lIiwiY3VycmVudCIsInllYXIiLCJtb250aCIsImRheSIsImZvcm1hdERheSIsIndlZWtDaCIsInZhbHVlIiwiRGF0ZSIsInZpZXdUaW1lIiwidmlld0RheXMiLCJpbml0aWFsIiwiaW1hZ2UiLCJsZWZ0Q2FuIiwicmlnaHRDYW4iLCJkYXRhSW5pdGlhbCIsImluaXRpYWxEYXRlIiwiZXZlbnRzIiwiZ2V0bGlzdCIsImNvbnNvbGUiLCJsb2ciLCJpIiwiZmluZCIsInAiLCJyZWNlcHRpb25EYXRlVGltZSIsImZvcm1hdCIsImlzZGF5IiwibWV0aG9kcyIsInRvUHJlTW9udGgiLCJfZ2V0RGF0YSIsInN1YnRyYWN0IiwiJGVtaXQiLCIkYXBwbHkiLCJ0b05leHRNb250aCIsImVuZE9mIiwiYWRkIiwiY2hhbmdlUmVzdWx0VGltZSIsImUiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJfaW5pdCIsInRpbWUiLCJfc2V0Vmlld1RpbWUiLCJmaXJzdERheSIsInN0YXJ0T2YiLCJmaXJzdERheU9mV2VlayIsImxhc3QiLCJfY2FsRGF0ZSIsImRheXNJbk1vbnRoIiwiZW5kRGF5IiwiZW5kRGF5T2ZXZWVrIiwibmV4dCIsIl9kZWFsTW9tZW50IiwibGVuZ3RoIiwiYXJyIiwicHVzaCIsInRvT2JqZWN0IiwieWVhcnMiLCJtb250aHMiLCJkYXRlIiwiZm9ybWF0RGF0ZSIsIm1hcCIsIl9zZXRUaW1lIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7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S0ksT0FBTCxJQUFnQixDQUFoQjtBQUNEOzs7O0VBdE1tQ3dELGVBQUtDLFM7O2tCQUF0Qi9FLFEiLCJmaWxlIjoic2luZ2xlQ2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gIHByb3BzID0ge1xuICAgIGxpc3Q6IFtdLFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYmxhY2snXG4gICAgfVxuICB9O1xuICBkYXRhID0ge1xuICAgIGRhdGV0aW1lbGlzdDogW10sXG4gICAgd2Vla3NDaDogWyfkuIAnLCAn5LqMJywgJ+S4iScsICflm5snLCAn5LqUJywgJ+WFrScsICfml6UnXSxcbiAgICAvLyDmlbDnu4TmnIDlkI7lr7zlh7rnmoTml6XmnJ9cbiAgICBjdXJyZW50TGlzdDogW10sXG4gICAgLy8g5b2T5YmN5pel5pyfXG4gICAgbm93VGltZToge30sXG4gICAgY3VycmVudDoge1xuICAgICAgeWVhcjogJycsXG4gICAgICBtb250aDogJycsXG4gICAgICBkYXk6ICcnLFxuICAgICAgZm9ybWF0RGF5OiAnJyxcbiAgICAgIHdlZWtDaDogJydcbiAgICB9LFxuICAgIHZhbHVlOiBuZXcgRGF0ZSgpLFxuICAgIHZpZXdUaW1lOiB7XG4gICAgICB5ZWFyOiAnJyxcbiAgICAgIG1vbnRoOiAnJyxcbiAgICAgIGRheTogJycsXG4gICAgICBmb3JtYXREYXk6ICcnLFxuICAgICAgd2Vla0NoOiAnJ1xuICAgIH0sXG4gICAgLy8g5b2T5YmN6KeG5Zu+55qEZGF55pWw57uEXG4gICAgdmlld0RheXM6IFtdLFxuICAgIGluaXRpYWw6IDAsXG4gICAgaW1hZ2U6IHtcbiAgICAgIGxlZnRDYW46ICdodHRwczovL2JyY3NwYWNlLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vbGVmdC1jYW4ucG5nJyxcbiAgICAgIHJpZ2h0Q2FuOiAnaHR0cHM6Ly9icmNzcGFjZS5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL3JpZ2h0LWNhbi5wbmcnXG4gICAgfSxcbiAgICAvLyDmnIjliIbliJ3lp4vljJZcbiAgICBkYXRhSW5pdGlhbDogMCxcbiAgICAvLyDliJ3lp4vljJbml6XmnJ9cbiAgICBpbml0aWFsRGF0ZTogJydcbiAgfTtcbiAgb25Mb2FkKHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coJ2xpc3QyMjIyJywgdGhpcy5saXN0KTtcbiAgICB0aGlzLl9pbml0KHZhbHVlKTtcbiAgICB0aGlzLm5vd1RpbWUgPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5pbml0aWFsRGF0ZSA9IHRoaXMuY3VycmVudC5mb3JtYXREYXk7XG5cbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG4gIGV2ZW50cyA9IHtcbiAgICBnZXRsaXN0KHZhbHVlKSB7XG4gICAgICBjb25zb2xlLmxvZygndmFsdWUnLCB2YWx1ZSk7XG4gICAgICB0aGlzLmRhdGV0aW1lbGlzdCA9IHZhbHVlO1xuICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLnZpZXdEYXlzKSB7XG4gICAgICAgIGlmKHRoaXMuZGF0ZXRpbWVsaXN0LmZpbmQocD0+bW9tZW50KHAucmVjZXB0aW9uRGF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tRERcIik9PWkuZm9ybWF0RGF5KSlcbiAgICAgICAge1xuICAgICAgICAgIGkuaXNkYXkgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g54K55Ye75LiK5Liq5pyIXG4gICAgdG9QcmVNb250aCgpIHtcbiAgICAgIHRoaXMudmlld0RheXMgPSB0aGlzLl9nZXREYXRhKFxuICAgICAgICBtb21lbnQodGhpcy52aWV3VGltZS5mb3JtYXREYXkpLnN1YnRyYWN0KDEsICdkYXlzJylcbiAgICAgICk7XG4gICAgICBpZiAodGhpcy5ub3dUaW1lLm1vbnRoID4gMSkge1xuICAgICAgICB0aGlzLm5vd1RpbWUubW9udGgtLTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndGhpcy5ub3dUaW1lLm1vbnRoJywgdGhpcy5ub3dUaW1lLm1vbnRoKTtcbiAgICAgICAgdGhpcy4kZW1pdCgnaGFuZGxlcHJldm1vbnRoJyxuZXcgRGF0ZShgJHt0aGlzLm5vd1RpbWUueWVhcn0tJHt0aGlzLm5vd1RpbWUubW9udGh9LTFgKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5vd1RpbWUubW9udGggPSAxMjtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndGhpcy5ub3dUaW1lLm1vbnRoJywgdGhpcy5ub3dUaW1lLm1vbnRoKTtcbiAgICAgICAgdGhpcy4kZW1pdCgnaGFuZGxlcHJldm1vbnRoJywgbmV3IERhdGUoYCR7dGhpcy5ub3dUaW1lLnllYXJ9LSR7dGhpcy5ub3dUaW1lLm1vbnRofS0xYCkpO1xuICAgICAgfVxuICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+S4i+S4quaciFxuICAgIHRvTmV4dE1vbnRoKCkge1xuICAgICAgdGhpcy52aWV3RGF5cyA9IHRoaXMuX2dldERhdGEoXG4gICAgICAgIG1vbWVudCh0aGlzLnZpZXdUaW1lLmZvcm1hdERheSlcbiAgICAgICAgICAuZW5kT2YoJ21vbnRoJylcbiAgICAgICAgICAuYWRkKDEsICdkYXlzJylcbiAgICAgICk7XG4gICAgICBpZiAodGhpcy5ub3dUaW1lLm1vbnRoIDwgMTIpIHtcbiAgICAgICAgdGhpcy5ub3dUaW1lLm1vbnRoKys7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RoaXMubm93VGltZS5tb250aCcsIHRoaXMubm93VGltZS5tb250aCk7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2hhbmRsZW5leHRtb250aCcsIG5ldyBEYXRlKGAke3RoaXMubm93VGltZS55ZWFyfS0ke3RoaXMubm93VGltZS5tb250aH0tMWApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubm93VGltZS5tb250aCA9IDE7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3RoaXMubm93VGltZS5tb250aCcsIHRoaXMubm93VGltZS5tb250aCk7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2hhbmRsZW5leHRtb250aCcsbmV3IERhdGUoYCR7dGhpcy5ub3dUaW1lLnllYXJ9LSR7dGhpcy5ub3dUaW1lLm1vbnRofS0xYCkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgLy8g5pS55Y+Y5pyA5ZCO5a+85Ye655qE5pe26Ze0XG4gICAgY2hhbmdlUmVzdWx0VGltZShlKSB7XG4gICAgICBsZXQgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW07XG4gICAgICB0aGlzLmN1cnJlbnQgPSBpdGVtO1xuICAgICAgdGhpcy4kZW1pdCgnaGFubGVDb25maXJtJywgaXRlbSk7XG4gICAgfVxuICB9O1xuICB3YXRjaCA9IHtcbiAgICB2YWx1ZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgIHRoaXMuX2luaXQobmV3VmFsdWUpO1xuICAgIH1cbiAgfTtcbiAgLyoqXG4gICAqIF9nZXREYXRhXG4gICAqIOi/lOWbnuW9k+WJjeinhuWbvuaXpeacn+aVsOe7hFxuICAgKiBAcGFyYW0gdGltZVxuICAgKiBAcmV0dXJuIFt7ZGF5OjMxLG1vbnRoOjMseWVhcjoyMDE4fSx7ZGF5OjEsbW9udGg6NCx5ZWFyOjIwMTh9LC4uLl1cbiAgICovXG4gIF9nZXREYXRhKHRpbWUgPSBtb21lbnQoKSkge1xuICAgIHRoaXMuX3NldFZpZXdUaW1lKHRpbWUpO1xuICAgIC8vIOS7pOaXtumXtOWPmOS4uuW9k+aciDHlj7fnmoRcbiAgICBjb25zdCBmaXJzdERheSA9IHRpbWUuc3RhcnRPZignbW9udGgnKTtcbiAgICAvLyDorqHnrpflvZPmnIgx5Y+35piv5pif5pyf5YegXG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBmaXJzdERheS5mb3JtYXQoJ0UnKTtcbiAgICAvLyDorqHnrpfkuIrkuKrmnIjlpJrkvZnml7bpl7RcbiAgICBjb25zdCBsYXN0ID0gdGhpcy5fY2FsRGF0ZShcbiAgICAgIGZpcnN0RGF5LnN1YnRyYWN0KGZpcnN0RGF5T2ZXZWVrIC0gMSwgJ2RheXMnKSxcbiAgICAgIGZpcnN0RGF5T2ZXZWVrIC0gMVxuICAgICk7XG4gICAgLy8g6K6h566X5pys5pyI5pe26Ze0XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuX2NhbERhdGUoZmlyc3REYXksIGZpcnN0RGF5LmRheXNJbk1vbnRoKCkpO1xuICAgIC8vIOS7pOaXtumXtOWPmOS4uuacrOaciOacq1xuICAgIGNvbnN0IGVuZERheSA9IHRpbWUuc3VidHJhY3QoMSwgJ2RheXMnKTtcbiAgICAvLyDlvZPmnIjkuI7mnKvmmK/mmJ/mnJ/lh6BcbiAgICBjb25zdCBlbmREYXlPZldlZWsgPSBlbmREYXkuZm9ybWF0KCdFJyk7XG4gICAgLy8g6K6h566X5LiL5Liq5pyI5aSa5L2Z5pe26Ze0XG4gICAgY29uc3QgbmV4dCA9IHRoaXMuX2NhbERhdGUoZW5kRGF5LmFkZCgxLCAnZGF5cycpLCA3IC0gZW5kRGF5T2ZXZWVrKTtcbiAgICByZXR1cm4gWy4uLmxhc3QsIC4uLmN1cnJlbnQsIC4uLm5leHRdO1xuICB9XG4gIC8qKlxuICAgKiBfc2V0VGltZVxuICAgKiDorr7lrprlr7zlh7rnmoTml7bpl7RcbiAgICogQHBhcmFtIHRpbWUgbW9tZW505a+56LGhXG4gICAqL1xuICBfc2V0VGltZSh0aW1lID0gbW9tZW50KCkpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLl9kZWFsTW9tZW50KHRpbWUpO1xuICB9XG4gIC8qKlxuICAgKiBfc2V0VGltZVxuICAgKiDorr7lrprlvZPliY3ml6XljobnmoTml7bpl7RcbiAgICogQHBhcmFtIHRpbWUgbW9tZW505a+56LGhXG4gICAqL1xuICBfc2V0Vmlld1RpbWUodGltZSA9IG1vbWVudCgpKSB7XG4gICAgdGhpcy52aWV3VGltZSA9IHRoaXMuX2RlYWxNb21lbnQodGltZS5zdGFydE9mKCdtb250aCcpKTtcbiAgfVxuICAvKipcbiAgICogX2NhbERhdGVcbiAgICog6K6h566X5pel5pyf5Ye95pWwXG4gICAqIEBwYXJhbSB0aW1lIG1vbWVudOWvueixoVxuICAgKiBAcGFyYW0gbGVuZ3RoIOi/lOWbnuaVsOe7hOeahOmVv+W6plxuICAgKiBAcmV0dXJuIOi/lOWbnuaXpeacn+aVsOe7hFxuICAgKi9cbiAgX2NhbERhdGUodGltZSwgbGVuZ3RoKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKHRoaXMuX2RlYWxNb21lbnQodGltZSkpO1xuICAgICAgdGltZS5hZGQoMSwgJ2RheXMnKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICAvKipcbiAgICogX2RlYWxNb21lbnRcbiAgICog5aSE55CGbW9tZW505a+56LGhXG4gICAqIEBwYXJhbSB0aW1lIG1vbWVudOWvueixoVxuICAgKiBAcmV0dXJuIOi/lOWbnuS4gOS4qk9iamVjdHt5ZWFyLCBtb250aCwgZGF5LCBmb3JtYXREYXl9XG4gICAqL1xuICBfZGVhbE1vbWVudCh0aW1lKSB7XG4gICAgbGV0IHsgeWVhcnMsIG1vbnRocywgZGF0ZSB9ID0gdGltZS50b09iamVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB5ZWFyOiB5ZWFycyxcbiAgICAgIG1vbnRoOiBtb250aHMgKyAxLFxuICAgICAgZGF5OiBkYXRlLFxuICAgICAgd2Vla0NoOiAn5ZGoJyArIHRoaXMud2Vla3NDaFt0aW1lLmZvcm1hdCgnRScpIC0gMV0sXG4gICAgICBmb3JtYXREYXk6IHRpbWUuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICBmb3JtYXREYXRlOiB0aW1lLmZvcm1hdCgnTU0tREQnKVxuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIF9pbml0XG4gICAqIOWIneWni+WMllxuICAgKiBAcGFyYW0gdmFsdWUgJzIwMTgtMDItMDInIFlZWVktTU0tRERcbiAgICovXG4gIF9pbml0KHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbCA9PT0gMCkge1xuICAgICAgdGhpcy52aWV3RGF5cyA9IHRoaXMuX2dldERhdGEobW9tZW50KHZhbHVlKSk7XG4gICAgICAgIHRoaXMudmlld0RheXMubWFwKHAgPT4gcC5pc2RheSA9IGZhbHNlKTtcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLnZpZXdEYXlzJywgdGhpcy52aWV3RGF5cyk7XG4gICAgICB0aGlzLl9zZXRUaW1lKG1vbWVudCh2YWx1ZSkpO1xuICAgIH1cbiAgICB0aGlzLmluaXRpYWwgKz0gMTtcbiAgfVxufVxuIl19