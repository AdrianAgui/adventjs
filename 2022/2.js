function countHours(year, holidays) {
  return holidays.reduce((hours, day) => {
    const fullDate = `${year}/${day}`;
    const weekDay = new Date(fullDate).getDay();
    if (weekDay !== 0 && weekDay !== 6) {
      return hours + 2;
    }
    return hours;
  }, 0);
}
