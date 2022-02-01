import {
  World,
  Vec3,
  SplitSolver,
  Body,
  Material,
  ContactMaterial,
  RaycastVehicle,
  Box,
  WheelInfo,
} from 'cannon-es';

import vehicle from './vehicle';
import ground from './ground';

const world = new World({
  gravity: new Vec3(0, -9.81, 0),
});
(world.solver as SplitSolver).tolerance = 0.01;

// const groundShape = new Plane();
// const groundBody = new Body({ mass: 0 });
// groundBody.addShape(groundShape);
// groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
// world.addBody(groundBody);

const clothMaterial = new Material('cloth');
const sphereMaterial = new Material('sphere');

const contactMaterial = new ContactMaterial(clothMaterial, sphereMaterial, {
  friction: 0,
  restitution: 0,
});

contactMaterial.contactEquationStiffness = 1e9;
contactMaterial.contactEquationRelaxation = 3;

world.addContactMaterial(contactMaterial);
vehicle.addToWorld(world);

world.addBody(ground);

export default world;
