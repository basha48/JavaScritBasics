class Employee {

    constructor(){
        
    }
    
    get id() {
        return this._id;
    }

    set id(id) {
      this._id = id;
    }
    get name() {
        return this._name;
    }

    set name(name) {
            this._name = name;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {

        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {

        this._salary = salary;

    }
    toString() {
       
        return "[ id: " + this.id + ", name: " + this.name + ", gender: " + this.gender + ", salary: " + this.salary + ",  departments: " + this.department + "]" + "\n";
    }
}

module.exports = {Employee};