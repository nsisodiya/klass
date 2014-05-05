klass
=====

Simple JavaScript Prototype Inheritance  &amp; Expressive Classes, fully inspired by https://github.com/ded/klass

Example
==========

```js
var Person = klass({
    initialize: function (full_name, age) {
        this.full_name = full_name;
        this.age = age;
    },
    drive: function () {
        if (this.age >= 18) {
            console.log(this.full_name + " is driving");
        } else {
            console.log(this.full_name + " is not eligible for driving");
        }
        return this;
    },
    eat: function () {
        console.log(this.full_name + " is eating");
        return this;
    }
});

var Employee = Person.extend({
    initialize: function (full_name, age, job_title) {
        this.job_title = job_title;
        Employee.parent.call(this, full_name, age);
    },
    office: function () {
        console.log(this.full_name + " is a " + this.job_title + " and he is going to Office");
        return this;
    }
});

var Manager = Employee.extend({
    initialize: function (age, full_name, job_title, dept) {
        this.dept = dept;
        Manager.parent.call(this, full_name, age, job_title);
    },
    presentation: function () {
        console.log(this.full_name + " is a Manager of " + this.dept + " Department and he is doing presentiation");
        return this;
    }
});

var deepak = new Person("Deepak", 17);
deepak.eat().drive();
var narendra = new Employee("Narendra", 30, "Engineer");
narendra.eat().drive().office();
var chetan = new Manager(24, "Chetan", "Doctor", "Research");
chetan.eat().drive().office().presentation();
```

demo
======
http://jsfiddle.net/nsisodiya/U6yHL/

