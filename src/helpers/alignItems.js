export default function alignItems(direction) {
  let textDirection;
  let flexDirection;
  switch (direction) {
    case 'left':
      textDirection = 'left';
      flexDirection = 'flex-start';
      break;
    case 'right':
      textDirection = 'right';
      flexDirection = 'flex-end';
      break;
    default:
      textDirection = 'center';
      flexDirection = 'center';
  }

  return {
    textDirection,
    flexDirection,
  };
}
