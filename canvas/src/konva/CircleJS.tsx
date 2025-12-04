import Konva from "konva";

// 3-1. https://konvajs.org/docs/shapes/Circle.html

// first we need to create a stage
const stage = new Konva.Stage({
  container: "container", // id of container <div>
  width: 500,
  height: 500,
});

// then create layer
const layer = new Konva.Layer();

// create our shape
const circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: "red",
  stroke: "black",
  strokeWidth: 4,
});

// add the shape to the Layer
layer.add(circle);

// add the Layer to the stage
stage.add(layer);
