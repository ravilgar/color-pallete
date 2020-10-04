import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorContainer.css";

export default class ColorContainer extends Component {
	static defaultProps = {
		nBoxes: 16, //Количество ColorBoxes согласно задания
		colors: ["red", "green", "yellow"], // "База данных" возможных цветов
	};
	render() {
		// Создадим вспомогательный массив, который развернем
		return (
			<div className="ColorContainer">
				{Array.from({ length: this.props.nBoxes }).map(() => (
					<ColorBox colors={this.props.colors} />
				))}
			</div>
		);
	}
}
