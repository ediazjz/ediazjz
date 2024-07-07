export function numericLevelToDreyfus(value: string) {
  let level = "";

  switch (value) {
    case "20":
      level = "Novice";
      break;
    case "40":
      level = "Adv. Beginner";
      break;
    case "60":
      level = "Competent";
      break;
    case "80":
      level = "Proficient";
      break;
    case "100":
      level = "Expert";
      break;
    default:
      level = "Novice";
  }

  return level;
}
