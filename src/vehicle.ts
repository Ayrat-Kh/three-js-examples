import { Box, Body, RaycastVehicle, Vec3, WheelInfo } from 'cannon-es';

const vehicleShape = new Box(new Vec3(2, 0.5, 1));
const vehicleBody = new Body({
  mass: 150,
});
vehicleBody.addShape(vehicleShape);
vehicleBody.position.set(0, 4, 0);
const vehicle = new RaycastVehicle({
  chassisBody: vehicleBody,
});

const vehicleWheelOptions = {
  useCustomSlidingRotationalSpeed: true,
  customSlidingRotationalSpeed: -30,
  chassisConnectionPointLocal: new Vec3(-1, 0, 1),
  suspensionRestLength: 0.3,
  suspensionStiffness: 30,
  maxSuspensionTravel: 0.3,
  dampingCompression: 4.4,
  maxSuspensionForce: 100000,
  dampingRelaxation: 2.3,
  directionLocal: new Vec3(0, -1, 0),
  rollInfluence: 0.01,
  frictionSlip: 1.4,
  axleLocal: new Vec3(0, 0, 1),
  radius: 0.5,
} as WheelInfo;

vehicleWheelOptions.chassisConnectionPointLocal.set(-1, 0, 1);
vehicle.addWheel(vehicleWheelOptions);

vehicleWheelOptions.chassisConnectionPointLocal.set(-1, 0, -1);
vehicle.addWheel(vehicleWheelOptions);

vehicleWheelOptions.chassisConnectionPointLocal.set(1, 0, 1);
vehicle.addWheel(vehicleWheelOptions);

vehicleWheelOptions.chassisConnectionPointLocal.set(1, 0, -1);
vehicle.addWheel(vehicleWheelOptions);

export default vehicle;
