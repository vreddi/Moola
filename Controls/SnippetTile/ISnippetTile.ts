import { Flow } from "../../Model/Flow";

export interface ISnippetTile {
	heading: string,
	title: string,
	type: Flow,
	value: number,
	htmlComponent: Element
}