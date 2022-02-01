import { Material, Heightfield, Body } from 'cannon-es';

const sizeX = 64;
const sizeZ = 64;
const matrix: number[][] = [];

for (let i = 0; i < sizeX; i++) {
  matrix.push([]);
  for (let j = 0; j < sizeZ; j++) {
    if (i === 0 || i === sizeX - 1 || j === 0 || j === sizeZ - 1) {
      const height = 3;
      matrix[i].push(height);
      continue;
    }

    const height =
      Math.cos((i / sizeX) * Math.PI * 5) *
        Math.cos((j / sizeZ) * Math.PI * 5) *
        2 +
      2;
    matrix[i].push(height);
  }
}

const groundMaterial = new Material('ground');
const heightfieldShape = new Heightfield(matrix, {
  elementSize: 100 / sizeX,
});
const heightfieldBody = new Body({ mass: 0, material: groundMaterial });
heightfieldBody.addShape(heightfieldShape);
heightfieldBody.position.set(
  // -((sizeX - 1) * heightfieldShape.elementSize) / 2,
  -(sizeX * heightfieldShape.elementSize) / 2,
  -1,
  // ((sizeZ - 1) * heightfieldShape.elementSize) / 2
  (sizeZ * heightfieldShape.elementSize) / 2
);
heightfieldBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);

export default heightfieldBody;
