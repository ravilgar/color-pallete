import React, { Component } from "react";
import "./ColorBox.css";
import { getColor } from "../helper";

export default class ColorBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			color: this.props.colors[getColor(this.props.colors)],
		};
		this.handleClick = this.handleClick.bind(this);
	}
	pickColor() {
		let newColor;
		// возвращать новый цвет, без повторений (пока цвета совпадают - выполнять)
		do {
			newColor = this.props.colors[getColor(this.props.colors)];
		} while (newColor === this.state.color);

		this.setState({ color: newColor });
	}
	handleClick() {
		this.pickColor();
	}
	render() {
		return (
			<div
				className="ColorBox"
				style={{ backgroundColor: this.state.color }}
				onClick={this.handleClick}
			></div>
		);
	}
}
