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
        //console.log('this.viewDays', this.viewDays);
        this._setTime((0, _moment2.default)(value));
      }
      this.initial += 1;
    }
  }]);

  return Calendar;
}(_wepy2.default.component);

exports.default = Calendar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZUNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwicHJvcHMiLCJsaXN0IiwiY29sb3IiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImRhdGEiLCJkYXRldGltZWxpc3QiLCJ3ZWVrc0NoIiwiY3VycmVudExpc3QiLCJub3dUaW1lIiwiY3VycmVudCIsInllYXIiLCJtb250aCIsImRheSIsImZvcm1hdERheSIsIndlZWtDaCIsInZhbHVlIiwiRGF0ZSIsInZpZXdUaW1lIiwidmlld0RheXMiLCJpbml0aWFsIiwiaW1hZ2UiLCJsZWZ0Q2FuIiwicmlnaHRDYW4iLCJkYXRhSW5pdGlhbCIsImluaXRpYWxEYXRlIiwiZXZlbnRzIiwiZ2V0bGlzdCIsImkiLCJmaW5kIiwicCIsInJlY2VwdGlvbkRhdGVUaW1lIiwiZm9ybWF0IiwiaXNkYXkiLCJtZXRob2RzIiwidG9QcmVNb250aCIsIl9nZXREYXRhIiwic3VidHJhY3QiLCIkZW1pdCIsIiRhcHBseSIsInRvTmV4dE1vbnRoIiwiZW5kT2YiLCJhZGQiLCJjaGFuZ2VSZXN1bHRUaW1lIiwiZSIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIl9pbml0IiwidGltZSIsIl9zZXRWaWV3VGltZSIsImZpcnN0RGF5Iiwic3RhcnRPZiIsImZpcnN0RGF5T2ZXZWVrIiwibGFzdCIsIl9jYWxEYXRlIiwiZGF5c0luTW9udGgiLCJlbmREYXkiLCJlbmREYXlPZldlZWsiLCJuZXh0IiwiX2RlYWxNb21lbnQiLCJsZW5ndGgiLCJhcnIiLCJwdXNoIiwidG9PYmplY3QiLCJ5ZWFycyIsIm1vbnRocyIsImRhdGUiLCJmb3JtYXREYXRlIiwibWFwIiwiX3NldFRpbWUiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25C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WUFBSUMsSUFBSixDQUFTLEtBQUtILFdBQUwsQ0FBaUJYLElBQWpCLENBQVQ7QUFDQUEsYUFBS1YsR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFaO0FBQ0Q7QUFDRCxhQUFPdUIsR0FBUDtBQUNEO0FBQ0Q7Ozs7Ozs7OztnQ0FNWWIsSSxFQUFNO0FBQUEsMkJBQ2NBLEtBQUtlLFFBQUwsRUFEZDtBQUFBLFVBQ1ZDLEtBRFUsa0JBQ1ZBLEtBRFU7QUFBQSxVQUNIQyxNQURHLGtCQUNIQSxNQURHO0FBQUEsVUFDS0MsSUFETCxrQkFDS0EsSUFETDs7QUFFaEIsYUFBTztBQUNMM0QsY0FBTXlELEtBREQ7QUFFTHhELGVBQU95RCxTQUFTLENBRlg7QUFHTHhELGFBQUt5RCxJQUhBO0FBSUx2RCxnQkFBUSxNQUFNLEtBQUtSLE9BQUwsQ0FBYTZDLEtBQUtwQixNQUFMLENBQVksR0FBWixJQUFtQixDQUFoQyxDQUpUO0FBS0xsQixtQkFBV3NDLEtBQUtwQixNQUFMLENBQVksWUFBWixDQUxOO0FBTUx1QyxvQkFBWW5CLEtBQUtwQixNQUFMLENBQVksT0FBWjtBQU5QLE9BQVA7QUFRRDtBQUNEOzs7Ozs7OzswQkFLTWhCLEssRUFBTztBQUNYLFVBQUksS0FBS0ksT0FBTCxLQUFpQixDQUFyQixFQUF3QjtBQUN0QixhQUFLRCxRQUFMLEdBQWdCLEtBQUtpQixRQUFMLENBQWMsc0JBQU9wQixLQUFQLENBQWQsQ0FBaEI7QUFDRSxhQUFLRyxRQUFMLENBQWNxRCxHQUFkLENBQWtCO0FBQUEsaUJBQUsxQyxFQUFFRyxLQUFGLEdBQVUsS0FBZjtBQUFBLFNBQWxCO0FBQ0Y7QUFDQSxhQUFLd0MsUUFBTCxDQUFjLHNCQUFPekQsS0FBUCxDQUFkO0FBQ0Q7QUFDRCxXQUFLSSxPQUFMLElBQWdCLENBQWhCO0FBQ0Q7Ozs7RUFyTW1Dc0QsZUFBS0MsUzs7a0JBQXRCN0UsUSIsImZpbGUiOiJzaW5nbGVDYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbGlzdDogW10sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdibGFjaydcbiAgICB9XG4gIH07XG4gIGRhdGEgPSB7XG4gICAgZGF0ZXRpbWVsaXN0OiBbXSxcbiAgICB3ZWVrc0NoOiBbJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJywgJ+aXpSddLFxuICAgIC8vIOaVsOe7hOacgOWQjuWvvOWHuueahOaXpeacn1xuICAgIGN1cnJlbnRMaXN0OiBbXSxcbiAgICAvLyDlvZPliY3ml6XmnJ9cbiAgICBub3dUaW1lOiB7fSxcbiAgICBjdXJyZW50OiB7XG4gICAgICB5ZWFyOiAnJyxcbiAgICAgIG1vbnRoOiAnJyxcbiAgICAgIGRheTogJycsXG4gICAgICBmb3JtYXREYXk6ICcnLFxuICAgICAgd2Vla0NoOiAnJ1xuICAgIH0sXG4gICAgdmFsdWU6IG5ldyBEYXRlKCksXG4gICAgdmlld1RpbWU6IHtcbiAgICAgIHllYXI6ICcnLFxuICAgICAgbW9udGg6ICcnLFxuICAgICAgZGF5OiAnJyxcbiAgICAgIGZvcm1hdERheTogJycsXG4gICAgICB3ZWVrQ2g6ICcnXG4gICAgfSxcbiAgICAvLyDlvZPliY3op4blm77nmoRkYXnmlbDnu4RcbiAgICB2aWV3RGF5czogW10sXG4gICAgaW5pdGlhbDogMCxcbiAgICBpbWFnZToge1xuICAgICAgbGVmdENhbjogJ2h0dHBzOi8vYnJjc3BhY2Uub3NzLWNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS9sZWZ0LWNhbi5wbmcnLFxuICAgICAgcmlnaHRDYW46ICdodHRwczovL2JyY3NwYWNlLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vcmlnaHQtY2FuLnBuZydcbiAgICB9LFxuICAgIC8vIOaciOWIhuWIneWni+WMllxuICAgIGRhdGFJbml0aWFsOiAwLFxuICAgIC8vIOWIneWni+WMluaXpeacn1xuICAgIGluaXRpYWxEYXRlOiAnJ1xuICB9O1xuICBvbkxvYWQodmFsdWUpIHtcbiAgICB0aGlzLl9pbml0KHZhbHVlKTtcbiAgICB0aGlzLm5vd1RpbWUgPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5pbml0aWFsRGF0ZSA9IHRoaXMuY3VycmVudC5mb3JtYXREYXk7XG5cbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG4gIGV2ZW50cyA9IHtcbiAgICBnZXRsaXN0KHZhbHVlKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgIHRoaXMuZGF0ZXRpbWVsaXN0ID0gdmFsdWU7XG4gICAgICBmb3IgKGxldCBpIG9mIHRoaXMudmlld0RheXMpIHtcbiAgICAgICAgaWYodGhpcy5kYXRldGltZWxpc3QuZmluZChwPT5tb21lbnQocC5yZWNlcHRpb25EYXRlVGltZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKT09aS5mb3JtYXREYXkpKVxuICAgICAgICB7XG4gICAgICAgICAgaS5pc2RheSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDngrnlh7vkuIrkuKrmnIhcbiAgICB0b1ByZU1vbnRoKCkge1xuICAgICAgdGhpcy52aWV3RGF5cyA9IHRoaXMuX2dldERhdGEoXG4gICAgICAgIG1vbWVudCh0aGlzLnZpZXdUaW1lLmZvcm1hdERheSkuc3VidHJhY3QoMSwgJ2RheXMnKVxuICAgICAgKTtcbiAgICAgIGlmICh0aGlzLm5vd1RpbWUubW9udGggPiAxKSB7XG4gICAgICAgIHRoaXMubm93VGltZS5tb250aC0tO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0aGlzLm5vd1RpbWUubW9udGgnLCB0aGlzLm5vd1RpbWUubW9udGgpO1xuICAgICAgICB0aGlzLiRlbWl0KCdoYW5kbGVwcmV2bW9udGgnLG5ldyBEYXRlKGAke3RoaXMubm93VGltZS55ZWFyfS0ke3RoaXMubm93VGltZS5tb250aH0tMWApKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubm93VGltZS5tb250aCA9IDEyO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0aGlzLm5vd1RpbWUubW9udGgnLCB0aGlzLm5vd1RpbWUubW9udGgpO1xuICAgICAgICB0aGlzLiRlbWl0KCdoYW5kbGVwcmV2bW9udGgnLCBuZXcgRGF0ZShgJHt0aGlzLm5vd1RpbWUueWVhcn0tJHt0aGlzLm5vd1RpbWUubW9udGh9LTFgKSk7XG4gICAgICB9XG4gICAgICB0aGlzLiRhcHBseSgpO1xuICAgIH0sXG4gICAgLy8g54K55Ye75LiL5Liq5pyIXG4gICAgdG9OZXh0TW9udGgoKSB7XG4gICAgICB0aGlzLnZpZXdEYXlzID0gdGhpcy5fZ2V0RGF0YShcbiAgICAgICAgbW9tZW50KHRoaXMudmlld1RpbWUuZm9ybWF0RGF5KVxuICAgICAgICAgIC5lbmRPZignbW9udGgnKVxuICAgICAgICAgIC5hZGQoMSwgJ2RheXMnKVxuICAgICAgKTtcbiAgICAgIGlmICh0aGlzLm5vd1RpbWUubW9udGggPCAxMikge1xuICAgICAgICB0aGlzLm5vd1RpbWUubW9udGgrKztcbiAgICAgICAgLy9jb25zb2xlLmxvZygndGhpcy5ub3dUaW1lLm1vbnRoJywgdGhpcy5ub3dUaW1lLm1vbnRoKTtcbiAgICAgICAgdGhpcy4kZW1pdCgnaGFuZGxlbmV4dG1vbnRoJywgbmV3IERhdGUoYCR7dGhpcy5ub3dUaW1lLnllYXJ9LSR7dGhpcy5ub3dUaW1lLm1vbnRofS0xYCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ub3dUaW1lLm1vbnRoID0gMTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndGhpcy5ub3dUaW1lLm1vbnRoJywgdGhpcy5ub3dUaW1lLm1vbnRoKTtcbiAgICAgICAgdGhpcy4kZW1pdCgnaGFuZGxlbmV4dG1vbnRoJyxuZXcgRGF0ZShgJHt0aGlzLm5vd1RpbWUueWVhcn0tJHt0aGlzLm5vd1RpbWUubW9udGh9LTFgKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICAvLyDmlLnlj5jmnIDlkI7lr7zlh7rnmoTml7bpl7RcbiAgICBjaGFuZ2VSZXN1bHRUaW1lKGUpIHtcbiAgICAgIGxldCBpdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbTtcbiAgICAgIHRoaXMuY3VycmVudCA9IGl0ZW07XG4gICAgICB0aGlzLiRlbWl0KCdoYW5sZUNvbmZpcm0nLCBpdGVtKTtcbiAgICB9XG4gIH07XG4gIHdhdGNoID0ge1xuICAgIHZhbHVlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgdGhpcy5faW5pdChuZXdWYWx1ZSk7XG4gICAgfVxuICB9O1xuICAvKipcbiAgICogX2dldERhdGFcbiAgICog6L+U5Zue5b2T5YmN6KeG5Zu+5pel5pyf5pWw57uEXG4gICAqIEBwYXJhbSB0aW1lXG4gICAqIEByZXR1cm4gW3tkYXk6MzEsbW9udGg6Myx5ZWFyOjIwMTh9LHtkYXk6MSxtb250aDo0LHllYXI6MjAxOH0sLi4uXVxuICAgKi9cbiAgX2dldERhdGEodGltZSA9IG1vbWVudCgpKSB7XG4gICAgdGhpcy5fc2V0Vmlld1RpbWUodGltZSk7XG4gICAgLy8g5Luk5pe26Ze05Y+Y5Li65b2T5pyIMeWPt+eahFxuICAgIGNvbnN0IGZpcnN0RGF5ID0gdGltZS5zdGFydE9mKCdtb250aCcpO1xuICAgIC8vIOiuoeeul+W9k+aciDHlj7fmmK/mmJ/mnJ/lh6BcbiAgICBjb25zdCBmaXJzdERheU9mV2VlayA9IGZpcnN0RGF5LmZvcm1hdCgnRScpO1xuICAgIC8vIOiuoeeul+S4iuS4quaciOWkmuS9meaXtumXtFxuICAgIGNvbnN0IGxhc3QgPSB0aGlzLl9jYWxEYXRlKFxuICAgICAgZmlyc3REYXkuc3VidHJhY3QoZmlyc3REYXlPZldlZWsgLSAxLCAnZGF5cycpLFxuICAgICAgZmlyc3REYXlPZldlZWsgLSAxXG4gICAgKTtcbiAgICAvLyDorqHnrpfmnKzmnIjml7bpl7RcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5fY2FsRGF0ZShmaXJzdERheSwgZmlyc3REYXkuZGF5c0luTW9udGgoKSk7XG4gICAgLy8g5Luk5pe26Ze05Y+Y5Li65pys5pyI5pyrXG4gICAgY29uc3QgZW5kRGF5ID0gdGltZS5zdWJ0cmFjdCgxLCAnZGF5cycpO1xuICAgIC8vIOW9k+aciOS4juacq+aYr+aYn+acn+WHoFxuICAgIGNvbnN0IGVuZERheU9mV2VlayA9IGVuZERheS5mb3JtYXQoJ0UnKTtcbiAgICAvLyDorqHnrpfkuIvkuKrmnIjlpJrkvZnml7bpl7RcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5fY2FsRGF0ZShlbmREYXkuYWRkKDEsICdkYXlzJyksIDcgLSBlbmREYXlPZldlZWspO1xuICAgIHJldHVybiBbLi4ubGFzdCwgLi4uY3VycmVudCwgLi4ubmV4dF07XG4gIH1cbiAgLyoqXG4gICAqIF9zZXRUaW1lXG4gICAqIOiuvuWumuWvvOWHuueahOaXtumXtFxuICAgKiBAcGFyYW0gdGltZSBtb21lbnTlr7nosaFcbiAgICovXG4gIF9zZXRUaW1lKHRpbWUgPSBtb21lbnQoKSkge1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuX2RlYWxNb21lbnQodGltZSk7XG4gIH1cbiAgLyoqXG4gICAqIF9zZXRUaW1lXG4gICAqIOiuvuWumuW9k+WJjeaXpeWOhueahOaXtumXtFxuICAgKiBAcGFyYW0gdGltZSBtb21lbnTlr7nosaFcbiAgICovXG4gIF9zZXRWaWV3VGltZSh0aW1lID0gbW9tZW50KCkpIHtcbiAgICB0aGlzLnZpZXdUaW1lID0gdGhpcy5fZGVhbE1vbWVudCh0aW1lLnN0YXJ0T2YoJ21vbnRoJykpO1xuICB9XG4gIC8qKlxuICAgKiBfY2FsRGF0ZVxuICAgKiDorqHnrpfml6XmnJ/lh73mlbBcbiAgICogQHBhcmFtIHRpbWUgbW9tZW505a+56LGhXG4gICAqIEBwYXJhbSBsZW5ndGgg6L+U5Zue5pWw57uE55qE6ZW/5bqmXG4gICAqIEByZXR1cm4g6L+U5Zue5pel5pyf5pWw57uEXG4gICAqL1xuICBfY2FsRGF0ZSh0aW1lLCBsZW5ndGgpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYXJyLnB1c2godGhpcy5fZGVhbE1vbWVudCh0aW1lKSk7XG4gICAgICB0aW1lLmFkZCgxLCAnZGF5cycpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIC8qKlxuICAgKiBfZGVhbE1vbWVudFxuICAgKiDlpITnkIZtb21lbnTlr7nosaFcbiAgICogQHBhcmFtIHRpbWUgbW9tZW505a+56LGhXG4gICAqIEByZXR1cm4g6L+U5Zue5LiA5LiqT2JqZWN0e3llYXIsIG1vbnRoLCBkYXksIGZvcm1hdERheX1cbiAgICovXG4gIF9kZWFsTW9tZW50KHRpbWUpIHtcbiAgICBsZXQgeyB5ZWFycywgbW9udGhzLCBkYXRlIH0gPSB0aW1lLnRvT2JqZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHllYXJzLFxuICAgICAgbW9udGg6IG1vbnRocyArIDEsXG4gICAgICBkYXk6IGRhdGUsXG4gICAgICB3ZWVrQ2g6ICflkagnICsgdGhpcy53ZWVrc0NoW3RpbWUuZm9ybWF0KCdFJykgLSAxXSxcbiAgICAgIGZvcm1hdERheTogdGltZS5mb3JtYXQoJ1lZWVktTU0tREQnKSxcbiAgICAgIGZvcm1hdERhdGU6IHRpbWUuZm9ybWF0KCdNTS1ERCcpXG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogX2luaXRcbiAgICog5Yid5aeL5YyWXG4gICAqIEBwYXJhbSB2YWx1ZSAnMjAxOC0wMi0wMicgWVlZWS1NTS1ERFxuICAgKi9cbiAgX2luaXQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsID09PSAwKSB7XG4gICAgICB0aGlzLnZpZXdEYXlzID0gdGhpcy5fZ2V0RGF0YShtb21lbnQodmFsdWUpKTtcbiAgICAgICAgdGhpcy52aWV3RGF5cy5tYXAocCA9PiBwLmlzZGF5ID0gZmFsc2UpO1xuICAgICAgLy9jb25zb2xlLmxvZygndGhpcy52aWV3RGF5cycsIHRoaXMudmlld0RheXMpO1xuICAgICAgdGhpcy5fc2V0VGltZShtb21lbnQodmFsdWUpKTtcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsICs9IDE7XG4gIH1cbn1cbiJdfQ==