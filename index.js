const employee =
{
    name: 'name',
    streetAddress: 'street'
};

function updateEmployeeWithKeyAndValue(employee, key, value)
{
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    return Object.assign(employee, {[key]: value});
}

function deleteFromEmployeeByKey(employee)
{
    return Object.assign({}, delete employee.key);
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value)
{
    return Object.assign(employee, {[key]: value});
}