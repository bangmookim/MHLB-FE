import instance from "./instance/instance";

const getWorkspaceInfo = async () => {
    const response = await instance.get(`/api/managing?id=1`);
    return response.data;
};

const editWorkspaceTitle = async ({workspaceTitle}:{workspaceTitle:string}) => {
    await instance.patch(`/api/managing/1/title`, {workspaceTitle});
};

const editWorkspaceDesc = async ({workspaceDesc}:{workspaceDesc:string}) => {
    await instance.patch(`/api/managing/1/description`, {workspaceDesc});
};

const getWorkspaceMember = async () => {
    const response = await instance.get(`/api/managing/1/people`);
    return response.data;
};

const editProfileImg = async (workspaceImage: FormData) => {
    const response = await instance.post(`/api/managing/1/image`, workspaceImage, 
        {headers: {"Content-Type": "multipart/form-data"}},
    );
    console.log("post response : ", response);
    return response.data;
};

const editUserRole = async ({userId , userRole}:{userId: number, userRole: string}) => {
    await instance.patch(`/api/managing/1/people/${userId}`, {userRole});
};

export {getWorkspaceInfo, editWorkspaceTitle, editWorkspaceDesc, getWorkspaceMember, editProfileImg, editUserRole};