const sortList = (category, list) => {
  switch (category) {
    case "latest":
      return list.sort((a, b) => a.created_at > b.created_at ? 1 : -1);
    case "oldest":
      return list.sort((a, b) => b.created_at - a.created_at ? -1 : 1);
    case "a-z":
      return list.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
    case "z-a":
      return list.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1
      );
    case "highest":
      return list.sort((a, b) =>
        a.price.toLowerCase() > b.price.toLowerCase() ? 1 : -1
      );
    case "lowest":
      return list.sort((a, b) =>
        a.price.toLowerCase() > b.price.toLowerCase() ? -1 : 1
      );
    default:
      return list;
  }
};

export default sortList;
