"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require('../../../Controls/JumbotronTile/Style/JumbotronTileStyle.css');
var React = require("react");
var JumbotronTile = (function (_super) {
    __extends(JumbotronTile, _super);
    function JumbotronTile() {
        _super.call(this);
        this.inDOM = false;
    }
    JumbotronTile.prototype.render = function () {
        return (React.createElement("div", {className: "JumbotronTile-Container"}, this.props.children));
    };
    JumbotronTile.prototype.componentWillMount = function () {
        this.inDOM = true;
    };
    JumbotronTile.prototype.componentWillUnmount = function () {
        this.inDOM = false;
    };
    return JumbotronTile;
}(React.Component));
exports.JumbotronTile = JumbotronTile;
//# sourceMappingURL=JumbotronTile.js.map