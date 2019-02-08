var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Application = function (_React$Component) {_inherits(Application, _React$Component);
  function Application(props) {_classCallCheck(this, Application);var _this = _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this,
    props));
    _this.state = {
      message: "# By\n## aenkirch\n--\nfor [FreeCodeCamp](http://www.freecodecamp.org/)\n```\nHeres some code\n```\n\t- liste\n\t\t- deux\n- trois\n\n`a code block`\n> Blockquote\n\n![Logo React](https://ucarecdn.com/2f75eb64-e883-4117-b57d-77277ca57118/)" };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.converter = _this.converter.bind(_this);return _this;
  }_createClass(Application, [{ key: "handleChange", value: function handleChange(
    event) {
      this.setState({
        message: event.target.value });

    } }, { key: "converter", value: function converter()
    {
      var convertedText = marked(this.state.message, {
        sanitize: true,
        breaks: true });

      return {
        __html: convertedText };

    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", { "class": "row" },
          React.createElement("div", { "class": "col s6 m6 l6" },
            React.createElement("textarea", { id: "editor", value: this.state.message, onChange: this.handleChange })),


          React.createElement("div", { id: "vertical_line", "class": "col s6 m6 l6" },
            React.createElement("span", { id: "preview", dangerouslySetInnerHTML: this.converter() }))));



    } }]);return Application;}(React.Component);


ReactDOM.render(
React.createElement(Application, null),
document.getElementById('app'));