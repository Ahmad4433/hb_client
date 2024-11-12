const apis = () => {
  const local = "http://localhost:5050/";

  const list = {
    uploadImage: `${local}image/upload`,
    addProject: `${local}project/add`,
    getProjectDropdown: `${local}dropdown/project`,
    addProjectCategory: `${local}category/add`,
    addAmmenity: `${local}ammenity/add`,
    ammenityList: `${local}ammenity/list`,
    getProjectList: `${local}project/list`,
    addNewUser: `${local}user/add`,
    getUserDropdown: `${local}dropdown/user`,
    userList: `${local}user/list`,
  };

  return list;
};

export default apis;
