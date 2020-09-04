// use abstract keyword to declare
export abstract class Shape{

    constructor(private _x: number, private _y: number) {}

    abstract calculate(): string;
}