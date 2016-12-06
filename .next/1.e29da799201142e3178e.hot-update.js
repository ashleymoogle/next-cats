webpackHotUpdate(1,{

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _regenerator = __webpack_require__(26);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(25);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _getPrototypeOf = __webpack_require__(13);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(14);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(15);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(17);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(16);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(24);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _css = __webpack_require__(30);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = {
	    itemsingle: {
	        width: '30%',
	        textAlign: 'center',
	        margin: '5px',
	        padding: '5px',
	        border: '2px solid grey',
	        borderRadius: '5px',
	        display: 'flex',
	        justifyContent: 'space-between',
	        flexDirection: 'column'
	    },
	
	    itemimage: {
	        display: 'block',
	        maxWidth: '100%',
	        maxHeight: '200px'
	    },
	    itemtitle: {
	        fontWeight: 'bolder',
	        fontSize: 'large',
	        textDecoration: 'underline',
	        padding: '5px'
	    },
	    itembody: {
	        fontStyle: 'italic',
	        fontWeight: 'bolder'
	    },
	    itemstop: {
	        display: 'flex',
	        justifyContent: 'space-between'
	    }
	};
	
	var ItemSingle = function (_React$Component) {
	    (0, _inherits3.default)(ItemSingle, _React$Component);
	
	    function ItemSingle() {
	        (0, _classCallCheck3.default)(this, ItemSingle);
	        return (0, _possibleConstructorReturn3.default)(this, (ItemSingle.__proto__ || (0, _getPrototypeOf2.default)(ItemSingle)).apply(this, arguments));
	    }
	
	    (0, _createClass3.default)(ItemSingle, [{
	        key: 'render',
	        value: function render() {
	            console.log(this.props);
	            var data = this.props.data;
	
	            return _react2.default.createElement(
	                'div',
	                { className: (0, _css.style)(styles.itemsingle) },
	                _react2.default.createElement(
	                    'div',
	                    { className: (0, _css.style)(styles.itemstop) },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement('img', { className: (0, _css.style)(styles.itemimage), src: '/static/img/' + data.id + '.jpg' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: (0, _css.style)(styles.itemtitle) },
	                        data.title
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: (0, _css.style)(styles.itembody) },
	                    data.body
	                )
	            );
	        }
	    }], [{
	        key: 'getInitialProps',
	        value: function () {
	            var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
	                var req = _ref2.req;
	                return _regenerator2.default.wrap(function _callee$(_context) {
	                    while (1) {
	                        switch (_context.prev = _context.next) {
	                            case 0:
	                                return _context.abrupt('return', req ? { userAgent: req.headers['user-agent'] } : { userAgent: navigator.userAgent });
	
	                            case 1:
	                            case 'end':
	                                return _context.stop();
	                        }
	                    }
	                }, _callee, this);
	            }));
	
	            function getInitialProps(_x) {
	                return _ref.apply(this, arguments);
	            }
	
	            return getInitialProps;
	        }()
	    }]);
	    return ItemSingle;
	}(_react2.default.Component);
	
	exports.default = ItemSingle;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaXRlbVNpbmdsZS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJpdGVtc2luZ2xlIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIml0ZW1pbWFnZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiaXRlbXRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iLCJpdGVtYm9keSIsImZvbnRTdHlsZSIsIml0ZW1zdG9wIiwiSXRlbVNpbmdsZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImRhdGEiLCJpZCIsInRpdGxlIiwiYm9keSIsInJlcSIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBTUEsU0FBUztBQUNYQyxnQkFBWTtBQUNSQyxlQUFNLEtBREU7QUFFUkMsbUJBQVcsUUFGSDtBQUdSQyxnQkFBUSxLQUhBO0FBSVJDLGlCQUFRLEtBSkE7QUFLUkMsZ0JBQVEsZ0JBTEE7QUFNUkMsc0JBQWMsS0FOTjtBQU9SQyxpQkFBUyxNQVBEO0FBUVJDLHdCQUFnQixlQVJSO0FBU1JDLHVCQUFlO0FBVFAsS0FERDs7QUFhWEMsZUFBVztBQUNQSCxpQkFBUyxPQURGO0FBRVBJLGtCQUFVLE1BRkg7QUFHUEMsbUJBQVc7QUFISixLQWJBO0FBa0JYQyxlQUFXO0FBQ1BDLG9CQUFZLFFBREw7QUFFUEMsa0JBQVUsT0FGSDtBQUdQQyx3QkFBZ0IsV0FIVDtBQUlQWixpQkFBUztBQUpGLEtBbEJBO0FBd0JYYSxjQUFVO0FBQ05DLG1CQUFXLFFBREw7QUFFTkosb0JBQVk7QUFGTixLQXhCQztBQTRCWEssY0FBVTtBQUNOWixpQkFBUyxNQURIO0FBRU5DLHdCQUFlO0FBRlQ7QUE1QkMsQ0FBZjs7SUFrQ01ZLFU7Ozs7Ozs7Ozs7aUNBT1E7QUFDTkMsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFqQjtBQURNLGdCQUVEQyxJQUZDLEdBRU8sS0FBS0QsS0FGWixDQUVEQyxJQUZDOztBQUdOLG1CQUFPO0FBQUE7QUFBQSxrQkFBSyxXQUFXLGdCQUFNekIsT0FBT0MsVUFBYixDQUFoQjtBQUNIO0FBQUE7QUFBQSxzQkFBSyxXQUFXLGdCQUFNRCxPQUFPb0IsUUFBYixDQUFoQjtBQUNJO0FBQUE7QUFBQTtBQUNJLCtEQUFLLFdBQVcsZ0JBQU1wQixPQUFPVyxTQUFiLENBQWhCLEVBQXlDLHNCQUFvQmMsS0FBS0MsRUFBekIsU0FBekM7QUFESixxQkFESjtBQUlJO0FBQUE7QUFBQSwwQkFBSyxXQUFXLGdCQUFNMUIsT0FBT2MsU0FBYixDQUFoQjtBQUNLVyw2QkFBS0U7QUFEVjtBQUpKLGlCQURHO0FBU0g7QUFBQTtBQUFBLHNCQUFLLFdBQVcsZ0JBQU0zQixPQUFPa0IsUUFBYixDQUFoQjtBQUNLTyx5QkFBS0c7QUFEVjtBQVRHLGFBQVA7QUFhSDs7Ozs7b0JBdEIrQkMsRyxTQUFBQSxHOzs7OztpRUFDckJBLE1BQ0QsRUFBRUMsV0FBV0QsSUFBSUUsT0FBSixDQUFZLFlBQVosQ0FBYixFQURDLEdBRUQsRUFBRUQsV0FBV0UsVUFBVUYsU0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSlcsZ0JBQU1HLFM7O2tCQTBCaEJaLFUiLCJmaWxlIjoiaXRlbVNpbmdsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcm9tYWluYi9Eb2N1bWVudHMvbmV4dGpzL25leHQtY2F0cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHN0eWxlIH0gZnJvbSAnbmV4dC9jc3MnXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBpdGVtc2luZ2xlOiB7XG4gICAgICAgIHdpZHRoOiczMCUnLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBtYXJnaW46ICc1cHgnLFxuICAgICAgICBwYWRkaW5nOic1cHgnLFxuICAgICAgICBib3JkZXI6ICcycHggc29saWQgZ3JleScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9LFxuXG4gICAgaXRlbWltYWdlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzIwMHB4J1xuICAgIH0sXG4gICAgaXRlbXRpdGxlOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInLFxuICAgICAgICBmb250U2l6ZTogJ2xhcmdlJyxcbiAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICAgICAgICBwYWRkaW5nOiAnNXB4J1xuICAgIH0sXG4gICAgaXRlbWJvZHk6IHtcbiAgICAgICAgZm9udFN0eWxlOiAnaXRhbGljJyxcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGRlcidcbiAgICB9LFxuICAgIGl0ZW1zdG9wOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6J3NwYWNlLWJldHdlZW4nXG4gICAgfVxufVxuXG5jbGFzcyBJdGVtU2luZ2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICh7IHJlcSB9KSB7XG4gICAgICAgIHJldHVybiByZXFcbiAgICAgICAgICAgID8geyB1c2VyQWdlbnQ6IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gfVxuICAgICAgICAgICAgOiB7IHVzZXJBZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCB9XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcbiAgICAgICAgbGV0IHtkYXRhfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMuaXRlbXNpbmdsZSl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5pdGVtc3RvcCl9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMuaXRlbWltYWdlKX0gc3JjPXtgL3N0YXRpYy9pbWcvJHtkYXRhLmlkfS5qcGdgfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMuaXRlbXRpdGxlKX0+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLml0ZW1ib2R5KX0+XG4gICAgICAgICAgICAgICAge2RhdGEuYm9keX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1TaW5nbGUiXX0=

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2l0ZW1TaW5nbGUuanM/ODhhZjA1NyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJpdGVtc2luZ2xlIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIml0ZW1pbWFnZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiaXRlbXRpdGxlIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iLCJpdGVtYm9keSIsImZvbnRTdHlsZSIsIml0ZW1zdG9wIiwiSXRlbVNpbmdsZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImRhdGEiLCJpZCIsInRpdGxlIiwiYm9keSIsInJlcSIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQSxLQUFNQSxTQUFTO0FBQ1hDLGlCQUFZO0FBQ1JDLGdCQUFNLEtBREU7QUFFUkMsb0JBQVcsUUFGSDtBQUdSQyxpQkFBUSxLQUhBO0FBSVJDLGtCQUFRLEtBSkE7QUFLUkMsaUJBQVEsZ0JBTEE7QUFNUkMsdUJBQWMsS0FOTjtBQU9SQyxrQkFBUyxNQVBEO0FBUVJDLHlCQUFnQixlQVJSO0FBU1JDLHdCQUFlO0FBVFAsTUFERDs7QUFhWEMsZ0JBQVc7QUFDUEgsa0JBQVMsT0FERjtBQUVQSSxtQkFBVSxNQUZIO0FBR1BDLG9CQUFXO0FBSEosTUFiQTtBQWtCWEMsZ0JBQVc7QUFDUEMscUJBQVksUUFETDtBQUVQQyxtQkFBVSxPQUZIO0FBR1BDLHlCQUFnQixXQUhUO0FBSVBaLGtCQUFTO0FBSkYsTUFsQkE7QUF3QlhhLGVBQVU7QUFDTkMsb0JBQVcsUUFETDtBQUVOSixxQkFBWTtBQUZOLE1BeEJDO0FBNEJYSyxlQUFVO0FBQ05aLGtCQUFTLE1BREg7QUFFTkMseUJBQWU7QUFGVDtBQTVCQyxFQUFmOztLQWtDTVksVTs7Ozs7Ozs7OztrQ0FPUTtBQUNOQyxxQkFBUUMsR0FBUixDQUFZLEtBQUtDLEtBQWpCO0FBRE0saUJBRURDLElBRkMsR0FFTyxLQUFLRCxLQUZaLENBRURDLElBRkM7O0FBR04sb0JBQU87QUFBQTtBQUFBLG1CQUFLLFdBQVcsZ0JBQU16QixPQUFPQyxVQUFiLENBQWhCO0FBQ0g7QUFBQTtBQUFBLHVCQUFLLFdBQVcsZ0JBQU1ELE9BQU9vQixRQUFiLENBQWhCO0FBQ0k7QUFBQTtBQUFBO0FBQ0ksZ0VBQUssV0FBVyxnQkFBTXBCLE9BQU9XLFNBQWIsQ0FBaEIsRUFBeUMsc0JBQW9CYyxLQUFLQyxFQUF6QixTQUF6QztBQURKLHNCQURKO0FBSUk7QUFBQTtBQUFBLDJCQUFLLFdBQVcsZ0JBQU0xQixPQUFPYyxTQUFiLENBQWhCO0FBQ0tXLDhCQUFLRTtBQURWO0FBSkosa0JBREc7QUFTSDtBQUFBO0FBQUEsdUJBQUssV0FBVyxnQkFBTTNCLE9BQU9rQixRQUFiLENBQWhCO0FBQ0tPLDBCQUFLRztBQURWO0FBVEcsY0FBUDtBQWFIOzs7OztxQkF0QitCQyxHLFNBQUFBLEc7Ozs7O2tFQUNyQkEsTUFDRCxFQUFFQyxXQUFXRCxJQUFJRSxPQUFKLENBQVksWUFBWixDQUFiLEVBREMsR0FFRCxFQUFFRCxXQUFXRSxVQUFVRixTQUF2QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FKVyxnQkFBTUcsUzs7bUJBMEJoQlosVSIsImZpbGUiOiIxLmUyOWRhNzk5MjAxMTQyZTMxNzhlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBzdHlsZSB9IGZyb20gJ25leHQvY3NzJ1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgaXRlbXNpbmdsZToge1xuICAgICAgICB3aWR0aDonMzAlJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgbWFyZ2luOiAnNXB4JyxcbiAgICAgICAgcGFkZGluZzonNXB4JyxcbiAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkIGdyZXknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgfSxcblxuICAgIGl0ZW1pbWFnZToge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcyMDBweCdcbiAgICB9LFxuICAgIGl0ZW10aXRsZToge1xuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZGVyJyxcbiAgICAgICAgZm9udFNpemU6ICdsYXJnZScsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcbiAgICAgICAgcGFkZGluZzogJzVweCdcbiAgICB9LFxuICAgIGl0ZW1ib2R5OiB7XG4gICAgICAgIGZvbnRTdHlsZTogJ2l0YWxpYycsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInXG4gICAgfSxcbiAgICBpdGVtc3RvcDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJ1xuICAgIH1cbn1cblxuY2xhc3MgSXRlbVNpbmdsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyByZXEgfSkge1xuICAgICAgICByZXR1cm4gcmVxXG4gICAgICAgICAgICA/IHsgdXNlckFnZW50OiByZXEuaGVhZGVyc1sndXNlci1hZ2VudCddIH1cbiAgICAgICAgICAgIDogeyB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQgfVxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgICAgIGxldCB7ZGF0YX0gPSB0aGlzLnByb3BzXG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLml0ZW1zaW5nbGUpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZShzdHlsZXMuaXRlbXN0b3ApfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLml0ZW1pbWFnZSl9IHNyYz17YC9zdGF0aWMvaW1nLyR7ZGF0YS5pZH0uanBnYH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUoc3R5bGVzLml0ZW10aXRsZSl9PlxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlKHN0eWxlcy5pdGVtYm9keSl9PlxuICAgICAgICAgICAgICAgIHtkYXRhLmJvZHl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtU2luZ2xlXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pdGVtU2luZ2xlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==