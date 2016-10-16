/**
 * Created by z on 2016/9/12.
 */
var student=require ('./student');
var teacher=require ('./teacher');
teacher.add('lmy');
function add(teacherName,students){
    teacher.add(teacherName);

    students.forEach(function(item,index){
        student.add(item)
    })
}
exports.add=add;
