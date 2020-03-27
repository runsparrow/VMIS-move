'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: 'radio-group',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: null,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: {
            type: String,
            value: 'right'
        },
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        }
    },
    methods: {
        emitChange: function emitChange(value) {
            var instance = this.parent || this;
            instance.$emit('input', value);
            instance.$emit('change', value);
        },
        onChange: function onChange(event) {
            //  console.log(event);
            this.emitChange(this.data.name);
        },
        onClickLabel: function onClickLabel() {
            var _data = this.data,
                disabled = _data.disabled,
                labelDisabled = _data.labelDisabled,
                name = _data.name;

            if (!disabled && !labelDisabled) {
                this.emitChange(name);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsInBhcmVudCIsInVubGlua2VkIiwiY2xhc3NlcyIsInByb3BzIiwidmFsdWUiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ1c2VJY29uU2xvdCIsImNoZWNrZWRDb2xvciIsIlN0cmluZyIsImxhYmVsUG9zaXRpb24iLCJsYWJlbERpc2FibGVkIiwic2hhcGUiLCJtZXRob2RzIiwiZW1pdENoYW5nZSIsImluc3RhbmNlIiwiJGVtaXQiLCJvbkNoYW5nZSIsImV2ZW50IiwiZGF0YSIsIm9uQ2xpY2tMYWJlbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNWQSxXQUFPLElBREc7QUFFVkMsY0FBVTtBQUNOQyxjQUFNLGFBREE7QUFFTkMsY0FBTSxVQUZBO0FBR05DLGNBSE0sa0JBR0NDLE1BSEQsRUFHUztBQUNYLGlCQUFLQyxNQUFMLEdBQWNELE1BQWQ7QUFDSCxTQUxLO0FBTU5FLGdCQU5NLHNCQU1LO0FBQ1AsaUJBQUtELE1BQUwsR0FBYyxJQUFkO0FBQ0g7QUFSSyxLQUZBO0FBWVZFLGFBQVMsQ0FBQyxZQUFELEVBQWUsYUFBZixDQVpDO0FBYVZDLFdBQU87QUFDSEMsZUFBTyxJQURKO0FBRUhDLGtCQUFVQyxPQUZQO0FBR0hDLHFCQUFhRCxPQUhWO0FBSUhFLHNCQUFjQyxNQUpYO0FBS0hDLHVCQUFlO0FBQ1hiLGtCQUFNWSxNQURLO0FBRVhMLG1CQUFPO0FBRkksU0FMWjtBQVNITyx1QkFBZUwsT0FUWjtBQVVITSxlQUFPO0FBQ0hmLGtCQUFNWSxNQURIO0FBRUhMLG1CQUFPO0FBRko7QUFWSixLQWJHO0FBNEJWUyxhQUFTO0FBQ0xDLGtCQURLLHNCQUNNVixLQUROLEVBQ2E7QUFDZCxnQkFBTVcsV0FBVyxLQUFLZixNQUFMLElBQWUsSUFBaEM7QUFDQWUscUJBQVNDLEtBQVQsQ0FBZSxPQUFmLEVBQXdCWixLQUF4QjtBQUNBVyxxQkFBU0MsS0FBVCxDQUFlLFFBQWYsRUFBeUJaLEtBQXpCO0FBQ0gsU0FMSTtBQU1MYSxnQkFOSyxvQkFNSUMsS0FOSixFQU1XO0FBQ2Q7QUFDRSxpQkFBS0osVUFBTCxDQUFnQixLQUFLSyxJQUFMLENBQVV2QixJQUExQjtBQUNILFNBVEk7QUFVTHdCLG9CQVZLLDBCQVVVO0FBQUEsd0JBQytCLEtBQUtELElBRHBDO0FBQUEsZ0JBQ0hkLFFBREcsU0FDSEEsUUFERztBQUFBLGdCQUNPTSxhQURQLFNBQ09BLGFBRFA7QUFBQSxnQkFDc0JmLElBRHRCLFNBQ3NCQSxJQUR0Qjs7QUFFWCxnQkFBSSxDQUFDUyxRQUFELElBQWEsQ0FBQ00sYUFBbEIsRUFBaUM7QUFDN0IscUJBQUtHLFVBQUwsQ0FBZ0JsQixJQUFoQjtBQUNIO0FBQ0o7QUFmSTtBQTVCQyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICAgICAgbGlua2VkKHRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSB0YXJnZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkKCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbGFzc2VzOiBbJ2ljb24tY2xhc3MnLCAnbGFiZWwtY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHVzZUljb25TbG90OiBCb29sZWFuLFxuICAgICAgICBjaGVja2VkQ29sb3I6IFN0cmluZyxcbiAgICAgICAgbGFiZWxQb3NpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdyaWdodCdcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxEaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAncm91bmQnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZW1pdENoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLnBhcmVudCB8fCB0aGlzO1xuICAgICAgICAgICAgaW5zdGFuY2UuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICAgICAgaW5zdGFuY2UuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAvLyAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKHRoaXMuZGF0YS5uYW1lKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja0xhYmVsKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkaXNhYmxlZCwgbGFiZWxEaXNhYmxlZCwgbmFtZSB9ID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCAmJiAhbGFiZWxEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19