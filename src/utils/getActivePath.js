const getActivePath = (value) => {
  if (
    value === "service-category" ||
    value === "service-category-add" ||
    value === "service-category-edit" ||
    value === "service-sub-category" ||
    value === "service-sub-category-add" ||
    value === "service-sub-category-edit"
  ) {
    return "service-category";
  } else if (
    value === "withdraw-request" ||
    value === "withdraw-edit" ||
    value === "withdraw-history" ||
    value === "withdraw-history-edit"
  ) {
    return "withdraw-request";
  }else if (
    value === "users"
  ) {
    return "users";
  } 
  else if (
    value === "agents" ||
    value === "agent-add" ||
    value === "agent-edit"
  ) {
    return "agents";
  }
  else if (
    value === "businesses"
  ) {
    return "businesses";
  }
   else {
    return value;
  }
};

const getActiveRoutePath = (value) => {
  if (
    value === "service-category" ||
    value === "service-category-add" ||
    value === "service-category-edit"
  ) {
    return "service-category";
  } else if (
    value === "service-sub-category" ||
    value === "service-sub-category-add" ||
    value === "service-sub-category-edit"
  ) {
    return "service-sub-category";
  } else if (value === "withdraw-request" || value === "withdraw-edit") {
    return "withdraw-request";
  } else if (
    value === "withdraw-history" ||
    value === "withdraw-history-edit"
  ) {
    return "withdraw-history";
  } else {
    return value;
  }
};

export { getActivePath, getActiveRoutePath };


//not added to localStorage service-sub-category