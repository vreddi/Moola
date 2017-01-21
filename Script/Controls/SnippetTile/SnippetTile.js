var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    require('../../../Controls/SnippetTile/Style/SnippetTileStyle.css');
    var earningSymbolStyle = "SnippetTile-CardEarningSymbol";
    var earningFontAwesomeStyle = "fa fa-angle-double-up";
    var expenseSymbolStyle = "SnippetTile-CardExpenditureSymbol";
    var expenseFontAwesomeStyle = "fa fa-angle-double-down";
    var SnippetTile = (function (_super) {
        __extends(SnippetTile, _super);
        function SnippetTile(snippetTile) {
            _super.call(this);
            this.state = {
                heading: snippetTile.heading,
                title: snippetTile.title,
                type: snippetTile.type,
                value: snippetTile.value
            };
            this.heading = snippetTile.heading;
            this.title = snippetTile.title;
            this.htmlComponent = snippetTile.htmlComponent;
            this.type = snippetTile.type;
            this.value = snippetTile.value;
            this.inDOM = false;
        }
        SnippetTile.prototype.render = function () {
            var cardTypeClassName = "", fontAwesomeClassName = "";
            if (this.type.isExpense) {
                cardTypeClassName = expenseSymbolStyle;
                fontAwesomeClassName = expenseFontAwesomeStyle;
            }
            else {
                cardTypeClassName = earningSymbolStyle;
                fontAwesomeClassName = earningFontAwesomeStyle;
            }
            return (React.createElement("div", {className: "SnippetTile-Card"}, React.createElement("div", {className: cardTypeClassName}, React.createElement("i", {className: fontAwesomeClassName, "aria-hidden": "true"})), React.createElement("div", {className: "SnippetTile-CardHeading"}, this.state.heading), React.createElement("div", {className: "SnippetTile-CardTitle"}, this.state.title), React.createElement("div", {className: "SnippetTile-CardValue"}, this.state.value)));
        };
        SnippetTile.prototype.componentWillMount = function () {
            this.inDOM = true;
        };
        SnippetTile.prototype.componentWillUnmount = function () {
            this.inDOM = false;
        };
        return SnippetTile;
    }(React.Component));
    exports.SnippetTile = SnippetTile;
});
//# sourceMappingURL=SnippetTile.js.map