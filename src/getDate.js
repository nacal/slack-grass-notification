exports.getDate = () => {
  const date = new Date(),
      yearTo    = date.getFullYear(),
      monthTo   = date.getMonth()+ 1,
      dayTo     = date.getDate();

  date.setDate(date.getDate() - 1);
  const yearFrom    = date.getFullYear(),
        monthFrom   = date.getMonth()+ 1,
        dayFrom    = date.getDate();

  from = `${yearFrom}-${monthFrom}-${dayFrom}T15:00:00`;
  to = `${yearTo}-${monthTo}-${dayTo}T15:00:00`;

  return {from: from, to: to}
}
