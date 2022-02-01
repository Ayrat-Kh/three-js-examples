import { RaycastVehicle } from 'cannon-es';

export const attachControlsTo = (vehicle: RaycastVehicle) => {
  const maxSteerVal = 0.5;
  const brakeForce = 1000000;
  const maxForce = 1000;

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'w':
      case 'ArrowUp':
        vehicle.applyEngineForce(-maxForce, 2);
        vehicle.applyEngineForce(-maxForce, 3);
        break;

      case 's':
      case 'ArrowDown':
        vehicle.applyEngineForce(maxForce, 2);
        vehicle.applyEngineForce(maxForce, 3);
        break;

      case 'a':
      case 'ArrowLeft':
        vehicle.setSteeringValue(maxSteerVal, 0);
        vehicle.setSteeringValue(maxSteerVal, 1);
        break;

      case 'd':
      case 'ArrowRight':
        vehicle.setSteeringValue(-maxSteerVal, 0);
        vehicle.setSteeringValue(-maxSteerVal, 1);
        break;

      case 'b':
        vehicle.setBrake(brakeForce, 0);
        vehicle.setBrake(brakeForce, 1);
        vehicle.setBrake(brakeForce, 2);
        vehicle.setBrake(brakeForce, 3);
        break;
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'w':
      case 'ArrowUp':
        vehicle.applyEngineForce(0, 2);
        vehicle.applyEngineForce(0, 3);
        break;

      case 's':
      case 'ArrowDown':
        vehicle.applyEngineForce(0, 2);
        vehicle.applyEngineForce(0, 3);
        break;

      case 'a':
      case 'ArrowLeft':
        vehicle.setSteeringValue(0, 0);
        vehicle.setSteeringValue(0, 1);
        break;

      case 'd':
      case 'ArrowRight':
        vehicle.setSteeringValue(0, 0);
        vehicle.setSteeringValue(0, 1);
        break;

      case 'b':
        vehicle.setBrake(0, 0);
        vehicle.setBrake(0, 1);
        vehicle.setBrake(0, 2);
        vehicle.setBrake(0, 3);
        break;
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  // Reset force on keyup
  document.addEventListener('keyup', handleKeyUp);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyUp);
  };
};
