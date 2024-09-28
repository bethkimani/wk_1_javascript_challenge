function calculateNetSalary(basicSalary, benefits) {
    // Gross Salary
    const grossSalary = basicSalary + benefits;

    // NSSF Deduction - Assuming 6% of the basic salary up to a max of 1080 KES
    const nssfDeduction = Math.min(0.06 * basicSalary, 1080);

    // NHIF Deduction based on gross salary (values can be adjusted from the provided table)
    let nhifDeduction;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
        nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    }

    // PAYE Calculation based on KRA Tax Brackets (after deducting NSSF from gross salary)
    const taxableIncome = grossSalary - nssfDeduction;
    let paye;
    if (taxableIncome <= 24000) {
        paye = 0.1 * taxableIncome;
    } else if (taxableIncome <= 32333) {
        paye = 2400 + 0.25 * (taxableIncome - 24000);
    } else {
        paye = 2400 + 2083.25 + 0.3 * (taxableIncome - 32333);
    }

    // Net Salary calculation
    const netSalary = grossSalary - (paye + nhifDeduction + nssfDeduction);
    return {
        grossSalary,
        nssfDeduction,
        nhifDeduction,
        paye,
        netSalary
    };
}

// Example usage:
const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: KES ${salaryDetails.grossSalary}`);
console.log(`NSSF Deduction: KES ${salaryDetails.nssfDeduction}`);
console.log(`NHIF Deduction: KES ${salaryDetails.nhifDeduction}`);
console.log(`PAYE: KES ${salaryDetails.paye}`);
console.log(`Net Salary: KES ${salaryDetails.netSalary}`);
