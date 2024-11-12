import toast from "react-hot-toast";

const httpActions = (data) => async () => {
  try {
    const response = await fetch(data.url, {
      method: data.method ? data.method : "GET",
      body: data.body
        ? JSON.stringify(data.body)
        : data.formData
        ? data.formData
        : null,
      credentials: "include",
      headers: data.formData ? {} : { "Content-Type": "application/json" },
    });

    const result = await response.json();
    if (!response.ok) {
      throw new Error(result?.message);
    }
    return result;
  } catch (error) {
    toast.error(error.message);
  }
};

export default httpActions;
