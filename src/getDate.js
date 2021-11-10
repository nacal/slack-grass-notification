exports.getDate = () => {
  const date = new Date();

  const year    = date.getFullYear(),
        month   = ("0" + (date.getMonth() + 1)).slice(-2),
        day    = ("0" + date.getDate()).slice(-2),
        formatDate = `${year}-${month}-${day}`,
        from = `${formatDate}T00:00:00`,
        to = `${formatDate}T23:59:59`;

  return {from: from, to: to}
}
