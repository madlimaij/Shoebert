

/* type User = {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }; */

import ApiPath from "../endpoint";
import getPath from "../utils";

export async function registerUser(user: any): Promise<any> {
    const response = await fetch(getPath(ApiPath.Auth.register), {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.status === 200) {
        const data = await response.json();

        return {
            body: data, 
            isSuccess: true,
        }
    }
    return {
        isSuccess: false,
    }
}