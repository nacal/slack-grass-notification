exports.getDate = () => {
  const date = new Date();

  const year    = date.getFullYear(),
        month   = date.getMonth()+ 1,
        day    = date.getDate(),
        formatDate = `${year}-${month}-${day}`,
        from = `${formatDate}T00:00:00`,
        to = `${formatDate}T23:59:59`;

  return {from: from, to: to}
}
