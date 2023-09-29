const simplifyName = (fullName) => {
    const nameParts = fullName.split(" ");
    if (nameParts.length === 1) return nameParts[0];
    return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
  };

export default simplifyName;