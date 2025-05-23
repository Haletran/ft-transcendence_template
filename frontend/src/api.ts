import Cookies from 'js-cookies';
// simple API wrapper for the backend
// you can use this to call the API for every request

export async function callAPI(request: string, method: string = "GET") {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    const token = Cookies.getItem('token') || "fake-jwt-token";
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`/api${request}`, {
      method: method,
      headers: headers,
    });
    if (!response.ok)
      throw ("Request failed")
    const data = await response.json();
    console.log(data);
    return (data);
  } catch (error) {
    console.error("Request failed")
    throw (error);
  }
}
