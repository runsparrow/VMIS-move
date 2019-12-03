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
      this._init(value);
      this.nowTime = this.current;
      this.initialDate = this.current.formatDay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZUNhbGVuZGFyLmpzIl0sIm5hbWVzIjpbIkNhbGVuZGFyIiwicHJvcHMiLCJsaXN0IiwiY29sb3IiLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImRhdGEiLCJkYXRldGltZWxpc3QiLCJ3ZWVrc0NoIiwiY3VycmVudExpc3QiLCJub3dUaW1lIiwiY3VycmVudCIsInllYXIiLCJtb250aCIsImRheSIsImZvcm1hdERheSIsIndlZWtDaCIsInZhbHVlIiwiRGF0ZSIsInZpZXdUaW1lIiwidmlld0RheXMiLCJpbml0aWFsIiwiaW1hZ2UiLCJsZWZ0Q2FuIiwicmlnaHRDYW4iLCJkYXRhSW5pdGlhbCIsImluaXRpYWxEYXRlIiwiZXZlbnRzIiwiZ2V0bGlzdCIsImkiLCJmaW5kIiwicCIsInJlY2VwdGlvbkRhdGVUaW1lIiwiZm9ybWF0IiwiaXNkYXkiLCJtZXRob2RzIiwidG9QcmVNb250aCIsIl9nZXREYXRhIiwic3VidHJhY3QiLCJjb25zb2xlIiwibG9nIiwiJGVtaXQiLCIkYXBwbHkiLCJ0b05leHRNb250aCIsImVuZE9mIiwiYWRkIiwiY2hhbmdlUmVzdWx0VGltZSIsImUiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJfaW5pdCIsInRpbWUiLCJfc2V0Vmlld1RpbWUiLCJmaXJzdERheSIsInN0YXJ0T2YiLCJmaXJzdERheU9mV2VlayIsImxhc3QiLCJfY2FsRGF0ZSIsImRheXNJbk1vbnRoIiwiZW5kRGF5IiwiZW5kRGF5T2ZXZWVrIiwibmV4dCIsIl9kZWFsTW9tZW50IiwibGVuZ3RoIiwiYXJyIiwicHVzaCIsInRvT2JqZWN0IiwieWVhcnMiLCJtb250aHMiLCJkYXRlIiwiZm9ybWF0RGF0ZSIsIm1hcCIsIl9zZXRUaW1lIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7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S3RCLE1BQUwsQ0FBWSxZQUFaLENBTE47QUFNTHlDLG9CQUFZbkIsS0FBS3RCLE1BQUwsQ0FBWSxPQUFaO0FBTlAsT0FBUDtBQVFEO0FBQ0Q7Ozs7Ozs7OzBCQUtNaEIsSyxFQUFPO0FBQ1gsVUFBSSxLQUFLSSxPQUFMLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGFBQUtELFFBQUwsR0FBZ0IsS0FBS2lCLFFBQUwsQ0FBYyx1QkFBZCxDQUFoQjtBQUNBLGFBQUtqQixRQUFMLENBQWN1RCxHQUFkLENBQWtCO0FBQUEsaUJBQU01QyxFQUFFRyxLQUFGLEdBQVUsS0FBaEI7QUFBQSxTQUFsQjtBQUNBO0FBQ0EsYUFBSzBDLFFBQUwsQ0FBYyx1QkFBZDtBQUNEO0FBQ0QsV0FBS3ZELE9BQUwsSUFBZ0IsQ0FBaEI7QUFDRDs7OztFQWxNbUN3RCxlQUFLQyxTOztrQkFBdEIvRSxRIiwiZmlsZSI6InNpbmdsZUNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbGlzdDogW10sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiYmxhY2tcIlxuICAgIH1cbiAgfTtcbiAgZGF0YSA9IHtcbiAgICBkYXRldGltZWxpc3Q6IFtdLFxuICAgIHdlZWtzQ2g6IFtcIuS4gFwiLCBcIuS6jFwiLCBcIuS4iVwiLCBcIuWbm1wiLCBcIuS6lFwiLCBcIuWFrVwiLCBcIuaXpVwiXSxcbiAgICAvLyDmlbDnu4TmnIDlkI7lr7zlh7rnmoTml6XmnJ9cbiAgICBjdXJyZW50TGlzdDogW10sXG4gICAgLy8g5b2T5YmN5pel5pyfXG4gICAgbm93VGltZToge30sXG4gICAgY3VycmVudDoge1xuICAgICAgeWVhcjogXCJcIixcbiAgICAgIG1vbnRoOiBcIlwiLFxuICAgICAgZGF5OiBcIlwiLFxuICAgICAgZm9ybWF0RGF5OiBcIlwiLFxuICAgICAgd2Vla0NoOiBcIlwiXG4gICAgfSxcbiAgICB2YWx1ZTogbmV3IERhdGUoKSxcbiAgICB2aWV3VGltZToge1xuICAgICAgeWVhcjogXCJcIixcbiAgICAgIG1vbnRoOiBcIlwiLFxuICAgICAgZGF5OiBcIlwiLFxuICAgICAgZm9ybWF0RGF5OiBcIlwiLFxuICAgICAgd2Vla0NoOiBcIlwiXG4gICAgfSxcbiAgICAvLyDlvZPliY3op4blm77nmoRkYXnmlbDnu4RcbiAgICB2aWV3RGF5czogW10sXG4gICAgaW5pdGlhbDogMCxcbiAgICBpbWFnZToge1xuICAgICAgbGVmdENhbjogXCJodHRwczovL2JyY3NwYWNlLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vbGVmdC1jYW4ucG5nXCIsXG4gICAgICByaWdodENhbjogXCJodHRwczovL2JyY3NwYWNlLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vcmlnaHQtY2FuLnBuZ1wiXG4gICAgfSxcbiAgICAvLyDmnIjliIbliJ3lp4vljJZcbiAgICBkYXRhSW5pdGlhbDogMCxcbiAgICAvLyDliJ3lp4vljJbml6XmnJ9cbiAgICBpbml0aWFsRGF0ZTogXCJcIlxuICB9O1xuICBvbkxvYWQodmFsdWUpIHtcbiAgICB0aGlzLl9pbml0KHZhbHVlKTtcbiAgICB0aGlzLm5vd1RpbWUgPSB0aGlzLmN1cnJlbnQ7XG4gICAgdGhpcy5pbml0aWFsRGF0ZSA9IHRoaXMuY3VycmVudC5mb3JtYXREYXk7XG5cbiAgICB0aGlzLiRhcHBseSgpO1xuICB9XG4gIGV2ZW50cyA9IHtcbiAgICBnZXRsaXN0KHZhbHVlKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgIHRoaXMuZGF0ZXRpbWVsaXN0ID0gdmFsdWU7XG4gICAgICBmb3IgKGxldCBpIG9mIHRoaXMudmlld0RheXMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuZGF0ZXRpbWVsaXN0LmZpbmQoXG4gICAgICAgICAgICBwID0+IG1vbWVudChwLnJlY2VwdGlvbkRhdGVUaW1lKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpID09IGkuZm9ybWF0RGF5XG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBpLmlzZGF5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgbWV0aG9kcyA9IHtcbiAgICAvLyDngrnlh7vkuIrkuKrmnIhcbiAgICB0b1ByZU1vbnRoKCkge1xuICAgICAgdGhpcy52aWV3RGF5cyA9IHRoaXMuX2dldERhdGEoXG4gICAgICAgIG1vbWVudCh0aGlzLnZpZXdUaW1lLmZvcm1hdERheSkuc3VidHJhY3QoMSwgXCJkYXlzXCIpXG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnZpZXdUaW1lLmZvcm1hdERheVwiLCB0aGlzLnZpZXdUaW1lLmZvcm1hdERheSk7XG4gICAgICB0aGlzLiRlbWl0KFxuICAgICAgICBcImhhbmRsZXByZXZtb250aFwiLFxuICAgICAgICBtb21lbnQodGhpcy52aWV3VGltZS5mb3JtYXREYXkpLmZvcm1hdChcIllZWVktTU0tRERcIilcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICAvLyDngrnlh7vkuIvkuKrmnIhcbiAgICB0b05leHRNb250aCgpIHtcbiAgICAgIHRoaXMudmlld0RheXMgPSB0aGlzLl9nZXREYXRhKFxuICAgICAgICBtb21lbnQodGhpcy52aWV3VGltZS5mb3JtYXREYXkpXG4gICAgICAgICAgLmVuZE9mKFwibW9udGhcIilcbiAgICAgICAgICAuYWRkKDEsIFwiZGF5c1wiKVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidGhpcy52aWV3VGltZS5mb3JtYXREYXlcIiwgdGhpcy52aWV3VGltZS5mb3JtYXREYXkpO1xuXG4gICAgICB0aGlzLiRlbWl0KFxuICAgICAgICBcImhhbmRsZW5leHRtb250aFwiLFxuICAgICAgICBtb21lbnQodGhpcy52aWV3VGltZS5mb3JtYXREYXkpLmZvcm1hdChcIllZWVktTU0tRERcIilcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgfSxcbiAgICAvLyDmlLnlj5jmnIDlkI7lr7zlh7rnmoTml7bpl7RcbiAgICBjaGFuZ2VSZXN1bHRUaW1lKGUpIHtcbiAgICAgIGxldCBpdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbTtcbiAgICAgIHRoaXMuY3VycmVudCA9IGl0ZW07XG4gICAgICB0aGlzLiRlbWl0KFwiaGFubGVDb25maXJtXCIsIGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgd2F0Y2ggPSB7XG4gICAgdmFsdWUobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICB0aGlzLl9pbml0KG5ld1ZhbHVlKTtcbiAgICB9XG4gIH07XG4gIC8qKlxuICAgKiBfZ2V0RGF0YVxuICAgKiDov5Tlm57lvZPliY3op4blm77ml6XmnJ/mlbDnu4RcbiAgICogQHBhcmFtIHRpbWVcbiAgICogQHJldHVybiBbe2RheTozMSxtb250aDozLHllYXI6MjAxOH0se2RheToxLG1vbnRoOjQseWVhcjoyMDE4fSwuLi5dXG4gICAqL1xuICBfZ2V0RGF0YSh0aW1lID0gbW9tZW50KCkpIHtcbiAgICB0aGlzLl9zZXRWaWV3VGltZSh0aW1lKTtcbiAgICAvLyDku6Tml7bpl7Tlj5jkuLrlvZPmnIgx5Y+355qEXG4gICAgY29uc3QgZmlyc3REYXkgPSB0aW1lLnN0YXJ0T2YoXCJtb250aFwiKTtcbiAgICAvLyDorqHnrpflvZPmnIgx5Y+35piv5pif5pyf5YegXG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBmaXJzdERheS5mb3JtYXQoXCJFXCIpO1xuICAgIC8vIOiuoeeul+S4iuS4quaciOWkmuS9meaXtumXtFxuICAgIGNvbnN0IGxhc3QgPSB0aGlzLl9jYWxEYXRlKFxuICAgICAgZmlyc3REYXkuc3VidHJhY3QoZmlyc3REYXlPZldlZWsgLSAxLCBcImRheXNcIiksXG4gICAgICBmaXJzdERheU9mV2VlayAtIDFcbiAgICApO1xuICAgIC8vIOiuoeeul+acrOaciOaXtumXtFxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl9jYWxEYXRlKGZpcnN0RGF5LCBmaXJzdERheS5kYXlzSW5Nb250aCgpKTtcbiAgICAvLyDku6Tml7bpl7Tlj5jkuLrmnKzmnIjmnKtcbiAgICBjb25zdCBlbmREYXkgPSB0aW1lLnN1YnRyYWN0KDEsIFwiZGF5c1wiKTtcbiAgICAvLyDlvZPmnIjkuI7mnKvmmK/mmJ/mnJ/lh6BcbiAgICBjb25zdCBlbmREYXlPZldlZWsgPSBlbmREYXkuZm9ybWF0KFwiRVwiKTtcbiAgICAvLyDorqHnrpfkuIvkuKrmnIjlpJrkvZnml7bpl7RcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5fY2FsRGF0ZShlbmREYXkuYWRkKDEsIFwiZGF5c1wiKSwgNyAtIGVuZERheU9mV2Vlayk7XG4gICAgcmV0dXJuIFsuLi5sYXN0LCAuLi5jdXJyZW50LCAuLi5uZXh0XTtcbiAgfVxuICAvKipcbiAgICogX3NldFRpbWVcbiAgICog6K6+5a6a5a+85Ye655qE5pe26Ze0XG4gICAqIEBwYXJhbSB0aW1lIG1vbWVudOWvueixoVxuICAgKi9cbiAgX3NldFRpbWUodGltZSA9IG1vbWVudCgpKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5fZGVhbE1vbWVudCh0aW1lKTtcbiAgfVxuICAvKipcbiAgICogX3NldFRpbWVcbiAgICog6K6+5a6a5b2T5YmN5pel5Y6G55qE5pe26Ze0XG4gICAqIEBwYXJhbSB0aW1lIG1vbWVudOWvueixoVxuICAgKi9cbiAgX3NldFZpZXdUaW1lKHRpbWUgPSBtb21lbnQoKSkge1xuICAgIHRoaXMudmlld1RpbWUgPSB0aGlzLl9kZWFsTW9tZW50KHRpbWUuc3RhcnRPZihcIm1vbnRoXCIpKTtcbiAgfVxuICAvKipcbiAgICogX2NhbERhdGVcbiAgICog6K6h566X5pel5pyf5Ye95pWwXG4gICAqIEBwYXJhbSB0aW1lIG1vbWVudOWvueixoVxuICAgKiBAcGFyYW0gbGVuZ3RoIOi/lOWbnuaVsOe7hOeahOmVv+W6plxuICAgKiBAcmV0dXJuIOi/lOWbnuaXpeacn+aVsOe7hFxuICAgKi9cbiAgX2NhbERhdGUodGltZSwgbGVuZ3RoKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKHRoaXMuX2RlYWxNb21lbnQodGltZSkpO1xuICAgICAgdGltZS5hZGQoMSwgXCJkYXlzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIC8qKlxuICAgKiBfZGVhbE1vbWVudFxuICAgKiDlpITnkIZtb21lbnTlr7nosaFcbiAgICogQHBhcmFtIHRpbWUgbW9tZW505a+56LGhXG4gICAqIEByZXR1cm4g6L+U5Zue5LiA5LiqT2JqZWN0e3llYXIsIG1vbnRoLCBkYXksIGZvcm1hdERheX1cbiAgICovXG4gIF9kZWFsTW9tZW50KHRpbWUpIHtcbiAgICBsZXQgeyB5ZWFycywgbW9udGhzLCBkYXRlIH0gPSB0aW1lLnRvT2JqZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHllYXJzLFxuICAgICAgbW9udGg6IG1vbnRocyArIDEsXG4gICAgICBkYXk6IGRhdGUsXG4gICAgICB3ZWVrQ2g6IFwi5ZGoXCIgKyB0aGlzLndlZWtzQ2hbdGltZS5mb3JtYXQoXCJFXCIpIC0gMV0sXG4gICAgICBmb3JtYXREYXk6IHRpbWUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSxcbiAgICAgIGZvcm1hdERhdGU6IHRpbWUuZm9ybWF0KFwiTU0tRERcIilcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBfaW5pdFxuICAgKiDliJ3lp4vljJZcbiAgICogQHBhcmFtIHZhbHVlICcyMDE4LTAyLTAyJyBZWVlZLU1NLUREXG4gICAqL1xuICBfaW5pdCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmluaXRpYWwgPT09IDApIHtcbiAgICAgIHRoaXMudmlld0RheXMgPSB0aGlzLl9nZXREYXRhKG1vbWVudCgpKTtcbiAgICAgIHRoaXMudmlld0RheXMubWFwKHAgPT4gKHAuaXNkYXkgPSBmYWxzZSkpO1xuICAgICAgLy9jb25zb2xlLmxvZygndGhpcy52aWV3RGF5cycsIHRoaXMudmlld0RheXMpO1xuICAgICAgdGhpcy5fc2V0VGltZShtb21lbnQoKSk7XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbCArPSAxO1xuICB9XG59XG4iXX0=