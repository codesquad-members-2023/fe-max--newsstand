import { tagHelper } from "../core/TagHelper";
import { RenderingTree } from "../core/types";

const { h1 } = tagHelper;

export const HelloWorld = ({ date }: { date: Date }) => h1!(["Hello world!"]);
