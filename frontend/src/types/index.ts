// this interface will be like a class in C++
// you add the properties of the user model here
export interface User {
    id: number
    username: string
    password: string
    created_at: string
    // add more properties needed
}

export interface Route {
    path: string;
    component: () => string | Promise<string>;
}

export interface RouteConfig {
    routes: Route[];
}