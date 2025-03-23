function formatNameToShow(name: string) {
  const formattedName = name.replace(/-/g, ' ');

  return formattedName;
}

function formatNameToSearch(name: string) {
  const formattedName = name.replace(/''/g, '-');

  return formattedName;
}

export { formatNameToShow, formatNameToSearch };
