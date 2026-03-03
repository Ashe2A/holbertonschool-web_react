/******/ (() => { // webpackBootstrap
/******/ 	'use strict';
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

;
;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    ;
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    ;
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if ((typeof salary === 'number') && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
// Teacher
console.log(createEmployee(1000));
// Director
console.log(createEmployee('$500'));
// Director
// 6. Creating functions specific to employees
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
executeWork(createEmployee(200));
// Getting to work
executeWork(createEmployee(1000));
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    if (todayClass === 'History') {
        return 'Teaching History';
    }
    return '';
    // Type 'undefined' is not assignable to type 'string'
    // => Returning empty string
}
teachClass('Math');
// Teaching Math
teachClass('History');
// Teaching History

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUtDLENBQUM7QUFNRCxDQUFDO0FBRUY7SUFBQTtJQVlBLENBQUM7SUFYQywrQkFBWSxHQUFaO1FBQ0UsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBQUEsQ0FBQztJQUVGLGlDQUFjLEdBQWQ7UUFDRSxPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7SUFBQSxDQUFDO0lBRUYsb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFRDtJQUFBO0lBWUEsQ0FBQztJQVhDLDhCQUFZLEdBQVo7UUFDRSxPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0UsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsa0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUF1QjtJQUM3QyxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtRQUNoRCxPQUFPLElBQUksT0FBTyxFQUFFLENBQUM7S0FDdEI7SUFDRCxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7QUFDeEIsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsVUFBVTtBQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDbEMsV0FBVztBQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEMsV0FBVztBQUVYLDhDQUE4QztBQUM5QyxTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUM5QyxPQUFPLFFBQVEsWUFBWSxRQUFRLENBQUM7QUFDdEMsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLFFBQTRCO0lBQy9DLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDckM7SUFDRCxPQUFPLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3JDLENBQUM7QUFFRCxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsa0JBQWtCO0FBQ2xCLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQU1sQyxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUN0QyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUU7UUFDekIsT0FBTyxlQUFlLENBQUM7S0FDeEI7SUFDRCxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7UUFDNUIsT0FBTyxrQkFBa0IsQ0FBQztLQUMzQjtJQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1Ysc0RBQXNEO0lBQ3RELDRCQUE0QjtBQUM5QixDQUFDO0FBRUQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLGdCQUFnQjtBQUNoQixVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdEIsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIDUuIEFkdmFuY2VkIHR5cGVzIFBhcnQgMVxuaW50ZXJmYWNlIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZztcbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmc7XG59O1xuXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59O1xuXG5jbGFzcyBEaXJlY3RvciBpbXBsZW1lbnRzIERpcmVjdG9ySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSc7XG4gIH07XG5cbiAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgYSBjb2ZmZWUgYnJlYWsnO1xuICB9O1xuXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcbiAgfVxufVxuXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbiAgfVxuXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcbiAgfVxuXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ0dldHRpbmcgdG8gd29yayc7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRW1wbG95ZWUoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBEaXJlY3RvciB8IFRlYWNoZXIge1xuICBpZiAoKHR5cGVvZiBzYWxhcnkgPT09ICdudW1iZXInKSAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKTtcbiAgfVxuICByZXR1cm4gbmV3IERpcmVjdG9yKCk7XG59XG5cbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuLy8gVGVhY2hlclxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpO1xuLy8gRGlyZWN0b3JcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKCckNTAwJykpO1xuLy8gRGlyZWN0b3JcblxuLy8gNi4gQ3JlYXRpbmcgZnVuY3Rpb25zIHNwZWNpZmljIHRvIGVtcGxveWVlc1xuZnVuY3Rpb24gaXNEaXJlY3RvcihlbXBsb3llZTogRGlyZWN0b3IgfCBUZWFjaGVyKTogZW1wbG95ZWUgaXMgRGlyZWN0b3Ige1xuICByZXR1cm4gZW1wbG95ZWUgaW5zdGFuY2VvZiBEaXJlY3Rvcjtcbn1cblxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IHN0cmluZyB7XG4gIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuICB9XG4gIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG59XG5cbmV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuLy8gR2V0dGluZyB0byB3b3JrXG5leGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSk7XG4vLyBHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzXG5cbi8vIDcuIFN0cmluZyBsaXRlcmFsIHR5cGVzXG50eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xuXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcbiAgaWYgKHRvZGF5Q2xhc3MgPT09ICdNYXRoJykge1xuICAgIHJldHVybiAnVGVhY2hpbmcgTWF0aCc7XG4gIH1cbiAgaWYgKHRvZGF5Q2xhc3MgPT09ICdIaXN0b3J5Jykge1xuICAgIHJldHVybiAnVGVhY2hpbmcgSGlzdG9yeSc7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG4gIC8vIFR5cGUgJ3VuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gdHlwZSAnc3RyaW5nJ1xuICAvLyA9PiBSZXR1cm5pbmcgZW1wdHkgc3RyaW5nXG59XG5cbnRlYWNoQ2xhc3MoJ01hdGgnKTtcbi8vIFRlYWNoaW5nIE1hdGhcbnRlYWNoQ2xhc3MoJ0hpc3RvcnknKTtcbi8vIFRlYWNoaW5nIEhpc3RvcnlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==