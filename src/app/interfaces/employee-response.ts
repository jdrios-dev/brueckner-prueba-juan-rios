export interface EmployeeResponse {
    status:  string;
    data:    EmployeeResponseData;
    message: string;
}

export interface EmployeeResponseData {
    id:              number;
    employee_name:   string;
    employee_salary: number;
    employee_age:    number;
    profile_image:   string;
}