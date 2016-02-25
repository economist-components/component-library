'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var LibraryComponent = (function (_React$Component) {
  _inherits(LibraryComponent, _React$Component);

  function LibraryComponent() {
    _classCallCheck(this, LibraryComponent);

    _React$Component.apply(this, arguments);
  }

  LibraryComponent.prototype.render = function render() {
    var componentName = this.props.metadata.name.replace('@economist\/component-', '');
    return _react2['default'].createElement(
      'div',
      {
        className: 'library  library__' + componentName
      },
      _react2['default'].createElement('a', { className: 'anchor', name: this.props.metadata.name }),
      _react2['default'].createElement(
        'a',
        { className: 'library--heading',
          href: this.props.metadata.homepage
        },
        _react2['default'].createElement(
          'h1',
          { className: 'library--title' },
          componentName
        ),
        _react2['default'].createElement(
          'h2',
          { className: 'library--package-details' },
          '(',
          this.props.metadata.name,
          '@',
          this.props.metadata.version,
          ')'
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'library--example-wrapper' },
        _react2['default'].createElement(
          'div',
          { className: 'library--description' },
          this.props.metadata.description
        ),
        this.props.children
      )
    );
  };

  _createClass(LibraryComponent, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        metadata: _react2['default'].PropTypes.shape({
          name: _react2['default'].PropTypes.string,
          version: _react2['default'].PropTypes.string,
          description: _react2['default'].PropTypes.string,
          homepage: _react2['default'].PropTypes.string
        }).isRequired,
        children: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.element)
      };
    }
  }]);

  return LibraryComponent;
})(_react2['default'].Component);

exports['default'] = LibraryComponent;
module.exports = exports['default'];