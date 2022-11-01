

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
            //"Authorixation":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlaW5rb3J0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiZmZmaGZnIiwiaWF0IjoxNjY3MjIyMzkxLCJleHAiOjE2Njc…"
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

export async function getCurrentUser(): Promise<any> {
    const response = await fetch(getPath(ApiPath.Auth.currentUser), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            //"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlaW5rb3J0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiZmZmaGZnIiwiaWF0IjoxNjY3MjIyMzkxLCJleHAiOjE2Njc…"
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