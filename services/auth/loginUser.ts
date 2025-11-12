"use server"

export const loginUser = async(_currentState:any, formData:any) => {
   try {
    const loginData = {
      email: formData.get("email"),
      password: formData.get("password")
    };
    console.log("loginData", loginData);

    const res = await fetch(
      `http://localhost:5000/api/v1/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(loginData),
        headers:{
            "Content-Type": "application/json"
        }
      }
    ).then((res) => res.json());
    console.log(res, "res")
    return res;
  } catch (error) {
    console.log(error);
    console.log("Login failed");
  }
}