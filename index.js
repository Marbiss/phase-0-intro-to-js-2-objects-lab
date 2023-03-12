// Write your solution in this file!
const employee = {
    name: "Employee",
    address: "1 Address",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};
    newEmployee[key] = value;
    return newEmployee;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {employee};
    employee[key] = `Sam`;
    return newEmployee
};
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key]
    return employee
};