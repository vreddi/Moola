/// <reference path="../../Definitions/require.d.ts" />\

require('../../../Controls/JumbotronTile/Style/JumbotronTileStyle.css');
import * as React from "react";
import * as ReactDOM from "react-dom";
import { IJumbotronTile } from "./IJumbotronTile";

export class JumbotronTile extends React.Component<IJumbotronTile, {}> implements IJumbotronTile{

	public inDOM: boolean;

	constructor() {
		super();
		this.inDOM = false;
	}

	render() {
		 return (
		 	<div className="JumbotronTile-Container">
		 	{ this.props.children }
		 	</div>
		 );
	}

	componentWillMount() {
		this.inDOM = true;
	}

	componentWillUnmount() {
		this.inDOM = false;
	}
}