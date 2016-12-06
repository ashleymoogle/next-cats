'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/romainb/Documents/nextjs/next-cats/node_modules/next/dist/lib/css.js');

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